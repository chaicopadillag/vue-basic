<template>
  <section>
    <h2>Counter Script</h2>
    <p>{{ count }}</p>
    <hr />
    <h2>Square</h2>
    <p>{{ square }}</p>
    <div class="flex gap-4">
      <button class="btn" type="button" @click="count++">Increment</button>
      <button class="btn" type="button" @click="count--">Decrement</button>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    initialCount: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const count = ref(props.initialCount);
    const square = computed(() => count.value * count.value);

    return {
      count,
      square,
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
