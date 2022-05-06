import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/

export default (({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [
      vue(),
      Components({
        dirs: ['src/shared'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
        deep: true,
        resolvers: [ElementPlusResolver()], // ui库解析器
        dts: 'src/shared/components.d.ts'
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 设置 '@' 指向 'src' 目录
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    css: {
      // css预处理
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/index.scss";'
        }
      }
    },
    base: './', // 设置打包路径
    server: {
      port: 3000, // 服务启动端口
      open: false, // 服务启动是否打开浏览器
      cors: true, // 是否可跨域
      proxy: { // 设置代理
        '/api': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          secure: false, // 如果是https接口，需要配置这个参数
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  });
});
