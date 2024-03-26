import { skillsConfig } from "@/config/skills"
import { Badge } from "./ui/badge"

export default function SkillsSection() {
  return (
    <div>
      <div className="grid grid-cols-2  border border-dashed sm:grid-cols-4 lg:grid-cols-6">
        {skillsConfig.map((skill) => (
          <div
            key={skill.category}
            className="group border border-dashed transition-colors hover:bg-primary"
          >
            <p className="border-b border-dashed p-2 text-sm font-medium group-hover:text-primary-foreground">
              {skill.category}
            </p>
            <div className="flex flex-wrap gap-2 px-2 py-4">
              {skill.skills.map((skill) => (
                <Badge
                  variant="outline"
                  className="group-hover:border-primary-foreground group-hover:text-primary-foreground"
                  key={skill}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mb-2 mt-2 text-center font-mono text-sm tracking-wider text-muted-foreground">
        My development stack
      </p>
    </div>
  )
}
