# Luis Montero Molina — Landing Page

Landing page personal de Luis Montero Molina construida con Next.js 14 (App Router), TypeScript, Tailwind CSS y Framer Motion.

## Correr en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run start` — sirve el build
- `npm run lint` — linter

## Deploy en Vercel

1. Sube el repo a GitHub.
2. Importa el proyecto en [vercel.com/new](https://vercel.com/new).
3. Vercel detecta Next.js automáticamente — no se necesita configuración extra.

## Estructura

```
app/
  layout.tsx        # Metadata, fuentes, layout raíz
  page.tsx          # Ensambla las secciones
  globals.css       # Tailwind + estilos base
components/
  Navbar.tsx        # Navegación sticky + menú móvil
  Hero.tsx          # Título principal + CTAs
  About.tsx         # Sobre mí + grilla de stats
  Companies.tsx     # Naia, Naia Code, TikTok
  Projects.tsx      # 3 proyectos placeholder
  Timeline.tsx      # Trayectoria por años
  Contact.tsx       # CTA final + links sociales
  Footer.tsx        # Footer minimalista
  Reveal.tsx        # Helper de fade-in con Framer Motion
  SectionHeader.tsx # Eyebrow + título + subtítulo reutilizable
```

## Dónde editar el contenido

Todo el contenido vive como constantes dentro de cada componente:

- **Hero** (`components/Hero.tsx`) — título, subtítulo, CTAs.
- **Sobre mí** (`components/About.tsx`) — textos y grilla `STATS`.
- **Empresas** (`components/Companies.tsx`) — array `COMPANIES`.
- **Proyectos** (`components/Projects.tsx`) — array `PROJECTS`. Reemplaza los 3 placeholders con tus proyectos reales (nombre, descripción, stack, link).
- **Trayectoria** (`components/Timeline.tsx`) — array `MILESTONES`.
- **Contacto** (`components/Contact.tsx`) — array `LINKS` (email, LinkedIn, GitHub, TikTok, X). Reemplaza los `href: "#"` por los reales. El botón "Agendar llamada" también apunta a `#` — cámbialo por tu URL de Calendly.
- **Navbar** (`components/Navbar.tsx`) — array `NAV_LINKS`.
- **Metadata / SEO** (`app/layout.tsx`) — title, description, Open Graph.

## Tipografía

Se usa [Satoshi](https://www.fontshare.com/fonts/satoshi) cargada vía `<link>` desde Fontshare en `app/layout.tsx`.

**Para mejor performance** (recomendado en producción):

1. Descarga los `.woff2` de Satoshi (300, 400, 500, 700, 900) desde fontshare.com.
2. Guárdalos en `public/fonts/`.
3. Cárgala con `next/font/local` en `app/layout.tsx`:

   ```ts
   import localFont from "next/font/local";

   const satoshi = localFont({
     src: [
       { path: "../public/fonts/Satoshi-Light.woff2", weight: "300" },
       { path: "../public/fonts/Satoshi-Regular.woff2", weight: "400" },
       { path: "../public/fonts/Satoshi-Medium.woff2", weight: "500" },
       { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700" },
       { path: "../public/fonts/Satoshi-Black.woff2", weight: "900" },
     ],
     variable: "--font-satoshi",
     display: "swap",
   });
   ```

4. Aplica `satoshi.variable` al `<html>` y ajusta `tailwind.config.ts` para leer `var(--font-satoshi)`.

## Paleta

Definida en `tailwind.config.ts`:

- `ink` — `#0A0A0A` (texto principal)
- `paper` — `#FFFFFF` (fondo)
- `muted` — `#71717A` (texto secundario)
- `accent` — `#00D26A` (verde sutil, uso mínimo)
- `line` — `#E5E5E5` (bordes)
