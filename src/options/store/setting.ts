import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import type { VideoCoverType } from '../types/video'

interface Subscription {
  name: string
  url: string
  status: 'available' | 'unavailable' | 'unknown'
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
      status: 'unknown',
    }),
    subscription: useLocalStorage('subscription', []),
    isShowVideoDetail: false,
    currentVideo: {},
  }),
  actions: {
    addSubscription(subscription: Subscription) {
      this.subscription.push({
        ...subscription,
        status: 'unknown',
      })
    },
    checkSubscriptionStatus() {
      this.subscription.forEach(async (subscription) => {
        const response = await fetch(subscription.url)
        if (response.ok) {
          subscription.status = 'available'
        }
        else {
          subscription.status = 'unavailable'
        }
      })
    },
  },
})
