# React Plugin Stack

## Build and development

| Tool | Role |
|---|---|
| `vite` | Development server and production build |
| `@vitejs/plugin-react` | JSX transform and React Fast Refresh |
| `typescript` | Static type checking |

## Code quality

| Tool | Role |
|---|---|
| `eslint` | Lint engine using flat configuration |
| `@eslint/js` | Core JavaScript recommended rules |
| `typescript-eslint` | TypeScript parser and rules |
| `eslint-plugin-react-hooks` | Rules of React and Hooks checks |
| `eslint-plugin-react-refresh` | Fast Refresh export safety |
| `prettier` | Consistent formatting |

## Testing

| Tool | Role |
|---|---|
| `vitest` | Unit and component test runner |
| `@testing-library/react` | React component rendering and queries |
| `@testing-library/dom` | DOM-oriented query utilities |
| `@testing-library/jest-dom` | Readable DOM assertions for Vitest |
| `jsdom` | Simulated browser environment |

## Runtime boundary validation

Use `zod` to validate unknown API and AI response objects before they enter application state.

## Required quality commands

```bash
npm run check
npm run lint
npm test
npm run build
npm run format:check
```
