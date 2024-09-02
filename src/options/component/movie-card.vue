<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import type { VideoCoverType } from '../store/types'
import { useSettingStore } from '../store/setting'

const props = defineProps<{
  videoData: VideoCoverType
}>()

const settingStore = useSettingStore()

function handleClick() {
  settingStore.currentVideo = props.videoData
  settingStore.isShowVideoDetail = true
}
</script>

<template>
  <Card
    class="overflow-hidden group bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300" style="width: 240px;"
  >
    <template #header>
      <div class="relative">
        <img
          :src="videoData.vod_pic"
          alt="电影海报"
          class="w-full aspect-[9/12] object-cover transition-transform duration-300 group-hover:scale-105"
        >
        <div class="absolute top-2 right-2">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {{ videoData.vod_douban_score || '暂无' }}
          </span>
        </div>
      </div>
    </template>

    <template #content>
      <div class="">
        <h2 class="text-2xl font-bold mb-2 truncate dark:text-white">
          {{ videoData.vod_name }}
        </h2>
        <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>{{ videoData.vod_year }}</span>
          <span>•</span>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ videoData.vod_duration }}</span>
          </div>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2" v-html="videoData.vod_content || '<p>暂无简介</p>'" />
        <Button class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300 flex items-center justify-center" @click="handleClick">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
          </svg>
          立即观看
        </Button>
      </div>
    </template>
  </Card>
</template>

<style scoped>
</style>
