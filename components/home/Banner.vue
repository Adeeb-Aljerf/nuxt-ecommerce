<template>
  <section class="banner d-flex align-items-center text-black">
    <div class="container banner-container">
      <div class="banner-content">
        <h2 class="sale-text">Sale</h2>
        <h1 class="offer-text">
          ACCESS A LIMITED SELECTION WITH UP TO 70% OFF
        </h1>
        <div class="shop-now-btn">
          <NuxtLink to="/category/electronics" class="btn-wrapper">
            <div class="shop-now-text">Shop Now</div>
            <img src="~/assets/icons/Bottun.png" alt="Shop Now" class="btn-image" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.banner {
  background-image: url('~/assets/images/Header.jpg');
  background-size: cover;
  background-position: center;
  height: 80vh;
}

.banner-container {
  padding-left: 10px;
  padding-right: 10px;
}

.banner-content {
  max-width: 270px;
  text-align: left;
}

.sale-text {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.4rem;
}

.offer-text {
  word-spacing: 0.3rem;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.shop-now-btn {
  /* margin-top: 3rem; */
}

.btn-wrapper {
  position: relative;
  display: inline-block;
}

.shop-now-text {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  color: white; 
  /* font-weight: bold; */
  
  font-size: 1.2rem;
  z-index: 2;
  text-decoration: none;
}

.btn-image {
  max-height: 4rem;
  transition: transform 0.2s;
  position: relative;
  z-index: 1;
}

.btn-wrapper:hover .btn-image {
  transform: scale(1.05);
}
</style>
