<script setup lang="ts">
import Dock from './component/dock.vue'
</script>

<template>
  <main class="">
    <Dock />
    <div class="h-screen overflow-y-auto px-20">
      <RouterView />
    </div>
  </main>
</template>
