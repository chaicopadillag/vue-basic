import type { ChatMessage } from '@/components/chat/interfaces/ChatType';
import type { YesNoType } from '@/components/chat/interfaces/yes-no.response-type';
import { v4 as uuid } from 'uuid';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getHerResponse = async () => {
    try {
      const response = await fetch('https://yesno.wtf/api');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: YesNoType = await response.json();

      return data;
    } catch (error) {
      console.log('There has been a problem with your fetch operation:', error);
    }
  };

  const onMessage = async (message: string) => {
    if (message === '') {
      return;
    }

    messages.value.push({
      id: uuid(),
      message: message,
      isReceived: false,
    });

    if (message.endsWith('?')) {
      const resp = await getHerResponse();

      if (resp) {
        messages.value.push({
          id: uuid(),
          message: resp.answer,
          isReceived: true,
          imageUrl: resp.image,
        });
      }
    }
  };

  return {
    messages,
    onMessage,
  };
};
