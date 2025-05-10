// composables/useFetchProduct.ts
import { computed } from 'vue'
import type { CartProduct } from './apiTypes'
import { API_BASE_URL, transformProduct, handleApiError } from './apiTypes'

/**
 * Fetch a single product by ID
 * @param id Product ID
 */
export function useFetchProduct(id: string | number) {
  const url = `${API_BASE_URL}/products/${id}`
  const { data: raw, pending: loading, error } = useFetch(
    url,
    {
      key: `product-${id}`,
      onResponseError: handleApiError
    }
  )

  // Transform raw product into CartProduct
  const product = computed<CartProduct | null>(() => {
    if (!raw.value) return null
    return transformProduct(raw.value)
  })

  return { product, rawProduct: raw, loading, error }
}
