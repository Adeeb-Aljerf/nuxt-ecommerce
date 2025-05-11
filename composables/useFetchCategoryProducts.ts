import { ref, onBeforeUnmount } from 'vue'
import type { CartProduct } from './apiTypes'
import { API_BASE_URL, transformProduct} from './apiTypes'

export function useFetchCategoryProducts(category: string) {
  const products = ref<CartProduct[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)
  const isComponentMounted = ref(true)
  
  onBeforeUnmount(() => {
    isComponentMounted.value = false
  })

  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    
    try {
      const url = `${API_BASE_URL}/products/category/${encodeURIComponent(category)}`
      const data = await $fetch(url)
      
      if (isComponentMounted.value) {
        products.value = Array.isArray(data) ? data.map(transformProduct) : []
        loading.value = false
      }
    } catch (err) {
      if (isComponentMounted.value) {
        console.error('Error fetching products:', err)
        error.value = 'Failed to load products. Please try again later.'
        loading.value = false
      }
    }
  }

  fetchProducts()

  return { products, loading, error }
}