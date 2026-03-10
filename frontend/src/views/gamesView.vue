<template>
  <div class="games-view">
    <AnimatedTitle text="Games" colcolor2="#d0d0d0" or1="#ffffff" />
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div
      v-else
      class="game-list-wrapper"
      @mouseenter="pauseScroll"
      @mouseleave="resumeScroll"
    >
      <div ref="gameListRef" class="game-list">
        <gameCard
          v-for="game in games"
          :key="game.spill_id"
          :game="game"
          class="game-card-item"
        />
      </div>
    </div>
    <div class="add-game-button">
      <ClickButton label="Add Games" @click="openConfirm" />
      <Teleport to="#modal">
        <AddGameModal
          v-if="modal.show.value"
          @close="closeModal"
          @confirm="handleConfirm"
        />
      </Teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import gameCard from "../components/gameCard.vue";
import AnimatedTitle from "../components/AnimatedTitle.vue";
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import gsap from "gsap";
import ClickButton from "../components/ClickButton.vue";
import AddGameModal from "@/components/AddGameModal.vue";
import { useModal } from "../composables/useModal";
import { markRaw } from "vue";

const modal = useModal();
const openConfirm = () => {
  modal.component.value = markRaw(AddGameModal);
  modal.showModal();
};
const closeModal = () => modal.hideModal();
const handleConfirm = () => modal.hideModal();

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

let loopTl: gsap.core.Timeline | null = null;

// ── horizontalLoop helper ────────────────────────────────────────────────────
function horizontalLoop(items: Element[], config: any = {}) {
  const tl = gsap.timeline({
    repeat: -1,
    paused: false,
    defaults: { ease: "none" },
  });

  const length = items.length;
  const startX = (items[0] as HTMLElement).offsetLeft;
  const times: number[] = [];
  const widths: number[] = [];
  const xPercents: number[] = [];
  const pixelsPerSecond = (config.speed || 1) * 100;
  const snap =
    config.snap === false
      ? (v: number) => v
      : gsap.utils.snap(config.snap || 1);

  gsap.set(items, {
    xPercent: (i: number, el: Element) => {
      const w = (widths[i] = parseFloat(
        gsap.getProperty(el, "width", "px") as string,
      ));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
          (gsap.getProperty(el, "xPercent") as number),
      );
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });

  const lastItem = items[length - 1] as HTMLElement;
  const totalWidth =
    lastItem.offsetLeft +
    (xPercents[length - 1]! / 100) * widths[length - 1]! -
    startX +
    lastItem.offsetWidth * (gsap.getProperty(lastItem, "scaleX") as number) +
    (parseFloat(config.paddingRight) || 0);

  for (let i = 0; i < length; i++) {
    const item = items[i] as HTMLElement;
    const curX = (xPercents[i]! / 100) * widths[i]!;
    const distanceToStart = item.offsetLeft + curX - startX;
    const distanceToLoop =
      distanceToStart +
      widths[i]! * (gsap.getProperty(item, "scaleX") as number);

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]!) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0,
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]!) * 100,
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond,
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);

    times[i] = distanceToStart / pixelsPerSecond;
  }

  tl.progress(1, true).progress(0, true);

  return tl;
}
// ────────────────────────────────────────────────────────────────────────────

onMounted(async () => {
  try {
    const response = await fetch("/api/games");
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

onUnmounted(() => {
  loopTl?.kill();
});

const pauseScroll = () => {
  if (!loopTl) return;
  gsap.to(loopTl, { timeScale: 0, duration: 0.8, ease: "power2.out" });
};

const resumeScroll = () => {
  if (!loopTl) return;
  gsap.to(loopTl, { timeScale: 1, duration: 0.8, ease: "power2.in" });
};

const startScrollAnimation = () => {
  if (!gameListRef.value) return;
  const items = Array.from(
    gameListRef.value.querySelectorAll(".game-card-item"),
  );
  if (!items.length) return;

  loopTl = horizontalLoop(items, {
    speed: 0.35,
    repeat: -1,
    paused: false,
    paddingRight: 16,
  });
};
</script>

<style scoped>
.games-view {
  padding: 2rem;
}

.game-list-wrapper {
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}

.game-list {
  display: flex;
  width: fit-content;
}

.add-game-button {
  margin-top: 2rem;
  text-align: center;
}
</style>
