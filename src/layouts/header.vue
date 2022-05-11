<template>
  <div>
    <div class="header_main">
      <div class="header_main_top">
        <div class="header_main_top_left">
          <p>您好！欢迎进入智慧校园系统</p>
          <div>
            日期：{{ currentDate }}&nbsp;&nbsp;北京时间：{{ currentTime }}
          </div>
        </div>
        <div class="header_main_top_right">
          <div style="cursor: pointer">联系我们</div>
          <div style="cursor: pointer">政策说明</div>
          <div class="header_main_top_right_btns">
            <div class="userName" v-if="userInfo.loginname">
              <p @click="profile(userInfo.rolecode)">
                {{ userInfo.loginname }}
              </p>
              <div style="cursor: pointer"><icon-export />退出</div>
            </div>
            <a-button
              v-if="!userInfo.loginname"
              type="primary"
              shape="round"
              size="mini"
              @click="signin"
              >登录</a-button
            >
            <a-button
              v-if="!userInfo.loginname"
              type="primary"
              shape="round"
              status="warning"
              size="small"
              @click="signup"
              >注册</a-button
            >
          </div>
        </div>
      </div>

      <div class="header_main_middle">
        <div class="header_main_middle_title">硕博海未来学校系统</div>
        <div class="header_main_middle_right">
          <div>
            <a-input-search
              :style="{ width: '520px', height: '35px' }"
              placeholder="请输入关键词进行搜索"
              search-button
              size="large"
            >
              <template #button-icon>
                <icon-search />
              </template>
              <template #button-default> 搜索 </template>
            </a-input-search>
          </div>
          <div class="header_main_middle_right_contact1">
            <icon-wechat size="22" />关注我们
          </div>
          <div class="header_main_middle_right_contact2">
            <icon-phone size="22" />联系方式：<span
              class="header_main_middle_right_contact_phone"
              >0931-7326429</span
            >
          </div>
        </div>
      </div>

      <div class="header_main_bottom">
        <div class="header_main_bottom_menu">
          <div
            class="header_main_bottom_menu_item"
            v-for="(menu, index) in menuList"
            :key="index"
            :class="{
              header_main_bottom_menu_item_active:
                currentMenu === menu.menuName,
            }"
            @click="handleMenuClick(menu, index)"
          >
            {{ menu.name }}
          </div>
        </div>
      </div>
    </div>
    <login :showModal="showLoginPanel" @close="showLoginPanel = false" />
    <register
      :showRegisterModal="showRegisterModal"
      @close="showRegisterModal = false"
    />
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import {
  computed,
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
  watch,
} from "vue";
import { useMenuStore } from "@/store";
import login from "@/components/login/index.vue";
import register from "@/components/register/index.vue";
const menuProps = defineProps({
  menuList: {
    type: Object,
    default: () => [],
  },
});
const userInfo = computed(() => {
  return JSON.parse(localStorage.getItem("userinfo") || "{}");
});
const menuStore = useMenuStore();
const showLoginPanel = ref(false);
const showRegisterModal = ref(false);
const router = useRouter();
const currentMenu = ref("");
watch(
  () => router.currentRoute.value.name,
  (newValue, oldValue) => {
    currentMenu.value = newValue;
  },
  { immediate: true }
);
const currentDate = computed(() => {
  return new Date().toLocaleDateString();
});
const currentTime = ref(new Date().toLocaleTimeString());
/* 菜单点击事件 */
const handleMenuClick = (menu, index) => {
  if (menu.path) {
    router.push({ name: menu.menuName });
  }
  menuStore.setCurrentHeaderMenu({ ...menu });
};
/* 登录 */
const signin = () => {
  if (localStorage.getItem("userinfo") === null) {
    showLoginPanel.value = true;
  } else {
    /* 跳转到个人中心 */
  }
};
/* 注册 */
const signup = () => {
  showRegisterModal.value = true;
};
onMounted(() => {
  /* 初始化时，被激活菜单为菜单列表中第一个菜单 */
  menuStore.setCurrentHeaderMenu({ ...menuProps.menuList[0] } || {});
  setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString();
  }, 1000);
});
onBeforeUnmount(() => {
  clearInterval();
});
const profile = (rolecode) => {
  //老师
  router.push({ path: "profile" });
};
</script>
<style lang="scss" scoped>
.header_main {
  width: 100%;
  &_top {
    height: 30px;
    background: #eeeeee;
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    &_left {
      width: 50%;
      height: 100%;
      color: #666666;
      display: flex;
      align-items: center;
      & > div {
        margin-left: 45px;
      }
    }
    &_right {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      &_btns {
        .userName {
          display: flex;
          p {
            cursor: pointer;
            margin: 0 10px;
            color: $--primary-6;
          }
        }
        & > button {
          width: 60px;
          margin: 0 5px;
        }
      }
      & > div {
        margin: 0 20px;
      }
    }
  }
  &_middle {
    height: 65px;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 8%;
    justify-content: space-between;
    &_title {
      font-size: 24px;
    }
    &_right {
      display: flex;
      align-items: center;
      & > div {
        margin: 0 20px;
        font-size: 16px;
      }
      &_contact1 {
        svg {
          color: #009688;
        }
      }
      &_contact2 {
        svg {
          color: $--warning-9;
        }
      }
      &_contact1,
      &_contact2 {
        display: flex;
        align-items: center;
        & > svg {
          margin: 0 5px;
        }
        &_phone {
          font-size: 22px;
          font-weight: 600;
        }
      }
    }
  }
  &_bottom {
    height: 40px;
    background: rgba(58, 63, 83, 1);
    padding: 0 10%;
    &_menu {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      height: 100%;
      &_item {
        color: #fff;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        cursor: pointer;
        height: 100%;
        transition: all 0.5s ease;
        &:hover {
          background: $--primary-6;
        }
        &_active {
          background: $--primary-6;
        }
      }
    }
  }
}
</style>
