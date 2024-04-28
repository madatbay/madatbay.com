import CaseStudyCard from "@/components/case-study-card"
import { HeroContent, HeroSection, HeroTitle } from "@/components/hero-section"
import { getContents } from "@/lib/content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case studies",
  description: "Engineering case studies from my experience worth mentioning.",
}

export default async function Page() {
  const caseStudies = await getContents("case-studies")

  return (
    <div className="space-y-8">
      <HeroSection>
        <HeroTitle>Case studies.</HeroTitle>
        <HeroContent>
          Engineering case studies from my experience worth mentioning.
        </HeroContent>
      </HeroSection>
      <div className="grid grid-cols-1 grid-rows-[auto,auto,auto] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </div>
  )
}
