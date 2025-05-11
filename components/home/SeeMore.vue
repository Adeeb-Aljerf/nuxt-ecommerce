<template>
  <section class="see-more my-5">
    <div class=" position-relative p-0">
      <img src="~/assets/images/jewelry.jpg" alt="Jewelry Promotion" class="img-fluid w-100" />
      <!-- See More button -->
      <div class="see-more-btn">
        <NuxtLink to="/category/jewelery" class="btn-wrapper">
          <div class="see-more-text">SEE MORE</div>
          <img src="~/assets/icons/Bottun-White.png" alt="See More" class="btn-image">
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.see-more {
  position: relative;
}

.container {
  overflow: hidden;
}

.jewelry-heading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}

.jewelry-heading h1 {
  color: white;
  font-size: 5rem;
  font-weight: 300;
  letter-spacing: 1.5rem;
  text-transform: uppercase;
}

.see-more-btn {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
}

.btn-wrapper {
  position: relative;
  display: inline-block;
}

.see-more-text {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  color: black;
  font-weight: 600;
  font-size: 0.8rem;
  z-index: 2;
  text-transform: uppercase;
  white-space: nowrap;
}

.btn-image {
  max-height: 2.5rem;
  transition: transform 0.2s;
  position: relative;
  z-index: 1;
}

.btn-wrapper:hover .btn-image {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .jewelry-heading h1 {
    font-size: 3rem;
    letter-spacing: 1rem;
  }

  .see-more-btn {
    bottom: 1rem;
    left: 1rem;
  }

  .btn-image {
    max-height: 1.8rem;
  }
}

@media (max-width: 576px) {
  .jewelry-heading h1 {
    font-size: 2rem;
    letter-spacing: 0.5rem;
  }
    .btn-image {
    max-height: 1.5rem;
  }
  .see-more-text {
    font-size: 0.7rem;
  }
}
</style>