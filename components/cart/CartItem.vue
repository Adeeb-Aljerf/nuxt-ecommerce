<template>
  <div class="card mb-3">
    <div class="row g-0">
      <!-- Product Image -->
      <div class="col-4 col-md-2">
        <img
          :src="item.image"
          :alt="item.name"
          class="img-fluid rounded-start"
          style="height: 100%; object-fit: contain; padding: 10px;"
        >
      </div>

      <!-- Product Details -->
      <div class="col-8 col-md-10">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start">
            <!-- Product Name -->
            <div>
              <h5 class="card-title fs-6 fs-md-5">
                <NuxtLink :to="`/product/${item.id}`" class="text-decoration-none text-dark">
                  {{ item.name }}
                </NuxtLink>
              </h5>
              <p class="card-text text-muted small">Unit Price: ${{ item.price.toFixed(2) }}</p>
            </div>

            <!-- Remove Button -->
            <button
              class="btn btn-sm btn-outline-danger"
              title="Remove item"
              @click="removeItem"
            >
              <i class="bi bi-trash" />
            </button>
          </div>

          <div class="d-flex flex-column flex-md-row align-items-md-center mt-3">
            <!-- Quantity Selector -->
            <div class="d-flex align-items-center mb-2 mb-md-0">
              <label for="quantity" class="me-2 small">Quantity:</label>
              <div class="input-group" style="width: 120px;">
                <button
                  class="btn btn-sm btn-outline-secondary"
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
                  class="form-control form-control-sm text-center"
                  min="1"
                  @change="updateItemQuantity"
                >
                <button
                  class="btn btn-sm btn-outline-secondary"
                  type="button"
                  @click="incrementQuantity"
                >
                  <i class="bi bi-plus" />
                </button>
              </div>
            </div>

            <!-- Subtotal -->
            <div class="ms-md-auto mt-2 mt-md-0">
              <p class="fw-bold mb-0 fs-6 fs-md-5">
                ${{ (item.price * quantity).toFixed(2) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast notification -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="removeItemToast"
        ref="toastEl"
        class="toast align-items-center text-white bg-danger border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="d-flex">
          <div class="toast-body">
            <i class="bi bi-trash me-2" />
            Item removed from cart
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
import { ref, watch, onMounted } from 'vue'
import { useCartStore } from '~/stores/cart'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()
const quantity = ref(props.item.quantity)
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

// Watch for external changes to item quantity
watch(() => props.item.quantity, (newQuantity) => {
  quantity.value = newQuantity
})

const updateItemQuantity = () => {
  if (isNaN(quantity.value) || quantity.value < 1) {
    quantity.value = 1
  }

  cartStore.updateQuantity(props.item.id, quantity.value)
}

const incrementQuantity = () => {
  quantity.value++
  updateItemQuantity()
}

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
    updateItemQuantity()
  }
}

const removeItem = () => {
  cartStore.removeFromCart(props.item.id)

  // Show toast notification
  if (toast) {
    toast.show()
  }
}
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
