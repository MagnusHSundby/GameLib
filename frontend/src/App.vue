<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div id="app">
    <NavBar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  min-height: 100vh;
}
</style>

<style scoped>
main {
  padding: 2rem;
}
</style>