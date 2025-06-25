<script setup lang="ts">
import products from '~/data/newArrivals.json'
</script>

<template>
  <section class="py-12 px-6">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl font-semibold text-dark">Explore our newest arrivals</h2>
      <a href="#" class="inline-flex items-center text-dark font-medium hover:text-light-green">
        Shop All
        <Icon name="mdi-arrow-right" size="20" class="ml-2" />
      </a>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div
          v-for="product in products"
          :key="product.id"
          class="group relative bg-white overflow-hidden rounded-lg shadow-sm"
      >
        <!-- Sale / Bestseller Tags -->
        <div class="absolute top-2 left-2 space-x-2 z-4">
          <span
              v-if="product.onSale"
              class="bg-[#F8B195] text-black text-xs font-semibold uppercase px-2 py-1 rounded"
          >
            On Sale!
          </span>
          <span
              v-if="product.bestSeller"
              class="bg-[#C1E1C1] text-black text-xs font-semibold uppercase px-2 py-1 rounded"
          >
            Best Seller
          </span>
        </div>

        <!-- Images -->
        <div class="relative w-full pb-[100%] overflow-hidden">
          <img
              :src="product.firstImage"
              :alt="product.name"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
              :src="product.hoverImage"
              :alt="product.name"
              class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <!-- Info -->
        <div class="p-4">
          <h3 class="text-lg font-medium text-dark mb-2">{{ product.name }}</h3>
          <p class="text-sm font-medium text-dark">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>