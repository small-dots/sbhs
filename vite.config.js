/** 
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-25 15:53:03
 * @LastEditTime: 2022-04-28 16:06:27
 * @Description: vite 配置文件
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend()
  ],
  /* 自定义打包输入路径 */
  build: {
    outDir: 'sbh-web-vue',
    rollupOptions: {
      output: {
        // 最小化拆分包
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: 'js/[name].[hash].js',
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: 'js/[name].[hash].js',
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: '[ext]/[name].[hash].[ext]',
        // 拆分js到模块文件夹
        // chunkFileNames: (chunkInfo) => {
        //     const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
        //     const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
        //     return `js/${fileName}/[name].[hash].js`;
        // },
      },
    },
  },
  /* 自定义路径别名 */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src/components'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'views': path.resolve(__dirname, 'src/views'),
      'lib': path.resolve(__dirname, 'src/lib'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'layouts': path.resolve(__dirname, 'src/layouts'),
    }
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
        引入var.scss全局预定义变量，
        如果引入多个文件，
        可以使用
        '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
        这种格式
         */
        additionalData: '@import "@/styles/global.scss";',
      },
    }
  },
  server: {
    port: 8088,
    proxy: {
      /* 基础平台 */
      '/shb_base_api': {
        target: 'http://47.108.83.220:8099',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/shb_base_api/, '')
      },
    }
  }
})
