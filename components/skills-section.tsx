import { skillsConfig } from "@/config/skills"
import { Badge } from "./ui/badge"

export default function SkillsSection() {
  return (
    <div className="space-y-2">
      <p className="font-mono text-sm tracking-wider text-muted-foreground">
        My development stack
      </p>
      <div className="grid grid-cols-2  border border-dashed sm:grid-cols-3 lg:grid-cols-5">
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
    </div>
  )
}
