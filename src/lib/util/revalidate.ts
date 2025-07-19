import { revalidateTag } from "next/cache"

// Utility function to revalidate data
export async function revalidateData(tag: string) {
  try {
    revalidateTag(tag)
    console.log(`Revalidated tag: ${tag}`)
  } catch (error) {
    console.error(`Failed to revalidate tag: ${tag}`, error)
  }
}

// Revalidate all common data tags
export async function revalidateAllData() {
  const tags = ['regions', 'categories', 'products', 'carts']
  
  for (const tag of tags) {
    await revalidateData(tag)
  }
}

// Revalidate specific data types
export async function revalidateProducts() {
  await revalidateData('products')
}

export async function revalidateCategories() {
  await revalidateData('categories')
}

export async function revalidateRegions() {
  await revalidateData('regions')
} 