import { getPosts } from "@/lib/posts"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import PostCard from "./post-card"
import { Button } from "./ui/button"

export default async function BlogSection() {
  const posts = await getPosts(4)
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-2xl font-medium">Latest blog posts</h2>
        <Button variant="link" className="group" asChild>
          <Link href="/blog">
            View all
            <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:rotate-45" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 grid-rows-[auto,auto,auto] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
