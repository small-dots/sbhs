<template>
  <div class="login_panel">
    <a-modal
      width="900px"
      modal-class="login_panel_modal"
      v-model:visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title></template>
      <div class="panels">
        <div class="login_pic">
          <img src="@/assets/images/login/login_left.png" alt="" />
        </div>
        <div class="registerForm">
          <div class="title">注册用户</div>
          <div class="frame-bg">
            <div class="frame-body">
              <div class="frame-aside">
                <a-steps :current="current" direction="vertical">
                  <a-step>选择角色</a-step>
                  <a-step>用户信息</a-step>
                  <a-step>完成</a-step>
                </a-steps>
              </div>
              <div class="frame-main">
                <div class="main-content">
                  <a-select
                    v-if="current === 1"
                    :style="{ width: '320px' }"
                    placeholder="请选择角色 ..."
                  >
                    <a-option>教师</a-option>
                    <a-option>学生</a-option>
                    <a-option>家长</a-option>
                  </a-select>
                  <div v-if="current === 2" class="register">
                    <a-button type="primary" long>
                      <template #icon> <icon-qq size="20" /> </template>
                      <template #default>QQ 登录</template></a-button
                    >
                    <a-button type="primary" long>
                      <template #icon>
                        <icon-wechat size="20" />
                      </template>
                      <template #default>微信 登录</template></a-button
                    >
                    <a-button type="primary" long>
                      <template #icon>
                        <icon-email size="20" />
                      </template>
                      <template #default>邮箱 登录</template></a-button
                    >
                  </div>
                  <div v-if="current === 3" class="tips">
                    <div class="tip_icon"><icon-check /></div>
                    <div class="tip_text">恭喜你！注册成功，请重新登录</div>
                    <a-button type="primary">去登录</a-button>
                  </div>
                </div>
                <div class="main-bottom">
                  <a-button :disabled="current === 1" @click="onPrev">
                    <icon-left />
                    下一步
                  </a-button>
                  <a-button :disabled="current === 3" @click="onNext">
                    上一步
                    <icon-right />
                  </a-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="close_btn" @click="handleCancel">
        <icon-close-circle-fill size="30" />
      </div>
      <template #footer></template>
    </a-modal>
  </div>
</template>
<script setup>
import { ref, reactive, computed, watch, nextTick } from "vue";
const props = defineProps({
  showRegisterModal: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["close"]);
const form = reactive({
  email: "",
  pwd: "",
  isRead: false,
});
const visible = computed(() => {
  return props.showRegisterModal;
});
watch(visible, async (newValue) => {
  if (newValue) {
    nextTick(() => {});
  }
});
const current = ref(1);
const onPrev = () => {
  current.value = Math.max(1, current.value - 1);
};
const onNext = () => {
  current.value = Math.min(3, current.value + 1);
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  close();
};
const close = () => {
  emit("close");
};
</script>
<style lang="scss">
.login_panel {
  .panels {
    display: flex;
    .login_form {
      .xy {
        color: #1890ff;
      }
    }
  }
}
.login_panel_modal {
  border-radius: 10px;
  .arco-modal-header {
    display: none !important;
  }
  .arco-modal-body {
    padding: 0 !important;
    .panels {
      display: flex;
      .login_pic {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .registerForm {
        margin-left: 20px;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        flex: 1;
        .frame-bg {
          flex: 1;
        }

        .frame-body {
          display: flex;
          height: 100%;
        }

        .frame-aside {
          border-right: 1px solid #e8e8e8;
        }

        .frame-main {
          width: 100%;
        }

        .main-content {
          text-align: center;
          line-height: 200px;
          .register {
            button {
              width: 80%;
              margin: 20px;
              height: 52px;
              &:first-child {
                background: rgb(9, 182, 244);
              }
              &:nth-child(2) {
                background: #4cbf00;
              }
              &:nth-child(3) {
                background: #f6a802;
              }
            }
          }
          .tips {
            display: flex;
            flex-direction: column;
            margin: 20px;
            .tip_icon {
              margin: 20px 0;
              display: flex;
              width: 45px;
              height: 45px;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              margin: 0 auto;
              color: $--primary-6;
              background-color: $--primary-3;
            }
            .tip_text {
              margin: 20px 0;
              font-weight: 500;
              font-size: 14px;
              line-height: 1.5715;
              text-align: center;
            }
          }
        }

        .main-bottom {
          display: flex;
          justify-content: center;

          button {
            margin: 0 20px;
          }
        }

        .title {
          font-family: MicrosoftYaHei-Bold;
          font-size: 28px;
          color: #190b0a;
          font-weight: bold;
          text-align: center;
        }
        .btns {
          display: flex;
          width: 100%;
          justify-content: space-between;
          .a-button {
            margin-right: 20px;
          }
        }
        .xy {
          color: $--primary-6;
        }
        .login_ways {
          &_title {
            font-size: 14px;
            color: #3e3d3d;
            text-align: center;
            &:before {
              content: "";
              display: inline-block;
              width: 30px;
              height: 2px;
              background-color: #eeeeee;
              vertical-align: middle;
              margin: 0 20px;
            }
            &:after {
              content: "";
              display: inline-block;
              width: 30px;
              height: 2px;
              background-color: #eeeeee;
              vertical-align: middle;
              margin: 0 20px;
            }
          }
          &_icons {
            padding: 0 10%;
            display: flex;
            margin: 20px 0;
            justify-content: space-evenly;
            div {
              cursor: pointer;
              width: 45px;
              height: 45px;
              background: #eeeeee;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
            }
          }
        }
      }
    }
    .close_btn {
      position: absolute;
      right: -30px;
      top: -30px;
      cursor: pointer;
      font-size: 20px;
      color: $--primary-6;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .arco-modal-footer {
    display: none !important;
  }
}
</style>