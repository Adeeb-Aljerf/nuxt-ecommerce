// composables/useFetchCategories.ts
import { API_BASE_URL, handleApiError } from './apiTypes'

/**
 * Fetch all product categories
 */
export function useFetchCategories() {
  const url = `${API_BASE_URL}/products/categories`
  const { data: categories, pending: loading, error } = useFetch<string[]>(
    url,
    {
      key: 'all-categories',
      onResponseError: handleApiError
    }
  )

  return { categories, loading, error }
}
