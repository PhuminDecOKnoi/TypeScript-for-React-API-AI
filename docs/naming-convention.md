# Naming Convention Standard

This repository uses consistent naming rules to keep the project easy to read, search, maintain, and reuse.

---

## Core Rule

Use **lowercase kebab-case** for package names, folder names, and documentation file names.

Good examples:

```text
typescript-for-react-api-ai
project-structure.md
naming-convention.md
api-client.ts
ai-workflow.ts
react-user-card.tsx
```

Avoid:

```text
TypeScript_For_React.md
APIClient.ts
MyComponent.tsx
reactComponent.tsx
projectStructure.md
```

---

## File Naming Rules

| File Type | Standard | Example |
|---|---|---|
| Markdown docs | lowercase kebab-case | `project-structure.md` |
| TypeScript files | lowercase kebab-case | `api-client.ts` |
| React components | lowercase kebab-case | `user-card.tsx` |
| Test files | source name + `.test.ts` | `api-client.test.ts` |
| Config files | ecosystem standard | `package.json`, `tsconfig.json` |

---

## Code Naming Rules

| Code Element | Standard | Example |
|---|---|---|
| Variables | camelCase | `userName` |
| Functions | camelCase | `fetchUserProfile()` |
| Types | PascalCase | `UserProfile` |
| Interfaces | PascalCase | `ApiResponse` |
| React components | PascalCase in code | `UserCard` |
| Constants | UPPER_SNAKE_CASE when truly constant | `API_BASE_URL` |

---

## Branch Naming Suggestions

```text
feature/add-api-client
fix/update-readme
chore/standardize-docs
refactor/rename-components
```

---

## Repository Naming Note

The current repository name is:

```text
TypeScript-for-React-API-AI
```

For npm/package naming and internal documentation, use the normalized lowercase form:

```text
typescript-for-react-api-ai
```

This avoids case-sensitivity problems across operating systems and package ecosystems.
