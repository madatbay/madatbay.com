import { HeroContent, HeroSection, HeroTitle } from "@/components/hero-section"
import { getPosts } from "@/lib/posts"

export default async function Page() {
  const posts = await getPosts(4)

  return (
    <div>
      <HeroSection>
        <HeroTitle>Software Engineer.</HeroTitle>
        <HeroContent>
          As a seasoned software engineer with five years of diverse experience,
          I am currently dedicated to delivering robust solutions at a reputable
          Swiss company. Additionally, I hold the position of CTO at a startup,
          leveraging my expertise to drive dynamic ventures. Over the years,
          I&apos;ve been CTO at multiple startups, broadening my entrepreneurial
          insight. Beyond professional pursuits, I derive immense satisfaction
          from delving into coding exploration and pursuing side projects during
          my leisure hours.
        </HeroContent>
      </HeroSection>
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
