import { useChat } from '@/composables/useChat';

import { describe, expect, it } from 'vitest';

describe('useChat.ts', () => {
  it('should validate if the message is empty', async () => {
    const { messages, onMessage } = useChat();
    expect(messages.value.length).toBe(0);
    await onMessage('');
    expect(messages.value.length).toBe(0);
  });

  it('should return messages and onMessage', async () => {
    const text = 'Hello, World!';
    const { messages, onMessage } = useChat();

    expect(messages.value.length).toBe(0);
    await onMessage(text);
    expect(messages.value.length).toBe(1);
    expect(messages.value[0].message).toBe(text);
  });

  it('should return messages and onMessage with question', async () => {
    const text = 'Is this a question?';
    const { messages, onMessage } = useChat();

    expect(messages.value.length).toBe(0);
    await onMessage(text);
    expect(messages.value.length).toBe(2);
    expect(messages.value[0].message).toBe(text);
    expect(messages.value[1]).toEqual(
      expect.objectContaining({
        isReceived: true,
        message: expect.any(String),
        imageUrl: expect.any(String),
      }),
    );
  });
});
