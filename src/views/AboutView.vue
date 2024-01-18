<script setup lang="ts">
import { useAnimateInOut } from '@/composables/useAnimateInOut'
import { ref } from 'vue'

const animateContainer = ref<HTMLDivElement | null>(null)

useAnimateInOut(animateContainer)
</script>
<template>
  <div ref="animateContainer" class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
