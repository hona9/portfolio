# bishalhona.nuraheals.com

Personal portfolio for Bishal Hona — backend engineer, infrastructure for
LLM-powered systems. Built with [Astro](https://astro.build), static output.

## Design intent

One idea carries the whole site: **composure**. The page holds still until you
ask something of it. The only motion and the only color on the entire site
belong to the two live architecture diagrams — and the color (`--ember`) only
appears when a diagram shows something *failing*. Calm has no color.

- **Palette** — a cool near-monochrome zinc scale (`--paper`, `--panel`,
  `--ink`, `--graphite`, `--mist`) plus one desaturated oxblood (`--ember`)
  reserved for diagram failure states. Defined in `src/styles/tokens.css`.
- **Type** — two voices: **Newsreader** (serif) for human judgment, used big and
  rarely; **Geist Sans / Geist Mono** for the machine — nav, labels, diagrams.
- **Signature** — two hand-built SVG/CSS/JS diagrams that animate the real Nura
  backend: queue isolation with recovery, and token rotation with replay
  detection. No video, no GIF.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Deploy — Cloudflare Pages (zero config)

Connect the repo in the Cloudflare Pages dashboard and set:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |

No adapter, no environment variables, no SSR. Every route is prerendered to
static HTML.

## Accessibility & motion

- Visible keyboard focus on every interactive element; a skip link to `#main`.
- `prefers-reduced-motion` is honored: each diagram skips its animation and
  renders its **final, meaningful frame** (the recovered / revoked end-state)
  rather than dropping the content.
- Diagrams also replay on click and auto-run once when first scrolled into view.

## Structure

```
src/
├── layouts/        Base.astro (shell), Article.astro (writing posts)
├── components/     Nav, Footer, QueueIsolationDiagram, TokenRotationDiagram
├── pages/          index, work, writing, about, contact, writing/*
└── styles/         tokens.css (design system), diagram.css (diagram chrome)
```

## Content status

Structure, design system, and both diagrams are complete. Final narrative copy
for the Nura case study and the two Writing posts is being filled in — search
for `draft` blocks and the case-study note.
