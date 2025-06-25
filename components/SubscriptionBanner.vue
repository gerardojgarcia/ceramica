<script setup lang="ts">

</script>

<template>
  <section class="bg-[#FEFAE0] py-12">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
      <!-- Text & Form -->
      <div class="space-y-6 text-center md:text-left">
        <h2 class="text-3xl md:text-4xl font-semibold text-dark">
          Join the table
        </h2>
        <p class="text-base text-dark">
          Subscribe to our newsletter to get weekly inspiration and tasty recipes to serve in your new dinnerware.
        </p>
        <form class="flex justify-center md:justify-start">
          <input
              type="email"
              placeholder="Email Address"
              class="w-full md:w-auto flex-1 border border-gray-300 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-light-blue"
          />
          <button
              type="submit"
              class="bg-dark text-white font-medium py-3 px-6 rounded-r-lg hover:bg-gray-800 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
      <!-- Image -->
      <div>
        <img
            src="/bowl-set-1.png"
            alt="Dinnerware subscription"
            class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>