<script setup lang="ts">
const props = defineProps<{
  blok: {
    body: any
    _uid: string
  }
}>()
</script>

<template>
  <div>
    <StoryblokComponent v-for="_blok in props.blok.body" :key="_blok._uid" :blok="_blok" />
  </div>
</template>
