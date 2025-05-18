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
            Olá! Eu me chamo Poliana Gomes Rodriguez e ainda estou na faculdade de Análise e
            Desenvolvimento de Sistema. Estudo Front-End, e estou sempre mexendo com HTML, CSS e
            JavaScript para tirar ideias do papel.
          </p>
          <p>
            Gosto de usar Tailwind pra montar páginas que funcionem bem em qualquer tela. Nos meus
            projetos, já fiz desde sites com clima dos anos 2000 até pequenas aplicações que puxam
            dados de APIs externas. Fora do código, me aventuro no pixel art com Aseprite e dou meus
            primeiros passos criando jogos simples em Ren’Py.
          </p>
          <p>
            Estou aprendendo React, TypeScript e Python por conta própria, testando o quanto consigo
            evoluir a cada dia.
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
