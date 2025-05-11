<template>
  <div class="container py-5">
    <h1 class="mb-4">Shopping Cart</h1>
    
    <div v-if="cartItems.length === 0" class="text-center my-5 py-5">
      <div class="mb-4">
        <i class="bi bi-cart-x" style="font-size: 4rem;"></i>
      </div>
      <h3 class="mb-3">Your cart is empty</h3>
      <p class="text-muted mb-4">
        Looks like you haven't added any products to your cart yet.
      </p>
      <NuxtLink to="/" class="btn btn-primary">
        Start Shopping
      </NuxtLink>
    </div>
    
    <div v-else class="row mt-4">
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-header bg-white">
            <div class="row align-items-center">
              <div class="col">
                <h5 class="mb-0">Cart Items ({{ cartItems.length }})</h5>
              </div>
              <div class="col-auto">
                <button 
                  class="btn btn-sm btn-outline-danger"
                  @click="clearCart"
                >
                  <i class="bi bi-trash me-1"></i> Clear Cart
                </button>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <CartItem 
              v-for="item in cartItems" 
              :key="item.id" 
              :item="item"
            />
          </div>
        </div>
        
        <div class="d-flex justify-content-between mt-4">
          <NuxtLink to="/" class="btn btn-outline-primary">
            <i class="bi bi-arrow-left me-1"></i> Continue Shopping
          </NuxtLink>
        </div>
      </div>
      
      <div class="col-lg-4">
        <CartSummary />
        
        
      </div>
    </div>
    
    <!-- Toast notification -->
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div
        ref="toastEl"
        class="toast align-items-center text-white bg-danger border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-bs-delay="3000"
        data-bs-autohide="true"
      >
        <div class="d-flex">
          <div class="toast-body">
            <i class="bi bi-trash me-2"></i>
            {{ toastMessage }}
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

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useCartStore } from '~/stores/cart'
import CartItem from '~/components/cart/CartItem.vue'
import CartSummary from '~/components/cart/CartSummary.vue'

const cartStore = useCartStore()
const cartItems = computed(() => cartStore.items)

// ref for the toast element
const toastEl = ref<HTMLElement | null>(null)
let toastInstance: any = null
const toastMessage = ref('Cart has been cleared')

onMounted(() => {
  if (typeof window !== 'undefined') {
    const bs = (window as any).bootstrap
    if (bs?.Toast && toastEl.value) {
      toastInstance = new bs.Toast(toastEl.value, {
        autohide: true,
        delay: 3000
      })
    }
  }
})

// Listen for cart updates
watch(() => cartStore.items.length, (newLength, oldLength) => {
  if (newLength > oldLength) {
    toastMessage.value = 'Item added to cart'
    if (toastInstance) {
      toastEl.value?.classList.remove('bg-danger')
      toastEl.value?.classList.add('bg-success')
      toastInstance.show()
    }
  }
})

const clearCart = () => {
  cartStore.clearCart()
  toastMessage.value = 'Cart has been cleared'
  if (toastInstance) {
    toastEl.value?.classList.remove('bg-success')
    toastEl.value?.classList.add('bg-danger')
    toastInstance.show()
  }
}

useHead({
  title: 'Shopping Cart'
})
</script>