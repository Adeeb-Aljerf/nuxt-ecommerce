import { defineStore } from 'pinia'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),
  
  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total, item) => total + item.price * item.quantity, 0),
    getItemById: (state) => (id: number) => state.items.find(item => item.id === id)
  },
  
  actions: {
    addToCart(product: Omit<CartItem, 'quantity'>, quantity: number = 1) {
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.items.push({ ...product, quantity })
      }
    },
    
    removeFromCart(productId: number) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },
    
    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
        // Remove item if quantity is 0
        if (quantity <= 0) {
          this.removeFromCart(productId)
        }
      }
    },
    
    clearCart() {
      this.items = []
    }
  }
})