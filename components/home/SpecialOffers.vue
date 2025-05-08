<template>
  <section class="special-offers my-5">
    <div class="container">
      <h2 class="mb-4">Special Offers</h2>
      
      <Carousel 
          id="specialOffersCarousel" 
        :items="products" 
        :items-per-row="5"
        :number-of-indicators="4"
        control-type="button">
        
        <!-- Custom item template -->
        <template #item="{ item }">
          <div class="card h-100">
            <img :src="item.image" class="card-img-top" :alt="item.title" />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">
                <span class="text-muted text-decoration-line-through">AED {{ item.oldPrice }}</span>
                &nbsp;
                <span class="text-danger">AED {{ item.newPrice }}</span>
              </p>
            </div>
          </div>
        </template>
        
        <!-- Custom navigation buttons -->
        <template #prev-button>
          <span>◀</span>
        </template>
        <template #next-button>
          <span>▶</span>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import Carousel from '~/components/common/Carousel.vue';

// Import images directly
import image1 from '~/assets/images/1.jpg'
import image2 from '~/assets/images/2.jpg'
import image3 from '~/assets/images/3.jpg'
import image4 from '~/assets/images/4.jpg'

// All products
const products = [
  { id: 1, title: 'Product 1', image: image1, oldPrice: '899.00', newPrice: '800.00' },
  { id: 2, title: 'Product 2', image: image2, oldPrice: '899.00', newPrice: '800.00' },
  { id: 3, title: 'Product 3', image: image3, oldPrice: '899.00', newPrice: '800.00' },
  { id: 4, title: 'Product 4', image: image4, oldPrice: '899.00', newPrice: '800.00' },
  { id: 5, title: 'Product 5', image: image1, oldPrice: '899.00', newPrice: '800.00' },
  { id: 6, title: 'Product 6', image: image2, oldPrice: '899.00', newPrice: '800.00' },
  { id: 7, title: 'Product 7', image: image3, oldPrice: '899.00', newPrice: '800.00' },
  { id: 8, title: 'Product 8', image: image4, oldPrice: '899.00', newPrice: '800.00' },
  { id: 9, title: 'Product 9', image: image1, oldPrice: '899.00', newPrice: '800.00' },
  { id: 10, title: 'Product 10', image: image2, oldPrice: '899.00', newPrice: '800.00' },
  { id: 11, title: 'Product 11', image: image3, oldPrice: '899.00', newPrice: '800.00' },
  { id: 12, title: 'Product 12', image: image4, oldPrice: '899.00', newPrice: '800.00' }
];
</script>

<style scoped>
.card {
  margin: 0 5px;
  border: none;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
