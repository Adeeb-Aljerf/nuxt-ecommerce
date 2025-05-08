<template>
    <div :id="id" class="carousel slide">
      <!-- Carousel indicators (Bootstrap default) -->
      <div class="carousel-indicators" v-if="showIndicators">
        <button v-for="i in numberOfIndicators" 
                :key="`indicator-${i}`"
                type="button" 
                :data-bs-target="`#${id}`" 
                :data-bs-slide-to="i-1" 
                :class="{ active: i === 1 }" 
                :aria-current="i === 1 ? 'true' : 'false'"
                :aria-label="`Slide ${i}`"></button>
      </div>
      
      <!-- Carousel items -->
      <div class="carousel-inner">
        <div v-for="(chunk, index) in itemChunks" 
             :key="`slide-${index}`" 
             class="carousel-item"
             :class="{ active: index === 0 }">
          <div class="row mx-0">
            <div v-for="(item, itemIndex) in chunk" 
                 :key="`item-${index}-${itemIndex}`" 
                 :class="columnClass">
              <slot name="item" :item="item" :index="itemIndex">
                <img :src="item.image" class="d-block w-100 " :alt="item.title || `Item ${itemIndex + 1}`">
              </slot>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Carousel controls -->
      <template v-if="showControls">
        <!-- Default arrow controls -->
        <template v-if="controlType === 'arrow'">
          <button class="carousel-control-prev" type="button" :data-bs-target="`#${id}`" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" :data-bs-target="`#${id}`" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </template>
        
        <!-- Custom button controls -->
        <template v-else-if="controlType === 'button'">
          <button class="carousel-control-prev" type="button" :data-bs-target="`#${id}`" data-bs-slide="prev">
            <slot name="prev-button">
              <span>Previous</span>
            </slot>
          </button>
          <button class="carousel-control-next" type="button" :data-bs-target="`#${id}`" data-bs-slide="next">
            <slot name="next-button">
              <span>Next</span>
            </slot>
          </button>
        </template>
      </template>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  // Props definition
  const props = defineProps({
    items: {
      type: Array,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    itemsPerRow: {
      type: Number,
      default: 5,
      description: 'Number of items to show in each row'
    },
    numberOfIndicators: {
      type: Number,
      default: 5,
      description: 'Number of indicators to show'
    },
    showControls: {
      type: Boolean,
      default: true
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    controlType: {
      type: String,
      default: 'arrow',
      validator: (value) => ['arrow', 'button'].includes(value)
    }
  });
  
  // Calculate how many items should be in each chunk based on the number of indicators
  const itemsPerChunk = computed(() => {
    // If we have more indicators than needed, use 1 item per chunk
    if (props.numberOfIndicators >= props.items.length) {
      return 1;
    }
    
    // Otherwise, distribute items evenly
    return Math.ceil(props.items.length / props.numberOfIndicators);
  });
  
  // Split items into chunks
  const itemChunks = computed(() => {
    const chunks = [];
    const totalItems = props.items.length;
    
    for (let i = 0; i < totalItems; i += itemsPerChunk.value) {
      let chunk = props.items.slice(i, i + itemsPerChunk.value);
      
      // If this is the last chunk and it's not full, add items from the beginning
      if (chunk.length < itemsPerChunk.value && i + itemsPerChunk.value >= totalItems) {
        const remaining = itemsPerChunk.value - chunk.length;
        const loopItems = props.items.slice(0, remaining);
        chunk = [...chunk, ...loopItems];
      }
      
      chunks.push(chunk);
    }
    
    return chunks;
  });
  
  // Compute the appropriate column class based on itemsPerRow
  const columnClass = computed(() => {
    // For standard Bootstrap grid (12 columns)
    if (props.itemsPerRow <= 12 && 12 % props.itemsPerRow === 0) {
      return `col-${Math.floor(12 / props.itemsPerRow)}`;
    }
    
    // For custom column widths
    return `col-custom-${props.itemsPerRow}`;
  });
  </script>
  
  <style scoped>
  /* Custom column classes for when itemsPerRow doesn't fit Bootstrap's 12-column grid */
  .col-custom-5 {
    flex: 0 0 auto;
    width: 20%; /* 100% / 5 */
    padding: 0 0.5rem;
  }
  
  .col-custom-3 {
    flex: 0 0 auto;
    width: 33.333%; /* 100% / 3 */
    padding: 0 0.5rem;
  }
  
  .col-custom-7 {
    flex: 0 0 auto;
    width: 14.285%; /* 100% / 7 */
    padding: 0 0.5rem;
  }
  
  /* Add more custom column classes as needed */
  </style>
  