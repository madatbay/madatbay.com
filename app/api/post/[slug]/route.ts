import { getPost } from "@/lib/posts"

export async function GET(
  request: Request,
  { params: { slug } }: { params: { slug: string } }
) {
  const post = await getPost(slug)

  if (!post) {
    return new Response("Not found", {
      status: 404,
    })
  }

  return Response.json({ title: post.title })
}
