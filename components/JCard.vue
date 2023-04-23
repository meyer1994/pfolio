<script setup>
const { title, body } = defineProps(['title', 'body'])
</script>

<template>
  <h3 v-if="title" class="text-lg font-bold"># {{ title }} </h3>
  <hr class="border-2 border-dotted border-slate-400 my-4 rounded">
  <div v-if="body"> {{ body }} </div>
</template>