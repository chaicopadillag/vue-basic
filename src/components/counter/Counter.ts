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
