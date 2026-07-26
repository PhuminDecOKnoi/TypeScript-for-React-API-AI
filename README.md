# TypeScript for React API AI

> GitHub-ready learning and prototype repository for **TypeScript**, **React**, **API integration**, and **AI workflow** practice.

![TypeScript](https://img.shields.io/badge/TypeScript-7.0-blue)
![Focus](https://img.shields.io/badge/Focus-React%20%7C%20API%20%7C%20AI-orange)
![Structure](https://img.shields.io/badge/Structure-GitHub--Ready-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## Repository Version

| Field | Value |
|---|---|
| Repository | `PhuminDecOKnoi/TypeScript-for-React-API-AI` |
| Project Version | `v1.0.0-ts7.0-react-api-ai-2026.07.26` |
| Documentation Reference | `v2.0.0-ref-2026.07.26` |
| Recommended TypeScript | `TypeScript 7.0+` |
| Compatibility Track | `TypeScript 6.0+ / 7.0+` |
| Runtime | `Node.js LTS` |
| License | `MIT License` |
| Naming Standard | `lowercase-kebab-case` for packages and folders |

---

## Overview

This repository is designed as a structured learning and prototype workspace for developers who want to connect TypeScript with practical frontend and automation workflows.

The repository focuses on four practical tracks:

1. **TypeScript Foundation** — strict typing, interfaces, type aliases, modules, and safe data structures.
2. **React Preparation** — component thinking, props models, state models, and reusable UI patterns.
3. **API Integration** — typed request/response models, async workflows, and error-safe service functions.
4. **AI Workflow** — typed prompt/input models, structured response models, and mock AI integration patterns.

---

## Quick Start

Install dependencies:

```bash
npm install
```

Check TypeScript types:

```bash
npm run check
```

Build the project:

```bash
npm run build
```

Run the starter example:

```bash
npm start
```

---

## Standard Project Structure

```text
.
├── .github/
│   └── pull_request_template.md
├── docs/
│   ├── naming-convention.md
│   └── project-structure.md
├── src/
│   └── main.ts
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── REFERENCE.md
├── package.json
└── tsconfig.json
```

---

## Naming Standard

This repository uses **lowercase kebab-case** for npm package names, folders, and documentation files.

Examples:

```text
typescript-for-react-api-ai
naming-convention.md
project-structure.md
api-client.ts
ai-workflow.ts
user-card.tsx
```

Avoid inconsistent names such as:

```text
MyFile.ts
APIClient.ts
reactComponent.tsx
TypeScript_for_AI.md
```

---

## Learning Modules

| Module | Topic | Output |
|---:|---|---|
| 1 | TypeScript project setup | `package.json`, `tsconfig.json` |
| 2 | Strict typing foundation | typed variables and functions |
| 3 | Data modeling | `interface`, `type`, arrays of objects |
| 4 | API models | typed request and response objects |
| 5 | React preparation | props and state models |
| 6 | AI workflow preparation | prompt and response models |
| 7 | GitHub documentation | README, CHANGELOG, CONTRIBUTING, REFERENCE |

---

## Recommended Development Rules

- Use explicit types for public functions.
- Keep domain models in clear reusable types or interfaces.
- Keep service logic separate from UI logic.
- Prefer small files with one clear responsibility.
- Use `npm run check` before pushing changes.
- Update `CHANGELOG.md` and `REFERENCE.md` when changing structure, version, or learning scope.

---

## License

This repository is released under the **MIT License**.

You may use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the content and code under the license terms.
