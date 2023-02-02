<template>
  <main>
    <h1>{{ title }}</h1>
    <button @click="increment">Click to increment: {{ count }}</button>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('Vue 3 + TS + Vite')
const count = ref<number>(0)

function increment() {
  count.value += 1
}
</script>

<style scoped>
main {
  background-color: seagreen;
}

button {
  display: inline-flex;
  padding: .5rem 1rem;
  background-color: white;
  border-radius: .25rem;
  color: seagreen;
  border: none;
  cursor: pointer;
  font-weight: 500;
}

button:hover {
  opacity: .75;
}
</style>