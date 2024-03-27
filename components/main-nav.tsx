"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { mainNavConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

export function MainNav() {
  const pathname = usePathname()

  return mainNavConfig.length ? (
    <nav className="flex gap-2">
      {mainNavConfig?.map((item, index) => (
        <Button
          key={index}
          variant="link"
          className={cn(
            " transition-colors",
            pathname.startsWith(item.href) &&
              "text-primary underline underline-offset-4",
            item.disabled && "cursor-not-allowed opacity-80"
          )}
          asChild
        >
          <Link href={item.disabled ? "#" : item.href}>{item.title}</Link>
        </Button>
      ))}
    </nav>
  ) : null
}
