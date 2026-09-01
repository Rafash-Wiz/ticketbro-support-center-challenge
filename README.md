# ticketbro Support Center

A React and TypeScript proof of concept for ticketbro's Support and Self-Service Center.

See [SPEC.md](./SPEC.md) for the MVP, future roadmap, and proposed production architecture.

## Prerequisites

- Node.js 20.19.0+ or 22.12.0+

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Checks

```bash
npm run lint
npm run build
```

## Included flows

- Browse support categories and open Registration & account help.
- Choose an account issue to view step-by-step guidance.
- Search local mock help articles by title, category, summary, and keywords.
- Submit a support request with simulated async loading and success feedback.

The PoC intentionally uses typed local data and a fake request function instead of a backend.
