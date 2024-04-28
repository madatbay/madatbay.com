import { siteConfig } from "@/config/site"
import { getContents } from "@/lib/content"

const formatPostDate = (dateStr: string) => {
  let date = new Date(dateStr)
  const offset = date.getTimezoneOffset()
  date = new Date(date.getTime() - offset * 60 * 1000)
  return date.toISOString().split("T")[0]
}

export default async function sitemap() {
  let blogs = (await getContents("posts")).map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: formatPostDate(post.updatedAt),
  }))

  let caseStudies = (await getContents("case-studies")).map((caseStudy) => ({
    url: `${siteConfig.url}/case-studies/${caseStudy.slug}`,
    lastModified: formatPostDate(caseStudy.updatedAt),
  }))

  let publications = (await getContents("publications")).map((publication) => ({
    url: `${siteConfig.url}/publications/${publication.slug}`,
    lastModified: formatPostDate(publication.updatedAt),
  }))

  let routes = ["", "/blog", "/case-studies", "/publications", "/links"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  )

  return [...routes, ...blogs, ...caseStudies, ...publications]
}
