import { siteConfig } from "@/config/site"
import { getPosts } from "@/lib/posts"

const formatPostDate = (dateStr: string) => {
  let date = new Date(dateStr)
  const offset = date.getTimezoneOffset()
  date = new Date(date.getTime() - offset * 60 * 1000)
  return date.toISOString().split("T")[0]
}

export default async function sitemap() {
  let blogs = (await getPosts()).map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: formatPostDate(post.date),
  }))

  let routes = ["", "/blog", "/links"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
