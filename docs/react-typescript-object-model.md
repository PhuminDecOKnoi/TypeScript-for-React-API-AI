# React and TypeScript Object Model

## Recommended component model

Use function components as the primary React pattern. Model component inputs with `interface` or `type` and keep domain data separate from UI state.

```tsx
interface UserCardProps {
  name: string
  role: string
  skills: readonly string[]
}

export function UserCard({ name, role, skills }: UserCardProps) {
  return <article>{name}: {role} ({skills.length} skills)</article>
}
```

## Core React objects and APIs

| Area | Type or API | Purpose |
|---|---|---|
| Props | `interface ComponentProps` | Defines component input |
| State | `useState<T>()` | Typed local state |
| Complex state | `useReducer()` | State transitions and actions |
| Refs | `useRef<HTMLInputElement>(null)` | DOM or mutable references |
| Form events | `React.FormEvent<HTMLFormElement>` | Form submission |
| Input events | `React.ChangeEvent<HTMLInputElement>` | Typed input changes |
| Children | `React.ReactNode` | Renderable child content |
| Native props | `React.ComponentProps<"button">` | Reuse element props |
| Lazy UI | `lazy()` and `Suspense` | Code splitting and async UI |
| React Actions | `useActionState()` | Form/action state |
| Optimistic UI | `useOptimistic()` | Temporary optimistic state |

## Class components

Class components are not the main learning path. Keep them only for legacy code review and class-based error-boundary examples.

## API and AI models

```ts
interface ApiResponse<T> {
  data: T
  requestId: string
}

interface AiRequest {
  topic: string
  tone: "professional" | "friendly" | "concise"
}
```

Use Zod at external boundaries to validate API or AI payloads at runtime. TypeScript types alone do not validate unknown data received over a network.
