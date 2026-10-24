# Code Style

To maintain high code quality and consistency, this project uses a hybrid linting and formatting strategy.

## Commands

Run the following commands to automatically fix formatting and linting issues:

```shell
pnpm lint:fix
pnpm fmt:fix
```

## Tooling Strategy

We use a combination of **Biome** and **Prettier** based on their respective strengths and file support.

- **Biome:** Used as the primary tool for JavaScript, TypeScript, JSON, and `.astro` files due to its exceptional speed. Astro support is enabled via `html.experimentalFullSupportEnabled`.
- **Prettier:** Used for formats Biome does not support yet, such as YAML and Markdown.

| File type              | Formatter | Linter |
| ---------------------- | --------- | ------ |
| `.js` / `.ts` / `.tsx` | Biome     | Biome  |
| `.astro`               | Biome     | Biome  |
| `.json`                | Biome     | Biome  |
| `.yaml` / `.md`        | Prettier  | -      |

## Why Biome?

I have adopted Biome for its efficiency in personal development.
By integrating formatting and linting into a single, high-performance tool,
it minimizes configuration overhead and speeds up the development workflow.
