<script setup lang="ts">
const tailwindConfig = require("../tailwind.config.js");

console.log(tailwindConfig);
</script>

<template>
    <main>
        <NuxtLoadingIndicator color="#ee5f53" :height="5" />
        <slot />
    </main>
</template>
