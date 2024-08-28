<script setup lang="ts">
import Dock from 'primevue/dock'
import { useDark } from '@vueuse/core'
import { useSettingStore } from '../store/setting'

const isDark = useDark()

const settingStore = useSettingStore()
const items = computed(() => (
  [
    {
      label: 'Home',
      icon: '<span class="icon-[solar--home-bold-duotone]"></span>',
      activeIcon: '<span class="icon-[solar--home-bold]"></span>',
      to: '/',
      tooltip: 'Home',
    },
    {
      label: 'Search',
      icon: '<span class="icon-[solar--calendar-search-bold-duotone]"></span>',
      activeIcon: '<span class="icon-[solar--calendar-search-bold]"></span>',
      to: '/search',
      tooltip: 'Search',
    },
    {
      label: 'Setting',
      icon: '<span class="icon-[solar--settings-minimalistic-bold-duotone]"></span>',
      activeIcon: '<span class="icon-[solar--settings-minimalistic-bold]"></span>',
      to: '/setting',
      tooltip: 'Setting',
    },
    {
      label: 'Dark',
      icon: !isDark.value ? '<span class="icon-[solar--moon-bold-duotone]"></span>' : '<span class="icon-[solar--sun-bold]"></span>',
      activeIcon: '<span class="icon-[solar--moon-bold]"></span>',
      tooltip: 'theme',
    },
  ]
),
)
function handleClick(e: any, item: any) {
  if (!item.to) {
    if (item.label === 'Dark') {
      isDark.value = !isDark.value
    }
  }
}
</script>

<template>
  <Dock
    :model="items" :position="settingStore.dock.position"
  >
    <template #item="{ item }">
      <RouterLink :to="item.to || '#'" class="dock-item">
        <div
          :class="`text-2xl ${isDark ? 'text-white' : 'text-black'}`"
          @click="e => handleClick(e, item)"
        >
          <span v-html="item.icon" />
        </div>
      </RouterLink>
    </template>
  </Dock>
</template>
