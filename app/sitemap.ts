import { siteConfig } from "@/config/site"
import { getCollectionEntries } from "@/lib/queries"

const formatPostDate = (dateStr: string) => {
  let date = new Date(dateStr)
  const offset = date.getTimezoneOffset()
  date = new Date(date.getTime() - offset * 60 * 1000)
  return date.toISOString().split("T")[0]
}

export default async function sitemap() {
  const blogs = (await getCollectionEntries("posts")).map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: formatPostDate(post.updatedAt ?? new Date().toISOString()),
  }))

  const caseStudies = (await getCollectionEntries("caseStudies")).map(
    (caseStudy) => ({
      url: `${siteConfig.url}/case-studies/${caseStudy.slug}`,
      lastModified: formatPostDate(
        caseStudy.updatedAt ?? new Date().toISOString()
      ),
    })
  )

  const publications = (await getCollectionEntries("publications")).map(
    (publication) => ({
      url: `${siteConfig.url}/publications/${publication.slug}`,
      lastModified: formatPostDate(
        publication.updatedAt ?? new Date().toISOString()
      ),
    })
  )

  const routes = ["", "/blog", "/case-studies", "/publications", "/links"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  )

  return [...routes, ...blogs, ...caseStudies, ...publications]
}
