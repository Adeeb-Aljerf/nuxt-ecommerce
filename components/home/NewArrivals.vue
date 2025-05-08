<template>
    <section class="new-arrivals my-5">
      <div class="container">
        <h2 class="mb-4">New Arrivals</h2>
        <div class="row">
          <div class="col-md-3" v-for="arrival in newArrivals" :key="arrival.id">
            <div class="card">
              <img :src="arrival.image" class="card-img-top" :alt="arrival.title" />
              <div class="card-body">
                <h5 class="card-title">{{ arrival.title }}</h5>
                <p class="card-text">AED {{ arrival.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const newArrivals = [
    { id: 1, title: 'Sneakers', image: '~/assets/images/sneakers.jpg', price: '899.00' },
    { id: 2, title: 'Jacket', image: '~/assets/images/jacket.jpg', price: '899.00' },
    { id: 3, title: 'T-Shirt', image: '~/assets/images/tshirt.jpg', price: '899.00' },
    { id: 4, title: 'Hat', image: '~/assets/images/hat.jpg', price: '899.00' }
  ];
  </script>
  
  <style scoped>
  /* Adjust card layout if needed */
  </style>
  