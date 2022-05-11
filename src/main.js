/** 
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-25 15:53:03
 * @LastEditTime: 2022-04-29 15:20:51
 */
import { createApp } from 'vue'
import App from './App.vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import loadComponents from 'lib/arco-design-component'
import 'video.js/dist/video-js.css';
import moment from 'moment'
import router from './route'
import store from './store';

const app = createApp(App)
app.use(ArcoVueIcon);
app.use(router)
app.use(store);
app.config.globalProperties.$moment = moment
loadComponents(app) // 加载arco组件
app.mount('#app')