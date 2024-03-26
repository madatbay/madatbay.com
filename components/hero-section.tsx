import { cn } from "@/lib/utils"
import * as React from "react"

const HeroSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
HeroSection.displayName = "HeroSection"

const HeroTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn("text-3xl font-bold leading-none tracking-tight", className)}
    {...props}
  />
))
HeroTitle.displayName = "HeroTitle"

const HeroContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mt-2 max-w-2xl leading-relaxed text-muted-foreground",
      className
    )}
    {...props}
  />
))
HeroContent.displayName = "HeroContent"

export { HeroContent, HeroSection, HeroTitle }
