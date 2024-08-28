<script setup lang="ts">
import { useDark } from '@vueuse/core'
import Dock from './component/dock.vue'
import VideoDetail from './component/VideoDetail.vue'

const isDark = useDark()

watch(isDark, () => {
  const element = document.querySelector('html') as HTMLHtmlElement
  if (!element)
    return
  element.classList.toggle('dark')
})
</script>

<template>
  <main>
    <Dock />
    <VideoDetail />
    <div class="h-screen overflow-y-auto px-20">
      <RouterView />
    </div>
  </main>
</template>
