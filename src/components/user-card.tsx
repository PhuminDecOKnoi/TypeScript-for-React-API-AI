export interface UserCardProps {
  name: string
  role: string
  skills: readonly string[]
}

export function UserCard({ name, role, skills }: UserCardProps) {
  return (
    <article className="user-card">
      <h3>{name}</h3>
      <p>{role}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  )
}
