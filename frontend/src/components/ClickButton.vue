<template>
    <button class="custom-button">
        {{ label }}
    </button>
</template>

<script setup lang="ts">

interface Props {
    label: string;
    color1?: string;
    color2?: string;
    animationDuration?: number;
}

const props = withDefaults(defineProps<Props>(), {
    label: 'Click Me',
    color1:'#ffffff', 
    color2:'#d0d0d0',
    animationDuration: 5
});

</script>