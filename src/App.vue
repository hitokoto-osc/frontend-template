<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: '@hitokoto/frontend-template',
  meta: [{ name: 'description', content: 'hitokoto used Template by itself' }]
})
</script>

<template>
  <router-view />
  <unocss-indicator />
</template>
