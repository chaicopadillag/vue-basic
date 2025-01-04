import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/components/chat/interfaces/ChatType';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('<ChatMessages />', () => {
  const messages: ChatMessage[] = [
    {
      id: 'd4fcc6fe-2535-4475-967c-e6a0beb0688d',
      message: 'Hello',
      isReceived: true,
    },
    {
      id: 'd4fcc6fe-2535-4475-967c-e6a0beb0688f',
      message: 'Hi',
      isReceived: false,
    },
  ];

  it('should render the component', () => {
    const wrapper = mount(ChatMessages, {
      props: {
        messages,
      },
    });

    const chatSenddMessage = wrapper.findAllComponents({ name: 'SendMessage' });
    const chatReceivedMessage = wrapper.findAllComponents({ name: 'ReceivedMessage' });

    expect(chatSenddMessage.length).toBe(1);
    expect(chatReceivedMessage.length).toBe(1);
  });

  it('should move scroll to bottom when new message is added', async () => {
    const wrapper = mount(ChatMessages, {
      props: {
        messages,
      },
    });

    const chatMessages = wrapper.find('.overflow-y-auto');

    const scrollHeight = chatMessages.element.scrollHeight;
    chatMessages.element.scrollTop = 0;

    await wrapper.setProps({
      messages: [
        ...messages,
        {
          id: 'd4fcc6fe-2535-4475-967c-e6a0beb0688e',
          message: 'How are you?',
          isReceived: true,
        },
      ],
    });

    // await new Promise((resolve) => setTimeout(resolve, 150));

    expect(chatMessages.element.scrollTop).toBe(scrollHeight);
  });
});
