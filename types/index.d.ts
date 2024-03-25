import { LucideIcon } from "lucide-react"

export type SiteConfig = {
  title: string
  description: string
  keywords: string[]
  url: string
  ogImage: string
  links: {
    link: string
    icon: LucideIcon
  }[]
}
