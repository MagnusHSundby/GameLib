<template>
  <button class="custom-button" @mouseenter="onHover" @mouseleave="onLeave">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";

interface Props {
  label: string;
  color1?: string;
  color2?: string;
  animationDuration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  label: "Click Me",
  color1: "#ffffff",
  color2: "#d0d0d0",
  animationDuration: 10,
});

onMounted(() => {
  const button = document.querySelector(".custom-button");

  gsap.from(button, {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
  });
});

const onHover = () => {
  const button = document.querySelector(".custom-button");

  gsap.to(button, {
    scale: 1.005,
    boxShadow: "0 4px 15px rgba(79, 195, 247, 0.15)",
    duration: 0.1,
    ease: "power2.out",
  });
};

const onLeave = () => {
  const button = document.querySelector(".custom-button");

  gsap.to(button, {
    scale: 1,
    boxShadow: "0 1px 10px rgba(79, 195, 247, 0.1)",
    duration: 0.1,
    ease: "power2.out",
  });
};
</script>

<style scoped>
.custom-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ffffff, #d0d0d0);
  color: rgb(77, 74, 74);
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
  font-weight: 600;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}
</style>
