<template>
  <section class="banner d-flex align-items-center text-black">
    <!-- Bootstrap carousel with captions -->
    <div id="carouselExampleCaptions" class="carousel slide ">
      <div class="carousel-indicators">
        <button
          v-for="(_, index) in bannerItems"
          :key="index"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : 'false'"
          :aria-label="`Slide ${index + 1}`"
        />
      </div>
      <div class="carousel-inner">
        <div
          v-for="(item, index) in bannerItems"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <img :src="item.image" class="d-block w-100" :alt="item.alt">
          <div class="carousel-caption custom-caption">
            <h2 class="sale-text">{{ item.heading }}</h2>
            <h1 class="offer-text">
              {{ item.subheading }}
            </h1>
            <div class="shop-now-btn">
              <NuxtLink :to="item.link" class="btn-wrapper">
                <div class="shop-now-text">Shop Now</div>
                <img src="~/assets/icons/Bottun.png" alt="Shop Now" class="btn-image">
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import images directly
import headerImg from '~/assets/images/Header.jpg';

// Banner items array
const bannerItems = [
  {
    image: headerImg,
    alt: 'Sale Banner',
    heading: 'Sale',
    subheading: 'ACCESS A LIMITED SELECTION WITH UP TO 70% OFF',
    link: '/category/electronics'
  },
  {
    image: headerImg,
    alt: 'Sale Banner',
    heading: 'Sale',
    subheading: 'ACCESS A LIMITED SELECTION WITH UP TO 70% OFF',
    link: '/category/electronics'
  },
  {
    image: headerImg,
    alt: 'Sale Banner',
    heading: 'Sale',
    subheading: 'ACCESS A LIMITED SELECTION WITH UP TO 70% OFF',
    link: '/category/electronics'
  },
    {
    image: headerImg,
    alt: 'Sale Banner',
    heading: 'Sale',
    subheading: 'ACCESS A LIMITED SELECTION WITH UP TO 70% OFF',
    link: '/category/electronics'
  },
    {
    image: headerImg,
    alt: 'Sale Banner',
    heading: 'Sale',
    subheading: 'ACCESS A LIMITED SELECTION WITH UP TO 70% OFF',
    link: '/category/electronics'
  },
];
</script>

<style scoped>
.banner {
  position: relative;
  height: 80vh;
  /* overflow: hidden; */
}

/* We're now using carousel captions instead of separate banner content */

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

/* Carousel styling */
#carouselExampleCaptions {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel-inner,
.carousel-item {
  height: 100%;

}

.carousel-item img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.carousel-indicators {
  z-index: 5;

  bottom: -3em;
  position: absolute;
}

.carousel-control-prev,
.carousel-control-next {
  z-index: 5;
}
/* Custom styling for carousel indicators */
.carousel-indicators button {
  background-color: #666666; /* Dark gray color */
  opacity: 1;
}

.carousel-indicators button.active {
  background-color: #000000; /* Black color when active */
}

/* Custom caption styling to match original banner content */
.custom-caption {
  position: absolute;
  color: black;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  text-align: left;
  max-width: 20rem;
  padding: 20px;
  border-radius: 5px;
  right: auto;
  bottom: auto;
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

/* Simple responsive styles - only reducing height and text size */
@media (max-width: 1100px) {
  .banner {
    height: 60vh;
    max-height: 60rem;
  }

  .sale-text {
    font-size: 2rem;
  }

  .offer-text {
    font-size: 1rem;
  }

  .custom-caption {
    max-width: 14rem;
    background: rgba(255,255,255,0.8);
  }

  .shop-now-text {
    font-size: 1rem;
  }

  .btn-image {
    max-height: 2.5rem;
  }
}

@media (max-width: 790px) {
  .banner {
    height: 50vh;
    max-height: 50rem;
  }

  .sale-text {
    font-size: 1.6rem;
  }

  .offer-text {
    font-size: 0.9rem;
  }

  .custom-caption {
    max-width: 10rem;
    padding: 0.9375rem; /* was 15px */
  }

  .shop-now-text {
    font-size: 0.7rem;
  }

  .btn-image {
    max-height: 2rem;
  }
}

@media (max-width: 635px) {
  .banner {
    height: 35vh;
    /* max-height: 35rem; */
  }

  .sale-text {
    font-size: 1rem;
  }

  .offer-text {
    font-size: 0.8rem;
  }

  .custom-caption {
    max-width: 9rem;
    padding: 0.625rem; 
  }

  .btn-image {
    max-height: 2rem;
  }
}


</style>
