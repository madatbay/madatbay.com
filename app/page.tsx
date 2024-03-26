import BlogSection from "@/components/blog-section"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <SkillsSection />
      <BlogSection />
    </div>
  )
}
