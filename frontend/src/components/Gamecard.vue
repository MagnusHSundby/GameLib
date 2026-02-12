<template>
  <div class="game-card">
    <h2>{{ game.navn }}</h2>
    <p>{{ game.sjanger }}</p>
    <p class="date">{{ game.utgivelsesdato }}</p>
  </div>
</template>

<script setup lang="ts">
interface Game {
  spill_id: number;
  navn: string;
  utgivelsesdato: string;
  sjanger: string;
}

defineProps<{
  game: Game;
}>();
</script>

<style scoped>
.game-card {
  border: 1px solid #b1adad;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
}
</style>

