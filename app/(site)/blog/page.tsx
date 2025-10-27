import { HeroContent, HeroSection, HeroTitle } from "@/components/hero-section"
import PostCard from "@/components/post-card"
import { getCollectionEntries } from "@/lib/queries"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Delving into my software engineering journey and technical insights in my blog posts.",
}

export default async function Page() {
  const posts = await getCollectionEntries("posts", 4)

  return (
    <div className="space-y-8">
      <HeroSection>
        <HeroTitle>Experience Spot.</HeroTitle>
        <HeroContent>
          Delving into my software engineering journey and technical insights in
          my blog posts.
        </HeroContent>
      </HeroSection>
      <div className="grid grid-cols-1 grid-rows-[auto,auto,auto] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
