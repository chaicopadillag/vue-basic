import { useCounter } from '@/composables/useCounter';
import { describe, expect, test } from 'vitest';

describe('useCounter.ts', () => {
  test('should counter show initial data', () => {
    const initialCount = 10;
    const { count } = useCounter(initialCount);

    expect(count.value).toBe(initialCount);
  });

  test('should increment the counter', () => {
    const initialCount = 6;

    const { count, square, increment } = useCounter(initialCount);

    increment();
    expect(count.value).toBe(initialCount + 1);
    expect(square.value).toBe((initialCount + 1) * (initialCount + 1));
  });

  test('should decrement the counter', () => {
    const initialCount = 4;

    const { count, square, decrement } = useCounter(initialCount);

    decrement();
    expect(count.value).toBe(initialCount - 1);
    expect(square.value).toBe((initialCount - 1) * (initialCount - 1));
  });
});
