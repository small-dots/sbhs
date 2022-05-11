<template>
  <div class="profile_center">
    <div class="profile">
      <div class="left_container">
        <div class="profile_avatar">
          <img src="https://s6.jpg.cm/2022/05/03/LxJpJh.png" alt="个人图像" />
          <div class="profile_name">
            <icon-man />
            {{ usernmae }}
          </div>
          <div class="role">语文老师</div>
          <a-button type="primary">积分：15</a-button>
        </div>
        <div class="menu_list">
          <a-menu
            :style="{
              width: 'width: 25%',
              height: 'height:100%',
              borderRadius: '4px',
            }"
            :default-open-keys="['0']"
            :level-indent="40"
            :selected-keys="[defaultSelected]"
            :auto-scroll-into-view="true"
            :default-selected-keys="[defaultSelected]"
            @menu-item-click="menuClick"
          >
            <a-sub-menu key="0">
              <template #icon><icon-apps></icon-apps></template>
              <template #title>我的首页</template>
              <a-menu-item key="/my_collection">我的收藏</a-menu-item>
              <a-menu-item key="/my_footprint">我的足迹</a-menu-item>
              <a-menu-item key="/my_follow">我的关注</a-menu-item>
              <a-menu-item key="/my_fans">我的粉丝</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="/my_message">
              <template #icon><icon-notification /></template>
              <template #title>动态消息</template>
              <a-menu-item key="/msg_system">系统消息</a-menu-item>
              <a-menu-item key="/msg_follow">关注动态</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="/class_student">
              <template #icon><icon-bulb></icon-bulb></template>
              <template #title>班级学生</template>
              <a-menu-item key="/my_class">我的班级</a-menu-item>
              <a-menu-item key="/my_student">我的学生</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="3">
              <template #icon><icon-bulb></icon-bulb></template>
              <template #title>我的课程安排</template>
              <a-menu-item key="3_0">在线备课</a-menu-item>
              <a-menu-item key="3_1">我的课程安排</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="4">
              <template #icon><icon-bulb></icon-bulb></template>
              <template #title>我的视频</template>
              <a-menu-item key="4_0">上传视频</a-menu-item>
              <a-menu-item key="4_1">我的视频</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="5">
              <template #icon><icon-bulb></icon-bulb></template>
              <template #title>我的课件</template>
              <a-menu-item key="5_0">上传课件</a-menu-item>
              <a-menu-item key="5_1">我的课件</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="6">
              <template #icon><icon-bulb></icon-bulb></template>
              <template #title>我的提问</template>
              <a-menu-item key="6_0">我的提问</a-menu-item>
              <a-menu-item key="6_1">我的回复</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </div>
      <div class="right_container">
        <a-menu
          v-if="!hidenTopTab"
          mode="horizontal"
          :default-selected-keys="[menuItemList[0].path]"
          :selected-keys="[defaultSelected]"
          @menu-item-click="tabMenuClick"
        >
          <a-menu-item v-for="menuItem in menuItemList" :key="menuItem.path">
            <div v-if="!menuItem.meta.tabUnShow">
              <a-badge v-if="menuItem.meta.msg" :count="18" :offset="[12, -8]">
                <span>{{ menuItem.meta.tabName }}</span>
              </a-badge>
              <span v-else>{{ menuItem.meta.tabName }}</span>
            </div>
          </a-menu-item>
        </a-menu>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useMenuStore } from "@/store";
const menuItemList = ref([]); // 个人中心顶部的tab页签
const router = useRouter();
const hidenTopTab = ref(false); // 隐藏顶部tab页签
const menuStore = useMenuStore();
/* 默认选择的菜单 */
const defaultSelected = computed(() => {
  return menuStore.defaultSelected;
}); // 默认选中的菜单
const usernmae = computed(() => {
  return JSON.parse(localStorage.getItem("userinfo")).loginname;
});
watch(
  () => router.currentRoute.value.matched,
  (newValue, oldValue) => {
    menuItemList.value = newValue[2].children;
  },
  { immediate: true }
);
watch(
  () => router.currentRoute.value,
  (newValue, oldValue) => {
    hidenTopTab.value = newValue?.meta?.hideTopTab;
  },
  { immediate: true }
);
/* 默认情况下，选中并且打开第一个菜单 */
onMounted(() => {
  menuStore.setDefaultSelected(menuItemList.value[0].path);
});

/* 点击左侧菜单 */
const menuClick = (key) => {
  key && router.push({ path: key });
  key && menuStore.setDefaultSelected(key);
};
/* 点击顶部tab菜单 */
const tabMenuClick = (key) => {
  key && router.push({ path: key });
  key && menuStore.setDefaultSelected(key);
};
</script>
<style lang="scss" scoped>
.profile_center {
  width: 100%;
  background: #f7f8fa;
  .profile {
    width: 70%;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    .left_container {
      width: 25%;
      margin-right: 20px;
      .profile_avatar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 290px;
        border-radius: 3px;
        background: url("@/assets/images/profile/profile_bg.png") no-repeat
          bottom #ffffff;
        background-size: 100%;
        img {
          width: 104px;
          height: 104px;
          object-fit: cover;
          border: 3px solid $--primary-6;
          border-radius: 50%;
        }
        .profile_name {
          font-size: 18px;
          color: #000000;
          margin: 5px 0;
          font-weight: bold;
          svg {
            color: #165dff;
          }
        }
        .role {
          font-size: 14px;
          color: #777777;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
      .menu_list {
        margin-top: 20px;
        height: calc(100% - 400px);
      }
    }
    .right_container {
      width: 75%;
    }
  }
}
</style>