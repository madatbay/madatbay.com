import { Markdown } from "@/components/markdown"
import { siteConfig } from "@/config/site"
import { getContent, getContents } from "@/lib/content"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import Script from "next/script"
import rehypePrettyCode, { type Options } from "rehype-pretty-code"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const publication = await getContent("publications", params.slug)

  if (!publication) {
    return
  }

  let { title, date: publishedTime, description } = publication

  let ogImage = `${siteConfig.url}/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${siteConfig.url}/blog/${publication.slug}`,
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
  const publications = await getContents("publications")
  return publications.map((publication) => ({ slug: publication.slug }))
}

export default async function Page({ params: { slug } }: Props) {
  const publication = await getContent("publications", slug)
  if (!publication) return notFound()

  return (
    <div className="prose mx-auto dark:prose-invert">
      <h1 className="text-center">{publication.title}</h1>
      <MDXRemote
        source={publication.body}
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

      <div className="float-end">
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
