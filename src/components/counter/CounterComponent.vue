<template>
  <section>
    <h2>Counter Component Modular</h2>
    <p>{{ count }}</p>
    <hr />
    <h2>Square</h2>
    <p>{{ square }}</p>
    <div class="flex gap-4">
      <button class="btn" type="button" @click="increment">Increment</button>
      <button class="btn" type="button" @click="decrement">Decrement</button>
    </div>
  </section>
</template>

<script lang="ts" src="./Counter.ts"></script>
