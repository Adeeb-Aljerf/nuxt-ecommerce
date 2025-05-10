<template>
  <button 
    class="btn btn-primary" 
    @click="addToCart"
    :disabled="loading"
    :class="customClass"
  >
    <span v-if="loading">
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Adding...
    </span>
    <span v-else>
      <i class="bi bi-cart-plus"></i> {{ buttonText }}
    </span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '~/stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  buttonText: {
    type: String,
    default: 'Add to Cart'
  },
  customClass: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['added-to-cart'])
const loading = ref(false)
const cartStore = useCartStore()

const addToCart = async () => {
  loading.value = true
  
  try {
    // Prepare the product for the cart
    const cartItem = {
      id: props.product.id,
      name: props.product.name,
      price: props.product.price,
      image: props.product.image
    }
    
    // Simulate API call or processing time
    await new Promise(resolve => setTimeout(resolve, 500))
    
    cartStore.addToCart(cartItem, props.quantity)
    
    // Emit event for parent components to handle
    emit('added-to-cart')
  } catch (error) {
    console.error('Failed to add item to cart:', error)
    // Handle error
  } finally {
    loading.value = false
  }
}
</script>
