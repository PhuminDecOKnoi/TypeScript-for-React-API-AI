# Changelog

All notable changes to this repository are documented in this file.

## [v1.1.0-ts7.0-react19-vite8-2026.07.26] - 2026-07-26

### Updated

- Updated TypeScript to `7.0.2`.
- Added React and React DOM `19.2.8`.
- Added Vite `8.1.5` and `@vitejs/plugin-react 6.0.3`.
- Added Zod `4.4.3` for runtime validation.
- Added ESLint `10.7.0`, TypeScript ESLint `8.65.0`, React Hooks rules, React Refresh rules, and Prettier `3.9.6`.
- Added Vitest `4.1.10`, React Testing Library, DOM matchers, and jsdom.
- Updated TypeScript configuration for React JSX and Vite bundler resolution.

### Added

- Added the Vite HTML entry page and configuration.
- Added `src/main.tsx` and `src/app.tsx`.
- Added a typed React component and component test.
- Added a typed API service with Zod validation.
- Added a typed AI workflow model.
- Added application styles and shared test setup.
- Added ESLint flat configuration.
- Added GitHub Actions quality workflow.
- Added dependency version matrix, React object model, plugin stack, and update policy documentation.

### Removed

- Removed the former TypeScript-only entry file `src/main.ts` after migration to `src/main.tsx`.

## [v1.0.0-ts7.0-react-api-ai-2026.07.26] - 2026-07-26

### Added

- Added GitHub-ready repository documentation structure.
- Added `README.md`, `LICENSE`, `package.json`, `tsconfig.json`, `.gitignore`, and starter documentation.
- Added MIT License.
- Added the initial `src/main.ts` TypeScript example.

### Standardized

- Adopted lowercase kebab-case for package names, documentation files, and folder names.
- Adopted a GitHub-ready documentation baseline.
