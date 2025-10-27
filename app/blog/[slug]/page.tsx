import { Markdown } from "@/components/markdown"
import { siteConfig } from "@/config/site"
import { getContent, getContents } from "@/lib/content"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import Script from "next/script"
import rehypePrettyCode, { type Options } from "rehype-pretty-code"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata(
  props: Props
): Promise<Metadata | undefined> {
  const params = await props.params
  const post = await getContent("posts", params.slug)

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
      images: [{ url: ogImage }],
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
  const posts = await getContents("posts")
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Page(props: Props) {
  const params = await props.params

  const { slug } = params

  const post = await getContent("posts", slug)
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

      <div className="flex items-center justify-between">
        <p className="text-right text-sm text-muted-foreground">{post.date}</p>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-size="large"
          data-via="madatbay"
          data-dnt="true"
          data-show-count="false"
        ></a>
      </div>
      <Script async src="https://platform.twitter.com/widgets.js"></Script>
    </div>
  )
}
