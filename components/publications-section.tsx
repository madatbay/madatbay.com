import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import PublicationCard from "./publication-card"
import { Button } from "./ui/button"
import { getCollectionEntries } from "@/lib/queries"

export default async function PublicationsSection() {
  const publications = await getCollectionEntries("publications", 3)
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-2xl font-medium">Recent Publications</h2>
        <Button variant="link" className="group" asChild>
          <Link href="/publications">
            View all
            <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:rotate-45" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 grid-rows-[auto,auto,auto] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {publications.map((publication) => (
          <PublicationCard key={publication.slug} publication={publication} />
        ))}
      </div>
    </div>
  )
}
