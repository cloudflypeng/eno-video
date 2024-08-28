import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import '../styles'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { createPinia } from 'pinia'
import App from './Options.vue'
import Home from './home/index.vue'
import Setting from './setting/index.vue'
import Search from './search/index.vue'
import { setupApp } from '~/logic/common-setup'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/setting', component: Setting },
  ],
})

const pinia = createPinia()

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(router)
app.use(pinia)
setupApp(app)
app.mount('#app')
