<template>
  <div class="card border-0 shadow-sm">
    <div class="row g-0">
      <!-- Product Image -->
      <div class="col-md-6 p-4 d-flex align-items-center justify-content-center bg-light">
        <img
          :src="product.image"
          :alt="product.name"
          class="img-fluid rounded"
          style="max-height: 400px; object-fit: contain;"
        >
      </div>

      <!-- Product Info -->
      <div class="col-md-6">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <button class="btn btn-sm btn-outline-secondary" @click="goBack">
              <i class="bi bi-arrow-left me-1" /> Back
            </button>
            <span class="badge bg-primary text-capitalize">{{ product.categoryName }}</span>
          </div>

          <h2 class="card-title mb-3">{{ product.name }}</h2>

          <!-- Price -->
          <p class="fs-3 fw-bold text-primary mb-4">${{ product.price.toFixed(2) }}</p>

          <!-- Description -->
          <div class="mb-4">
            <h5>Description</h5>
            <p class="card-text">{{ product.description }}</p>
          </div>

          <hr class="my-4">

          <!-- Quantity Selector -->
          <div class="mb-4">
            <label for="quantity" class="form-label fw-bold">Quantity</label>
            <div class="input-group" style="width: 150px;">
              <button
                class="btn btn-outline-secondary"
                type="button"
                :disabled="quantity <= 1"
                @click="decrementQuantity"
              >
                <i class="bi bi-dash" />
              </button>
              <input
                id="quantity"
                v-model.number="quantity"
                type="number"
                class="form-control text-center"
                min="1"
                max="10"
                @change="validateQuantity"
              >
              <button
                class="btn btn-outline-secondary"
                type="button"
                :disabled="quantity >= 10"
                @click="incrementQuantity"
              >
                <i class="bi bi-plus" />
              </button>
            </div>
            <small v-if="quantityError" class="text-danger">{{ quantityError }}</small>
          </div>

          <!-- Add to Cart Button -->
          <div class="d-grid">
            <AddToCartButton
              :product="product"
              :quantity="quantity"
              button-text="Add to Cart"
              custom-class="btn-lg"
              @added-to-cart="showAddedToast"
            />
          </div>
        </div>
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
            Item added to your cart!
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AddToCartButton from '~/components/common/AddToCartButton.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const router = useRouter()
const quantity = ref(1)
const quantityError = ref('')
const toastEl = ref(null)
let toast = null

onMounted(() => {
  // Initialize Bootstrap toast
  if (typeof window !== 'undefined' && window.bootstrap) {
    toast = new window.bootstrap.Toast(toastEl.value, {
      autohide: true,
      delay: 3000
    })
  }
})

const incrementQuantity = () => {
  if (quantity.value < 10) {
    quantity.value++
    validateQuantity()
  }
}

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
    validateQuantity()
  }
}

const validateQuantity = () => {
  quantityError.value = ''

  if (isNaN(quantity.value) || quantity.value < 1) {
    quantity.value = 1
    quantityError.value = 'Quantity must be at least 1'
  } else if (quantity.value > 10) {
    quantity.value = 10
    quantityError.value = 'Maximum quantity is 10'
  }
}

const goBack = () => {
  router.back()
}

const showAddedToast = () => {
  if (toast) {
    toast.show()
  }
}
</script>

<style scoped>
.card-img-top {
  transition: transform 0.3s ease;
}

.card-img-top:hover {
  transform: scale(1.05);
}
</style>