import { createSSRApp } from 'vue'
import App from './App.vue'
// 导入 pinia 实例
import { pinia } from './stores'

export function createApp() {
  const app = createSSRApp(App)
  // 使用 pinia
  app.use(pinia)

  return {
    app
  }
}
