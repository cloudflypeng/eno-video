<script setup lang="ts">
import Dock from './component/dock.vue'
import VideoDetail from './component/VideoDetail.vue'
</script>

<template>
  <main class="">
    <Dock />
    <VideoDetail />
    <div class="h-screen overflow-y-auto px-20">
      <RouterView />
    </div>
  </main>
</template>
