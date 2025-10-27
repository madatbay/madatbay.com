import { InferCollectionEntries, InferCollectionEntry } from "@/types/content"
import keystatic from "./keystatic"

type CollectionName = keyof typeof keystatic.collections

async function getCollectionEntries<T extends CollectionName>(
  collectionName: T,
  limit?: number
) {
  const items = await keystatic.collections[collectionName].all()

  return items
    .map((item) => ({
      ...item.entry,
      slug: item.slug,
    }))
    .sort((a, b) => {
      const aDate = a.date
      const bDate = b.date
      if (!aDate) return 1
      if (!bDate) return -1
      return new Date(bDate).getTime() - new Date(aDate).getTime()
    })
    .slice(0, limit) as Array<InferCollectionEntries<T> & { slug: string }>
}

async function getCollectionEntry<T extends CollectionName>(
  collectionName: T,
  slug: string
) {
  const entry = await keystatic.collections[collectionName].read(slug)
  return {
    ...entry,
    slug,
  } as InferCollectionEntry<T> & { slug: string }
}

export { getCollectionEntries, getCollectionEntry }
