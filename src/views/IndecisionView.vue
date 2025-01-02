<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages="messages" />

    <MessageBox @on-message="onMessage" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/components/chat/interfaces/ChatType';
import MessageBox from '@/components/chat/message-box/MessageBox.vue';
import { v4 as uuid } from 'uuid';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([]);

const onMessage = (message: string) => {
  messages.value.push({
    id: uuid(),
    message: message,
    isReceived: false,
  });
};
</script>
