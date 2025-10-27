import { config, fields, collection } from "@keystatic/core"

export default config({
  storage: { kind: "local" },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        excerpt: fields.text({ label: "Excerpt" }),
        date: fields.date({ label: "Date", defaultValue: { kind: "today" } }),
        updatedAt: fields.date({
          label: "Updated At",
          defaultValue: { kind: "today" },
        }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
    caseStudies: collection({
      label: "Case Studies",
      slugField: "title",
      path: "content/case-studies/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        excerpt: fields.text({ label: "Excerpt" }),
        date: fields.date({ label: "Date", defaultValue: { kind: "today" } }),
        updatedAt: fields.date({
          label: "Updated At",
          defaultValue: { kind: "today" },
        }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
    publications: collection({
      label: "Publications",
      slugField: "title",
      path: "content/publications/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        excerpt: fields.text({ label: "Excerpt" }),
        date: fields.date({ label: "Date", defaultValue: { kind: "today" } }),
        updatedAt: fields.date({
          label: "Updated At",
          defaultValue: { kind: "today" },
        }),
        type: fields.select({
          label: "Type",
          options: [
            { label: "Article", value: "Article" },
            { label: "Dissertation", value: "Dissertation" },
          ],
          defaultValue: "Article",
        }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
  },
})
