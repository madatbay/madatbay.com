import { NavItem } from "@/types"

// TODO: update siteconfig before publish
export const siteConfig = {
  title: "Madat Bayramov",
  description: "Sharing my experience as a software engineer.",
  keywords: ["python"],
  url: "https://madatbay.vercel.app",
  links: {
    github: "https://github.com/madatbay",
    x: "https://twitter.com/madatbay",
  },
}

export const mainNavConfig: NavItem[] = [
  {
    title: "Blog",
    href: "/blog",
  },
]
