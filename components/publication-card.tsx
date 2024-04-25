import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Publication } from "@/types/content"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

export default function PublicationCard({
  publication,
}: {
  publication: Publication
}) {
  return (
    <Card className="row-span-3 grid grid-rows-subgrid">
      <CardHeader className="pb-0">
        <CardTitle>{publication.title}</CardTitle>
        <div>
          <Badge variant="secondary">{publication.type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-0">
        <CardDescription>{publication.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="font-mono text-xs">{publication.date}</p>
        <Button variant="link" className="group pr-0" asChild>
          <Link href={`/publications/${publication.slug}`} className="group">
            Read
            <span className="sr-only">{publication.title}</span>
            <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:rotate-45" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
