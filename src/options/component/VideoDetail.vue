<script setup lang="ts">
import Drawer from 'primevue/drawer'
import Button from 'primevue/button'
import { computed } from 'vue'
import { useSettingStore } from '../store/setting'

const settingStore = useSettingStore()

function close() {
  settingStore.currentVideo = {}
  settingStore.isShowVideoDetail = false
}

const videoData = computed(() => {
  return settingStore.currentVideo
})
// 分集
const episodes = computed(() => {
  const url = settingStore.currentVideo.vod_play_url

  // 先用# 区分集,再用$区分url
  const urls = url.split('#')

  const res = urls.map((item: string) => {
    const [name, url] = item.split('$')
    return {
      name,
      url,
    }
  })

  return res.filter((item: any) => item.name !== '')
})
function play(url: string) {
  // console.log(url)
  window.open(url, '_blank')
}
</script>

<template>
  <div class="w-[50vw]">
    <Drawer
      v-model:visible="settingStore.isShowVideoDetail"
      class="px-5 py-3 overflow-y-auto"
      style="width: 50vw;"
      @close="close"
    >
      <template #container>
        <h2 class="text-2xl font-bold mb-2">
          {{ videoData.vod_name }}
        </h2>
        <img class="w-[240px] aspect-[9/12] object-cover" :src="videoData.vod_pic" alt="video cover">
        <!-- <Button label="播放" class="w-32" /> -->
        <div class="text-sm my-2 flex flex-wrap gap-2">
          <Button v-for="episode in episodes" :key="episode.name" :label="`${episode.name}`" class="w-32" @click="play(episode.url)" />
        </div>
        <!-- vod_content -->
        <div class="text-sm my-2">
          <span class="font-bold">简介：</span>
          <span v-html="videoData.vod_content" />
        </div>
        <!-- vod_director -->
        <div class="text-sm my-2">
          <span class="font-bold">导演：</span>
          {{ videoData.vod_director }}
        </div>
        <!-- vod_writer -->
        <div class="text-sm my-2">
          <span class="font-bold">编剧：</span>
          {{ videoData.vod_writer }}
        </div>
        <!-- vod_class -->
        <div class="text-sm my-2">
          <span class="font-bold">分类：</span>
          {{ videoData.vod_class }}
        </div>
        <!-- vod_area -->
        <div class="text-sm my-2">
          <span class="font-bold">地区：</span>
          {{ videoData.vod_area }}
        </div>
        <!-- vod_pubdate -->
        <div class="text-sm my-2">
          <span class="font-bold">年份：</span>
          {{ videoData.vod_pubdate }}
        </div>
      </template>
    </Drawer>
  </div>
</template>
