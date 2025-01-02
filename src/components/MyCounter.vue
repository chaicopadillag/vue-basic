<template>
  <section>
    <h2>Counter Setup</h2>
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

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

// import { computed, ref } from 'vue';

type CountType = {
  initialCount: number;
};

const { initialCount } = defineProps<CountType>();
const { count, square, decrement, increment } = useCounter(initialCount);

// const count = ref(initialCount);
// const square = computed(() => count.value * count.value);
</script>
