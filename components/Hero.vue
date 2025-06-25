<script setup lang="ts">

</script>

<template>
  <section class="relative flex flex-col-reverse md:flex-row items-center bg-cream h-screen bg-cover bg-center overflow-hidden bg-[url('/ceramics-1.png')] mt-10">
    <!-- Text block -->
    <div class="w-full md:w-1/2 px-6 py-12">
      <h1 class="text-4xl md:text-5xl font-semibold text-dark leading-tight mb-6">
        Handcrafted with care for memorable moments
      </h1>
      <NuxtLink
          to="/shop"
          class="inline-flex items-center text-dark font-medium hover:text-light-green"
      >
        Shop the Collection
        <Icon name="mdi-arrow-right" size="20" class="ml-2" />
      </NuxtLink>
    </div>

    <!-- Image block
    <div class="w-full md:w-1/2">

      <img
          src="/hero-ceramics.png"
          alt="Ceramic products displayed"
          class="w-full h-auto object-cover"
      />
    </div>
-->

  </section>


</template>

<style scoped>

</style>