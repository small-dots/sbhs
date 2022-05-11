<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-28 15:36:16
 * @LastEditTime: 2022-05-07 10:05:52
 * @Description: 选学科
 -->
 <template>
  <div class="subject">
    <!-- 图片广告展示 -->
    <div class="subject_top">
      <img src="@/assets/images/subject/subject_banner.png" />
    </div>
    <div class="subject_js"><modelIntrod /></div>
    <!--选课1-->
    <div class="subject-center">
      <div class="title">选择学科(3+1+2)</div>
      <div class="tab">
        <div class="subject-one">
          <p>必选课程</p>
          <div>
            <a-checkbox-group direction="vertical" v-model="bx_subject_one">
              <a-checkbox
                value="subject"
                v-for="subject in ['语文', '数学', '英语']"
                :key="subject"
              >
                <template #checkbox="{ checked }">
                  <a-button
                    type="primary"
                    size="large"
                    :checked="checked"
                    checkable
                    >{{ subject }}</a-button
                  >
                </template>
              </a-checkbox>
            </a-checkbox-group>
          </div>
        </div>
        <div class="subject-two">
          <p>二选一</p>
          <div>
            <a-checkbox-group v-model="bx_subject_two">
              <a-checkbox
                value="subject"
                v-for="subject in ['物理', '历史']"
                :key="subject"
              >
                <template #checkbox="{ checked }">
                  <a-button
                    type="primary"
                    size="large"
                    :checked="checked"
                    checkable
                    >{{ subject }}</a-button
                  >
                </template>
              </a-checkbox>
            </a-checkbox-group>
          </div>
        </div>
        <div class="subject-three">
          <p>四选二</p>
          <div>
            <a-checkbox-group v-model="bx_subject_three">
              <a-checkbox
                value="subject"
                v-for="subject in ['化学', '政治', '地理', '生物']"
                :key="subject"
              >
                <template #checkbox="{ checked }">
                  <a-button
                    type="primary"
                    size="large"
                    :checked="checked"
                    checkable
                    >{{ subject }}</a-button
                  >
                </template>
              </a-checkbox>
            </a-checkbox-group>
          </div>
        </div>
      </div>
      <div class="submit"><a-button long size="large">提交</a-button></div>
    </div>
    <!--选课2-->
    <div class="subject-center-two">
      <div class="subject_example">
        <div class="subject_example_title">
          选科与高考填报大学、专业有紧密的联系
        </div>
        <div class="subject_example_title">20种学科组合要谨慎选择</div>
        <div class="subject_example_border">
          <div class="subject_example_border_left"></div>
          <div class="subject_example_border_center"></div>
          <div class="subject_example_border_left"></div>
        </div>
        <div class="subject_example_list">
          <div class="subject_example_list_bg">
            <div class="example_list_bg_title">
              新高考各选科组合可选统计（本科）
            </div>
            <div class="example_list_bg_table">
              <a-table :columns="columns" :data="data" :pagination="false">
                <template #index="{ rowIndex }">
                  <span>{{ rowIndex + 1 }}</span>
                </template>
                <template #num="{ record }">
                  <div style="font-size: 18px">{{ record.num }}</div>
                </template>
                <template #name="{ record }">
                  <div class="table_name">{{ record.name }}</div>
                </template>
                <template #percent="{ record }">
                  <div style="font-size: 18px; color: #fd5b44">
                    {{ record.percent * 100 + "%" }}
                  </div>
                </template>
                <template #operation="{ record }">
                  <a-button
                    shape="round"
                    status="danger"
                    @click="confirmChoose(record)"
                    >确定选择</a-button
                  >
                  <a-button
                    type="primary"
                    shape="round"
                    @click="confirmChoose(record)"
                    >详情</a-button
                  >
                </template>
              </a-table>
            </div>
          </div>
          <div class="subject_example_tip">
            <div class="subject_example_tip_top">
              <div class="subject_example_tip_top_img">
                <img
                  src="@/assets/images/choose_subject/example_igcourse.png"
                  alt=""
                />
              </div>
              <div class="subject_example_tip_top_title">
                温馨小贴士: <span>12组合选择提示</span>
              </div>
            </div>
            <div class="course">
              <div class="subject_example_tip_left">
                <a-button
                  type="primary"
                  @click="leftMove"
                  :disabled="currentIndex === 0"
                >
                  <template #icon>
                    <icon-left-circle />
                  </template>
                </a-button>
              </div>
              <div class="switcher">
                <div ref="switch_content" class="subject_example_tip_no">
                  <div
                    class="example_tip_no_info"
                    v-for="(item, index) in switchList"
                    :key="item.order"
                    :style="{
                      backgroundImage: bgList[index],
                    }"
                  >
                    <div class="order">{{ item.order }}</div>
                    <div class="example_tip_no_info_title">
                      {{ item.title }}
                    </div>
                    <div class="example_tip_no_info_tip">
                      优势：{{ item.advantage }} <br />
                      劣势：{{ item.inferiority }}<br />
                      适合人群：<span v-html="item.people"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="subject_example_tip_right">
                <a-button
                  :disabled="currentIndex === -9"
                  @click="rightMove"
                  type="primary"
                >
                  <template #icon>
                    <icon-right-circle />
                  </template>
                </a-button>
              </div>
            </div>
          </div>
          <div class="subject_example_list_title">课程组合</div>
        </div>
      </div>
    </div>
    <!--专业联动-->
    <subject-school />
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useDebounceFn } from "@vueuse/core";
import modelIntrod from "views/chose-subjects/model-introd.vue";
import subjectSchool from "@/components/chose-subjects/subject-school.vue";
const switch_content = ref(null);
const currentIndex = ref(0);
const bx_subject_one = ref(["语文", "数学", "英语"]);
const bx_subject_two = ref(["语文", "数学", "英语"]);
const bx_subject_three = ref(["语文", "数学", "英语"]);
const columns = [
  {
    title: "序号",
    slotName: "index",
    align: "center",
  },
  {
    title: "组合",
    slotName: "name",
    align: "center",
  },
  {
    title: "可报考专业数量",
    slotName: "num",
    align: "center",
  },
  {
    title: "专业覆盖率",
    slotName: "percent",
    align: "center",
  },
  {
    title: "操作",
    slotName: "operation",
    align: "center",
  },
];
const bgList = [
  "linear-gradient(135deg ,rgb(26 114 167) 10%,#8fd4fe 100%)",
  "linear-gradient(135deg ,#33cdbf 10%,#33cdbf 100%)",
  "linear-gradient(135deg ,#fedf85 10%,#fedf85 100%)",
  "linear-gradient(135deg, #90F7EC 10%, #32CCBC 100%)",
  "linear-gradient(135deg, #81FBB8 10%, #28C76F 100%)",
  "linear-gradient(135deg, #65FDF0 10%, #1D6FA3 100%)",
  "linear-gradient(135deg, #72EDF2 10%, #5151E5 100%)",
  "linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%)",
  "linear-gradient(25deg, #001251, #245579, #2c9ea1, #00eeca)",
  "linear-gradient(25deg, #88aaec, #77c6f2, #5be2f8, #05fdfd)",
  "linear-gradient(25deg, #5d41ff, #9e66ff, #cf8cff, #fbb3ff)",
  "linear-gradient(25deg, #e17c7d, #c09b9a, #90b5b8, #16ccd7)",
];
const switchList = reactive([
  {
    order: "01",
    title: "历史+地理+政治",
    advantage: "传统的纯文组合，与初中知识有联系，学习适应比较快",
    inferiority:
      "学科比较单一，背诵记忆量大，可报专业比例低，专业报考很受限制。",
    people: `<br />&nbsp;&nbsp;1.明确未来报考专业属于人文社科类，例如法学、新闻学、艺术设计学等；
      <br />&nbsp;&nbsp;2.历史、地理、政治成绩相对不错`,
  },
  {
    order: "02",
    title: "历史+地理+化学",
    advantage: "传统的纯文组合，与初中知识有联系，学习适应比较快。",
    inferiority:
      "学科比较单一，背诵记忆量大，可报专业比例低，专业报考很受限制。",
    people: `<br />&nbsp;&nbsp;1.明确未来报考专业属于人文社科类，例如法学、新闻学、艺术设计学等；
      <br />&nbsp;&nbsp;2.历史、地理、政治成绩相对不错`,
  },
  {
    order: "03",
    title: "历史+地理+生物",
    advantage: "传统的纯文组合，与初中知识有联系，学习适应比较快",
    inferiority:
      "学科比较单一，背诵记忆量大，可报专业比例低，专业报考很受限制。",
    people: `<br />&nbsp;&nbsp;1.明确未来报考专业属于人文社科类，例如法学、新闻学、艺术设计学等；
      <br />&nbsp;&nbsp;2.历史、地理、政治成绩相对不错`,
  },
  {
    order: "04",
    title: "历史+政治+化学",
    advantage: "传统的纯文组合，与初中知识有联系，学习适应比较快",
    inferiority:
      "学科比较单一，背诵记忆量大，可报专业比例低，专业报考很受限制。",
    people: `<br />&nbsp;&nbsp;1.明确未来报考专业属于人文社科类，例如法学、新闻学、艺术设计学等；
      <br />&nbsp;&nbsp;2.历史、地理、政治成绩相对不错`,
  },
  {
    order: "05",
    title: "历史+政治+物理",
    advantage: "传统的纯文组合，与初中知识有联系，学习适应比较快",
    inferiority:
      "学科比较单一，背诵记忆量大，可报专业比例低，专业报考很受限制。",
    people: `<br />&nbsp;&nbsp;1.明确未来报考专业属于人文社科类，例如法学、新闻学、艺术设计学等；
      <br />&nbsp;&nbsp;2.历史、地理、政治成绩相对不错`,
  },
  {
    order: "06",
    title: "历史+化学+生物",
    advantage: "传统的纯文组合，与初中知识有联系，学习适应比较快",
    inferiority:
      "学科比较单一，背诵记忆量大，可报专业比例低，专业报考很受限制。",
    people: `<br />&nbsp;&nbsp;1.明确未来报考专业属于人文社科类，例如法学、新闻学、艺术设计学等；
      <br />&nbsp;&nbsp;2.历史、地理、政治成绩相对不错`,
  },
  {
    order: "07",
    title: "物理+化学+生物",
    advantage: "传统的纯文组合，与初中知识有联系，学习适应比较快",
    inferiority:
      "学科比较单一，背诵记忆量大，可报专业比例低，专业报考很受限制。",
    people: `<br />&nbsp;&nbsp;1.明确未来报考专业属于人文社科类，例如法学、新闻学、艺术设计学等；
      <br />&nbsp;&nbsp;2.历史、地理、政治成绩相对不错`,
  },
  {
    order: "08",
    title: "物理+化学+地理",
    advantage: "传统的纯文组合，与初中知识有联系，学习适应比较快",
    inferiority:
      "学科比较单一，背诵记忆量大，可报专业比例低，专业报考很受限制。",
    people: `<br />&nbsp;&nbsp;1.明确未来报考专业属于人文社科类，例如法学、新闻学、艺术设计学等；
      <br />&nbsp;&nbsp;2.历史、地理、政治成绩相对不错`,
  },
  {
    order: "09",
    title: "物理+化学+政治",
    advantage: "传统的纯文组合，与初中知识有联系，学习适应比较快",
    inferiority:
      "学科比较单一，背诵记忆量大，可报专业比例低，专业报考很受限制。",
    people: `<br />&nbsp;&nbsp;1.明确未来报考专业属于人文社科类，例如法学、新闻学、艺术设计学等；
      <br />&nbsp;&nbsp;2.历史、地理、政治成绩相对不错`,
  },
  {
    order: "10",
    title: "物理+生物+地理",
    advantage: "传统的纯文组合，与初中知识有联系，学习适应比较快",
    inferiority:
      "学科比较单一，背诵记忆量大，可报专业比例低，专业报考很受限制。",
    people: `<br />&nbsp;&nbsp;1.明确未来报考专业属于人文社科类，例如法学、新闻学、艺术设计学等；
      <br />&nbsp;&nbsp;2.历史、地理、政治成绩相对不错`,
  },
  {
    order: "11",
    title: "物理+生物+政治",
    advantage: "传统的纯文组合，与初中知识有联系，学习适应比较快",
    inferiority:
      "学科比较单一，背诵记忆量大，可报专业比例低，专业报考很受限制。",
    people: `<br />&nbsp;&nbsp;1.明确未来报考专业属于人文社科类，例如法学、新闻学、艺术设计学等；
      <br />&nbsp;&nbsp;2.历史、地理、政治成绩相对不错`,
  },
  {
    order: "12",
    title: "物理+地理+政治",
    advantage: "传统的纯文组合，与初中知识有联系，学习适应比较快",
    inferiority:
      "学科比较单一，背诵记忆量大，可报专业比例低，专业报考很受限制。",
    people: `<br />&nbsp;&nbsp;1.明确未来报考专业属于人文社科类，例如法学、新闻学、艺术设计学等；
      <br />&nbsp;&nbsp;2.历史、地理、政治成绩相对不错`,
  },
]);
const data = ref([
  { name: "历史+地理+政治", num: 2312, percent: 0.23 },
  { name: "历史+地理+政治", num: 2312, percent: 0.23 },
  { name: "历史+地理+政治", num: 2312, percent: 0.23 },
  { name: "历史+地理+政治", num: 2312, percent: 0.23 },
  { name: "历史+地理+政治", num: 2312, percent: 0.23 },
  { name: "历史+地理+政治", num: 2312, percent: 0.23 },
  { name: "历史+地理+政治", num: 2312, percent: 0.23 },
  { name: "历史+地理+政治", num: 2312, percent: 0.23 },
  { name: "历史+地理+政治", num: 2312, percent: 0.23 },
  { name: "历史+地理+政治", num: 2312, percent: 0.23 },
  { name: "历史+地理+政治", num: 2312, percent: 0.23 },
  { name: "历史+地理+政治", num: 2312, percent: 0.23 },
]);
const leftMove = () => {
  currentIndex.value++;
  switch_content.value.style.marginLeft = currentIndex.value * 340 + "px";
};
const rightMove = () => {
  currentIndex.value--;
  switch_content.value.style.marginLeft = currentIndex.value * 340 + "px";
};
</script>
<style lang="scss" scoped>
.subject {
  position: relative;
  .subject_top {
    height: 300px;
  }
  .subject_top img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .subject_js {
    position: absolute;
    top: 60px;
    right: 15%;
    z-index: 2;
  }
  .subject-center {
    width: 100%;
    background-color: #3a3f53;
    display: flex;
    flex-direction: column;
    padding: 70px 0;
    .submit {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      margin: 0 auto;
      button {
        width: 100%;
        height: 60px;
        font-size: 20px;
      }
    }
    .title {
      font-size: 32px;
      color: #ffffff;
      font-weight: bold;
      flex: 0 0 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tab {
      flex: 1;
      width: 75%;
      margin: 0 auto;
      display: flex;
      .subject-one {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        flex: 1;
        & > div {
          flex: 1;
          display: flex;
          align-items: center;
        }
        & > p {
          font-size: 20px;
          color: #ffffff;
          font-weight: bold;
          margin-top: 10px;
        }
        label {
          margin-top: 16px;
        }
        button {
          background: #fd5b44;
          width: 180px;
          height: 70px;
        }
      }
      .subject-two {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        flex: 1;
        border-right: 4px solid #ffffff;
        border-left: 4px solid #ffffff;
        & > div {
          flex: 1;
          display: flex;
          align-items: center;
        }
        & > p {
          font-size: 20px;
          color: #ffffff;
          font-weight: bold;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        button {
          background: #fd5b44;
          width: 180px;
          height: 70px;
        }
        .arco-checkbox-group{
          display: inline-flex;
          flex-wrap: nowrap;
        }
      }
      .subject-three {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        & > div {
          flex: 1;
          display: flex;
          align-items: center;
        }
        flex: 1;
        label {
          margin: 8px;
          width: calc(50% - 16px);
          justify-content: center;
        }
        & > p {
          font-size: 20px;
          color: #ffffff;
          font-weight: bold;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        button {
          background: #fd5b44;
          width: 180px;
          height: 70px;
        }
      }
    }
  }
  .subject-center-two {
    width: 100%;
    .subject_example {
      height: 1497px;
      width: 100%;
      background-color: #f7f8fa;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .subject_example_title {
        font-family: MicrosoftYaHei-Bold;
        font-size: 36px;
        font-weight: bold;
        color: #333333;
      }
      .subject_example_border {
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        .subject_example_border_left {
          width: 57px;
          height: 6px;
          background-color: #eeeeee;
        }
        .subject_example_border_center {
          width: 128px;
          height: 6px;
          background-color: #009688;
        }
      }
      .subject_example_list {
        background: url("@/assets/images/choose_subject/example_bg.png")
          no-repeat;
        background-size: 100% 100%;
        width: 1236px;
        height: 1201px;
        padding: 0 75px;
        padding-bottom: 50px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        .subject_example_list_bg {
          width: 100%;
          margin-top: 60px;
          background: #009688;
          border-radius: 20px;
          padding: 16px;
          box-sizing: border-box;
          .example_list_bg_title {
            font-family: MicrosoftYaHei-Bold;
            font-size: 22px;
            font-weight: bold;
            color: #ffffff;
            text-align: center;
            padding: 0 0 10px 0;
            box-sizing: border-box;
          }
          .table_name {
            font-size: 18px;
            font-weight: bold;
            color: #009688;
          }
          .table_button {
            display: flex;
            justify-content: center;
            align-items: center;
            .el-button {
              font-family: MicrosoftYaHei;
              font-size: 16px;
              color: #ffffff;
              display: flex;
              justify-content: center;
              align-items: center;
              border: none;
              &:first-child {
                width: 101px;
                height: 32px;
                background-color: #fd5b44;
                border-radius: 16px;
                margin-right: 10px;
              }
              &:last-child {
                width: 73px;
                height: 32px;
                background-image: linear-gradient(
                    34deg,
                    #11b5b6 0%,
                    #21caa2 100%
                  ),
                  linear-gradient(#fd5b44, #fd5b44);
                background-blend-mode: normal, normal;
                border-radius: 16px;
              }
            }
          }
          .el-table {
            border-radius: 0 0 20px 20px;
          }
          .el-table thead tr th {
            height: 57px;
            background-color: #f5f7fd;
          }
          .el-table__row:hover > td {
            background-color: #ffffff !important;
          }

          .el-table__row--striped:hover > td {
            background-color: #fafafa !important;
          }
          .table_number {
            font-family: ArialMT;
            font-size: 18px;
            color: #444444;
          }
          .table_compose {
            font-family: MicrosoftYaHei-Bold;
            font-size: 18px;
            font-weight: bold;
            color: #009688;
          }
          .table_quantity_num {
            font-family: ArialMT;
            font-size: 18px;
            color: #444444;
          }
          .table_coverage {
            font-family: ArialMT;
            font-size: 18px;
            color: #fd5b44;
          }
        }
        .subject_example_tip {
          width: 100%;
          margin-top: 30px;
          .subject_example_tip_top {
            width: 100%;
            display: flex;
            align-items: center;
            .subject_example_tip_top_img {
              width: 74px;
              height: 64px;
              display: flex;
              align-items: center;
              justify-content: center;
              img {
                width: 74px;
                height: 64px;
              }
            }
            .subject_example_tip_top_title {
              font-family: MicrosoftYaHei;
              font-size: 22px;
              color: #333333;
              span {
                font-family: MicrosoftYaHei;
                font-size: 18px;
                color: #333333;
              }
            }
          }
          .course {
            display: flex;
            margin-top: 25px;
            justify-content: space-between;
            .subject_example_tip_left {
              height: 306px;
              button {
                height: 100%;
              }
            }
            .subject_example_tip_right {
              height: 306px;
              button {
                height: 100%;
              }
            }
            .switcher {
              width: 100%;
              position: relative;
              overflow: hidden;
              .subject_example_tip_no {
                width: 4080px;
                height: 306px;
                transition: all 0.6s ease-in-out;
                .example_tip_no_info {
                  position: relative;
                  padding: 30px;
                  box-sizing: border-box;
                  width: 300px;
                  height: 306px;
                  margin: 0 20px;
                  border-radius: 10px;
                  display: inline-grid;
                  display: -moz-inline-grid;
                  display: -ms-inline-grid;
                  .order {
                    position: absolute;
                    font-size: 80px;
                    color: #fff;
                    right: 6px;
                    opacity: 1;
                    z-index: 1;
                    font-family: "Yesteryear", cursive;
                  }
                  .example_tip_no_info_title {
                    margin-left: -30px;
                    width: 200px;
                    height: 47px;
                    background-color: #8fd4fe;
                    border-radius: 0 23.5px 23.5px 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: MicrosoftYaHei;
                    font-size: 18px;
                    color: #333333;
                    z-index: 2;
                  }
                  .color_title_three {
                    background-color: #33cdbf;
                  }
                  .color_title_two {
                    background-color: #fedf85;
                  }
                  .example_tip_no_info_tip {
                    margin-top: 30px;
                    font-family: MicrosoftYaHei;
                    font-size: 14px;
                    color: #ffffff;
                  }
                }
                .color_three {
                  background-color: #cef1ee;
                }
                .color_two {
                  background-color: #fff4d4;
                }
              }
            }
          }
        }
        .subject_example_list_title {
          background: url("@/assets/images/choose_subject/example_top.png")
            no-repeat;
          background-size: 100% 100%;
          width: 274px;
          height: 64px;
          border-radius: 3px;
          position: absolute;
          top: -15px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: MicrosoftYaHei;
          font-size: 34px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>