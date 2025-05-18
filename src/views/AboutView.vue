<template>
  <div class="relative min-h-screen bg-gradient-to-b from-pink-200 to-pink-100 text-black">
    <Background />

    <section class="relative pt-10 px-4">
      <h2 class="text-4xl font-extrabold text-center mb-12 font-cinzel">Sobre Mim</h2>
      <div class="max-w-5xl mx-auto flex lg:flex-row items-center lg:items-start gap-12">
        <div class="flex-shrink-0">
          <img src="../assets/imgs/computer-icon-png-black-4.jpg" alt="pc" class="w-64 h-64" />
        </div>

        <div class="space-y-6 text-lg leading-relaxed text-gray-800">
          <p>
            Na seção de Front-End, uso HTML, CSS e JavaScript para tirar ideias do papel e venho me aprofundando em Vue 3, Vite e Tailwind para criar interfaces modernas e responsivas. 
            Também adoro testar novas bibliotecas e ferramentas que tragam mais agilidade e personalidade aos meus projetos.
          </p>
          <p>
            Minhas primeiras lembranças de internet são dos anos 2000, com sites cheios de cores vibrantes e GIFs piscando — foi ali que nasceu meu interesse por criação online. 
            Hoje, sempre busco trazer um toque nostálgico aos meus trabalhos, seja com um componente animado, um ícone retrô ou um layout colorido.
          </p>
          <p>
            No meu tempo livre, contribuo em projetos open-source, corrigindo bugs ou implementando pequenas melhorias que ajudem outras pessoas na web. 
            Fora do código, faço pixel art no Aseprite para explorar aquela estética antiga e estou aprendendo Ren’Py (Python) para criar visual novels simples, unindo programação e narrativa de forma prática.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Background from '@/components/Background.vue'
</script>

<style scoped>
.font-cinzel {
  font-family: 'Cinzel', serif;
}
</style>
