# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `pnpm dev` - Start dev server on port 4444
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint and Prettier checks
- `pnpm format` - Format code with Prettier
- `pnpm check` - Type checking with svelte-check
- `pnpm test:unit` - Run Vitest unit tests
- `pnpm test:unit -- [test file path]` - Run a specific unit test file
- `pnpm test:integration` - Run Playwright e2e tests
- `pnpm storybook` - Run Storybook on port 6006

## Code Style

- **Formatting**: Tabs, single quotes, 100 char line length (enforced by Prettier)
- **Naming**: kebab-case for files, camelCase for variables
- **Types**: Strict TypeScript with explicit return types
- **Imports**: Group imports (svelte / library / internal)
- **Components**: Svelte 5 syntax with typed props
- **CSS**: Tailwind with `class-variance-authority` (CVA) for component variants

## Architecture

### Content Pipeline

Blog posts live in `content/writing/*.md`. MDSvex processes them through a pipeline:
1. Remark plugins: `remark-gfm`, `remark-fix-urls` (custom), `rehype-unwrap-images`
2. Rehype plugins: `rehype-slug` (heading anchors)
3. Custom SvelteKit preprocessors: `processCallouts()`, `processImages()`
4. Shiki syntax highlighting (night-owl theme)

Post metadata (frontmatter) is typed as `Post` in `src/lib/types.d.ts`. Posts with `published: false` are hidden in production but visible in dev.

### Routing

- Static pages can be `.md` files directly in `src/routes/` (e.g. `biography.md`, `projects/+page.md`)
- Dynamic blog posts: `src/routes/writing/[slug]/` — loads post via `src/lib/posts.ts`
- OG image generation: `src/routes/open-graph.jpg/+server.ts` uses Satori with a React component (`open-graph-image.tsx`)
- RSS feed: `src/routes/writing/rss/+server.ts`

### Component Library

Components in `src/lib/components/` follow a consistent structure:
- `component.svelte` — implementation
- `variations.ts` or `variants.ts` — CVA variant definitions
- `index.ts` — barrel export
- `*.stories.svelte` — Storybook stories

### Key Utilities

- `src/lib/posts.ts` — `getPosts()` and `getPost(slug)` for loading markdown content
- `src/lib/merge.ts` — aliased as `$merge` for class merging
- `src/lib/variants.ts` — shared variant definitions across components

### Adapters

Deployment adapter is selected at build time: Vercel adapter when `process.env.VERCEL` is set, otherwise static adapter. Configured in `svelte.config.js`.

### Path Aliases

- `@/*` → `src/*`
- `$lib/*` → `src/lib/*`
- `$assets/*` → `src/assets/*`
- `content/*` → `content/*`
- `$merge` → `src/lib/merge.ts`

### Custom Plugins

`plugins/` contains custom Vite/MDSvex preprocessors:
- `svelte-compile-callouts.js` — transforms `> [!NOTE]` callout syntax into Svelte `<Callout>` components
- `svelte-enhance-images.js` — enhances markdown image tags with `@sveltejs/enhanced-img`
- `remark-fix-urls.js` — rewrites relative URLs in markdown for correct routing
