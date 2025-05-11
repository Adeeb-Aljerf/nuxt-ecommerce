<template>
  <section class="special-offers py-5">
    <div class="container">
      <h2 class="mb-4">SPECIAL OFFERS</h2>

      <!-- Using the Carousel component with responsive items per slide -->
      <Carousel
        :slides="formattedOffers"
        :items-per-slide="itemsPerSlide"
        :show-controls="true"
        :auto="false"
        carousel-id="specialOffersCarousel"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import image1 from "~/assets/images/1.jpg";
import image2 from "~/assets/images/2.jpg";
import image3 from "~/assets/images/3.jpg";
import image4 from "~/assets/images/4.jpg";
import image5 from "~/assets/images/F.png";
import Carousel from "~/components/common/Carousel.vue";

// Responsive items per slide based on screen width
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200);

// Update window width on resize
onMounted(() => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
    window.addEventListener('resize', () => {
      windowWidth.value = window.innerWidth;
    });
  }
});

// Compute items per slide based on screen width
const itemsPerSlide = computed(() => {
  if (windowWidth.value < 700) {
    return 3; // Small devices
  } else {
    return 4; // Medium devices and up
  }
});

// Special offers product data
const specialOffers = [
  { id: 1, title: "Lorem ipsum dolor", image: image1, oldPrice: "899.00", newPrice: "800.00" },
  { id: 2, title: "Lorem ipsum dolor", image: image2, oldPrice: "899.00", newPrice: "800.00" },
  { id: 3, title: "Lorem ipsum dolor", image: image3, oldPrice: "899.00", newPrice: "800.00" },
  { id: 4, title: "Lorem ipsum dolor", image: image4, oldPrice: "899.00", newPrice: "800.00" },
  { id: 5, title: "Lorem ipsum dolor", image: image5, oldPrice: "899.00", newPrice: "800.00" },
  // Adding more items to demonstrate multiple slides
  { id: 6, title: "Lorem ipsum dolor", image: image1, oldPrice: "899.00", newPrice: "800.00" },
  { id: 7, title: "Lorem ipsum dolor", image: image2, oldPrice: "899.00", newPrice: "800.00" },
  { id: 8, title: "Lorem ipsum dolor", image: image3, oldPrice: "899.00", newPrice: "800.00" },
  { id: 9, title: "Lorem ipsum dolor", image: image4, oldPrice: "899.00", newPrice: "800.00" },
    // Adding more items to demonstrate multiple slides
  { id: 6, title: "Lorem ipsum dolor", image: image1, oldPrice: "899.00", newPrice: "800.00" },
  { id: 7, title: "Lorem ipsum dolor", image: image2, oldPrice: "899.00", newPrice: "800.00" },
  { id: 8, title: "Lorem ipsum dolor", image: image3, oldPrice: "899.00", newPrice: "800.00" },
  { id: 9, title: "Lorem ipsum dolor", image: image4, oldPrice: "899.00", newPrice: "800.00" },
    // Adding more items to demonstrate multiple slides
  { id: 6, title: "Lorem ipsum dolor", image: image1, oldPrice: "899.00", newPrice: "800.00" },
  { id: 7, title: "Lorem ipsum dolor", image: image2, oldPrice: "899.00", newPrice: "800.00" },
  { id: 8, title: "Lorem ipsum dolor", image: image3, oldPrice: "899.00", newPrice: "800.00" },
  { id: 9, title: "Lorem ipsum dolor", image: image4, oldPrice: "899.00", newPrice: "800.00" },
  

  { id: 10, title: "Lorem ipsum dolor", image: image5, oldPrice: "899.00", newPrice: "800.00" },
  { id: 11, title: "Lorem ipsum dolor", image: image1, oldPrice: "899.00", newPrice: "800.00" },
  { id: 12, title: "Lorem ipsum dolor", image: image2, oldPrice: "899.00", newPrice: "800.00" }
];

// Format the offers data for the carousel component
const formattedOffers = specialOffers.map(item => ({
  img: item.image,
  alt: item.title,
  id: item.id,
  title: item.title,
  oldPrice: item.oldPrice,
  newPrice: item.newPrice
}));
</script>

<style scoped>
/* Overall section styling */


.special-offers h2 {
  font-weight: bold;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

/* Override carousel styling for product display */
:deep(.carousel-item .col) {
  padding: 0 0.5rem;
}

:deep(.carousel-indicators) {
  z-index: 5;
  bottom: -3rem;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

:deep(.carousel-control-prev),
:deep(.carousel-control-next) {
  z-index: 5;
}

:deep(.carousel-indicators button) {
  width: 2rem;
  height: 0.25rem;
  background-color: #666666;
  opacity: 1;
  margin: 0 0.25rem;
  border-radius: 0;
  border-top: 0;
  border-bottom: 0;
}

:deep(.carousel-indicators button.active) {
  background-color: #000000; /* Black color when active */
}

/* Product card styling */
:deep(.product-card) {
  border: none;
  margin-bottom: 1rem;
  background: #fff;
  border-radius: 8px;
  transition: transform 0.3s;
}

:deep(.product-card:hover) {
  transform: translateY(-4px);
}

:deep(.carousel-item img) {
  max-height: 15em !important;
  object-fit: cover;
  padding: 0;
  border-radius: 8px 8px 0 0;
}

:deep(.product-info) {
  padding: 0.75rem;
  text-align: left;
}

:deep(.product-title) {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  color: #333;
  font-weight: normal;
}

:deep(.product-price) {
  font-size: 0.85rem;
  color: #555;
}

:deep(.product-price del) {
  text-decoration: line-through;
  color: #999;
  margin-right: 0.5rem;
}

:deep(.product-price span) {
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 991px) {
  :deep(.carousel-item .row) {
    margin: 0 -0.25rem;
  }

  :deep(.carousel-item .col) {
    padding: 0 0.25rem;
  }

  :deep(.carousel-item img) {
    max-height: 10rem;
  }

  :deep(.product-title) {
    font-size: 0.85rem;
  }

  :deep(.product-price) {
    font-size: 0.85rem;
  }
}

@media (max-width: 767px) {
  :deep(.carousel-item img) {
    max-height: 8rem;
  }

  :deep(.carousel-indicators) {
    bottom: -2rem;
  }

  :deep(.product-title) {
    font-size: 0.8rem;
  }

  :deep(.product-price) {
    font-size: 0.8rem;
  }
}

@media (max-width: 575px) {
  :deep(.carousel-item img) {
    max-height: 7rem !important;
  }

  :deep(.carousel-indicators) {
    bottom: -1.5rem;
  }

  :deep(.carousel-indicators button) {
    width: 1.5rem;
    height: 0.2rem;
    margin: 0 0.2rem;
  }

  :deep(.product-title) {
    font-size: 0.5rem !important;
  }

  :deep(.product-price) {
    font-size: 0.6rem !important;
  }
}
</style>
