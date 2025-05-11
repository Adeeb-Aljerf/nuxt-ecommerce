// composables/useSearchProducts.ts
import { ref, computed } from 'vue'
import type { CartProduct } from './apiTypes'
import { API_BASE_URL, transformProduct, handleApiError } from './apiTypes'

/**
 * Search for products by query string
 * @param initialQuery Optional initial search query
 */
export function useSearchProducts(initialQuery: string = '') {
  const searchQuery = ref(initialQuery)
  const products = ref<CartProduct[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const hasSearched = ref(false)

  // Fetch all products and filter by search query
  const searchProducts = async (query: string = searchQuery.value) => {
    if (!query.trim()) {
      products.value = []
      hasSearched.value = false
      return
    }

    searchQuery.value = query
    loading.value = true
    error.value = null
    hasSearched.value = true
    
    try {
      // Fetch all products from the API
      const url = `${API_BASE_URL}/products`
      const data = await $fetch(url)
      
      // Filter products by search query (case insensitive)
      const searchTerm = query.toLowerCase()
      const filteredProducts = Array.isArray(data) 
        ? data.filter(product => 
            product.title.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
          )
        : []
      
      // Transform products to CartProduct format
      products.value = filteredProducts.map(transformProduct)
      loading.value = false
    } catch (err) {
      console.error('Error searching products:', err)
      error.value = 'Failed to search products. Please try again later.'
      loading.value = false
    }
  }

  // Clear search results
  const clearSearch = () => {
    searchQuery.value = ''
    products.value = []
    hasSearched.value = false
  }

  return { 
    searchQuery, 
    products, 
    loading, 
    error, 
    hasSearched,
    searchProducts,
    clearSearch
  }
}
