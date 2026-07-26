import { useMemo, useState } from "react"
import { UserCard } from "./components/user-card"
import { createAiSummary } from "./workflows/ai-workflow"

const VERSION_STACK = [
  "TypeScript 7.0.2",
  "React 19.2.8",
  "Vite 8.1.5",
  "Zod 4.4.3",
] as const

export function App() {
  const [topic, setTopic] = useState("TypeScript with React")

  const summary = useMemo(
    () => createAiSummary({ topic, tone: "professional" }),
    [topic],
  )

  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">GitHub-ready learning workspace</p>
        <h1>TypeScript for React, API, and AI</h1>
        <p>
          A modern example project using strict TypeScript, typed React props,
          runtime validation, and structured AI workflow models.
        </p>
      </section>

      <section className="panel">
        <h2>Current stack</h2>
        <ul>
          {VERSION_STACK.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h2>Typed React component</h2>
        <UserCard
          name="Phumin"
          role="TypeScript learner"
          skills={["React", "API", "AI workflow"]}
        />
      </section>

      <section className="panel">
        <h2>AI workflow model</h2>
        <label htmlFor="topic">Topic</label>
        <input
          id="topic"
          value={topic}
          onChange={(event) => setTopic(event.currentTarget.value)}
        />
        <p>{summary.summary}</p>
      </section>
    </main>
  )
}
