<script setup lang="ts">
import { useAnimateInOut } from '@/composables/useAnimateInOut'
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'

const animateContainer = ref<HTMLDivElement | null>(null)

useAnimateInOut(animateContainer)
</script>

<template>
  <main ref="animateContainer">
    <TheWelcome />
  </main>
</template>
