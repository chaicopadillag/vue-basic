<template>
  <div class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ message }}</span>
    </div>
    <img v-if="imageUrl" :src="imageUrl" alt="No Image" class="w-52 h-52 object-cover rounded-md" />
  </div>
</template>

<script setup lang="ts">
import type { MessageProps } from '@/components/chat/interfaces/ChatType';

defineProps<MessageProps>();
</script>
