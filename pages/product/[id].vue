<template>
  <div class="container py-5">
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3 text-muted">Loading product details...</p>
    </div>

    <div v-else-if="error" class="alert alert-danger">
      <i class="bi bi-exclamation-triangle-fill me-2" />
      {{ error }}
    </div>

    <div v-else-if="!productData" class="alert alert-warning">
      <i class="bi bi-question-circle-fill me-2" />
      Product not found.
    </div>

    <div v-else>
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
          <li v-if="productData.categoryName" class="breadcrumb-item">
            <NuxtLink :to="`/category/${productData.categoryId}`" class="text-capitalize">
              {{ productData.categoryName }}
            </NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ productData.name }}</li>
        </ol>
      </nav>

      <ProductDetails v-if="productData" :product="productData" />

      <div v-if="relatedProducts.length > 0" class="mt-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="mb-0">Related Products</h3>
          <NuxtLink :to="`/category/${productData.categoryId}`" class="btn btn-outline-primary">
            <i class="bi bi-grid me-1" /> View All
          </NuxtLink>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="col">
            <ProductCard :product="relatedProduct" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ProductDetails from '~/components/product/ProductDetails.vue'
import ProductCard from '~/components/product/ProductCard.vue'
import { useFetchProduct } from '~/composables/useFetchProduct'
import { useFetchCategoryProducts } from '~/composables/useFetchCategoryProducts'

const route = useRoute()
const productId = route.params.id

// Fetch the product details
const { product: productData, error, loading } = await useFetchProduct(productId)

// Fetch related products (products in the same category)
const { products: relatedProductsData } = productData.value?.categoryId
  ? await useFetchCategoryProducts(productData.value.categoryId)
  : { products: ref([]) }

// Filter out the current product and limit to 4 related products
const relatedProducts = computed(() => {
  if (!relatedProductsData.value) return []

  return relatedProductsData.value
    .filter(p => p.id !== Number(productId))
    .slice(0, 4)
})



useHead({
  title: productData.value?.name || 'Product Details'
})
</script>