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
        <div class="login_form">
          <div class="title">账号密码登录</div>
          <a-form
            :model="form"
            size="large"
            layout="vertical"
            @submit="handleSignIN"
          >
            <a-form-item
              field="loginCode"
              label="邮箱"
              :rules="[
                { required: true, message: '请输入邮箱账号' },
                { message: '请输入正确格式的邮箱账号' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                v-model="form.loginCode"
                placeholder="请输入邮箱账号..."
              />
            </a-form-item>
            <a-form-item
              field="loginPwd"
              label="密码"
              :rules="[{ required: true, message: '请输入登录密码' }]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                v-model="form.loginPwd"
                placeholder="请输入登录密码..."
              />
            </a-form-item>
            <a-form-item>
              <div class="btns">
                <a-button html-type="submit" type="primary" size="large"
                  >登录</a-button
                >
                <a href="#">忘记登录？</a>
              </div>
            </a-form-item>
            <a-form-item field="isRead">
              <a-checkbox v-model="form.isRead">
                登录即代表您已阅读并同意
                <a href="" class="xy">《硕博海未来学校系统用户协议》</a>
              </a-checkbox>
            </a-form-item>
          </a-form>
          <div class="login_ways">
            <div class="login_ways_title">其他方式</div>
            <div class="login_ways_icons">
              <div><icon-qq size="30" /></div>
              <div><icon-wechat size="30" /></div>
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
import * as sign from "@/api/login";
const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["close"]);
const form = reactive({
  loginCode: "",
  loginPwd: "",
  isRead: false,
});
const visible = computed(() => {
  return props.showModal;
});
watch(visible, async (newValue) => {
  if (newValue) {
    nextTick(() => {});
  }
});
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  close();
};
const close = () => {
  emit("close");
};
/* signin */
const handleSignIN = ({ values, errors }) => {
  if (errors === undefined) {
    sign.signIn.signIn(values).then((res) => {
      if (res.code === "0000") {
        localStorage.setItem("userinfo", JSON.stringify(res.data));
        close();
      } else {
        this.$notification.info({ content: "This is an info message!" });
      }
    });
  }
  console.log("values:", values, "\nerrors:", errors);
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
      .login_form {
        margin-left: 20px;
        padding: 10px 20px;
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