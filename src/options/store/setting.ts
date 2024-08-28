import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import type { VideoCoverType } from '../types/video'

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
  isShowVideoDetail: boolean
  currentVideo: VideoCoverType
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
    isShowVideoDetail: false,
    currentVideo: {},
  }),
  actions: {
    addSubscription(subscription: Subscription) {
      this.subscription.push(subscription)
    },
  },
})
