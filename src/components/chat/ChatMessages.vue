<template>
  <div ref="refChat" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <template v-for="{ id, message, isReceived, imageUrl } in messages">
        <ReceivedMessage v-if="isReceived" :message="message" :image-url="imageUrl" :key="id" />
        <SendMessage v-else :message="message" :key="`${id}`" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ChatMessage } from '@/components/chat/interfaces/ChatType';
import ReceivedMessage from '@/components/chat/messages/ReceivedMessage.vue';
import SendMessage from '@/components/chat/messages/SendMessage.vue';
import { ref, watch } from 'vue';

type Props = {
  messages: ChatMessage[];
};

const props = defineProps<Props>();

const refChat = ref<HTMLDivElement>();

watch(props.messages, () => {
  setTimeout(() => {
    refChat.value?.scrollTo({
      top: refChat.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
});
</script>
