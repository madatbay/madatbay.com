import { siteConfig } from "@/config/site"
import { getPosts } from "@/lib/posts"

export default async function sitemap() {
  let blogs = (await getPosts()).map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date,
  }))

  let routes = ["", "/blog"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
