<template>
  <nav class="bg-pink-200">
    <div class="container mx-auto px-4">
      <ul class="flex justify-end space-x-8 py-4">
        <li>
          <router-link to="/" class="text-black hover:text-pink-800 transition"> Home </router-link>
        </li>
        <li>
          <router-link to="/sobre" class="text-black hover:text-pink-800 transition">
            Sobre
          </router-link>
        </li>
        <li>
          <router-link to="/contato" class="text-black hover:text-pink-800 transition">
            Contato
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
