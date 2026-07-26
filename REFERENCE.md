# Repository Reference

## Reference Metadata

| Field | Value |
|---|---|
| Repository | `PhuminDecOKnoi/TypeScript-for-React-API-AI` |
| Repository ID | `1215314254` |
| Reference Version | `v2.1.0-ref-2026.07.26` |
| Project Version | `v1.1.0-ts7.0-react19-vite8-2026.07.26` |
| Reference Date | `2026-07-26` |
| Created Date | `2026-04-19T18:54:38Z` |
| Default Branch | `main` |
| Visibility | `public` |
| Status | `active / not archived` |
| TypeScript | `7.0.2` |
| React / React DOM | `19.2.8` |
| Vite | `8.1.5` |
| React Plugin | `@vitejs/plugin-react 6.0.3` |
| Runtime Validation | `Zod 4.4.3` |
| Lint Baseline | `ESLint 10.7.0 / typescript-eslint 8.65.0` |
| Test Baseline | `Vitest 4.1.10 / React Testing Library 16.3.2` |
| License | `MIT License` |
| Naming Standard | `lowercase-kebab-case` for package names, folders, and documentation files |
| Baseline Commit | `Pending confirmation from commit history` |

## Version Convention

Documentation reference:

```text
v<major>.<minor>.<patch>-ref-YYYY.MM.DD
```

Project content:

```text
v<major>.<minor>.<patch>-ts<typescript>-react<react-major>-vite<vite-major>-YYYY.MM.DD
```

Current project version:

```text
v1.1.0-ts7.0-react19-vite8-2026.07.26
```

## Current GitHub-Ready Baseline

```text
.
├── .github/
│   ├── pull_request_template.md
│   └── workflows/ci.yml
├── docs/
│   ├── naming-convention.md
│   ├── project-structure.md
│   ├── react-plugin-stack.md
│   ├── react-typescript-object-model.md
│   ├── update-policy.md
│   └── version-matrix.md
├── src/
│   ├── components/
│   ├── services/
│   ├── test/
│   ├── workflows/
│   ├── app.tsx
│   ├── main.tsx
│   └── styles.css
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Control Notes

- Stable npm versions are used as the main documented baseline.
- React and React DOM are kept on the same version.
- TypeScript strict mode, Vite bundler resolution, ESLint flat config, React Hooks rules, Fast Refresh rules, Vitest, and Testing Library are included.
- API and AI payload boundaries use typed models; API responses demonstrate Zod runtime validation.
- Dependency updates must update `package.json`, the version matrix, README, changelog, and this reference register together.
- A generated `package-lock.json` should be committed after the first successful local `npm install`.

## Maintenance Log

| Version | Date | Description |
|---|---|---|
| `v1.0.0-ref-2026.07.26` | `2026-07-26` | Initial repository reference register created. |
| `v1.0.1-ref-2026.07.26` | `2026-07-26` | Confirmed repository metadata. |
| `v2.0.0-ref-2026.07.26` | `2026-07-26` | Standardized GitHub documentation structure and naming convention. |
| `v2.1.0-ref-2026.07.26` | `2026-07-26` | Upgraded to the latest stable TypeScript, React, Vite, plugin, lint, validation, and testing baseline; added React application code, tests, documentation, and CI. |
