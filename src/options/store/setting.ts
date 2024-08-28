import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

interface Subscription {
  name: string
  url: string
}

interface SettingState {
  dock: {
    position: string
  }
  subscription: Ref<Subscription[]>
  currentSubscription: Ref<Subscription>
}

export const useSettingStore = defineStore('setting', {
  state: (): SettingState => ({
    dock: {
      position: 'left',
    },
    currentSubscription: useLocalStorage('currentSubscription', {
      name: '',
      url: '',
    }),
    subscription: useLocalStorage('subscription', []),
  }),
  actions: {
    addSubscription(subscription: Subscription) {
      this.subscription.push(subscription)
    },
  },
})
