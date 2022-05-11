<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-27 15:26:41
 * @LastEditTime: 2022-04-27 16:25:52
 * @Description: 登录面盘
 -->
<template>
  <div class="login_panel_container">
    <div class="login_panel_container_title">硕博海未来学校系统</div>
    <div class="login_panel_container_tip">
      <div class="line_left"></div>
      <div class="text">根据您的需求，请选择你要登录的类别</div>
      <div class="line_right"></div>
    </div>
    <div class="login_panel_container_radios">
      <a-radio-group v-model="role">
        <a-radio value="T">我是老师</a-radio>
        <a-radio value="S">我是学生</a-radio>
        <a-radio value="P">我是家长</a-radio>
      </a-radio-group>
    </div>
    <div class="login_panel_container_otherlogin">
      <div class="icon_box">
        <div class="icon-box">
          <icon-font type="icon-qq" size="35" />
        </div>
        QQ登录
      </div>
      <div class="icon_box">
        <div class="icon-box">
          <icon-font type="icon-weixin" size="35" />
        </div>
        微信登录
      </div>
    </div>
    <div class="login_panel_container_condations">
      登录注册即表示您已阅读并同意<a href="">《硕博海未来学校用户协议》</a>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@arco-design/web-vue";
import { ref } from "vue";
const role = ref("T"); // 登录橘色
const IconFont = Icon.addFromIconFontCn({
  src: "https://at.alicdn.com/t/font_3363318_z4dnomr0r87.js",
});
</script>
<style lang="scss" scoped>
.login_panel_container {
  width: 430px;
  background-color: #fff;
  box-shadow: 0in 0in 0.5in rgba(0, 0, 0, 0.2);
  &_title {
    height: 50px;
    background: $--primary-6;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &_tip {
    padding: 0 10%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    & .line_left {
      height: 1px;
      flex: 1;
      background: $--gray-10;
    }
    & .text {
      color: $--gray-10;
      font-size: 14px;
      margin: 0 10px;
    }
    & .line_right {
      height: 1px;
      flex: 1;
      background: $--gray-10;
    }
  }

  &_radios {
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    & label {
      padding: 5px;
      border: 1px solid $--gray-4;
      border-radius: 5px;
    }
  }

  &_otherlogin {
    padding: 20px 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    & .icon_box {
      margin: 0 10px;
      width: 100px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      & .icon-box {
        height: 60px;
        width: 60px;
        transition: all 0.2s;
        border-radius: 50%;
        border: 1px solid $--gray-1;
        background: $--gray-1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
      }
    }
    & div {
      margin: 0 10px;
    }
  }

  &_condations{
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7f8fa;
    height: 50px;
    & a {
      color: $--primary-6;
      font-size: 12px;
    }
  }
}
</style>