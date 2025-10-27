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
  const caseStudy = await keystatic.collections.caseStudies.read(params.slug)

  if (!caseStudy) {
    return
  }

  const { title, date: publishedTime, excerpt } = caseStudy

  const ogImage = `${siteConfig.url}/og?title=${title}`

  return {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      type: "article",
      publishedTime: publishedTime ?? undefined,
      url: `${siteConfig.url}/case-studies/${params.slug}`,
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
  const caseStudies = await keystatic.collections.caseStudies.list()
  return caseStudies.map((slug) => ({ slug }))
}

export default async function Page(props: Props) {
  const params = await props.params

  const { slug } = params

  const caseStudy = await keystatic.collections.caseStudies.read(slug)
  if (!caseStudy) return notFound()

  return (
    <div className="prose mx-auto dark:prose-invert">
      <h1>{caseStudy.title}</h1>
      <MDXRemote
        source={await caseStudy.content()}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
          },
        }}
        components={Markdown}
      />
      <div className="flex items-center justify-between">
        <p className="text-right text-sm text-muted-foreground">
          {caseStudy.date}
        </p>
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
