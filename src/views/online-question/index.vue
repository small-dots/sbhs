<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-28 15:36:13
 * @LastEditTime: 2022-04-28 15:36:14
 * @Description: 在线提问
 -->
<template>
  <div class="online_question">
    <div class="banner">
      <img src="@/assets/images/online_question/question_banner.png" alt="" />
    </div>
    <div class="question_container">
      <div class="banner_text">
        <p>在线留言</p>
        <p>
          源于品质的积累与历练　非凡人物千锤百炼.
          <br />
          弘扬世界文化、享受文学盛宴
        </p>
      </div>
      <div class="question_form">
        <div class="header">-欢迎留言-</div>
        <div class="sub_header">
          您好，感谢关注本网站！如果您对学习有任何疑问，欢迎给给您想要留言的对象留言
        </div>
        <a-form
          :model="questionForm"
          @submit="handleSubmit"
          size="large"
          style="width: 70%"
        >
          <a-form-item field="title" label="标题">
            <a-input
              v-model="questionForm.title"
              placeholder="请输入问题标题"
            />
          </a-form-item>
          <a-form-item field="content" label="内容">
            <editor
              api-key="en8duqq2szihua6n3heh4yydlgy0ffrcunkxpa13tvrmj1sj"
              :init="{
                height: 500,
                menubar: false,
                plugins: [
                  'a11ychecker',
                  'advlist',
                  'advcode',
                  'advtable',
                  'autolink',
                  'checklist',
                  'export',
                  'lists',
                  'link',
                  'image',
                  'charmap',
                  'preview',
                  'anchor',
                  'searchreplace',
                  'visualblocks',
                  'powerpaste',
                  'fullscreen',
                  'formatpainter',
                  'insertdatetime',
                  'media',
                  'table',
                  'help',
                  'wordcount',
                ],
                tinycomments_author:'anzhongqi',
                toolbar:
                  'undo redo | casechange blocks | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlst checklist outdent indent | removeformat | a11ycheck code table help',
              }"
              initial-value="请输入问题内容"
            />
          </a-form-item>
          <a-form-item field="pic" label="图片">
            <a-upload
              action="/"
              :fileList="file ? [file] : []"
              :show-file-list="false"
              @change="onChange"
              @progress="onProgress"
            >
              <template #upload-button>
                <div
                  :class="`arco-upload-list-item${
                    file && file.status === 'error'
                      ? ' arco-upload-list-item-error'
                      : ''
                  }`"
                >
                  <div
                    class="arco-upload-list-picture custom-upload-avatar"
                    v-if="file && file.url"
                  >
                    <img :src="file.url" />
                    <div class="arco-upload-list-picture-mask">
                      <IconEdit />
                    </div>
                  </div>
                  <div class="arco-upload-picture-card" v-else>
                    <div class="arco-upload-picture-card-text">
                      <IconPlus />
                      <div style="margin-top: 10px; font-weight: 600">
                        上传图片
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </a-upload>
          </a-form-item>
          <a-form-item field="fj" label="附件">
            <a-upload action="/" />
          </a-form-item>
          <a-form-item  field="chooseObjectKey" label="选择对象">
            <a-radio-group>
              <a-radio value="T">提问家长</a-radio>
              <a-radio value="S">提问学生</a-radio>
            </a-radio-group>
          </a-form-item>

          <a-form-item field="chooseObject">
            <a-auto-complete
              :data="data"
              @search="handleSearch"
              :style="{ width: '360px' }"
              placeholder="输入姓名可模糊查找"
            />
          </a-form-item>
          <a-form-item>
            <a-button long type="primary" html-type="submit">提交</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import Editor from "@tinymce/tinymce-vue";
import { ref, reactive, onMounted } from "vue";
const questionForm = reactive({
  name: "",
  content: "",
  pic: "",
  fj: "",
  chooseObject: "",
  chooseObjectKey: "T",
});
const file = ref();

const data = ref([]);
const handleSubmit = () => {
  console.log(111);
};
const onChange = () => {};
const onProgress = () => {};
const handleSearch = (value) => {
  if (value) {
    data.value = [...Array(5)].map((_, index) => `${value}-${index}`);
  } else {
    data.value = [];
  }
};
</script>

<style lang="scss" scoped>
.online_question {
  position: relative;
  .banner {
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
  .question_container {
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
    z-index: 2;
    margin-bottom: 30px;
    .banner_text {
      margin-bottom: 30px;
      p:first-child {
        font-size: 62px;
        color: $--warning-9;
      }
      p:nth-child(2) {
        font-size: 22px;
        color: #ffffff;
      }
    }
    .question_form {
      background-color: #ffffff;
      box-shadow: 0px 0px 13px 0px rgb(6 0 1 / 7%);
      border-radius: 4px;
      padding: 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .header {
        font-size: 30px;
        color: $--warning-9;
        margin-bottom: 30px;
      }
      .sub_header {
        font-size: 16px;
        color: #333333;
        text-align: center;
      }
      .arco-form {
        margin: 40px 0;
      }
      .arco-form-item {
        margin-bottom: 20px !important;
      }
      .arco-input-wrapper {
        padding: 0 12px;
      }
    }
  }
}
</style>
