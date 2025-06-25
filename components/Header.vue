<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => { isOpen.value = !isOpen.value }
</script>

<template>
  <header class="flex justify-between items-center px-6 py-4 bg-[#F6C3B5] fixed top-0 z-10 w-full">
    <!-- Hamburger / Close Button -->
    <button @click="toggleMenu" class="flex items-center text-dark focus:outline-none">
      <Icon :name="isOpen ? 'mdi-close' : 'mdi-menu'" size="24" />
      <span class="ml-2 font-medium text-lg text-dark">Shop</span>
    </button>

    <!-- Optional Logo or Brand Placeholder -->
    <div class="hidden md:block">
      <NuxtLink to="/" class="font-bold text-xl text-dark">BRS</NuxtLink>
    </div>

    <!-- Cart & Search Placeholder -->
    <div class="hidden md:flex items-center space-x-4">
      <Icon name="mdi-magnify" size="24" class="text-dark" />
      <Icon name="mdi-cart-outline" size="24" class="text-dark" />
    </div>

    <!-- Side Menu Drawer -->
    <transition name="slide">
      <aside
          v-if="isOpen"
          class="fixed inset-0 bg-[#C1E1C1] bg-opacity-95 backdrop-blur-sm flex flex-col z-50 max-w-3xl"
      >
        <!-- Drawer Header -->
        <div class="flex items-center p-6 border-b border-gray-300">
          <button @click="toggleMenu" class="focus:outline-none">
            <Icon name="mdi-close" size="24" class="cursor-pointer" />
          </button>
          <span class="ml-4 font-semibold text-xl text-dark">Shop</span>
        </div>

        <!-- Drawer Links -->
        <nav class="flex-1 overflow-y-auto p-6 space-y-6 text-lg font-medium text-dark">
          <ul class="space-y-4">
            <li><NuxtLink to="/shop" class="block hover:text-light-green">Shop All</NuxtLink></li>
            <li><a href="#" class="block hover:text-light-green">Plates</a></li>
            <li><a href="#" class="block hover:text-light-green">Pitchers</a></li>
            <li><a href="#" class="block hover:text-light-green">Cups</a></li>
            <li><a href="#" class="block hover:text-light-green">Tableware Sets</a></li>
          </ul>
          <hr class="border-gray-300" />
          <ul class="mt-6 space-y-4 text-base font-normal">
            <li><a href="#" class="block hover:text-light-green">FAQs</a></li>
            <li><a href="#" class="block hover:text-light-green">Contact Us</a></li>
          </ul>
        </nav>
      </aside>
    </transition>
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>