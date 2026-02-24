<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" role="dialog" aria-modal="true" @click.stop>
      <h3>Do you confirm?</h3>
      <div class="button-container">
        <button @click="$emit('close')" class="btn-no">No</button>
        <button @click="$emit('confirm')" class="btn-yes">Yes</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  close: [];
  confirm: [];
}>();
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
  padding: 1.5rem;
  width: 16rem;
}

.modal-content h3 {
  margin: 0 0 1rem 0;
  font-size: 1.125rem;
  font-weight: 600;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
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
  background-color: #3b82f6;
  color: white;
}

.btn-yes:hover {
  background-color: #2563eb;
}
</style>
