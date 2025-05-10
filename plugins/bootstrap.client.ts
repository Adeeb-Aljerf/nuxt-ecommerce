// plugins/bootstrap.client.ts
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin(() => {
  console.log('Bootstrap plugin loaded')
  
  // Make bootstrap available globally
  if (typeof window !== 'undefined') {
    window.bootstrap = bootstrap
  }
  
  return {
    provide: {
      bootstrap
    }
  }
})