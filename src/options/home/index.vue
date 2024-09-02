<script lang="ts" setup>
import { onMounted, watch } from 'vue'
import ProgressSpinner from 'primevue/progressspinner'
import api from '../api'
import { useSettingStore } from '../store/setting'
import MovieCard from '../component/movie-card.vue'

interface prdRes {
  list: object[]
  page: number
  class: { type_id: string, type_name: string }[]
}
type MovieContent = Record<string, any>

const settingStore = useSettingStore()
const currentSubscription = settingStore.currentSubscription

const types: Ref<any[]> = ref([])
const movies = ref<MovieContent>({})
const loading = ref(false)

function init() {
  loading.value = true
  types.value = []

  api.getTypes(currentSubscription.url).then((res) => {
    types.value = (res as prdRes).class

    if (types.value.length) {
      types.value.forEach((type) => {
        api.getMoviesByType(currentSubscription.url, type.type_id).then((res) => {
          const list = (res as prdRes).list
          if (!list?.length)
            return
          movies.value[type.type_id] = list
        })
      })
    }
  }).finally(() => {
    loading.value = false
  })
}

watch(currentSubscription, () => {
  init()
})
onMounted(() => {
  init()
})
</script>

<template>
  <div class="py-10">
    <h1 class="text-2xl font-bold mb-4">
      ENO-VIDEO
    </h1>
    <ProgressSpinner v-if="loading" />
    <div v-for="type in types" v-else :key="type.type_id">
      <div v-if="movies[type.type_id]">
        <span class="text-xl font-bold mb-2">
          {{ type.type_name }}
        </span>
        <div class="flex gap-4 overflow-auto mb-5">
          <div class="flex gap-4">
            <MovieCard
              v-for="item in movies[type.type_id]"
              :key="item.id"
              :video-data="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 修改滚动条样式 */
::-webkit-scrollbar {
  width: 5px;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f111;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #888;
}

.dark ::-webkit-scrollbar-track {
  background: black;
}

.dark ::-webkit-scrollbar-thumb {
  background: #3c3c3c;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
