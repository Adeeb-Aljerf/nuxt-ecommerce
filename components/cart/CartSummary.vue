<template>
  <div class="card">
    <div class="card-header bg-primary text-white">
      <h5 class="mb-0">Order Summary</h5>
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between mb-3">
        <span>Subtotal ({{ totalItems }} items):</span>
        <span>${{ totalPrice.toFixed(2) }}</span>
      </div>
      <div class="d-flex justify-content-between mb-3">
        <span>Shipping:</span>
        <span>{{ totalPrice > 0 ? '$5.00' : '$0.00' }}</span>
      </div>
      <hr>
      <div class="d-flex justify-content-between mb-3 fw-bold">
        <span>Total:</span>
        <span>${{ (totalPrice + (totalPrice > 0 ? 5 : 0)).toFixed(2) }}</span>
      </div>
      
      <button 
        class="btn btn-primary w-100 mt-3"
        :disabled="totalItems === 0"
        @click="checkout"
      >
        Proceed to Checkout
      </button>
      
      <button 
        v-if="totalItems > 0"
        class="btn btn-outline-danger w-100 mt-2"
        @click="clearCart"
      >
        Clear Cart
      </button>
    </div>
    
    <!-- Toast notifications -->
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div 
        id="checkoutToast" 
        class="toast align-items-center text-white bg-info border-0" 
        role="alert" 
        aria-live="assertive" 
        aria-atomic="true"
        ref="checkoutToastEl"
      >
        <div class="d-flex">
          <div class="toast-body">
            <i class="bi bi-info-circle me-2"></i>
            Checkout done
          </div>
          <button 
            type="button" 
            class="btn-close btn-close-white me-2 m-auto" 
            data-bs-dismiss="toast" 
            aria-label="Close"
          ></button>
        </div>
      </div>
      
      <div 
        id="clearCartToast" 
        class="toast align-items-center text-white bg-danger border-0" 
        role="alert" 
        aria-live="assertive" 
        aria-atomic="true"
        ref="clearCartToastEl"
      >
        <div class="d-flex">
          <div class="toast-body">
            <i class="bi bi-trash me-2"></i>
            Cart has been cleared
          </div>
          <button 
            type="button" 
            class="btn-close btn-close-white me-2 m-auto" 
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const checkoutToastEl = ref(null)
const clearCartToastEl = ref(null)
let checkoutToast = null
let clearCartToast = null

const totalItems = computed(() => cartStore.totalItems)
const totalPrice = computed(() => cartStore.totalPrice)

onMounted(() => {
  // Initialize Bootstrap toasts
  if (typeof window !== 'undefined' && window.bootstrap) {
    checkoutToast = new window.bootstrap.Toast(checkoutToastEl.value, {
      autohide: true,
      delay: 3000
    })
    clearCartToast = new window.bootstrap.Toast(clearCartToastEl.value, {
      autohide: true,
      delay: 3000
    })
  }
})

const checkout = () => {
  // Show toast instead of alert
  if (checkoutToast) {
    checkoutToast.show()
  }
}

const clearCart = () => {
  // Remove the confirm dialog
  cartStore.clearCart()
    
  // Show toast notification
  if (clearCartToast) {
    clearCartToast.show()
  }
}
</script>