import { defineStore } from 'pinia';
export const useMenuStore = defineStore('menu', {
  state: () => ({
    header_menu: [],
    current_header_menu: {},// 当前被激活的菜单
    default_selected: '',// 默认选中的菜单
  }),

  getters: {
    /* 获取当前被激活菜单 */
    currentHeaderMenu(state) {
      return state.current_header_menu;
    },
    /* 获取当前被激活菜单-个人中心 */
    defaultSelected(state){
      return state.default_selected
    }
  },
  actions: {
    /* 设置当前被激活的菜单 */
    setCurrentHeaderMenu(current) {
      return new Promise((resolve) => {
        this.current_header_menu = current;
        resolve(this.current_header_menu);
      });
    },
    /* 设置当前被激活的菜单-个人中心 */
    setDefaultSelected(current) {
      return new Promise((resolve) => {
        this.default_selected = current;
        resolve(this.default_selected);
      });
    }
  },
});
export default useMenuStore;
