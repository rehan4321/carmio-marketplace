# Carmio

Carmio is a responsive two-sided marketplace prototype connecting customers with trusted local and remote service professionals.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/kaamconnect/src/App.tsx` — route map and shared app composition
- `artifacts/kaamconnect/src/components/AppShell.tsx` — responsive navigation and app chrome
- `artifacts/kaamconnect/src/pages/Pages.tsx` — clickable marketplace, dashboard, admin, auth, and settings screens
- `artifacts/kaamconnect/src/lib/mock-data.ts` — realistic prototype entities for workers, jobs, conversations, and categories
- `artifacts/kaamconnect/src/index.css` — Carmio theme tokens, typography, texture, and reusable utility styles

## Architecture decisions

- The first release is a frontend-only prototype with local state and realistic dummy data so the complete product surface can be reviewed before backend contracts are finalized.
- Wouter routes are used so every requested URL is directly previewable while keeping the app lightweight.
- Customer and Worker views share one account shell and can be switched from the dashboard.
- Payment surfaces show the 10% platform fee and safe payout language without handling card data.

## Product

Carmio supports service discovery, job posting, applications and offers, worker profiles, job detail and status tracking, safe chat, earnings, settings, and admin operations. It represents both nearby in-person work and remote digital services.

## User preferences

- The user requested a polished, professional startup marketplace rather than a basic template.
- Educational services should remain legitimate tutoring and homework help, never cheating.

## Gotchas

- The app is currently prototype-only; authentication, payments, storage, real-time messaging, moderation, and persistence still need production integrations before launch.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
