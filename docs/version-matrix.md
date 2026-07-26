# Version Matrix

Reference date: `2026-07-26`

| Category | Package | Version |
|---|---|---:|
| Language | `typescript` | `7.0.2` |
| UI | `react` | `19.2.8` |
| DOM renderer | `react-dom` | `19.2.8` |
| Build tool | `vite` | `8.1.5` |
| React build plugin | `@vitejs/plugin-react` | `6.0.3` |
| Runtime validation | `zod` | `4.4.3` |
| Lint engine | `eslint` | `10.7.0` |
| TypeScript lint integration | `typescript-eslint` | `8.65.0` |
| React Hooks lint plugin | `eslint-plugin-react-hooks` | `7.1.1` |
| React Refresh lint plugin | `eslint-plugin-react-refresh` | `0.5.3` |
| Formatter | `prettier` | `3.9.6` |
| Test runner | `vitest` | `4.1.10` |
| React test utilities | `@testing-library/react` | `16.3.2` |
| DOM test utilities | `@testing-library/dom` | `10.4.1` |
| DOM matchers | `@testing-library/jest-dom` | `6.9.1` |
| Browser simulation | `jsdom` | `29.1.1` |
| React types | `@types/react` | `19.2.17` |
| React DOM types | `@types/react-dom` | `19.2.3` |
| Node types | `@types/node` | `26.1.1` |

## Policy

- Use stable npm releases, not beta/canary versions, for the main learning path.
- Update this matrix together with `package.json`, `CHANGELOG.md`, and `REFERENCE.md`.
- Run `npm run check`, `npm run lint`, `npm test`, and `npm run build` after dependency updates.
