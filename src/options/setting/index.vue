<script lang="ts" setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Listbox from 'primevue/listbox'
import { useSettingStore } from '../store/setting'

const settingStore = useSettingStore()
const name = ref('')
const url = ref('')

function addSubscription() {
  settingStore.addSubscription({
    name: name.value,
    url: url.value,
  })
}
</script>

<template>
  <section class="flex flex-col gap-4 items-start p-4">
    <div class="flex flex-row gap-4">
      <InputText v-model="name" placeholder="名称" />
      <InputText v-model="url" placeholder="URL" />
      <Button label="添加订阅" @click="addSubscription" />

    <!-- 列表 -->
    </div>
    <div class="flex gap-2">
      <div>当前订阅：</div>
      <div v-if="settingStore.currentSubscription">
        {{ settingStore.currentSubscription.name }}
      </div>
      <div v-else>
        当前没有订阅
      </div>
    </div>
    <Listbox
      v-model="settingStore.currentSubscription"
      class="w-1/2"
      :options="settingStore.subscription"
      option-label="name"
    />
  </section>
</template>
