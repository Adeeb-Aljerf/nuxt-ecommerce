<template>
  <div class="container py-5">
    <!-- Header and Search Info -->
    <div class="row mb-4">
      <div class="col-md-8">
        <h1 class="mb-2">Search Results</h1>
        <p v-if="hasSearched" class="text-muted">
          {{ products.length }} results for "{{ searchQuery }}"
        </p>
      </div>
      <div class="col-md-4">
        <div class="input-group">
          <input 
            type="text" 
            class="form-control" 
            placeholder="Search products..." 
            v-model="searchInput"
            @keyup.enter="performSearch"
          >
          <button class="btn btn-primary" type="button" @click="performSearch">
            Search
          </button>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3 text-muted">Searching products...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="alert alert-danger">
      <Icon name="mdi:alert-circle" class="me-2" />
      {{ error }}
    </div>

    <!-- Empty Search State -->
    <div v-else-if="!hasSearched" class="text-center my-5">
      <div class="mb-4">
        <img src="~/assets/icons/Search Mouve.png" alt="Search" style="width: 64px; opacity: 0.5;">
      </div>
      <h3 class="mb-3">Search for Products</h3>
      <p class="text-muted">Enter a search term to find products by name, description, or category.</p>
    </div>

    <!-- No Results State -->
    <div v-else-if="hasSearched && !products.length" class="alert alert-info">
      <Icon name="mdi:information" class="me-2" />
      No products found matching "{{ searchQuery }}". Try a different search term.
    </div>

    <!-- Product Grid -->
    <div
      v-else
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4"
    >
      <div v-for="product in products" :key="product.id" class="col">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '#imports'

import ProductCard from '~/components/product/ProductCard.vue'
import { useSearchProducts } from '~/composables/useSearchProducts'

const route = useRoute()
const router = useRouter()
const searchInput = ref('')

// Get query from URL
const initialQuery = route.query.q as string || ''
searchInput.value = initialQuery

// Use the search composable
const { 
  searchQuery, 
  products, 
  loading, 
  error, 
  hasSearched,
  searchProducts 
} = useSearchProducts(initialQuery)

// Perform search when component mounts if there's an initial query
onMounted(() => {
  if (initialQuery) {
    searchProducts(initialQuery)
  }
})

// Perform search and update URL
const performSearch = () => {
  const query = searchInput.value.trim()
  if (query) {
    // Update URL with search query
    router.push({ path: '/search', query: { q: query } })
    // Perform search
    searchProducts(query)
  }
}

// Set page title
useHead({
  title: searchQuery.value 
    ? `Search: ${searchQuery.value}` 
    : 'Search Products'
})
</script>
