import { siteConfig } from "@/config/site"
import Script from "next/script"
import { Icons } from "./icons"
import { Button } from "./ui/button"

export default function Footer() {
  return (
    <footer className="border-t border-dashed">
      <div className="mx-auto flex max-w-6xl items-center justify-end border-x border-dashed p-4 text-right">
        <Button variant="ghost" size="icon" asChild>
          <a href={siteConfig.links.github} target="_blank">
            <Icons.gitHub className="size-4" />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href={siteConfig.links.x} target="_blank">
            <Icons.x className="size-4" />
            <span className="sr-only">X</span>
          </a>
        </Button>
      </div>
      <Script
        type="text/javascript"
        src="https://cdn.seojuice.io/suggestions.v1.js"
        defer
      ></Script>
    </footer>
  )
}
