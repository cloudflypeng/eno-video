<script lang="ts" setup>
import Card from 'primevue/card'

const props = defineProps<{
  id: number
  name: string
  pic: string
}>()

const { name, pic } = props
</script>

<template>
  <Card class="flex flex-col shadow-lg hover:shadow-xl" style="width: 240px;">
    <template #content>
      <img class="w-full aspect-[9/12] object-cover" :src="pic" alt="video cover">
      <div class="text-sm my-2">
        {{ name }}
      </div>
    </template>
  </Card>
</template>
