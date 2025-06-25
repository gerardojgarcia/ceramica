<script setup lang="ts">
import { ref, computed } from 'vue'

const products = [
  { id: 1, name: 'Meraki Tableware', price: '$74.00', tags: ['Tableware Sets'], images: ['/bowl-set-1.png', 'bowl-set-1-hover.png'] },
  { id: 2, name: 'Kensho Pitcher', price: '$37.00', tags: ['Pitchers'], images: ['/kensho-pitcher-maini.png', '/kensho-pitcher-hover.png'] },
  { id: 3, name: '4 Asymmetric Cups', price: '$42.00', tags: ['Cups'], images: ['/cups-1-main.png', '/cups-1-hover.png'] },
  { id: 4, name: 'Sourire Rounded Plate', price: '$14.00', tags: ['Plates'], images: ['/plate-1-main.png', '/plate-1-hover.png'] },
  { id: 5, name: 'Celeste Bowl', price: '$28.00', tags: ['Plates'], images: ['/celeste-bowl-main.png', '/celeste-bowl-hover.png'] },
  { id: 6, name: 'Terra Vase', price: '$55.00', tags: ['Tableware Sets'], images: ['/terra-vase-main.png', '/terra-vase-hover.png'] },
  { id: 7, name: 'Aurora Mug', price: '$19.00', tags: ['Cups'], images: ['/aurora-mug-main.png', '/aurora-mug-hover.png'] },
  { id: 8, name: 'Horizon Pitcher', price: '$49.00', tags: ['Pitchers'], images: ['#', '#'] },
  { id: 9, name: 'Radiant Plate', price: '$22.00', tags: ['Plates'], images: ['#', '#'] },
  { id: 10, name: 'Unity Set', price: '$120.00', tags: ['Tableware Sets'], images: ['#', '#'] }
]

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
            'px-4 py-2 rounded-full border transition',
            activeCategory === cat
              ? 'bg-light-terra text-white border-light-terra'
              : 'bg-white text-dark border-gray-300 hover:bg-light-terra hover:text-white'
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>