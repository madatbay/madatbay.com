import { Markdown } from "@/components/markdown"
import { siteConfig } from "@/config/site"
import keystatic from "@/lib/keystatic"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import Script from "next/script"
import rehypePrettyCode from "rehype-pretty-code"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata(
  props: Props
): Promise<Metadata | undefined> {
  const params = await props.params
  const publication = await keystatic.collections.publications.read(params.slug)

  if (!publication) {
    return
  }

  const { title, date: publishedTime, excerpt } = publication

  const ogImage = `${siteConfig.url}/og?title=${title}`

  return {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      type: "article",
      publishedTime: publishedTime ?? undefined,
      url: `${siteConfig.url}/publications/${params.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: excerpt,
      images: [ogImage],
    },
  }
}

export async function generateStaticParams() {
  const publications = await keystatic.collections.publications.list()
  return publications.map((slug) => ({ slug }))
}

export default async function Page(props: Props) {
  const params = await props.params

  const { slug } = params

  const publication = await keystatic.collections.publications.read(slug)
  if (!publication) return notFound()

  return (
    <div className="prose mx-auto dark:prose-invert">
      <h1 className="text-center">{publication.title}</h1>
      <MDXRemote
        source={await publication.content()}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
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
