<template>
  <div class="container py-5">
    <!-- Header and Sorting -->
    <div class="row mb-4">
      <div class="col-md-8">
        <h1 class="mb-2 text-capitalize">{{ categoryName }}</h1>
        <p class="text-muted">Showing {{ products?.length || 0 }} products</p>
      </div>
      <div class="col-md-4">
        <div class="input-group">
          <span class="input-group-text">Sort by</span>
          <select class="form-select" v-model="sortOption">
            <option value="default">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3 text-muted">Loading products...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="alert alert-danger">
      <Icon name="mdi:alert-circle" class="me-2" />
      {{ error }}
    </div>

    <!-- Empty State -->
    <div v-else-if="!sortedProducts.length" class="alert alert-info">
      <Icon name="mdi:information" class="me-2" />
      No products found in this category.
    </div>

    <!-- Product Grid -->
    <div
      v-else
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4"
    >
      <div v-for="product in sortedProducts" :key="product.id" class="col">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '#imports'

import ProductCard from '~/components/product/ProductCard.vue'
import { useFetchCategoryProducts } from '~/composables/useFetchCategoryProducts'

const route = useRoute()
const categoryName = decodeURIComponent((route.params.id as string) || '')
const sortOption = ref<'default' | 'price-asc' | 'price-desc' | 'name-asc'>('default')
const isComponentMounted = ref(true)

// Add cleanup for any potential timers or observers
onBeforeUnmount(() => {
  isComponentMounted.value = false
})

// Ensure we have default values in case the composable returns null
const { products = ref([]), loading = ref(false), error = ref(null) } = useFetchCategoryProducts(categoryName)

const sortedProducts = computed(() => {
  if (!isComponentMounted.value) return []
  const list = Array.isArray(products.value) ? [...products.value] : []
  switch (sortOption.value) {
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price)
    case 'name-asc':
      return list.sort((a, b) => a.name.localeCompare(b.name))
    default:
      return list
  }
})

useHead({
  title: categoryName.charAt(0).toUpperCase() + categoryName.slice(1) + ' Products'
})
</script>