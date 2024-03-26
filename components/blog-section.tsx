import { getPosts } from "@/lib/posts"
import PostCard from "./post-card"

export default async function BlogSection() {
  const posts = await getPosts(4)
  return (
    <div>
      <h3 className="mb-4 text-2xl font-medium">Experience Spot</h3>
      <div className="grid grid-cols-1 grid-rows-[auto,auto,auto] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
