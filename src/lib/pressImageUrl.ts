import { createImageUrlBuilder } from '@sanity/image-url'

const projectId = "xzqbnr6a"
const dataset = "production"

const builder = createImageUrlBuilder({ projectId, dataset })

export function pressUrlFor(source: any) {
  return builder.image(source)
}