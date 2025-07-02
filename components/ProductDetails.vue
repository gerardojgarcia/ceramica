<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  images: { type: Array, required: true },
  reviews: { type: Number, default: 0 },
  details: { type: String, default: '' },
  delivery: { type: String, default: '' },
  care: { type: String, default: '' }
})

const selectedImage = ref(0)
const quantity = ref(1)
const tabs = ['Details', 'Delivery & Returns', 'Care Instructions']
const activeTab = ref(tabs[0])
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">

    <!-- Image Gallery -->
    <div>
      <div class="mb-4">
        <img
            :src="images[selectedImage]"
            :alt="title"
            class="w-full h-auto object-cover rounded-lg shadow"
        />
      </div>
      <div class="flex space-x-4">
        <button
            v-for="(img, idx) in images"
            :key="idx"
            @click="selectedImage = idx"
            class="w-16 h-16 border rounded-lg overflow-hidden focus:outline-none"
            :class="selectedImage === idx ? 'border-dark' : 'border-gray-300'"
        >
          <img
              :src="img"
              :alt="`${title} thumbnail ${idx+1}`"
              class="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>

    <!-- Product Info -->
    <div>
      <!-- Category Tag -->
      <span class="inline-block bg-light-green text-white uppercase text-xs font-semibold px-2 py-1 rounded">
        {{ category }}
      </span>
      <!-- Title -->
      <h1 class="mt-4 text-3xl font-semibold text-dark">{{ title }}</h1>
      <!-- Price & Reviews -->
      <div class="mt-2 flex items-center space-x-4">
        <span class="text-2xl font-medium text-dark">{{ price }}</span>
        <div class="flex items-center">
          <Icon v-for="i in 5" :key="i" name="mdi-star" size="20" class="text-light-orange" />
          <span class="ml-2 text-sm text-gray-600">({{ reviews }} reviews)</span>
        </div>
      </div>
      <!-- Divider -->
      <hr class="my-4 border-gray-200" />
      <!-- Short Description -->
      <p class="text-gray-700 mb-6">{{ description }}</p>
      <!-- Quantity & Add to Cart -->
      <div class="flex items-center space-x-4 mb-8">
        <input
            type="number"
            v-model.number="quantity"
            min="1"
            class="w-20 border border-gray-300 rounded text-center py-2 focus:outline-none"
        />
        <button
            @click="$emit('add-to-cart', { title, price, quantity })"
            class="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800"
        >
          Add to cart
        </button>
      </div>

      <!-- Tabs -->
      <div>
        <nav class="flex space-x-8 border-b border-gray-300 mb-4">
          <button
              v-for="tab in tabs"
              :key="tab"
              @click="activeTab = tab"
              class="pb-2 text-gray-700 hover:text-dark"
              :class="activeTab === tab ? 'border-b-2 border-dark font-semibold' : ''"
          >
            {{ tab }}
          </button>
        </nav>
        <div class="text-gray-700">
          <div v-if="activeTab === 'Details'">
            <p>{{ details }}</p>
          </div>
          <div v-else-if="activeTab === 'Delivery & Returns'">
            <p>{{ delivery }}</p>
          </div>
          <div v-else>
            <p>{{ care }}</p>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink to="/shop" class="font-bold uppercase w-1/3">Back to Shop</NuxtLink>
  </div>
</template>

<style scoped>

</style>