<script setup lang="ts">
import Dock from 'primevue/dock'
import { useSettingStore } from '../store/setting'

const settingStore = useSettingStore()
const items = [
  {
    label: 'Home',
    icon: '<span class="icon-[solar--home-bold-duotone]"></span>',
    activeIcon: '<span class="icon-[solar--home-bold]"></span>',
    to: '/',
  },
  {
    label: 'Search',
    icon: '<span class="icon-[solar--calendar-search-bold-duotone]"></span>',
    activeIcon: '<span class="icon-[solar--calendar-search-bold]"></span>',
    to: '/search',
  },
  {
    label: 'Setting',
    icon: '<span class="icon-[solar--settings-minimalistic-bold-duotone]"></span>',
    activeIcon: '<span class="icon-[solar--settings-minimalistic-bold]"></span>',
    to: '/setting',
  },
]
</script>

<template>
  <Dock
    :model="items" :position="settingStore.dock.position"
    class="bg-black"
  >
    <template #item="{ item }">
      <RouterLink :to="item.to" class="dock-item">
        <div class="text-2xl text-white">
          <span v-html="item.icon" />
        </div>
      </RouterLink>
    </template>
  </Dock>
</template>
