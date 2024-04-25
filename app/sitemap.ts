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

  let publications = (await getContents("publications")).map((publication) => ({
    url: `${siteConfig.url}/publications/${publication.slug}`,
    lastModified: formatPostDate(publication.updatedAt),
  }))

  let routes = ["", "/blog", "/publications", "/links"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs, ...publications]
}
