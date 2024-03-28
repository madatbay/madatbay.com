import { NavItem } from "@/types"

export const siteConfig = {
  title: "Madat Bayramov",
  description:
    "Explore the journey of an experienced software engineer, committed to delivering robust solutions and passionate about coding exploration. Discover insights and inspiration for your own projects.",
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
  {
    title: "Case studies",
    href: "/case-studies",
    disabled: true,
  },
  {
    title: "Links",
    href: "/links",
  },
]
