import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImportTypes from 'auto-import-types'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImportTypes(),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'vue',
        'uni-app',
        // 'pinia',
        // {
        //   '@/helper/pinia-auto-refs': ['useStore']
        // }
      ],
      exclude: ['createApp'],
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      extensions: ['vue'],
      dts: 'src/components.d.ts'
    }),
    uni(),
  ],
});
