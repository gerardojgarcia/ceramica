<script setup lang="ts">
const categories = [
  { title: 'Tableware Sets', from: '$68.00', image: '/bowl-set-1.png' },
  { title: 'Plates', from: '$37.00', image: '/plate-1-main.png' },
  { title: 'Pitchers', from: '$24.00', image: '/kensho-pitcher-hover.png' },
  { title: 'Cups', from: '$12.00', image: '/cups-1-main.png' }
]
</script>

<template>
  <section class="py-12 px-4 bg-cream">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Large Left Image -->
      <div class="relative group overflow-hidden rounded-lg">
        <img
            :src="categories[0].image"
            :alt="categories[0].title"
            class="w-full h-full object-cover filter brightness-75 transition duration-300 group-hover:brightness-100"
        />
        <div class="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 class="text-2xl font-semibold">{{ categories[0].title }}</h3>
          <p class="text-sm">From {{ categories[0].from }}</p>
          <a href="#" class="mt-2 text-sm underline">See Products</a>
        </div>
      </div>

      <!-- Right Images -->
      <div class="grid grid-rows-2 gap-6">
        <!-- Top Right -->
        <div class="relative group overflow-hidden rounded-lg">
          <img
              :src="categories[1].image"
              :alt="categories[1].title"
              class="w-full h-full object-cover filter brightness-75 transition duration-300 group-hover:brightness-100"
          />
          <div class="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h3 class="text-xl font-semibold">{{ categories[1].title }}</h3>
            <p class="text-sm">From {{ categories[1].from }}</p>
            <a href="#" class="mt-2 text-sm underline">See Products</a>
          </div>
        </div>

        <!-- Bottom Right Two -->
        <div class="grid grid-cols-2 gap-6">
          <div class="relative group overflow-hidden rounded-lg">
            <img
                :src="categories[2].image"
                :alt="categories[2].title"
                class="w-full h-full object-cover filter brightness-75 transition duration-300 group-hover:brightness-100"
            />
            <div class="absolute inset-0 flex flex-col justify-end p-4 text-white">
              <h4 class="text-lg font-semibold">{{ categories[2].title }}</h4>
              <p class="text-sm">From {{ categories[2].from }}</p>
              <a href="#" class="mt-1 text-xs underline">See Products</a>
            </div>
          </div>
          <div class="relative group overflow-hidden rounded-lg">
            <img
                :src="categories[3].image"
                :alt="categories[3].title"
                class="w-full h-full object-cover filter brightness-75 transition duration-300 group-hover:brightness-100"
            />
            <div class="absolute inset-0 flex flex-col justify-end p-4 text-white">
              <h4 class="text-lg font-semibold">{{ categories[3].title }}</h4>
              <p class="text-sm">From {{ categories[3].from }}</p>
              <a href="#" class="mt-1 text-xs underline">See Products</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>