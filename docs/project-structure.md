# Project Structure Standard

This document defines the current structure for `PhuminDecOKnoi/TypeScript-for-React-API-AI`.

## Root Structure

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

## Folder Purpose

| Path | Purpose |
|---|---|
| `.github/` | GitHub collaboration templates and future workflow files |
| `docs/` | Version, architecture, naming, plugin, and maintenance documentation |
| `src/components/` | React components and component tests |
| `src/services/` | API and external-system integration logic |
| `src/workflows/` | Typed AI and business workflow models |
| `src/test/` | Shared test setup |
| `dist/` | Vite production build output; ignored by Git |
| `node_modules/` | Installed dependencies; ignored by Git |

## Root File Purpose

| File | Purpose |
|---|---|
| `index.html` | Vite HTML entry document |
| `vite.config.ts` | Vite, React plugin, and Vitest configuration |
| `eslint.config.js` | ESLint flat configuration |
| `package.json` | npm package metadata, dependency baseline, and scripts |
| `tsconfig.json` | TypeScript 7 strict React configuration |
| `README.md` | Main project landing page |
| `REFERENCE.md` | Version and repository governance register |
| `CHANGELOG.md` | Change history |
| `CONTRIBUTING.md` | Contribution workflow |
| `LICENSE` | MIT License |

## Maintenance Rule

When structure or dependency baselines change, update `README.md`, `CHANGELOG.md`, `REFERENCE.md`, `docs/project-structure.md`, and `docs/version-matrix.md` together.
