# AGENTS.md

## Objetivo

Este documento define las reglas que deben seguir todos los agentes de IA que colaboren en este proyecto.

La prioridad es generar código limpio, mantenible y fácil de entender.

---

# Stack obligatorio

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- fetch nativo
- React Hooks

No utilizar otras tecnologías salvo que el usuario lo solicite explícitamente.

---

# Arquitectura

Mantener una estructura modular.

Cada componente debe tener una única responsabilidad.

No crear componentes gigantes.

Separar:

- UI
- lógica
- utilidades
- tipos

---

# Estado

Utilizar únicamente:

- useState
- useEffect

No utilizar:

- Redux
- Zustand
- MobX
- Context API

El proyecto es pequeño y no necesita gestión global.

---

# API

Todas las llamadas a Groq deberán realizarse mediante fetch.

Configurar manualmente:

Authorization

Bearer Token

Content-Type

application/json

No utilizar SDK oficiales.

No utilizar Axios.

---

# Persistencia

La conversación debe sobrevivir al refresco de la página.

Guardar automáticamente:

- mensajes
- estadísticas

Usar exclusivamente localStorage.

---

# Manejo de errores

Toda llamada fetch debe:

- manejar errores de red
- manejar respuestas no exitosas
- mostrar mensajes amigables al usuario

Nunca dejar errores sin capturar.

---

# TypeScript

Todo debe estar tipado.

Crear interfaces cuando corresponda.

Evitar any.

---

# Componentes

Preferir componentes pequeños.

Ejemplo:

ChatWindow

MessageBubble

ChatInput

StatsPanel

LoadingIndicator

ClearConversationButton

Cada componente debe tener una responsabilidad clara.

---

# Estilos

Utilizar únicamente Tailwind CSS.

No escribir CSS tradicional salvo que sea imprescindible.

Mantener consistencia de espaciados.

Usar Flex y Grid cuando corresponda.

---

# Código

Priorizar:

- legibilidad
- simplicidad
- reutilización

Evitar:

- duplicación
- funciones demasiado largas
- lógica repetida

---

# Buenas prácticas

Siempre:

- utilizar async/await
- desestructurar props
- usar nombres descriptivos
- extraer funciones reutilizables
- tipar props
- mantener componentes pequeños

---

# Experiencia de Usuario

Mientras la IA responde:

- deshabilitar botón enviar
- mostrar indicador de carga

Cuando ocurra un error:

- mostrar mensaje claro
- permitir volver a intentar

---

# Accesibilidad

Utilizar HTML semántico.

Agregar:

- labels
- aria-label
- focus visibles

Los botones deben ser accesibles mediante teclado.

---

# Objetivo principal

La prioridad del proyecto es demostrar una integración correcta con un modelo de IA real.

La funcionalidad siempre tiene prioridad sobre el diseño visual.

El código debe parecer desarrollado por un equipo profesional.