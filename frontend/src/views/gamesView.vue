<template>
    <div class="games-view">
        <AnimatedTitle text="Games" />
            <div v-if="loading">Loading...</div>
            <div v-else-if="error">Error: {{ error }}</div>
            <div v-else class="game-list-wrapper">
                <div 
                    ref="gameListRef" 
                    class="game-list"
                    @mouseenter="pauseScroll"
                    @mouseleave="resumeScroll"
                >
                    <gameCard v-for="game in games" :key="`first-${game.spill_id}`" :game="game" />
                    <gameCard v-for="game in games" :key="`second-${game.spill_id}`" :game="game" />
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
import gameCard from '../components/gameCard.vue';
import AnimatedTitle from '../components/AnimatedTitle.vue';
import { ref, onMounted, nextTick } from 'vue';
import gsap from 'gsap';

interface Game {
    spill_id: number;
    navn: string;
    utgivelsesdato: string;
    sjanger: string;
}

const games = ref<Game[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);
const gameListRef = ref<HTMLElement | null>(null);
let scrollTween: gsap.core.Tween | null = null;

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
        await nextTick();
        startScrollAnimation();
    }
});

const startScrollAnimation = () => {
    if (!gameListRef.value) return;
    
    scrollTween = gsap.to(gameListRef.value, {
        x: '-50%',
        duration: 40,
        ease: 'none',
        repeat: -1
    });
};

const pauseScroll = () => {
    if (!scrollTween) return;
    gsap.to(scrollTween, {
        timeScale: 0,
        duration: 1,
        ease: 'power2.out'
    });
};

const resumeScroll = () => {
    if (!scrollTween) return;
    gsap.to(scrollTween, {
        timeScale: 1,
        duration: 1,
        ease: 'power2.in'
    });
};
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
}
</style>
