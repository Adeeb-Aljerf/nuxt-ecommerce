// composables/useFetchCategories.ts
import { computed } from 'vue'
import { API_BASE_URL, handleApiError } from './apiTypes'

/**
 * Format a category name for display (capitalize words)
 */
export function formatCategoryName(category: string): string {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Format a category name for URL (lowercase, replace spaces with hyphens)
 */
export function formatCategorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, '-')
}

/**
 * Fetch all product categories
 */
export function useFetchCategories() {
  const url = `${API_BASE_URL}/products/categories`
  const { data: rawCategories, pending: loading, error } = useFetch<string[]>(
    url,
    {
      key: 'all-categories',
      onResponseError: handleApiError
    }
  )

  // Transform raw categories into a more usable format with display names and slugs
  const categories = computed(() => {
    if (!rawCategories.value) return []

    return rawCategories.value.map(category => ({
      id: category,
      name: formatCategoryName(category),
      slug: formatCategorySlug(category),
      url: `/category/${category}`
    }))
  })

  return { categories, rawCategories, loading, error }
}
