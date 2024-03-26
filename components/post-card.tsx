import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Post } from "@/types/post"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card className="row-span-3 grid grid-rows-subgrid">
      <CardHeader className="pb-0">
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <CardDescription>{post.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm">{post.date}</p>
        <Button variant="link" className="group pr-0" asChild>
          <Link href={`/blog/${post.slug}`} className="group">
            Read more
            <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:rotate-45" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
