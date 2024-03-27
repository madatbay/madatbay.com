import { Icons } from "@/components/icons"

export type SkillConfig = {
  category: string
  skills: string[]
}

export type LinkConfig = {
  title: string
  description?: string
  href: string
  icon?: React.JSX
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}
