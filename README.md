# Maxifer Speak Machine

Dashboard de chat con IA construido con Next.js, que integra Groq API para mantener conversaciones y visualizar metricas tecnicas de uso en tiempo real.

## Objetivo

Este proyecto demuestra una integracion real con un modelo LLM:

- Chat conversacional con historial.
- Persistencia de la sesion en el navegador.
- Panel de metricas acumuladas (tokens y tiempo de respuesta).
- Manejo de errores de red y de API con mensajes amigables.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- fetch nativo (cliente y servidor)
- Groq API (`llama-3.1-8b-instant`)
- localStorage para persistencia

## Requisitos

- Node.js 20+
- npm 10+ (o equivalente)
- Una API Key valida de Groq

## Configuracion

1. Instalar dependencias:

```bash
npm install
```

2. Crear el archivo `.env.local` en la raiz del proyecto:

```env
GROQ_API_KEY=tu_api_key_aqui
```

3. Levantar el entorno de desarrollo:

```bash
npm run dev
```

4. Abrir en el navegador:

```text
http://localhost:3000
```

## Scripts disponibles

- `npm run dev`: inicia la app en modo desarrollo.
- `npm run build`: genera build de produccion.
- `npm run start`: inicia la app en modo produccion.
- `npm run lint`: ejecuta ESLint.

## Funcionamiento general

1. El usuario escribe un mensaje y se agrega al historial local.
2. El frontend envia el historial a `POST /api/chat`.
3. El backend valida payload y llama a Groq con `fetch`.
4. Se devuelve texto, modelo, `usage` y `responseTimeMs`.
5. El frontend agrega la respuesta del asistente.
6. Se acumulan metricas de tokens y tiempo.
7. Mensajes y metricas se guardan en `localStorage`.

## Estructura principal

```text
app/
	page.tsx                  # Vista principal del dashboard
	api/chat/route.ts         # Endpoint server-side para Groq

components/chat/
	useChatDashboard.ts       # Estado, envio de mensajes y persistencia
	chatUtils.ts              # Helpers y constantes de localStorage
	types.ts                  # Tipos del dominio de chat
	ChatWindow.tsx            # Historial de mensajes
	ChatInput.tsx             # Input + submit
	StatsPanel.tsx            # Panel de metricas
	ChatHeader.tsx            # Encabezado y acciones
```

## Persistencia

La app guarda automaticamente:

- Mensajes en `maxifer-chat-messages`
- Metricas en `maxifer-chat-metrics`

Al recargar la pagina, recupera ambos valores y rehidrata el estado.

## Metricas mostradas

- Prompt Tokens acumulados
- Completion Tokens acumulados
- Total Tokens acumulados
- Ultimo modelo usado
- Tiempo de ultima respuesta

## Manejo de errores

El endpoint `POST /api/chat` contempla:

- Falta de `GROQ_API_KEY`
- JSON invalido
- Payload de mensajes invalido
- Errores de red hacia Groq
- Respuestas no exitosas de Groq
- Respuestas sin contenido util

En el frontend, los errores se muestran al usuario sin romper la sesion.

## Notas de seguridad

- La API Key se utiliza solo del lado servidor en `app/api/chat/route.ts`.
- No exponer `GROQ_API_KEY` en componentes cliente.

## Roadmap sugerido

- Streaming de respuestas (SSE o chunks)
- Selector dinamico de modelo
- Exportar / importar conversacion
- Tests unitarios de helpers y hook

## Licencia

Proyecto educativo.
