<script setup>
const description = `
My name is João [ʒu\ˈɐ̃w] and I am a software developer. I was born in Brazil 
but am currently working in Dublin, Ireland. I like to play around with new 
technologies and I am not afraid to learn new stuff. It does not matter how 
complex or different it might be, I\'ll try build something with cool it :)
`.trim()
</script>

<template>
<NuxtLayout>
  <JCard title="Who am I?" :body="description"></JCard>
</NuxtLayout>
</template>
