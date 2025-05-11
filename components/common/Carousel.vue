<template>
  <!-- The outer div uses a dynamic id so you can instantiate multiple carousels. -->
  <div
    :id="carouselId"
    class="carousel slide"
    v-bind:data-bs-ride="auto ? 'carousel' : null"
    :data-bs-interval="interval"
  >
    <!-- Indicators (dots below the carousel) -->
    <div class="carousel-indicators">
      <button
        v-for="(slide, index) in groupedSlides"
        :key="index"
        type="button"
        :data-bs-target="'#' + carouselId"
        :data-bs-slide-to="index"
        :class="{'active': index === 0}"
        :aria-current="index === 0 ? 'true' : null"
        :aria-label="'Slide ' + (index + 1)"
      ></button>
    </div>

    <!-- Carousel inner wrapper -->
    <div class="carousel-inner">
      <!-- Loop through each slide group (if itemsPerSlide > 1, the group is an array of items) -->
      <div
        v-for="(group, groupIndex) in groupedSlides"
        :key="groupIndex"
        :class="['carousel-item', { active: groupIndex === 0 }]"
      >
        <!-- If multiple items per slide, wrap in a Bootstrap grid row -->
        <div v-if="itemsPerSlide > 1" class="row">
          <div
            v-for="(item, itemIndex) in group"
            :key="itemIndex"
            class="col"
          >
            <div class="product-card">
              <img
                :src="item.img"
                class="d-block w-100"
                :alt="item.alt || 'Slide Image'"
              >
              <!-- Product information -->
              <div class="product-info">
                <p class="product-title">{{ item.title || item.caption || '' }}</p>
                <!-- Regular price display -->
                <p v-if="item.price && !item.oldPrice" class="product-price">AED {{ item.price }}</p>
                <!-- Special offer price display with old and new price -->
                <p v-if="item.oldPrice && item.newPrice" class="product-price">
                  <del>AED {{ item.oldPrice }}</del>
                  <span>AED {{ item.newPrice }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Single item slide (banner style) -->
        <div v-else>
          <img
            :src="group[0].img"
            class="d-block w-100"
            :alt="group[0].alt || 'Slide Image'"
          >
          <div v-if="group[0].caption" class="carousel-caption">
            <p>{{ group[0].caption }}</p>
          </div>
        </div>
      </div>
    </div>

<!-- Prev button -->
<button
  v-if="showControls"
  type="button"
  :data-bs-target="'#' + carouselId"
  data-bs-slide="prev"
  style="
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    width: clamp(2rem, 8vw, 3rem);
    height: clamp(2rem, 8vw, 3rem);
    background: #fff;
    border: 1px solid #000;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(1rem, 4vw, 1.5rem);
    line-height: 1;
    cursor: pointer;
  "
>
  ←
  <span class="visually-hidden">Previous</span>
</button>

<!-- Next button -->
<button
  v-if="showControls"
  type="button"
  :data-bs-target="'#' + carouselId"
  data-bs-slide="next"
  style="
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    width: clamp(2rem, 8vw, 3rem);
    height: clamp(2rem, 8vw, 3rem);
    background: #fff;
    border: 1px solid #000;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(1rem, 4vw, 1.5rem);
    line-height: 1;
    cursor: pointer;
  "
>
  →
  <span class="visually-hidden">Next</span>
</button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    slides: {
      type: Array,
      required: true,
    },
    itemsPerSlide: {
      type: Number,
      default: 1,
    },
    showControls: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 5000,
    },
    auto: {
      type: Boolean,
      default: false,
    },
    carouselId: {
      type: String,
      default: "carouselExampleIndicators",
    },
  },
  computed: {
    // Group the slides array into chunks based on itemsPerSlide.
    groupedSlides() {
      if (this.itemsPerSlide === 1) {
        // Return an array where each element is a one-item array
        return this.slides.map((slide) => [slide]);
      } else {
        const groups = [];
        for (let i = 0; i < this.slides.length; i += this.itemsPerSlide) {
          groups.push(this.slides.slice(i, i + this.itemsPerSlide));
        }
        return groups;
      }
    },
  },
};
</script>

<style scoped>
/* You can customize the spacing or responsiveness of the grid items here */
.carousel-item .col {
  padding: 0.5rem;
}

/* Product card styling */
.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: none;
}

.product-card img {
  max-height: 12rem;
  object-fit: contain;
  padding: 0.5rem;
}

.product-info {
  padding: 0.5rem;
  text-align: left;
}

.product-title {
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: #333;
}

.product-price {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0;
}
/* Carousel indicators styling - removed as this is now handled in the parent components */
</style>
