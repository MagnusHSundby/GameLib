<template>
    <div class="games-view">
        <h1>Games</h1>
        <div class="game-list">
            <Gamecard :game="{ name: 'Chess', description: 'A classic strategy game' }"/>
            <Gamecard :game="{ name: 'Checkers', description: 'A simple board game' }"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Gamecard from '../components/gameCard.vue';
</script>