<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const route = useRoute()
const url = decodeURIComponent(route.query.url as string)

const videoPlayer = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (url && videoPlayer.value) {
    videojs(videoPlayer.value, {
      sources: [{ src: url, type: 'application/x-mpegURL' }],
      autoplay: true,
      preload: 'auto',
      controls: true,
      playbackRates: [0.5, 1, 1.5, 2],
      language: 'zh-CN',
    })
  }
})
</script>

<template>
  <video ref="videoPlayer" class="video-js w-full aspect-video " />
</template>
