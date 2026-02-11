<template>
  <div class="home">
    <h1>Welcome to GameLib</h1>
    <p>A game library with all your favorite games</p>
    <RouterLink to="/games" class="cta-button">Browse Games</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: #333;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 1rem;
}
</style>