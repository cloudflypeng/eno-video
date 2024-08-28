import { backgroundListener } from '@meanc/webext-fetch'

backgroundListener()

browser.action?.onClicked.addListener(() => {
  browser.runtime.openOptionsPage()
})
// only on dev mode
if (import.meta.hot) {
  // @ts-expect-error for background HMR
  import('/@vite/client')
  // load latest content script
  import('./contentScriptHMR')
}

// chrome.action?.onClicked.addListener(() => {
//   chrome.runtime.openOptionsPage()
// })

// // only on dev mode
// if (import.meta.hot) {
//   // @ts-expect-error for background HMR
//   import('/@vite/client')
//   // load latest content script
// }
