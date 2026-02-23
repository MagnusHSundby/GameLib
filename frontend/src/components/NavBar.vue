<template>
  <header ref="headerRef">
    <nav>
      <RouterLink 
        v-for="(link, index) in links" 
        :key="link.path"
        :to="link.path"
        :ref="el => linkRefs[index] = el as any"
        class="nav-link"
        @mouseenter="onLinkHover(index)"
        @mouseleave="onLinkLeave(index)"
      >
        {{ link.name }}
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const headerRef = ref<HTMLElement | null>(null);
const linkRefs = ref<any[]>([]);

const links = [
  { name: 'Home', path: '/' },
  { name: 'Games', path: '/games' }
];

onMounted(() => {   
  gsap.from(headerRef.value, {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  const linkElements = linkRefs.value.map(ref => ref.$el);
  gsap.from(linkElements, {
    opacity: 0,
    y: -20,
    duration: 0.5,
    stagger: 0.15,
    delay: 0.3,
    ease: 'back.out(1.7)'
  });
});

const onLinkHover = (index: number) => {
  gsap.to(linkRefs.value[index].$el, {
    scale: 1.1,
    textShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
    duration: 0.3,
    ease: 'power2.out'
  });
};

const onLinkLeave = (index: number) => {
  gsap.to(linkRefs.value[index].$el, {
    scale: 1,
    textShadow: '0 0 0px rgba(255, 255, 255, 0)',
    duration: 0.3,
    ease: 'power2.out'
  });
};
</script>   

<style scoped>
header {
    padding: 1rem;
    background: rgba(30, 34, 53, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    color: white;
}

nav {
    display: flex;
    gap: 1.5rem;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: none;
    display: inline-block;
    padding: 0.5rem 1.2rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
}

.nav-link.router-link-active {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
}
</style>
