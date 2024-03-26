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
        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center gap-1 underline underline-offset-4 transition-colors hover:text-primary"
        >
          Read more <ArrowUpRight className="size-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
