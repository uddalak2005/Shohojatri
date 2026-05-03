import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-03-22',
})

const builder = createImageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Helper to fetch singletons
export async function getSingleton(type) {
  const query = `*[_type == "${type}"][0]`
  return await client.fetch(query)
}
