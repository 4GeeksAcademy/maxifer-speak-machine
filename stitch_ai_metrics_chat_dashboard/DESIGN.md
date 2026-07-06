---
name: Technical Intelligence Interface
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#bcc7de'
  on-tertiary: '#263143'
  tertiary-container: '#636e83'
  on-tertiary-container: '#ecf1ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  max-width-content: 1280px
---

## Brand & Style

This design system is built for high-performance AI interactions, balancing the precision of developer tools with the accessibility of modern consumer software. The brand personality is **intelligent, reliable, and cutting-edge**. It avoids the sterility of legacy enterprise software by utilizing subtle depth and vibrant accents, creating an environment where technical complexity feels manageable.

The visual style is **Corporate / Modern with a Technical Edge**. It prioritizes high legibility and information density without sacrificing aesthetic warmth. The emotional response should be one of "effortless power"—giving the user confidence that they are interacting with a sophisticated engine through a refined, human-centric lens.

## Colors

The palette is anchored in a **deep slate/navy foundation** to reduce eye strain during long technical sessions and to provide a premium "pro-tool" feel.

- **Primary (Electric Blue):** Used exclusively for high-intent actions, active states, and critical paths. It provides the "pulse" of the interface.
- **Secondary (Deep Navy):** The primary background color for the application shell and main work areas.
- **Tertiary (Surface Slate):** Used for cards, sidebars, and input containers to create a subtle hierarchy of depth against the background.
- **Neutral (Soft Gray):** Reserved for secondary text, borders, and icons that should not draw immediate attention.
- **Accents:** Success (Emerald), Warning (Amber), and Error (Rose) should be used sparingly in muted tones to maintain the sophisticated atmosphere.

## Typography

The typography strategy employs a three-tier font system to reinforce the technical nature of the product:

1.  **Geist (Headlines):** A precise, geometric sans-serif that feels engineered. Used for all primary titles and section headings.
2.  **Inter (Body):** The workhorse for the chat interface and data descriptions. Highly legible at small sizes with a neutral tone.
3.  **JetBrains Mono (Labels/Metadata):** A monospaced font used for metrics, code snippets, and timestamps. This reinforces the "technical dashboard" aesthetic.

**Hierarchy Rules:**
- Keep line-height generous in chat bubbles (1.5x) to ensure readability of long AI responses.
- Use tight letter-spacing for large Geist headlines to maintain a modern, "compact" look.

## Layout & Spacing

The layout utilizes a **Fixed Grid** system for the dashboard shell, with a **Fluid Content Area** for the chat stream. 

- **Sidebar:** Fixed at 280px for navigation and history.
- **Main Content:** Centered with a max-width of 1280px to prevent text lines from becoming too long for comfortable reading.
- **The 8px Rule:** All spacing (padding, margins, gaps) must be multiples of 8px (or 4px for tight internal element spacing) to maintain a rigorous technical rhythm.
- **Input Area:** A fixed-position container at the bottom of the viewport, using `lg` (24px) padding from the bottom and sides to feel "floating" rather than pinned to the edge.

## Elevation & Depth

This design system uses **Tonal Layers and Ambient Shadows** to create a sophisticated sense of hierarchy without excessive bulk.

- **Level 0 (Background):** Deep Slate (`#0F172A`). The base canvas.
- **Level 1 (Cards/Sidebar):** Tertiary Slate (`#1E293B`). Used for the main chat interface container and sidebar.
- **Level 2 (Active Elements):** Subtle borders (1px, 10% opacity white) rather than heavy shadows define the edges of cards.
- **Shadows:** Use a single, highly-diffused shadow for floating elements (like tooltips or the main input bar): `0px 10px 30px rgba(0, 0, 0, 0.3)`. 
- **Backdrop Blur:** Use a 12px blur on the fixed input area and header to allow the chat content to scroll elegantly behind them, creating a sense of transparency.

## Shapes

The shape language is characterized by **soft, modern corners**. While the app is technical, the use of `rounded-lg` (16px) for main containers and `rounded-md` (8px) for buttons prevents it from feeling sharp or aggressive.

- **Message Bubbles:** Use `rounded-lg` (16px). For the user's own messages, the bottom-right corner should be slightly more acute (4px) to indicate directionality.
- **Data Cards:** Use `rounded-lg` (16px) with a 1px soft border.
- **Input Fields:** Use `rounded-md` (8px) for a focused, tool-like appearance.

## Components

### Buttons
- **Primary:** Electric Blue background, white text, 8px corner radius. Heavy emphasis.
- **Ghost:** Transparent background with a 1px slate border. Used for secondary dashboard actions.

### Message Bubbles
- **AI Response:** Tertiary Slate background. Left-aligned. Text uses `body-md`. 
- **User Message:** Primary Blue background at 10% opacity with a 1px Primary Blue border. Right-aligned.

### Data Cards
- Background: `#1E293B`.
- Padding: `md` (16px).
- Header: `label-sm` (JetBrains Mono) for the metric name, `headline-md` (Geist) for the value.

### Fixed Input Area
- A floating bar styled with a subtle `Level 2` shadow and backdrop blur. 
- Contains a multi-line auto-expanding textarea and a primary "Send" icon button.

### Chips/Tags
- Small, pill-shaped indicators using `label-sm`. 
- Use low-saturation background tints (e.g., a dark emerald for "Healthy" status) to keep the focus on the data.

### Lists
- Sidebar navigation items should have a 4px left-accent bar (Electric Blue) when active, with a subtle hover state (`#FFFFFF05`).