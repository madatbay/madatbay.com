import { HeroContent, HeroSection, HeroTitle } from "@/components/hero-section"
import LinkCard from "@/components/link-card"
import { linkConfig } from "@/config/links"

export default function LinksPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <HeroSection>
        <HeroTitle>Link bucket.</HeroTitle>
        <HeroContent>Collection of useful links worth visiting.</HeroContent>
      </HeroSection>
      <div className="space-y-4">
        {Object.entries(linkConfig).map(([category, links]) => (
          <div key={category}>
            <p className="mb-2 text-sm font-medium capitalize text-muted-foreground">
              {category}
            </p>
            <div className="grid gap-2">
              {links.map((link) => (
                <LinkCard key={link.title} link={link} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
