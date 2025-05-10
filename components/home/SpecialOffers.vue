<template>
  <section class="special-offers py-5">
    <div class="container">
      <h2 class="text-center mb-4">SPECIAL OFFERS</h2>
      <div
        id="specialOffersCarousel"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-wrap="true"
      >
        <!-- Carousel Inner Slides -->
        <div class="carousel-inner">
          <div
            v-for="(slide, slideIndex) in slides"
            :key="slideIndex"
            :class="['carousel-item', { active: slideIndex === 0 }]"
          >
            <div class="row justify-content-center">
              <div
                v-for="(product, index) in slide"
                :key="product.id"
                class="col-6 col-md-3 d-flex justify-content-center p-2"
              >
                <div class="offer-card text-center">
                  <img
                    :src="product.image"
                    :alt="product.title"
                    class="img-fluid offer-img"
                  />
                  <div class="offer-details mt-2">
                    <p class="offer-title">Lorem ipsum dolor</p>
                    <p class="offer-price">
                      <del class="old-price">AED {{ product.oldPrice }}</del>
                      <span class="new-price">AED {{ product.newPrice }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Rectangular Indicators (placed below the slide) -->
        <div class="carousel-indicators custom-indicators mt-3">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            type="button"
            data-bs-target="#specialOffersCarousel"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :aria-current="index === 0 ? 'true' : undefined"
            :aria-label="'Slide ' + (index + 1)"
          ></button>
        </div>

        <!-- Custom Navigation Controls -->
        <button
          class="carousel-control-prev custom-nav"
          type="button"
          data-bs-target="#specialOffersCarousel"
          data-bs-slide="prev"
        >
          <span class="custom-nav-icon" aria-hidden="true">&#10094;</span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next custom-nav"
          type="button"
          data-bs-target="#specialOffersCarousel"
          data-bs-slide="next"
        >
          <span class="custom-nav-icon" aria-hidden="true">&#10095;</span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import image1 from "~/assets/images/1.jpg";
import image2 from "~/assets/images/2.jpg";
import image3 from "~/assets/images/3.jpg";
import image4 from "~/assets/images/4.jpg";
import image5 from "~/assets/images/D.png";

const products = [
  { id: 1, title: "Pink Handbag", image: image1, oldPrice: "899.00", newPrice: "800.00" },
  { id: 2, title: "Black Headphones", image: image2, oldPrice: "899.00", newPrice: "800.00" },
  { id: 3, title: "Elegant Necklace", image: image3, oldPrice: "899.00", newPrice: "800.00" },
  { id: 4, title: "Home Appliances Set", image: image4, oldPrice: "899.00", newPrice: "800.00" },
  { id: 5, title: "Sneaker", image: image5, oldPrice: "899.00", newPrice: "800.00" }
];

// We want exactly 4 slides displaying 4 items per slide (using a circular sliding window over the 5 products).
const numSlides = 4;
const itemsPerSlide = 4;

const slides = computed(() => {
  const groups = [];
  for (let start = 0; start < numSlides; start++) {
    const slide = [];
    for (let offset = 0; offset < itemsPerSlide; offset++) {
      slide.push(products[(start + offset) % products.length]);
    }
    groups.push(slide);
  }
  return groups;
});
</script>

<style scoped>
/* Overall section styling */
.special-offers {
  background-color: #f7f7f7;
}
.special-offers h2 {
  font-size: 1.75rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  margin-bottom: 1.5rem;
}

/* Offer Card Styling */
.offer-card {
  width: 240px;       /* fixed width */
  height: 320px;      /* overall card height */
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  transition: transform 0.3s;
}
.offer-card:hover {
  transform: translateY(-4px);
}
.offer-img {
  width: 100%;
  height: 160px;      /* fixed image height */
  object-fit: cover;
  border-radius: 8px;
}
.offer-details {
  margin-top: 10px;
}
.offer-title {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 4px;
  color: #333;
}
.offer-price {
  font-size: 0.85rem;
  color: #555;
}
.old-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 5px;
}
.new-price {
  color: #e74c3c;
  font-weight: bold;
}

/* Custom Rectangular Indicators */
.custom-indicators {
  margin-top: 20px; /* space between the items and the indicators */
}
.custom-indicators button {
  width: 40px;
  height: 6px;
  background-color: #ccc;
  border: none;
  margin: 0 6px;
  opacity: 0.6;
  transition: background-color 0.3s, opacity 0.3s;
}
.custom-indicators button.active {
  background-color: #222;
  opacity: 1;
}

/* Custom Navigation Controls */
.custom-nav {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.9;
}
.carousel-control-prev {
  left: 10px;
}
.carousel-control-next {
  right: 10px;
}
.custom-nav:focus {
  outline: none;
  box-shadow: none;
}
.custom-nav-icon {
  font-size: 1.5rem;
  color: #222;
}

/* Ensure the grid centers items in larger viewports */
@media (min-width: 768px) {
  .col-md-3 {
    display: flex;
    justify-content: center;
  }
}
</style>
