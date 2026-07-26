# 🚀 TypeScript Course for React, API and AI

## หลักสูตร TypeScript 7 สำหรับนักพัฒนา React, API และ AI Workflow

> เอกสารหลักสูตรฉบับปรับปรุงใหม่สำหรับ repository `PhuminDecOKnoi/TypeScript-for-React-API-AI` ออกแบบให้ใช้เป็น GitHub course outline, teaching notes, workshop guide และเอกสารอ้างอิงภายในทีมได้

![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-blue)
![React](https://img.shields.io/badge/React-19.2.8-61dafb)
![Vite](https://img.shields.io/badge/Vite-8.1.5-646cff)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 📌 Document Version

| Field | Value |
|---|---|
| Course Title | `TypeScript Course for React, API and AI` |
| Course Version | `v2.0.0-ts7.0-react19-vite8-2026.07.26` |
| Documentation Reference | `v2.1.0-ref-2026.07.26` |
| TypeScript | `7.0.2` |
| React / React DOM | `19.2.8` |
| Vite | `8.1.5` |
| React Plugin | `@vitejs/plugin-react 6.0.3` |
| Runtime Validation | `Zod 4.4.3` |
| Testing | `Vitest 4.1.10 / React Testing Library 16.3.2` |
| License | `MIT License` |
| Naming Standard | `lowercase-kebab-case` for files, folders and package names |

---

## 📖 ภาพรวมหลักสูตร

หลักสูตรนี้ใช้ TypeScript เป็นแกนกลางในการพัฒนาแอปพลิเคชันสมัยใหม่ โดยเชื่อมโยงกับงานจริง 4 ด้าน:

1. **React UI** — component, props, state, event และ ref ที่มีชนิดข้อมูลชัดเจน
2. **API Integration** — request/response model, async workflow, error handling และ runtime validation
3. **AI Workflow** — prompt request, structured response, workflow state และ boundary validation
4. **GitHub Engineering Practice** — naming convention, lint, test, build, CI และ version governance

แนวทางของหลักสูตรคือ “เรียนผ่านโปรเจกต์จริง” ไม่แยก syntax ออกจากบริบทการพัฒนา ผู้เรียนจะเห็นตั้งแต่ต้นว่า TypeScript ช่วยควบคุมข้อมูล ลดข้อผิดพลาด และเพิ่มความน่าเชื่อถือให้กับระบบอย่างไร

---

## 🎯 ผลลัพธ์การเรียนรู้

เมื่อจบหลักสูตร ผู้เรียนควรสามารถ:

- ใช้ TypeScript 7 กับ React 19 และ Vite 8 ได้
- ออกแบบ `type`, `interface`, object model และ generic types ได้อย่างเหมาะสม
- สร้าง React function component พร้อม typed props, state, events และ refs
- เขียน API client ที่แยก transport type ออกจาก domain model
- ตรวจสอบข้อมูลภายนอกด้วย Zod ก่อนนำเข้าสู่ระบบ
- ออกแบบ typed AI request/response และ workflow state
- ใช้ ESLint, Prettier, Vitest และ Testing Library ในกระบวนการพัฒนา
- ใช้ GitHub Actions ตรวจ format, type, lint, test และ build อัตโนมัติ
- จัดทำ README, CHANGELOG, REFERENCE และเอกสารมาตรฐานทีมได้

---

## 👥 กลุ่มเป้าหมาย

- นักพัฒนาที่มีพื้นฐาน JavaScript และต้องการใช้ TypeScript อย่างเป็นระบบ
- Frontend developer ที่ต้องการพัฒนา React แบบ type-safe
- นักพัฒนาที่เชื่อม API หรือ AI service
- Tech Lead, Mentor และ Trainer ที่ต้องการ course material สำหรับถ่ายทอดต่อ
- ทีมพัฒนาที่ต้องการกำหนด coding standard และ GitHub workflow ร่วมกัน

---

## 🛠️ Current Stable Toolchain

| Category | Package | Version |
|---|---|---:|
| Language | `typescript` | `7.0.2` |
| UI | `react` | `19.2.8` |
| DOM renderer | `react-dom` | `19.2.8` |
| Build tool | `vite` | `8.1.5` |
| React build plugin | `@vitejs/plugin-react` | `6.0.3` |
| Runtime validation | `zod` | `4.4.3` |
| Lint | `eslint` | `10.7.0` |
| TypeScript lint | `typescript-eslint` | `8.65.0` |
| React Hooks lint | `eslint-plugin-react-hooks` | `7.1.1` |
| React Refresh lint | `eslint-plugin-react-refresh` | `0.5.3` |
| Formatter | `prettier` | `3.9.6` |
| Test runner | `vitest` | `4.1.10` |
| React testing | `@testing-library/react` | `16.3.2` |
| Test DOM | `jsdom` | `29.1.1` |

> TypeScript 7 เป็น native port ที่พัฒนาด้วย Go และให้ประสิทธิภาพการตรวจชนิดข้อมูลสูงขึ้นมาก อย่างไรก็ตาม TypeScript 7.0 ยังไม่มี stable programmatic compiler API ดังนั้นเครื่องมือบางประเภทที่ฝัง TypeScript compiler โดยตรงอาจยังต้องใช้ TypeScript 6 compatibility path

---

## ⚙️ การติดตั้งและใช้งาน

```bash
npm install
npm run dev
```

คำสั่งตรวจคุณภาพ:

```bash
npm run format:check
npm run check
npm run lint
npm test
npm run build
```

---

# 🧱 โครงสร้างหลักสูตร

## Module 1 — TypeScript 7 Project Foundation

### หัวข้อ

- TypeScript 7 toolchain
- `package.json`, `tsconfig.json` และ Vite project
- ECMAScript modules
- strict mode
- file/folder naming standard

### ตัวอย่าง

```ts
const courseName: string = "TypeScript for React API AI"
const courseVersion: string = "v2.0.0-ts7.0-react19-vite8-2026.07.26"

function getCourseLabel(name: string, version: string): string {
  return `${name} (${version})`
}

console.log(getCourseLabel(courseName, courseVersion))
```

---

## Module 2 — Type System and Object Modeling

### หัวข้อ

- primitive types
- arrays and tuples
- object types
- `type` และ `interface`
- union, intersection และ literal types
- optional properties
- type narrowing
- generics

### ตัวอย่าง

```ts
type UserRole = "admin" | "developer" | "viewer"

interface UserProfile {
  id: string
  name: string
  email: string
  role: UserRole
  active: boolean
}

const user: UserProfile = {
  id: "USR-001",
  name: "John Developer",
  email: "john@example.com",
  role: "developer",
  active: true,
}
```

---

## Module 3 — Function, Class and Domain Object

### หัวข้อ

- typed parameters and return values
- optional/default parameters
- generic functions
- class, constructor และ access modifiers
- composition over inheritance
- domain model versus transport model

### ตัวอย่าง Class

```ts
class ApiError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
  ) {
    super(message)
    this.name = "ApiError"
  }
}
```

> สำหรับ React application ให้ใช้ function component เป็นแนวทางหลัก ส่วน class เหมาะกับ domain object, custom error และ legacy/error-boundary use cases

---

## Module 4 — React 19 with TypeScript

### หัวข้อ

- function component
- typed props
- `useState<T>()`
- typed event objects
- `useRef<T>()`
- children และ `React.ReactNode`
- component composition

### ตัวอย่าง

```tsx
import { useState, type ChangeEvent, type FormEvent } from "react"

type PromptFormProps = {
  title: string
  onSubmitPrompt: (prompt: string) => Promise<void>
}

export function PromptForm({ title, onSubmitPrompt }: PromptFormProps) {
  const [prompt, setPrompt] = useState("")
  const [loading, setLoading] = useState(false)

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setPrompt(event.target.value)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    setLoading(true)

    try {
      await onSubmitPrompt(prompt)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <input value={prompt} onChange={handleChange} />
      <button disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
    </form>
  )
}
```

---

## Module 5 — React State Object and Workflow Modeling

### หัวข้อ

- discriminated union
- idle/loading/success/error states
- reducer-friendly object model
- immutable update

```ts
type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string }
```

ประโยชน์คือ component จะไม่สามารถอยู่ในสถานะที่ขัดแย้งกัน เช่น `loading: true` แต่มี `error` และ `data` พร้อมกันโดยไม่ตั้งใจ

---

## Module 6 — API Integration and Runtime Validation

### หัวข้อ

- Fetch API
- typed request/response
- HTTP error handling
- `unknown` at external boundaries
- Zod schema validation

```ts
import { z } from "zod"

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.email(),
})

type User = z.infer<typeof UserSchema>

export async function fetchUser(userId: string): Promise<User> {
  const response = await fetch(`/api/users/${userId}`)

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  const payload: unknown = await response.json()
  return UserSchema.parse(payload)
}
```

> TypeScript ตรวจชนิดข้อมูลใน compile time แต่ไม่สามารถรับรองข้อมูลจาก network ใน runtime ได้ จึงควรใช้ schema validation ที่ boundary

---

## Module 7 — AI Workflow Object Model

### หัวข้อ

- prompt request model
- structured response model
- workflow status
- provider-independent interface
- safe handling of uncertain output

```ts
type AiTone = "formal" | "friendly" | "concise"

type AiPromptRequest = {
  prompt: string
  tone: AiTone
  maxTokens?: number
}

type AiPromptResponse = {
  requestId: string
  output: string
  model: string
}

interface AiProvider {
  generate(request: AiPromptRequest): Promise<AiPromptResponse>
}
```

---

## Module 8 — React Plugin and Build Stack

### หัวข้อ

- Vite 8
- `@vitejs/plugin-react`
- React Fast Refresh
- environment variables
- development and production build

```ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
})
```

---

## Module 9 — ESLint and Team Coding Standard

### หัวข้อ

- ESLint flat config
- TypeScript ESLint
- React Hooks rules
- React Refresh rules
- Prettier
- naming convention

มาตรฐานการตั้งชื่อ:

| Element | Standard | Example |
|---|---|---|
| Package/folder/docs | lowercase kebab-case | `api-client.ts` |
| Variables/functions | camelCase | `fetchUserProfile()` |
| Types/interfaces/classes | PascalCase | `UserProfile` |
| Constants | UPPER_SNAKE_CASE | `API_BASE_URL` |
| React component code | PascalCase | `UserCard` |
| React component file | lowercase kebab-case | `user-card.tsx` |

---

## Module 10 — Testing React and TypeScript

### หัวข้อ

- Vitest
- React Testing Library
- component behavior testing
- API mock strategy
- test naming standard

```tsx
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { UserCard } from "./user-card"

describe("UserCard", () => {
  it("renders the user name", () => {
    render(<UserCard name="John Developer" role="Developer" />)
    expect(screen.getByText("John Developer")).toBeInTheDocument()
  })
})
```

---

## Module 11 — GitHub Workflow and CI

### หัวข้อ

- branch naming
- conventional commit messages
- pull request template
- GitHub Actions
- reproducible dependency installation
- `package-lock.json`

CI quality gate:

```text
npm ci
npm run format:check
npm run check
npm run lint
npm test
npm run build
```

---

## Module 12 — Capstone Project

### Project: React API AI Dashboard

ผู้เรียนสร้าง dashboard ที่ประกอบด้วย:

- typed React components
- prompt form
- API service layer
- Zod validation
- typed AI workflow
- loading/error/success state
- component test
- ESLint/Prettier checks
- GitHub Actions CI
- README และ CHANGELOG

### Expected Output

```text
src/
├── components/
├── services/
├── test/
├── workflows/
├── app.tsx
├── main.tsx
└── styles.css
```

---

## 🧭 Learning Path

| Week | Focus | Deliverable |
|---:|---|---|
| 1 | TypeScript 7 foundation and object model | typed models and functions |
| 2 | React 19 and component typing | typed UI components |
| 3 | API and Zod validation | safe API service |
| 4 | AI workflow and async state | typed AI feature |
| 5 | Testing, lint, formatting and CI | GitHub-ready project |

---

## 📝 Comment Standard

Comment ควรอธิบาย “เหตุผล” หรือ “ข้อควรระวัง” มากกว่าการแปลโค้ดทุกบรรทัด

```ts
// Validate external data because compile-time types cannot protect runtime API payloads.
const user = UserSchema.parse(payload)
```

หลีกเลี่ยง comment ที่ซ้ำกับโค้ด:

```ts
// Set loading to true.
setLoading(true)
```

---

## 📚 Repository Documents

- [`README.md`](README.md) — project landing page
- [`REFERENCE.md`](REFERENCE.md) — version governance
- [`CHANGELOG.md`](CHANGELOG.md) — update history
- [`docs/version-matrix.md`](docs/version-matrix.md) — dependency versions
- [`docs/react-typescript-object-model.md`](docs/react-typescript-object-model.md) — object/type/class model
- [`docs/react-plugin-stack.md`](docs/react-plugin-stack.md) — React plugin stack
- [`docs/update-policy.md`](docs/update-policy.md) — dependency update policy
- [`docs/naming-convention.md`](docs/naming-convention.md) — naming standard

---

## ⚠️ TypeScript 7 Compatibility Note

TypeScript 7.0 เหมาะกับ TypeScript/React/Vite workflow ที่ใช้ compiler และ language server ตามปกติ แต่ยังไม่มี stable programmatic compiler API ในรุ่น 7.0 เครื่องมือที่ embed compiler เช่นบาง workflow ของ Vue, Astro, Svelte, MDX หรือ Angular อาจยังต้องใช้ TypeScript 6 compatibility path จนกว่า ecosystem จะรองรับเต็มรูปแบบ

---

## 📄 License

เอกสารและตัวอย่างโค้ดใน repository นี้เผยแพร่ภายใต้ **MIT License** สามารถใช้ คัดลอก แก้ไข และเผยแพร่ต่อได้ตามเงื่อนไขของ license

---

## ✅ Course Update Summary

- Updated from the previous TypeScript course outline to TypeScript `7.0.2`
- Added React `19.2.8` and Vite `8.1.5`
- Added typed React props, state, events and refs
- Added object, interface, class and domain modeling guidance
- Added API boundary validation with Zod `4.4.3`
- Added typed AI workflow patterns
- Added ESLint, Prettier, Vitest and Testing Library modules
- Added GitHub Actions and version-governance practices
- Updated naming rules to GitHub/npm-friendly lowercase kebab-case

---

**Current Course Version:** `v2.0.0-ts7.0-react19-vite8-2026.07.26`
