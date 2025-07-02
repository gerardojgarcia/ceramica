<script setup lang="ts">
import { ref, computed } from 'vue'

import products from '~/data/products.json';

const activeCategory = ref('All')
const categories = computed(() => [
  'All',
  ...new Set(products.flatMap(p => p.tags))
])

const filteredProducts = computed(() => {
  return activeCategory.value === 'All'
      ? products
      : products.filter(p => p.tags.includes(activeCategory.value))
})
</script>

<template>
  <section class="py-12 px-6 bg-cream">
    <div class="max-w-6xl mx-auto">
      <!-- Title and Description -->
      <div class="mb-6 text-center">
        <h1 class="text-4xl font-semibold text-dark mb-2">Shop All Products</h1>
        <p class="text-gray-700">Browse our full collection of handcrafted ceramics.</p>
      </div>

      <!-- Category Filters -->
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            :class="[
            'px-4 py-2 rounded-full border transition cursor-pointer',
            activeCategory === cat
              ? 'bg-[#F2B8A0] text-black border-light-terra'
              : 'bg-white text-dark border-gray-300 hover:bg-[#F2B8A0] hover:text-white'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="group bg-white rounded-lg overflow-hidden shadow-sm"
        >
          <div class="relative w-full pb-[100%]">
            <img
                :src="product.images[0]"
                :alt="product.name"
                class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
                :src="product.images[1]"
                :alt="product.name"
                class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
          <div class="p-4">
            <h2 class="text-lg font-medium text-dark mb-1">{{ product.name }}</h2>
            <p class="text-sm text-gray-500 mb-2">{{ product.price }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                  v-for="tag in product.tags"
                  :key="tag"
                  class="text-xs uppercase px-2 py-1 border rounded-full text-dark border-gray-300"
              >
                {{ tag }}
              </span>

              <NuxtLink :to="product.link">Explore</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>