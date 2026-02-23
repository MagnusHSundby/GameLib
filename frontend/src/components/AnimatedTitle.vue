<template>
  <h1 ref="titleRef" class="animated-title">
    {{ text }}
  </h1>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

interface Props {
  text: string;
  color1?: string;
  color2?: string;
  animationDuration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  color1:'#4fc3f7',
  color2:'#64b5f6',
  animationDuration: 5
});

const titleRef = ref<HTMLElement | null>(null);

onMounted(() => {
  gsap.from(titleRef.value, {
    scale: 0.5,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(2)',
    rotation: -10
  });

  gsap.to(titleRef.value, {
    backgroundPosition: '200% center',
    duration: props.animationDuration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
});
</script>

<style scoped>
.animated-title {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(90deg, v-bind('props.color1'), v-bind('props.color2'), v-bind('props.color1'), v-bind('props.color2'));
  background-size: 200% auto;
  background-position: 0% center;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
