<template>
  <div class="relative bg-gradient-to-b from-pink-200 to-pink-100 text-black pt- pb-1">
    <Background />

    <section class="relative flex flex-col min-h-screen items-center px-4 pt-16">
      <h1 class="text-6xl mb-7" style="font-family: 'Playfair Display', serif">
        Poliana Rodriguez
      </h1>
      <p class="text-lg text-center leading-relaxed max-w-2xl mb-8">
        Olá! meu nome é <strong>Poliana Gomes Rodriguez</strong>, estudante de Análise e
        Desenvolvimento de Sistemas na Unimar.<br />
        Ainda estou explorando o mundo do Front-End, agora estudando Vue 3, Vite e Tailwind para
        criar interfaces modernas e responsivas.<br />
        No meu tempo livre, gosto de participar de hackathons, contribuir em projetos open-source e
        aprender novas bibliotecas que deixem a web mais bonita e acessível.
      </p>

      <img src="../assets/imgs/poliana.jpg" alt="Poliana" class="w-32 h-32 rounded-full mb-8" />

      <hr class="border-t border-black w-1/2 mx-auto mb-7" />

      <div class="flex space-x-6">
        <a href="https://github.com/PolianaRodz" target="_blank" class="hover:text-blue-500">
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/polianarodz/"
          target="_blank"
          class="hover:text-pink-500"
        >
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/@silk_roadd" target="_blank" class="hover:text-red-500">
          <i class="fab fa-youtube fa-2x"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import Background from '@/components/Background.vue'
</script>

<style scoped>
i.fab {
  transition: color 0.2s;
}
</style>
