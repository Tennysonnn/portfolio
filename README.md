# Hakhong — Portfolio (V1, frontend only)

Next.js (App Router) + TypeScript + Tailwind CSS. Single landing page with
in-page sections, navigated by anchor links.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## 1. Project structure

```
app/
  layout.tsx          Root layout: fonts, Navbar, Footer
  globals.css          Tailwind layers + base styles
  page.tsx             The single landing page (all sections, in order)
components/
  Navbar.tsx, Footer.tsx   Anchor-link navigation (#projects, #experience, #about, #contact)
  Hero.tsx                  id="top" — name, title, supporting copy, primary actions
  AISearch.tsx              id="ai-search" — mock AI/web search interface
  SelectedProjects.tsx      id="projects" — full project grid
  ExperiencePreview.tsx     id="experience" — full timeline
  AboutPreview.tsx          id="about" — about content
  ContactCTA.tsx            id="contact" — contact info + form
  ProjectCard.tsx           Reusable project card
  ExperienceTimeline.tsx    Reusable timeline, used inside ExperiencePreview
  ContactForm.tsx           Frontend-only contact form
data/
  projects.ts            Project content (placeholders marked clearly)
  experience.ts           Experience/timeline content (placeholders marked clearly)
  searchMocks.ts           Example prompts + mock search results
lib/
  types.ts                Shared TypeScript types
```

Content lives in `data/`, separate from the components that render it — update
project details, experience entries, or contact info there without touching
any component code.

## 2. Components created

- **Navbar / Footer** — shared, scroll to sections via `#id` anchors (responsive, with a mobile menu on Navbar).
- **Hero** (`#top`) — name, title, supporting copy, and the two primary actions.
- **AISearch** (`#ai-search`) — the mock AI/web search interface (see below).
- **SelectedProjects** (`#projects`) — full project grid, built from `ProjectCard`.
- **ExperiencePreview** (`#experience`) — full timeline, built from `ExperienceTimeline`.
- **AboutPreview** (`#about`) — about content.
- **ContactCTA** (`#contact`) — contact details plus `ContactForm`, a working form UI with no backend wired up yet (see below).

## 3. How the mock search works

`components/AISearch.tsx` is a client component that:

1. Takes input from the text field or an example-prompt button.
2. On submit, walks through three loading states in sequence — *"Understanding
   your query..."*, *"Searching..."*, *"Finding relevant results..."* — using
   `setTimeout`, so the interaction feels realistic without any network call.
3. Looks up a canned set of results by matching keywords in the query against
   `data/searchMocks.ts`. Unmatched queries fall back to a generic explanatory
   result set. Nothing here calls a real API.
4. Renders results as cards with a title, source, description, and an "Open
   result" link/button. Results that point elsewhere on this page use `#id`
   anchors; anything else opens in a new tab.

## 4. Where the real AI/search API will later connect

Everything is written so the mock can be swapped for a real backend without
changing the UI:

- Replace the body of `runMockSearch` in `components/AISearch.tsx` with a call
  to a real endpoint (e.g. `fetch("/api/search", { method: "POST", body: ... })`),
  keeping the same `Status` state machine (`idle` → `loading` → `done`) and the
  same `SearchResult` shape from `lib/types.ts`, so the results UI needs no changes.
- The three loading stages can stay as fixed UI copy, or be updated live if the
  backend streams progress events.
- `getMockResults` in `data/searchMocks.ts` is the single seam to remove once a
  real web-search + LLM pipeline (or a RAG setup over this site's own content)
  is in place.
- `components/ContactForm.tsx` similarly has a single `handleSubmit` function
  to point at a real form-handling endpoint or email service later.

No database, authentication, backend routes, real AI calls, vector database,
or RAG are included in this version — this is the frontend only, by design.
