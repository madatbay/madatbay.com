import { SiteConfig } from "@/types"
import { Github, Twitter } from "lucide-react"

export const siteConfig: SiteConfig = {
  title: "Madat Bayramov",
  description: "Sharing my experience as a software engineer.",
  keywords: ["python"],
  url: "https://madatbay.com",
  ogImage: "https://madatbay.com/og.jpg",
  links: [
    {
      link: "https://github.com/shadcn/taxonomy",
      icon: Github,
    },
    {
      link: "https://twitter.com/madatbay",
      icon: Twitter,
    },
  ],
}
