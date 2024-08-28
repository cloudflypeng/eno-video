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
function removeSubscription(subscription: any) {
  settingStore.subscription = settingStore.subscription.filter((item: any) => item.name !== subscription.name)
  if (settingStore.currentSubscription?.name === subscription.name) {
    settingStore.currentSubscription = settingStore.subscription[0]
  }
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
    <div>
      <Button label="检测可用订阅" />
    </div>
    <Listbox
      v-model="settingStore.currentSubscription"
      class="w-1/2"
      :options="settingStore.subscription"
      option-label="name"
      checkmark
    >
      <template #option="slotProps">
        <div class="flex flex-1 items-center justify-between">
          {{ slotProps.option.name }}
          <div>
            <span class="icon-[solar--close-circle-line-duotone]" @click="removeSubscription(slotProps.option)" />
          </div>
        </div>
      </template>
    </Listbox>
  </section>
</template>
