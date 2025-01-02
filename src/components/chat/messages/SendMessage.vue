<template>
  <div class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ message }}</div>
  </div>
</template>
<script setup lang="ts">
import type { MessageProps } from '@/components/chat/interfaces/ChatType';

defineProps<MessageProps>();
</script>
