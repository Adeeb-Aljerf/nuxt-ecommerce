<template>
  <section class="membership-promo py-5">
    <div class="container d-flex justify-content-center align-items-center">
      <h2 class="membership-text me-4 mb-0">BECOME A MEMBER & GET 15% OFF</h2>
      <div class="shop-now-btn">
        <NuxtLink to="/signup" class="btn-wrapper">
          <div class="shop-now-text">SIGN UP FOR FREE</div>
          <img src="~/assets/icons/Bottun.png" alt="Sign Up For Free" class="btn-image">
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.membership-promo {
  background-color: #f3e54b; /* Bright yellow background */
  padding: 2rem 0;
}

.membership-text {
  font-weight: 700;
  font-size: 1.5rem;
  color: #000;
  text-transform: uppercase;
}

.shop-now-btn {
  display: inline-block;
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
  font-weight: 600;
  font-size: 0.9rem;
  z-index: 2;
  text-transform: uppercase;
  white-space: nowrap;
}

.btn-image {
  max-height: 3rem;
  width: 15rem;
  transition: transform 0.2s;
  position: relative;
  z-index: 1;
}

.btn-wrapper:hover .btn-image {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .membership-text {
    margin-bottom: 1.5rem;
    margin-right: 0;
  }
  .shop-now-text{
    font-size: 0.7rem;

  }

}
</style>