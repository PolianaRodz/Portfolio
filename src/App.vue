<template>
  <div class="flex flex-col bg-pink-100">
    <Navbar />

    <main><router-view /></main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Background from '@/components/Background.vue'
</script>
