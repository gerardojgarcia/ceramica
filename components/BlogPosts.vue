<script setup lang="ts">
const posts = [
  {
    id: 1,
    date: 'August 26, 2021',
    title: 'How to make the perfect cheese board',
    image: '/ceramics-blog-2.png',
    href: '/'
  },
  {
    id: 2,
    date: 'August 20, 2021',
    title: 'How we make our pottery practice greener',
    image: '/ceramics-blog-5.png',
    href: '/'
  },
  {
    id: 3,
    date: 'August 13, 2021',
    title: 'Vietnamese fresh spring rolls',
    image: '/ceramics-blog-1.png',
    href: '/'
  }
]
</script>

<template>
  <section class="py-24 bg-cream">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-semibold text-dark">The Latest from our stories</h2>
        <a href="/" class="text-dark font-medium hover:text-light-green underline">Read All</a>
      </div>

      <!-- Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a
            v-for="post in posts"
            :key="post.id"
            :href="post.href"
            class="group block overflow-hidden rounded-lg"
        >
          <div class="overflow-hidden rounded-lg">
            <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-64 object-cover transform transition duration-300 group-hover:brightness-110 group-hover:scale-105"
            />
          </div>
          <div class="mt-4">
            <p class="text-sm text-gray-500">{{ post.date }}</p>
            <h3 class="text-xl font-medium text-dark mt-1">{{ post.title }}</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>