<template>
  <div 
    ref="cardRef" 
    class="game-card"
    @mouseenter="onHover"
    @mouseleave="onLeave"
  >
    <h2>{{ game.navn }}</h2>
    <p>{{ game.sjanger }}</p>
    <p class="date">Released: {{ formatDate(game.utgivelsesdato) }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

interface Game {
  spill_id: number;
  navn: string;
  utgivelsesdato: string;
  sjanger: string;
}

defineProps<{
  game: Game;
}>();

const cardRef = ref<HTMLElement | null>(null);
const isHovered = ref(false);

const formatDate = (isoDate: string) => {
  return new Date(isoDate).toLocaleDateString();
};

onMounted(() => {
  gsap.from(cardRef.value, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out'
  });
});

const onHover = () => {
  if (isHovered.value) return;
  isHovered.value = true;
  
  gsap.to(cardRef.value, {
    scale: 1.05,
    boxShadow: '0 8px 24px rgba(79, 195, 247, 0.3)',
    duration: 0.5,
    ease: 'power1.out',
    overwrite: 'auto'
  });
};

const onLeave = () => {
  isHovered.value = false;
  
  gsap.to(cardRef.value, {
    scale: 1,
    boxShadow: '0 2px 8px rgba(79, 195, 247, 0.1)',
    duration: 0.5,
    ease: 'power1.out',
    overwrite: 'auto',
    onComplete: () => {
      gsap.to(cardRef.value, {
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        duration: 0.3,
        ease: 'power1.out'
      });
    }
  });
};
</script>

<style scoped>
.game-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px;
  margin: 16px;
  min-width: 200px;
  border-radius: 12px;
  color: #e0e0e0;
}

.game-card h2 {
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.game-card p {
  margin: 0.3rem 0;
  color: #b0b0b0;
}

.game-card .date {
  color: #888;
  font-size: 0.9rem;
}
</style>

