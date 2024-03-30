import BlogSection from "@/components/blog-section"
import { HeroContent, HeroSection, HeroTitle } from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Madat Bayramov | Software Engineer",
}

export default function Home() {
  return (
    <div className="space-y-16">
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
      <SkillsSection />
      <BlogSection />
    </div>
  )
}
