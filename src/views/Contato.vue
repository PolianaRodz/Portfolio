<template>
  <section id="contato" class="py-20 text-gray-800 min-h-screen">
    <div class="container mx-auto px-4 max-w-xl">
      <h2 class="text-4xl font-bold text-center mb-12">Contato</h2>

      <form class="space-y-6">
        <div>
          <label for="nome" class="block font-medium mb-1">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome"
            class="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div>
          <label for="email" class="block font-medium mb-1">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="seu@exemplo.com"
            class="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div>
          <label for="mensagem" class="block font-medium mb-1">Mensagem</label>
          <textarea
            id="mensagem"
            rows="5"
            placeholder="Escreva sua mensagem..."
            class="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          ></textarea>
        </div>

        <button
          type="button"
          class="w-full bg-pink-400 text-white font-semibold py-3 rounded hover:bg-pink-500 transition"
        >
          Enviar
        </button>
      </form>

      <div class="mt-12 flex justify-center space-x-8">
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
      </div>
    </div>
  </section>
</template>
