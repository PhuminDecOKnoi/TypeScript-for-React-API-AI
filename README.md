# TypeScript for React API AI

> GitHub-ready learning and prototype repository for **TypeScript 7**, **React 19**, **API integration**, runtime validation, testing, and typed AI workflow practice.

![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-blue)
![React](https://img.shields.io/badge/React-19.2.8-61dafb)
![Vite](https://img.shields.io/badge/Vite-8.1.5-646cff)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

## Repository Version

| Field | Value |
|---|---|
| Repository | `PhuminDecOKnoi/TypeScript-for-React-API-AI` |
| Project Version | `v1.1.0-ts7.0-react19-vite8-2026.07.26` |
| Documentation Reference | `v2.1.0-ref-2026.07.26` |
| TypeScript | `7.0.2` |
| React / React DOM | `19.2.8` |
| Vite | `8.1.5` |
| React plugin | `@vitejs/plugin-react 6.0.3` |
| Validation | `Zod 4.4.3` |
| License | `MIT License` |
| Naming Standard | lowercase kebab-case for packages, folders, and docs |

## Overview

This repository demonstrates a modern TypeScript and React workflow with:

1. strict TypeScript configuration;
2. typed React function components, props, state, events, and refs;
3. typed API services with runtime response validation;
4. structured AI request and response models;
5. Vite development and production builds;
6. ESLint flat configuration with React Hooks and Fast Refresh rules;
7. Vitest and React Testing Library component tests;
8. GitHub-ready documentation and version control records.

## Quick Start

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run format:check
npm run check
npm run lint
npm test
npm run build
```

## Current Stable Toolchain

| Category | Package | Version |
|---|---|---:|
| Language | `typescript` | `7.0.2` |
| UI | `react` | `19.2.8` |
| DOM renderer | `react-dom` | `19.2.8` |
| Build tool | `vite` | `8.1.5` |
| React build plugin | `@vitejs/plugin-react` | `6.0.3` |
| Validation | `zod` | `4.4.3` |
| Lint | `eslint` | `10.7.0` |
| TypeScript lint | `typescript-eslint` | `8.65.0` |
| Formatting | `prettier` | `3.9.6` |
| Testing | `vitest` | `4.1.10` |
| React testing | `@testing-library/react` | `16.3.2` |

See [`docs/version-matrix.md`](docs/version-matrix.md) for the full dependency list.

## Standard Project Structure

```text
.
├── .github/
│   └── pull_request_template.md
├── docs/
│   ├── naming-convention.md
│   ├── project-structure.md
│   ├── react-plugin-stack.md
│   ├── react-typescript-object-model.md
│   ├── update-policy.md
│   └── version-matrix.md
├── src/
│   ├── components/
│   │   ├── user-card.test.tsx
│   │   └── user-card.tsx
│   ├── services/
│   │   └── api-client.ts
│   ├── test/
│   │   └── setup.ts
│   ├── workflows/
│   │   └── ai-workflow.ts
│   ├── app.tsx
│   ├── main.tsx
│   └── styles.css
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── REFERENCE.md
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## React and TypeScript Learning Scope

| Module | Topic | Output |
|---:|---|---|
| 1 | TypeScript 7 strict setup | `tsconfig.json` |
| 2 | React 19 function components | typed props and state |
| 3 | React events, refs, actions, and optimistic UI | modern React APIs |
| 4 | API integration | typed fetch service |
| 5 | Runtime validation | Zod schemas and inferred types |
| 6 | AI workflow modeling | typed request/response objects |
| 7 | Tooling and plugins | Vite, ESLint, Prettier |
| 8 | Testing | Vitest and Testing Library |
| 9 | GitHub standards | README, CHANGELOG, CONTRIBUTING, REFERENCE |

## Naming Standard

- npm package, folders, documentation, TypeScript, and React component filenames: `lowercase-kebab-case`;
- variables and functions: `camelCase`;
- React components, types, interfaces, and classes: `PascalCase`;
- true constants: `UPPER_SNAKE_CASE`.

See [`docs/naming-convention.md`](docs/naming-convention.md).

## Update Policy

Use stable npm releases for the main branch. Do not use beta, canary, or experimental packages as the documented baseline. Keep `react` and `react-dom` on the same version and update the version matrix, changelog, and reference register together.

See [`docs/update-policy.md`](docs/update-policy.md).

## License

Released under the **MIT License**. The code and learning material may be used, copied, modified, and distributed under the license terms.
