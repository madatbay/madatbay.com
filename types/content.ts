export interface BaseContent {
  title: string
  slug: string
  description: string
  date: string
  updatedAt: string
  body: string
}

export interface Post extends BaseContent {}

export interface CaseStudy extends BaseContent {}

export interface Publication extends BaseContent {
  type: "Article"
}
