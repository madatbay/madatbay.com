import { Icons } from "@/components/icons"
import { LinkConfig } from "@/types"
import { BookText } from "lucide-react"

export const linkConfig: Record<string, LinkConfig[]> = {
  personal: [
    {
      title: "GitHub",
      href: "https://github.com/madatbay",
      icon: Icons.gitHub,
    },
    {
      title: "X/Twitter",
      href: "https://twitter.com/madatbay",
      icon: Icons.x,
    },
  ],
}
