import { Markdown } from "@/components/markdown"
import { siteConfig } from "@/config/site"
import { getPost, getPosts } from "@/lib/posts"
import type { Metadata, ResolvingMetadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import rehypePrettyCode, { type Options } from "rehype-pretty-code"

type Props = {
  params: { slug: string }
}

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const slug = params.slug
//   const post = await getPost(slug)

//   if (!post) return notFound()

//   return {
//     title: post.title,
//   }
// }

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const post = await getPost(params.slug)

  if (!post) {
    return
  }

  let { title, date: publishedTime, description } = post

  let ogImage = `${siteConfig.url}/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Page({ params: { slug } }: Props) {
  const post = await getPost(slug)
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
