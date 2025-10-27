import keystatic from "@/lib/keystatic"

export type CollectionReader = typeof keystatic.collections

export type InferCollectionEntries<T extends keyof CollectionReader> = Awaited<
  ReturnType<CollectionReader[T]["all"]>
>[number]["entry"]

export type InferCollectionEntry<T extends keyof CollectionReader> = Awaited<
  ReturnType<CollectionReader[T]["read"]>
>
export type Post = InferCollectionEntries<"posts"> & {
  slug: string
}

export type CaseStudy = InferCollectionEntries<"caseStudies"> & {
  slug: string
}

export type Publication = InferCollectionEntries<"publications"> & {
  slug: string
}
