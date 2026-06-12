# Workspace

A **pnpm workspace monorepo** using TypeScript. Each package manages its own dependencies.

## Overview

This is a monorepo project built with pnpm workspaces and TypeScript. It includes multiple packages organized under `lib/` (shared libraries) and `artifacts/` (applications and services).

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Project Structure

```
workspace/
├── artifacts/          # Applications and deployable services
│   ├── api-server/     # API server implementation
│   ├── mockup-sandbox/ # Mockup/sandbox environment
│   └── umroh-app/      # Main application
├── lib/                # Shared libraries
│   ├── api-client-react/  # React API client hooks
│   ├── api-spec/          # OpenAPI specification
│   ├── api-zod/           # Zod schemas for API validation
│   └── db/                # Database layer (Drizzle ORM)
├── scripts/            # Build and utility scripts
├── public/             # Static assets
└── attached_assets/    # Additional assets
```

## Prerequisites

- **Node.js**: v24
- **pnpm**: Latest version

## Installation

```bash
pnpm install
```

> **Note**: This workspace enforces pnpm as the package manager. Using npm or yarn will fail during installation.

## Key Commands

| Command | Description |
|---------|-------------|
| `pnpm run typecheck` | Full typecheck across all packages |
| `pnpm run build` | Typecheck + build all packages |
| `pnpm run typecheck:libs` | Typecheck library packages only |

### Package-Specific Commands

```bash
# Regenerate API hooks and Zod schemas from OpenAPI spec
pnpm --filter @workspace/api-spec run codegen

# Push DB schema changes (development only)
pnpm --filter @workspace/db run push

# Run API server locally
pnpm --filter @workspace/api-server run dev
```

## Security

This workspace implements supply-chain attack defense through `minimumReleaseAge` configuration in `pnpm-workspace.yaml`. All npm package versions must be published for at least **1 day (1440 minutes)** before installation is allowed.

This protects against malicious releases that are typically discovered and pulled within hours. The setting can be bypassed for trusted packages (e.g., `@replit/*`, `react`, `typescript`) via the `minimumReleaseAgeExclude` list.

## Development Workflow

1. **Install dependencies**: `pnpm install`
2. **Run type checks**: `pnpm run typecheck`
3. **Build all packages**: `pnpm run build`
4. **Start development server**: Use package-specific commands above

## License

MIT
