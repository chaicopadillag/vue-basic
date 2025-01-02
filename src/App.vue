<template>
  <div>
    <h1>Vue 3 + TypeScript + Vite</h1>
    <p>Start coding your Vue 3 + TypeScript app here!</p>
  </div>
  <MyCounter :initial-count="15" />
  <CounterScript :initial-count="10" />
  <CounterComponent :initial-count="30" />
</template>

<script lang="ts" setup>
import CounterComponent from './components/counter/CounterComponent.vue';
import CounterScript from './components/CounterScript.vue';
import MyCounter from './components/MyCounter.vue';
</script>
