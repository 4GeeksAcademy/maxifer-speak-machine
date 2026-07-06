# Contexto del Proyecto

## 1. Descripción General

### Nombre

AI Chat Dashboard

### Objetivo

Desarrollar una aplicación web que permita mantener una conversación con un modelo de lenguaje utilizando la API de Groq.

Además del chat, la aplicación debe visualizar el consumo de tokens y otras métricas técnicas devueltas por la API para que el usuario pueda comprender el funcionamiento interno de una integración con un LLM.

La aplicación debe simular una integración real de IA en un producto moderno.

### Usuario objetivo

Desarrolladores, estudiantes y equipos técnicos que quieran experimentar con modelos de IA y monitorear el consumo de recursos durante una sesión.

---

## 2. Stack Tecnológico

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Frontend:** React
- **Estilos:** Tailwind CSS
- **Estado:** React Hooks (useState y useEffect)
- **HTTP:** fetch nativo
- **Persistencia:** localStorage
- **API:** Groq API
- **Modelo:** Meta Llama 3 (modelo gratuito disponible en Groq)

### Variables de entorno

La API Key debe almacenarse únicamente en `.env.local`.

Nunca debe escribirse directamente en el código.

---

## 3. Mapa de Vistas

### Home

Contendrá:

- Historial del chat
- Campo para escribir mensajes
- Botón enviar
- Indicador de carga
- Panel de estadísticas
- Botón borrar conversación

---

## Componentes esperados

### ChatWindow

Lista completa de mensajes.

---

### MessageBubble

Representa un mensaje individual.

Diferenciar claramente:

- Usuario
- Asistente

---

### ChatInput

Contiene:

- Textarea
- Botón enviar

---

### StatsPanel

Debe mostrar:

- Prompt Tokens acumulados
- Completion Tokens acumulados
- Total Tokens acumulados
- Modelo utilizado
- Tiempo de respuesta o Tokens/segundo

---

### LoadingIndicator

Visible únicamente mientras la IA responde.

---

### ClearConversationButton

Reinicia la sesión completa.

---

## 4. Flujo de la conversación

1. Usuario escribe un mensaje.
2. Se agrega inmediatamente al historial.
3. Se envía TODO el historial a Groq.
4. Mostrar estado "Pensando..."
5. Esperar respuesta.
6. Agregar respuesta al historial.
7. Leer usage.
8. Actualizar estadísticas.
9. Guardar todo en localStorage.

---

## 5. Persistencia

Guardar automáticamente:

- conversación
- métricas

Al iniciar:

- recuperar conversación
- recuperar estadísticas

---

## 6. Organización sugerida

```
app/

components/
    chat/
    stats/
    ui/

hooks/

lib/

types/

styles/
```

---

## 7. Diseño


---

## 8. Objetivos Técnicos

El proyecto busca practicar:

- React
- Next.js
- Fetch API
- Async/Await
- Manejo de estado
- Persistencia
- Integración con APIs externas
- Manejo de errores
- Visualización de métricas