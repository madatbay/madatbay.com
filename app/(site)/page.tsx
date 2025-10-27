import BlogSection from "@/components/blog-section"
import CaseStudiesSection from "@/components/case-studies-section"
import { HeroContent, HeroSection, HeroTitle } from "@/components/hero-section"
import PublicationsSection from "@/components/publications-section"
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
          As a software engineer based in Switzerland, I specialize in backend
          development with a keen interest in designing scalable architectures
          and ensuring system reliability. While backend development is my
          primary focus, I am also adept in frontend technologies, tooling, and
          infrastructure, all aimed at enhancing software quality. I am
          consistently driven to explore and master new technologies, striving
          to streamline and optimize the development process.
        </HeroContent>
      </HeroSection>
      <SkillsSection />
      <BlogSection />
      <CaseStudiesSection />
      <PublicationsSection />
    </div>
  )
}
