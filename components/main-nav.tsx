"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { mainNavConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { DrawerClose } from "./ui/drawer"

export function MainNav() {
  const pathname = usePathname()

  return mainNavConfig.length ? (
    <nav className="flex gap-1">
      {mainNavConfig?.map((item, index) => (
        <Button
          key={index}
          variant="link"
          disabled={item.disabled}
          aria-disabled={item.disabled}
          className={cn(
            pathname.startsWith(item.href) &&
              "text-primary underline underline-offset-4"
          )}
          asChild
        >
          <Link
            href={item.disabled ? "#" : item.href}
            aria-disabled={item.disabled}
          >
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  ) : null
}

export function MainMobileNav() {
  const pathname = usePathname()

  return mainNavConfig.length ? (
    <nav className="grid gap-4 px-4">
      <DrawerClose asChild>
        <Button
          variant={pathname === "/" ? "default" : "ghost"}
          className="py-6"
          asChild
        >
          <Link href="/">Home</Link>
        </Button>
      </DrawerClose>
      {mainNavConfig?.map((item, index) => (
        <DrawerClose key={index} asChild>
          <Button
            variant={pathname.startsWith(item.href) ? "default" : "ghost"}
            disabled={item.disabled}
            aria-disabled={item.disabled}
            className="py-6"
            asChild
          >
            <Link
              href={item.disabled ? "#" : item.href}
              aria-disabled={item.disabled}
            >
              {item.title}
            </Link>
          </Button>
        </DrawerClose>
      ))}
    </nav>
  ) : null
}
