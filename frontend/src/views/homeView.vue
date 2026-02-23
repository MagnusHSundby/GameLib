<template>
  <div class="home">
    <AnimatedTitle text="Welcome to GameLib":animation-duration="10" />
    <p>A game library with all your favorite games</p>
    <RouterLink to="/games" class="cta-button">Browse Games</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AnimatedTitle from '../components/AnimatedTitle.vue';
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

.home p {
  color: #e0e0e0;
  font-size: 1.2rem;
  margin: 2rem 0;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ffffff, #d0d0d0);
  color: rgb(77, 74, 74);
  text-decoration: none;
  border-radius: 8px;
  margin-top: 1rem;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(79, 195, 247, 0.3);
}
</style>