import { LinkConfig } from "@/types"
import { ArrowUpRight, Globe } from "lucide-react"

export default function LinkCard({
  link: { title, description, href, icon: Icon },
}: {
  link: LinkConfig
}) {
  return (
    <div className="group relative grid grid-cols-[auto,1fr,auto] items-center gap-4 rounded-md bg-card p-4">
      {Icon ? <Icon className="size-4" /> : <Globe className="size-4" />}
      <div>
        <a href={href} target="_blank" className="after:absolute after:inset-0">
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </a>
      </div>
      <ArrowUpRight className="size-5 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
    </div>
  )
}
