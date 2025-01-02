<template>
  <section>
    <h2>Counter Script</h2>
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

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    initialCount: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { count, square, decrement, increment } = useCounter(props.initialCount);

    return {
      count,
      square,
      decrement,
      increment,
    };
  },
});

// type CountType = {
//   initialCount: number;
// };

// const { initialCount } = defineProps<CountType>();

// const count = ref(initialCount);
// const square = computed(() => count.value * count.value);
</script>
