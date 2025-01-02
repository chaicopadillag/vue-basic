<template>
  <div>
    <h1>Vue 3 + TypeScript + Vite</h1>
    <p>Start coding your Vue 3 + TypeScript app here!</p>
  </div>
  <section>
    <h2>Counter</h2>
    <p>{{ count }}</p>
    <hr />
    <h2>Square</h2>
    <p>{{ square }}</p>
    <button type="button" @click="count++">Increment</button>
    <button type="button" @click="count--">Decrement</button>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const count = ref(2);
const square = computed(() => count.value * count.value);
</script>
