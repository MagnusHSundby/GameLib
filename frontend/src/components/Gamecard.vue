<template>
  <div class="game-card">
    <h2>{{ game.navn }}</h2>
    <p>{{ game.sjanger }}</p>
    <p class="date">Released: {{ formatDate(game.utgivelsesdato) }}</p>
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

const formatDate = (isoDate: string) => {
  return new Date(isoDate).toLocaleDateString();
};
</script>

<style scoped>
.game-card {
  border: 1px solid #b1adad;
  padding: 16px;
  margin: 16px;
  min-width: 200px;
  border-radius: 8px;
}

</style>

