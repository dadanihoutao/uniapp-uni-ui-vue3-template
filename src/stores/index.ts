import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

// 创建实例
const pinia = createPinia()
// 使用持久化插件
pinia.use(persist)

// 默认导出给 main.ts 使用
export { pinia }

// // 模块统一导出
export * from './modules/member'
