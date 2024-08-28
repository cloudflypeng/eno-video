<script lang="ts" setup>
import Card from 'primevue/card'
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
  <Card class="flex flex-col shadow-lg hover:shadow-xl" style="width: 240px;" @click="handleClick">
    <template #content>
      <img class="w-full aspect-[9/12] object-cover" :src="videoData.vod_pic" alt="video cover">
      <div class="text-sm my-2">
        {{ videoData.vod_name }}
      </div>
    </template>
  </Card>
</template>
