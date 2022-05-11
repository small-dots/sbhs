// 导入构造函数
import { createPinia } from 'pinia';
import useMenuStore from './modulers/menu';
// import useUserStore from './modulers/user';

// 实例化 Pinia
const pinia = createPinia()

export { useMenuStore };
export default pinia;