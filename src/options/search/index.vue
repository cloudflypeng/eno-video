<script lang="ts" setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import MovieCard from '../component/movie-card.vue'
import { useSettingStore } from '../store/setting'
import api from '../api'
import type { VideoCoverType } from '../store/types'

const settingStore = useSettingStore()
const currentSubscription = settingStore.currentSubscription
const keyword = ref('')
const result: Ref<VideoCoverType[]> = ref([])
const loading = ref(false)
function search() {
  loading.value = true
  api.search(currentSubscription.url, {
    wd: keyword.value,
  }).then((res) => {
    result.value = res.list as VideoCoverType[]
  }).finally(() => {
    loading.value = false
  })
}
</script>

<template>
  <section class="flex flex-col gap-4 items-start p-4">
    <div class="flex flex-row gap-4 items-center justify-center w-full">
      <InputText v-model="keyword" @keyup.enter="search" />
      <Button label="搜索" :loading="loading" @click="search" />
      <span v-if="!loading && result.length" class="px-3">{{ `${result.length} 条结果` }}</span>
    </div>
    <div class="flex gap-4 flex-wrap">
      <MovieCard
        v-for="item in result"
        :key="item.id"
        :video-data="item"
      />
    </div>
  </section>
</template>
