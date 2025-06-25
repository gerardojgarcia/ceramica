<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true }
})
</script>

<template>
  <section
      class="relative w-full h-64 md:h-96 bg-center bg-cover flex items-center"
      :style="{ backgroundImage: `url('/${image}')` }"
  >
    <!-- Optional dark overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <div class="relative z-8 w-full text-center px-4">
      <h1 class="text-3xl md:text-5xl font-semibold text-white">
        {{ title }}
      </h1>
    </div>
  </section>
</template>

<style scoped>

</style>