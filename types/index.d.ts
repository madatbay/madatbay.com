import { Icons } from "@/components/icons"
import { LucideIcon } from "lucide-react"

export type SkillConfig = {
  category: string
  skills: string[]
}

export type LinkConfig = { link: string; icon: React.JSX }[]

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}
