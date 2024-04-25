import { NavItem } from "@/types"

export const siteConfig = {
  title: "Madat Bayramov",
  description:
    "Software engineer writing about experience, case studies, solutions and experiments.",
  keywords: [
    "python",
    "django",
    "next.js",
    "graphql",
    "tailwindcss",
    "software development",
    "deployments",
    "case studies",
    "technical blog",
  ],
  url: "https://madatbay.com",
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
  {
    title: "Publications",
    href: "/publications",
  },
  {
    title: "Links",
    href: "/links",
  },
]
