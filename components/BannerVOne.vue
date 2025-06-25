<script setup lang="ts">

</script>

<template>
  <section class="bg-cream py-12">
    <div class=" mx-auto grid grid-cols-1 md:grid-cols-2 items-center  gap-8 px-6">
      <!-- Text Column -->
      <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h2 class="text-3xl md:text-4xl font-semibold text-dark leading-tight">
          It takes a bit of care to make it last a lifetime.
        </h2>
        <a href="#" class="inline-flex items-center text-dark font-medium hover:text-light-green">
          Shop all products
          <Icon name="mdi-arrow-right" size="20" class="ml-2" />
        </a>
      </div>

      <!-- Image Column -->
      <div>
        <!-- Replace with your image at /assets/care-lifetime.jpg -->
        <img
            src="/hero-ceramics.png"
            alt="Products displayed on a table"
            class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>