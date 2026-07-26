import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { UserCard } from "./user-card"

describe("UserCard", () => {
  it("renders typed user information", () => {
    render(
      <UserCard
        name="Phumin"
        role="TypeScript learner"
        skills={["React", "API"]}
      />,
    )

    expect(screen.getByRole("heading", { name: "Phumin" })).toBeInTheDocument()
    expect(screen.getByText("TypeScript learner")).toBeInTheDocument()
    expect(screen.getByText("React")).toBeInTheDocument()
  })
})
