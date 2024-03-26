import { Post } from "@/types/post"
import fs from "fs/promises"
import matter from "gray-matter"
import path from "path"

export async function getPosts(limit: number = Infinity) {
  const posts = await fs.readdir("./content/posts/")

  let sortedPosts = await Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./content/posts/${file}`
        const fileContent = await fs.readFile(filePath, "utf8")
        const { data, content } = matter(fileContent)

        return { ...data, body: content } as Post
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

export async function getPost(slug: string) {
  const posts = await getPosts()
  return posts.find((post) => post.slug === slug)
}
