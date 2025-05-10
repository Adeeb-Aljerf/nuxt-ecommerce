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
            <img
              :src="item.img"
              class="d-block w-100"
              :alt="item.alt || 'Slide Image'"
            />
            <!-- Optional caption if provided -->
            <div v-if="item.caption" class="carousel-caption">
              <p>{{ item.caption }}</p>
            </div>
          </div>
        </div>

        <!-- Single item slide (banner style) -->
        <div v-else>
          <img
            :src="group[0].img"
            class="d-block w-100"
            :alt="group[0].alt || 'Slide Image'"
          />
          <div v-if="group[0].caption" class="carousel-caption">
            <p>{{ group[0].caption }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel controls (arrows) are shown or hidden based on the showControls prop -->
    <button
      v-if="showControls"
      class="carousel-control-prev"
      type="button"
      :data-bs-target="'#' + carouselId"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      v-if="showControls"
      class="carousel-control-next"
      type="button"
      :data-bs-target="'#' + carouselId"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  /*
    Props:
      - slides: An array of slide item objects. Each item should have at least an "img" property.
                For grouped slides (grid or grouped carousels), pass all items in one flat array.
      - itemsPerSlide (Number): Defines how many items appear per slide.
          • For a full-width banner, use 1.
          • For a grid or grouped carousel, use 4.
      - showControls (Boolean): Determines whether to display the left/right navigation buttons.
      - interval (Number): Sets the auto-slide interval in milliseconds.
      - auto (Boolean): If true, the carousel will auto-slide (useful for the banner carousel).
      - carouselId (String): Useful for having multiple unique carousel instances on one page.
  */
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
</style>
