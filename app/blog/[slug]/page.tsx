import { Markdown } from "@/components/markdown"
import { getPost, getPosts } from "@/lib/posts"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import rehypePrettyCode, { type Options } from "rehype-pretty-code"

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) return notFound()

  return (
    <div className="prose mx-auto dark:prose-invert">
      <h1>{post.title}</h1>
      <MDXRemote
        source={post.body}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [
              // @ts-ignore
              [rehypePrettyCode, { theme: "github-dark" } as Options],
            ],
          },
        }}
        components={Markdown}
      />
    </div>
  )
}
