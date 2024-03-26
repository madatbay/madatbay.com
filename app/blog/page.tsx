import { getPosts } from "@/lib/posts"

export default async function Page() {
  const posts = await getPosts(4)

  return (
    <div>
      {posts.map((post) => (
        <article key={post.slug}>
          <a href={`/blog/${post.slug}`}>
            <p>{post.date}</p>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </a>
        </article>
      ))}
    </div>
  )
}
