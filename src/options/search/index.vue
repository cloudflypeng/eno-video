<script lang="ts" setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import VideoCover from '../component/VideoCover.vue'
import { useSettingStore } from '../store/setting'
import api from '../api'
import type { VideoCoverType } from '../store/types'

const settingStore = useSettingStore()
const currentSubscription = settingStore.currentSubscription
const keyword = ref('')
const result: Ref<VideoCoverType[]> = ref([])
function search() {
  api.search(currentSubscription.url, {
    wd: keyword.value,
  }).then((res) => {
    result.value = res.list as VideoCoverType[]
  })
}
</script>

<template>
  <section class="flex flex-col gap-4 items-start p-4">
    <InputText v-model="keyword" />
    <Button label="搜索" @click="search" />
    <div class="flex gap-4 flex-wrap">
      <VideoCover
        v-for="item in result"
        :id="item.id"
        :key="item.id"
        :name="item.name"
        :pic="item.pic"
      />
    </div>
  </section>
</template>
