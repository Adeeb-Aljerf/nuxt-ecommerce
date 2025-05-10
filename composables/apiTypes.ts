// apiTypes.ts
import { FetchError } from 'ofetch'

export const API_BASE_URL = 'https://fakestoreapi.com'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface CartProduct {
  id: number
  name: string
  price: number
  description: string
  image: string
  categoryId: string
  categoryName: string
  rating?: {
    rate: number
    count: number
  }
}

export const transformProduct = (product: Product): CartProduct => ({
  id: product.id,
  name: product.title,
  price: product.price,
  description: product.description,
  image: product.image,
  categoryId: product.category,
  categoryName: product.category,
  rating: product.rating
})

export const handleApiError = (error: FetchError) => {
  console.error('API Error:', error)
  return {
    message: error.message || 'An error occurred while fetching data.'
  }
}
