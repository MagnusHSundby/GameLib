<template>
  <div class="game-card">
    <h2>{{ game.name }}</h2>
    <p>{{ game.description }}</p>
  </div>
</template>

<script setup lang="ts">
interface Game {
  name: string;
  description: string;
}

defineProps<{
  game: Game;
}>();
</script>

<style scoped>
.game-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
}
</style>

