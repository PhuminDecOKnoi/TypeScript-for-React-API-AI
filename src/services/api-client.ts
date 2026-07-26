import { z } from "zod"

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.email(),
})

export type ApiUser = z.infer<typeof userSchema>

export async function fetchUser(userId: number): Promise<ApiUser> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  )

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`)
  }

  return userSchema.parse(await response.json())
}
