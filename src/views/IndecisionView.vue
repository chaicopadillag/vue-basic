<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages="messages" />

    <MessageBox />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/components/chat/interfaces/ChatType';
import MessageBox from '@/components/chat/message-box/MessageBox.vue';
import { v4 as uuid } from 'uuid';

const messages: ChatMessage[] = [
  {
    id: uuid(),
    message: 'Hola, ¿cómo estás?',
    isReceived: false,
  },
  {
    id: uuid(),
    message: 'Hola, bien gracias, ¿y tú?',
    isReceived: true,
  },
  {
    id: uuid(),
    message: 'Bien también, gracias',
    isReceived: false,
  },
  {
    id: uuid(),
    message: '¿Qué has hecho hoy?',
    isReceived: false,
  },
  {
    id: uuid(),
    message: 'He estado trabajando en el jardín',
    isReceived: true,
  },
  {
    id: uuid(),
    message: '¡Qué bien! ¿Qué has plantado?',
    isReceived: false,
  },
  {
    id: uuid(),
    message: 'He plantado flores y tomates',
    isReceived: true,
  },
  {
    id: uuid(),
    message: '¡Qué bonito! ¿Puedo ver una foto?',
    isReceived: false,
  },
  {
    id: uuid(),
    message: 'Claro, aquí tienes',
    isReceived: true,
    imageUrl: 'https://images.unsplash.com/photo-1628582037264-3b3b3b3b3b3b',
  },
  {
    id: uuid(),
    message: '¡Qué bonito! ¿Puedo ver una foto?',
    isReceived: false,
  },
  {
    id: uuid(),
    message: 'Claro, aquí tienes',
    isReceived: true,
    imageUrl: 'https://images.unsplash.com/photo-1628582037264-3b3b3b3b3b3b',
  },
];
</script>
