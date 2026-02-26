<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" role="dialog" aria-modal="true" @click.stop>
      <h3 class="modal-title">Add New Game</h3>
      <div class="input-container">
        <input
          v-model="gameName"
          type="text"
          placeholder="Game Name"
          class="input-field"
        />
        <input
          v-model="gameGenre"
          type="text"
          placeholder="Game Genre"
          class="input-field"
        />
        <input
          v-model="gameReleaseDate"
          type="date"
          placeholder="Release Date"
          class="input-field"
        />
      </div>
      <div class="button-container">
        <button @click="$emit('close')" class="btn-no">Go back</button>
        <button @click="handleConfirm" class="btn-yes">Add Game</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const gameName = ref("");
const gameGenre = ref("");
const gameReleaseDate = ref("");
const emit = defineEmits<{
  close: [];
  confirm: [
    payload: { gameName: string; gameGenre: string; gameReleaseDate: Date },
  ];
}>();

const handleConfirm = () => {
  emit("confirm", {
    gameName: gameName.value,
    gameGenre: gameGenre.value,
    gameReleaseDate: new Date(gameReleaseDate.value),
  });
  if (!gameName.value || !gameGenre.value || !gameReleaseDate.value) {
    alert("Please fill in all fields");
    return;
  }
  fetch("/api/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: gameName.value,
      genre: gameGenre.value,
      releaseDate: gameReleaseDate.value,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Game added successfully:", data);
    })
    .catch((error) => {
      console.error("Error adding game:", error);
    });
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  color: black;
  border-radius: 0.5rem;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 0rem 1.5rem 1.5rem 1.5rem;

  width: 45%;
  min-height: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
}

.modal-title {
  text-align: center;
  font-size: 1.5rem;
}
.modal-content {
  margin: 0 0 1rem 0;
  font-size: 1.125rem;
  font-weight: 600;
}

.button-container {
  display: flex;
  justify-content: center;  
  padding-top: 1rem;
}

.button-container button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn-no {
  border: 1px solid black;
  background-color: white;
  color: black;
}

.btn-no:hover {
  background-color: #f3f4f6;
}

.btn-yes {
  border: none;
background: linear-gradient(135deg, #1e2235 0%, #1a2845 100%);
  color: white;
}

.btn-yes:hover {
  background-color: #2563eb;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: auto;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.input-field {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  font-size: 1rem;
}
</style>
