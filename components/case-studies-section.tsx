import { getContents } from "@/lib/content"
import { CaseStudy } from "@/types/content"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import CaseStudyCard from "./case-study-card"
import { Button } from "./ui/button"

export default async function CaseStudiesSection() {
  const caseStudies = (await getContents("case-studies", 4)) as CaseStudy[]
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-2xl font-medium">Recent Case Studies</h2>
        <Button variant="link" className="group" asChild>
          <Link href="/case-studies">
            View all
            <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:rotate-45" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 grid-rows-[auto,auto,auto] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </div>
  )
}
