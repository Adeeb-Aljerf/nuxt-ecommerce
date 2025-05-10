<template>
  <div class="card h-100">
    <!-- Product image -->
    <div class="position-relative">
      <span v-if="isOnSale" class="position-absolute top-0 end-0 badge bg-danger m-2">SALE</span>
      <img
        :src="product.image"
        class="card-img-top"
        :alt="product.name"
        loading="lazy"
        style="height: 200px; object-fit: contain; padding: 10px;"
      >
    </div>

    <!-- Product details -->
    <div class="card-body d-flex flex-column">
      <!-- Category badge -->
      <span class="badge bg-light text-dark text-capitalize mb-2">{{ product.categoryName }}</span>

      <!-- Product title -->
      <h5 class="card-title text-truncate">{{ product.name }}</h5>

      <!-- Price -->
      <p class="card-text text-primary fw-bold">${{ product.price.toFixed(2) }}</p>

      <!-- Description (truncated) -->
      <p class="card-text text-truncate">{{ product.description }}</p>

      <!-- Action buttons -->
      <div class="mt-auto d-flex justify-content-between">
        <NuxtLink
          :to="`/product/${product.id}`"
          class="btn btn-outline-primary"
        >
          <i class="bi bi-eye me-1" /> View
        </NuxtLink>
        <AddToCartButton
          :product="product"
          button-text=""
          custom-class="btn-sm"
          @added-to-cart="showToast"
        />
      </div>
    </div>

    <!-- Toast notification -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="addToCartToast"
        ref="toastEl"
        class="toast align-items-center text-white bg-success border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="d-flex">
          <div class="toast-body">
            <i class="bi bi-check-circle me-2" />
            Added to cart!
          </div>
          <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const toastEl = ref(null)
let toast = null

// Simulate some products being on sale (25% chance)
const isOnSale = computed(() => {
  return props.product.id % 4 === 0
})

onMounted(() => {
  // Initialize Bootstrap toast
  if (typeof window !== 'undefined' && window.bootstrap) {
    toast = new window.bootstrap.Toast(toastEl.value)
  }
})

const showToast = () => {
  if (toast) {
    toast.show()
  }
}
</script>

<style scoped>
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
