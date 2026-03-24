import { createImageUrlBuilder } from '@sanity/image-url'

const projectId = "cs958kru"
const dataset = "production"

const builder = createImageUrlBuilder({ projectId, dataset })

export function urlFor(source: any) {
  return builder.image(source)
}