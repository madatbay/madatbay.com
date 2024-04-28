import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CaseStudy } from "@/types/content"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Card className="row-span-3 grid grid-rows-subgrid">
      <CardHeader className="pb-0">
        <CardTitle className="leading-tight">{caseStudy.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <CardDescription>{caseStudy.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="font-mono text-xs">{caseStudy.date}</p>
        <Button variant="link" className="group pr-0" asChild>
          <Link href={`/case-studies/${caseStudy.slug}`} className="group">
            Read more
            <span className="sr-only">{caseStudy.title}</span>
            <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:rotate-45" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
