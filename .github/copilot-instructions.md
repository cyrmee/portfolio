# Copilot Instructions for Cyrmee Code Portfolio

## Project Overview

- **Stack:** Vite + React + TypeScript + Tailwind CSS + shadcn-ui + Radix UI
- **Purpose:** Personal portfolio site, modular and easily extensible, with Lovable.dev integration for AI-driven editing and deployment.

## Architecture & Structure

- **Entrypoint:** `src/main.tsx` mounts the `App` component.
- **Routing:** Uses React Router (`App.tsx`) with all custom routes above the catch-all `*` route. Main pages: `Index.tsx`, `NotFound.tsx`.
- **Portfolio Sections:** Modular components in `src/components/portfolio/` (e.g., `Header`, `Hero`, `About`, etc.) are composed in `Index.tsx`.
- **UI Library:** All reusable UI primitives are in `src/components/ui/` (shadcn-ui, Radix UI wrappers, custom logic).
- **Hooks:** Custom hooks live in `src/hooks/`.
- **Utilities:** Shared helpers in `src/lib/utils.ts`.

## Developer Workflows

- **Install:** `npm i`
- **Dev Server:** `npm run dev` (Vite, port 8080)
- **Build:** `npm run build` or `npm run build:dev`
- **Preview:** `npm run preview`
- **Lint:** `npm run lint` (ESLint, config in `eslint.config.js`)
- **Edit via Lovable.dev:** Changes made in Lovable are auto-committed to this repo.
- **Deploy:** Use Lovable's Share → Publish. For custom domains, see Lovable docs.

## Conventions & Patterns

- **Path Aliases:** Use `@/` for `src/` (see `tsconfig.json`).
- **Styling:** Tailwind CSS with custom theme in `tailwind.config.ts`. Use CSS variables for colors.
- **Component Tagging:** In dev mode, Vite loads `lovable-tagger` for component tagging.
- **Error Handling:** 404s are logged in `NotFound.tsx` via `console.error`.
- **UI Composition:** Prefer shadcn-ui/Radix primitives for new UI elements. Extend via `src/components/ui/`.
- **React Query:** Use `@tanstack/react-query` for async state (see `App.tsx`).
- **Toasts:** Use both `Toaster` and `Sonner` from `src/components/ui/` for notifications.

## Examples

- To add a new portfolio section: create a component in `src/components/portfolio/`, import and add to `Index.tsx`.
- To add a new UI primitive: create in `src/components/ui/`, follow shadcn-ui/Radix patterns.

---

If any section is unclear or missing, please provide feedback to improve these instructions.
