import { computed, ref } from 'vue';

export const useCounter = (initialCount: number) => {
  const count = ref(initialCount);
  const square = computed(() => count.value * count.value);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return { count, square, increment, decrement };
};
