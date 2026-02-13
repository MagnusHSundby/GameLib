<template>
    <div class="games-view">
        <h1>Games</h1>
            <div v-if="loading">Loading...</div>
            <div v-else-if="error">Error: {{ error }}</div>
            <div v-else class="game-list-wrapper">
                <div class="game-list">
                    <gameCard v-for="game in games" :key="`first-${game.spill_id}`" :game="game" />
                    <gameCard v-for="game in games" :key="`second-${game.spill_id}`" :game="game" />
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
import gameCard from '../components/gameCard.vue';
import { ref, onMounted } from 'vue';

interface Game {
    spill_id: number;
    navn: string;
    utgivelsesdato: string;
    sjanger: string;
}

const games = ref<Game[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
    try {
        const response = await fetch('/api/games');
        if (!response.ok) {
            throw new Error(`Error fetching games: ${response.statusText}`);
        }
        games.value = await response.json();
    } catch (err: any) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
});
</script>

<style scoped>
.games-view {
    padding: 2rem;
}

.game-list-wrapper {
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.game-list {
    display: flex;
    width: fit-content;
    animation: scroll 40s linear infinite;
}

@keyframes scroll {
    0% { 
        transform: translateX(0); 
    }
    100% { 
        transform: translateX(-50%); 
    }
}

.game-list:hover {
    animation-play-state: paused;
}

h1 {
    text-align: center;  
}
</style>
