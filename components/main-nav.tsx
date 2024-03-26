"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { mainNavConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return mainNavConfig.length ? (
    <nav className="flex gap-6">
      {mainNavConfig?.map((item, index) => (
        <Link
          key={index}
          href={item.disabled ? "#" : item.href}
          className={cn(
            "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
            pathname.startsWith(item.href)
              ? "text-primary underline underline-offset-4"
              : "text-foreground/80",
            item.disabled && "cursor-not-allowed opacity-80"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  ) : null
}
