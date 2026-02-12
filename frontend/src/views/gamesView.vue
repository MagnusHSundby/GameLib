<template>
    <div class="games-view">
        <h1>Games</h1>
            <div v-if="loading">Loading...</div>
            <div v-else-if="error">Error: {{ error }}</div>
            <div v-else class="game-list">
                <gameCard v-for="game in games" :key="game.spill_id" :game="game" />
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