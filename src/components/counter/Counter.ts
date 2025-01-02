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
