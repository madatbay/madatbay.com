import type { SimpleIcon } from "simple-icons"

export type SiteConfig = {
  title: string
  description: string
  keywords: string[]
  url: string
  ogImage: string
}

export type LinkConfig = Record<string, { link: string; icon: SimpleIcon }>
