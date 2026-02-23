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
  background: linear-gradient(135deg, #1e2235 0%, #1a2845 100%);
  min-height: 100vh;
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