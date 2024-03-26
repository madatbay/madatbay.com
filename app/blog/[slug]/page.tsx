import { Post } from "@/components/posts/post"
import { getPost, getPosts } from "@/lib/posts"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) return notFound()

  return (
    <div>
      <h1>{post.title}</h1>
      <Post>{post.body}</Post>
    </div>
  )
}
