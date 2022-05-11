<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-28 15:35:23
 * @LastEditTime: 2022-04-28 15:35:23
 * @Description: 习题展示
 -->
 <template>
  <div class="exercises_container">
    <div class="query_form">
      <div class="query_form_item">
        科目：
        <a-radio-group
          v-model="form.subject"
          type="button"
          class="query_form_item_radio"
          @change="subjectChanged"
        >
          <a-radio
            :value="subject.value"
            v-for="subject in subjectList"
            :key="subject.value"
            class="radio_button"
            >{{ subject.label }}</a-radio
          >
        </a-radio-group>
      </div>
      <div class="line"></div>
      <div class="query_form_item">
        年级：
        <a-radio-group
          v-model="form.grade"
          type="button"
          class="query_form_item_radio"
          @change="gradeChanged"
        >
          <a-radio
            :value="grade.value"
            v-for="grade in gradeList"
            :key="grade.value"
            class="radio_button"
            >{{ grade.label }}</a-radio
          >
        </a-radio-group>
      </div>
      <div class="line"></div>
      <div class="query_form_item">
        排序：
        <a-radio-group
          v-model="form.order"
          type="button"
          class="query_form_item_radio"
          @change="orderChanged"
        >
          <a-radio
            :value="order.value"
            v-for="order in orderList"
            :key="order.value"
            class="radio_button"
            >{{ order.label }}</a-radio
          >
        </a-radio-group>
      </div>
      <div class="line"></div>
      <div class="query_form_item form_input">
        <a-input placeholder="请输入关键字" allow-clear />
        <a-button size="large" type="primary">搜索</a-button>
      </div>
    </div>
    <div class="exercise_main">
      <div class="exercise_table">
        <div class="list_title">
          <div class="banner"></div>
          <div class="title">在线<span>习题</span></div>
          <div class="subtitle">优质的习题资源，有利于提高孩子的学习</div>
        </div>
        <div class="list_header">
          {{ gradeName + subjectName + "期末考试历年真题" }}
        </div>
        <a-table :columns="columns" :data="data" />
      </div>
      <div class="exercise_hot">
        <div class="hot-item">
          <div class="title">热门试题推荐</div>
          <div class="list exercise">
            <div v-for="(item, index) in 8" :key="index">
              <div
                class="num"
                :style="{ backgroundColor: classMap[index] || '#ccc' }"
              >
                {{ index + 1 }}
              </div>
              <div class="name">痴迷:让顾客疯狂下单,仅需一个好故事</div>
            </div>
          </div>
        </div>
        <div class="hot-item">
          <div class="title">他们也在学</div>
          <div class="list student">
            <div v-for="(item, index) in 8" :key="index">
              <div class="touxaing">
                <img
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201709%2F06%2F20170906180705_ynEKZ.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653974475&t=0f15bc9b3cd931a37d072506ac33e7ae"
                  alt=""
                />
              </div>
              <div class="name">
                爱笑的丸子头
                <p>1小时 前</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
const form = ref({
  subject: "1",
  grade: "1",
  order: "1",
  pageNum: 1,
  pageSize: 10,
});
const subjectMap = ref({});
const classMap = {
  0: "#e60012",
  1: "#fd5b44",
  2: "#009688",
};
const subjectName = ref();
const gradeName = ref();
const subjectList = ref([
  {
    value: "1",
    label: "语文",
  },
  {
    value: "2",
    label: "数学",
  },
  {
    value: "3",
    label: "政治",
  },
  {
    value: "4",
    label: "历史",
  },
  {
    value: "5",
    label: "地理",
  },
  {
    value: "6",
    label: "物理",
  },
  {
    value: "7",
    label: "化学",
  },
  {
    value: "8",
    label: "生物",
  },
]);
const gradeList = ref([
  {
    value: "1",
    label: "高一",
  },
  {
    value: "2",
    label: "高二",
  },
  {
    value: "3",
    label: "高三",
  },
]);
const orderList = ref([
  {
    value: "1",
    label: "综合排序",
  },
  {
    value: "2",
    label: "周热门",
  },
  {
    value: "3",
    label: "月热门",
  },
  {
    value: "4",
    label: "最近更新",
  },
]);
const columns = [
  {
    title: "日期",
    dataIndex: "date",
    sortable: {
      sortDirections: ["ascend", "descend"],
    },
  },
  {
    title: "科目",
    dataIndex: "km",
    ellipsis: true,
    tooltip: true,
  },
  {
    title: "试卷名称",
    dataIndex: "sjmc",
    ellipsis: true,
    tooltip: true,
  },
  {
    title: "考试时间",
    dataIndex: "kssj",
  },
  {
    title: "考试数量",
    dataIndex: "kssl",
  },
];
onMounted(() => {
  subjectName.value = subjectList.value[0].label;
  gradeName.value = gradeList.value[0].label;
});
const data = reactive([
  {
    key: "1",
    date: "2022-01-02",
    km: "数学期末考试",
    sjmc: "数学期末考试历年真题",
    kssj: "2022-03-18",
    kssl: "22",
  },
  {
    key: "2",
    date: "2022-01-02",
    km: "数学期末考试",
    sjmc: "数学期末考试历年真题",
    kssj: "2022-03-18",
    kssl: "22",
  },
  {
    key: "3",
    date: "2022-01-02",
    km: "数学期末考试",
    sjmc: "数学期末考试历年真题",
    kssj: "2022-03-18",
    kssl: "22",
  },
  {
    key: "4",
    date: "2022-01-02",
    km: "数学期末考试",
    sjmc: "数学期末考试历年真题",
    kssj: "2022-03-18",
    kssl: "22",
  },
  {
    key: "5",
    date: "2022-01-02",
    km: "数学期末考试",
    sjmc: "数学期末考试历年真题",
    kssj: "2022-03-18",
    kssl: "22",
  },
  {
    key: "6",
    date: "2022-01-02",
    km: "数学期末考试",
    sjmc: "数学期末考试历年真题",
    kssj: "2022-03-18",
    kssl: "22",
  },
]);
const subjectChanged = (value) => {
  console.log("科目", value);
  subjectName.value = subjectList.value.find(
    (item) => item.value == value
  ).label;
};
const gradeChanged = (value) => {
  console.log("年级", value);
  gradeName.value = gradeList.value.find((item) => item.value == value).label;
};
const orderChanged = (value) => {
  console.log("排序", value);
};
</script>
<style lang="scss" scoped>
.exercises_container {
  width: 75%;
  margin: 0 auto;
  .query_form {
    width: 100%;
    display: inline-block;
    background-color: #ffffff;
    box-shadow: 0px 0px 13px 0px rgb(6 0 1 / 7%);
    border-radius: 4px;
    z-index: 99;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 13px;
    margin-bottom: 30px;
    .query_form_item {
      .query_form_item_radio {
        background: #fff !important;
        .radio_button {
          margin: 0 15px;
          background: #fff;
        }
        .arco-radio-checked.radio_button {
          color: #fff;
          background: $--warning-9;
        }
      }
    }
    .form_input {
      display: flex;
      width: 30%;

      button {
        margin: 0 10px;
        padding: 0 10px;
      }
    }
    .line {
      height: 1px;
      width: 100%;
      margin: 10px 0;
      background-color: #e5e5e5;
    }
  }
  .exercise_main {
    display: flex;
    justify-content: space-between;
    .exercise_table {
      flex: 0 0 1000px;
      .list_title {
        display: flex;
        height: 32px;
        align-items: flex-end;
        margin: 20px 0;
        .banner {
          width: 10px;
          height: 32px;
          border-radius: 4px;
          margin-right: 5px;
          background-color: $--warning-9;
        }
        .title {
          font-size: 32px;
          font-weight: bold;
          margin: 0 10px;
          span {
            color: $--warning-9;
          }
        }
        .subtitle {
          margin: 0 10px;
          font-size: 16px;
          color: rgb(160, 156, 156);
        }
      }
      .list_header {
        width: 290px;
        height: 52px;
        background-color: #009688;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: MicrosoftYaHei;
        font-size: 18px;
        color: #ffffff;
      }
      .arco-table {
        font-size: 16px;
      }
    }
    .exercise_hot {
      flex: 0 0 300px;
      .hot-item {
        margin-bottom: 20px;
        .title {
          color: $--warning-9;
          font-size: 16px;
          line-height: 30px;
        }
        .list {
          background-color: #ffffff;
          box-shadow: 0px 0px 13px 0px rgb(6 0 1 / 7%);
          border-radius: 4px;
          padding: 10px;
          & > div {
            display: flex;
            align-items: center;
            cursor: pointer;
            &:first-child ~ div {
              border-top: 1px solid #e5e5e5;
            }
            &:hover {
              background-color: #f5f5f5;
            }
            .num {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 15px;
              height: 15px;
              border-radius: 50%;
              color: #ffffff;
              margin-right: 10px;
            }
            .touxaing {
              margin-right: 10px;
              img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 1px solid $--warning-9;
              }
            }
          }
        }
        .exercise {
          & > div {
            line-height: 40px;
          }
        }
        .student {
          & > div {
            margin: 10px 0;
            .name {
              font-weight: 500;
            }
            p {
              font-size: 14px;
              color: #787878;
            }
          }
        }
      }
    }
  }
}
</style>

