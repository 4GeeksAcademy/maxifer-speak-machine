type ChatRole = "user" | "assistant" | "system";

interface ChatMessage {
  role: ChatRole;
  content: string;
}

interface ChatRequestBody {
  messages?: unknown;
}

interface GroqUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  prompt_time?: number;
  completion_time?: number;
  queue_time?: number;
  total_time?: number;
}

interface GroqResponse {
  model?: string;
  usage?: GroqUsage;
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: {
    message?: string;
  };
}

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

function isValidMessage(message: unknown): message is ChatMessage {
  if (typeof message !== "object" || message === null) {
    return false;
  }

  const { role, content } = message as Record<string, unknown>;

  return (
    (role === "user" || role === "assistant" || role === "system") &&
    typeof content === "string" &&
    content.trim().length > 0
  );
}

function getGroqErrorMessage(data: unknown): string | null {
  if (typeof data !== "object" || data === null) {
    return null;
  }

  const { error } = data as GroqResponse;

  if (!error || typeof error.message !== "string" || error.message.length === 0) {
    return null;
  }

  return error.message;
}

export async function POST(request: Request) {
  if (!process.env.GROQ_API_KEY) {
    return Response.json(
      { error: "Falta configurar GROQ_API_KEY en las variables de entorno." },
      { status: 500 },
    );
  }

  let body: ChatRequestBody;

  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return Response.json(
      { error: "El body de la solicitud debe ser JSON valido." },
      { status: 400 },
    );
  }

  if (!Array.isArray(body.messages) || body.messages.length === 0) {
    return Response.json(
      { error: "Debes enviar un array de mensajes no vacio." },
      { status: 400 },
    );
  }

  if (!body.messages.every(isValidMessage)) {
    return Response.json(
      {
        error:
          'Cada mensaje debe tener el formato { role: "user" | "assistant" | "system", content: string }.',
      },
      { status: 400 },
    );
  }

  const startedAt = Date.now();

  let groqResponse: globalThis.Response;

  try {
    groqResponse = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: body.messages,
      }),
    });
  } catch {
    return Response.json(
      { error: "No se pudo conectar con Groq. Intenta nuevamente." },
      { status: 502 },
    );
  }

  const responseTimeMs = Date.now() - startedAt;

  let groqData: GroqResponse | null = null;

  try {
    groqData = (await groqResponse.json()) as GroqResponse;
  } catch {
    if (!groqResponse.ok) {
      return Response.json(
        { error: "Groq devolvio un error sin cuerpo JSON valido." },
        { status: groqResponse.status },
      );
    }

    return Response.json(
      { error: "La respuesta de Groq no tuvo un formato valido." },
      { status: 502 },
    );
  }

  if (!groqResponse.ok) {
    return Response.json(
      {
        error:
          getGroqErrorMessage(groqData) ??
          "Groq rechazo la solicitud. Revisa la configuracion e intenta nuevamente.",
      },
      { status: groqResponse.status },
    );
  }

  const content = groqData.choices?.[0]?.message?.content?.trim();

  if (!content) {
    return Response.json(
      { error: "Groq no devolvio contenido en la respuesta." },
      { status: 502 },
    );
  }

  return Response.json({
    text: content,
    usage: groqData.usage ?? null,
    model: groqData.model ?? "llama-3.1-8b-instant",
    responseTimeMs,
  });
}