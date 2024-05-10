import { Icons } from "@/components/icons"
import { Markdown } from "@/components/markdown"
import { Button } from "@/components/ui/button"
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
  const caseStudy = await getContent("case-studies", params.slug)

  if (!caseStudy) {
    return
  }

  let { title, date: publishedTime, description } = caseStudy

  let ogImage = `${siteConfig.url}/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${siteConfig.url}/blog/${caseStudy.slug}`,
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
  const caseStudies = await getContents("case-studies")
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }))
}

export default async function Page({ params: { slug } }: Props) {
  const caseStudy = await getContent("case-studies", slug)
  if (!caseStudy) return notFound()

  return (
    <div className="prose mx-auto dark:prose-invert">
      <h1>{caseStudy.title}</h1>
      <MDXRemote
        source={caseStudy.body}
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
