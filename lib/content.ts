import { BaseContent, Post } from "@/types/content"
import fs from "fs/promises"
import matter from "gray-matter"
import path from "path"

type ContentType = "posts" | "case-studies" | "publications"

export async function getContents(type: ContentType, limit: number = Infinity) {
  const posts = await fs.readdir(`./content/${type}/`)

  let sortedPosts = await Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./content/${type}/${file}`
        const fileContent = await fs.readFile(filePath, "utf8")
        const { data, content } = matter(fileContent)

        return { ...data, body: content } as BaseContent
      })
  )
  sortedPosts = sortedPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  if (limit !== Infinity) {
    return sortedPosts.slice(0, limit)
  }

  return sortedPosts
}

export async function getContent(type: ContentType, slug: string) {
  const posts = await getContents(type)
  return posts.find((post) => post.slug === slug)
}
