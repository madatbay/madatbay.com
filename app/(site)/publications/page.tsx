import { HeroContent, HeroSection, HeroTitle } from "@/components/hero-section"
import PublicationCard from "@/components/publication-card"
import { getCollectionEntries } from "@/lib/queries"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Some of my academic publications showcasing my scholarly contributions and research endeavors.",
}

export default async function Page() {
  const publications = await getCollectionEntries("publications", 4)

  return (
    <div className="space-y-8">
      <HeroSection>
        <HeroTitle>Academic Publications</HeroTitle>
        <HeroContent>
          Some of my academic publications showcasing my scholarly contributions
          and research endeavors.
        </HeroContent>
      </HeroSection>
      <div className="grid grid-cols-1 grid-rows-[auto,auto,auto] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {publications.map((publication) => (
          <PublicationCard key={publication.slug} publication={publication} />
        ))}
      </div>
    </div>
  )
}
