<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-28 15:36:18
 * @LastEditTime: 2022-05-07 10:20:00
 * @Description: 教学课件
 -->
 <template>
  <div class="teaching_video">
    <div class="banner">
      <img
        src="@/assets/images/teaching-courseware/courseware_banner.png"
        alt=""
      />
    </div>
    <div class="video_query">
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
      </div>
      <div class="video_list">
        <div class="list_title">
          <div class="banner"></div>
          <div class="title">优选<span>课件</span></div>
          <div class="subtitle">优质的课件资源，更方便学生和教师的学习</div>
        </div>
        <div class="list">
          <a-grid
            :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5 }"
            :colGap="12"
            :rowGap="16"
          >
            <a-grid-item
              v-for="(courseware, index) in coursewareList"
              :key="index"
              class="video-item"
            >
              <div class="teaching_courseware_list_info">
                <div class="courseware_title">{{ courseware.title }}</div>
                <div class="courseware_sub_info">
                  <div class="courseware_sub_info_publish_time">
                    {{ courseware.publishTime }}
                  </div>
                  <div class="courseware_sub_info_size">
                    大小：{{ courseware.size }}
                  </div>
                  <div class="courseware_sub_info_download_times">
                    下载：{{ courseware.downloadTimes }} 次
                  </div>
                </div>
                <div class="courseware_postsrc">
                  <img :src="courseware.postsrc" alt="" />
                </div>
                <!-- 课件介绍 -->
                <div class="courseware_introduction">
                  {{ courseware.introduction }}
                </div>
                <div class="courseware_mask">
                  <a-button
                    type="primary"
                    size="large"
                    status="warning"
                    shape="round"
                    class="courseware_mask_button"
                    @click="downloadCourseware(courseware)"
                  >
                    <template #icon>
                      <icon-cloud-download />
                    </template>
                    <template #default>下载</template>
                  </a-button>
                  <a-button
                    type="primary"
                    size="large"
                    shape="round"
                    class="courseware_mask_button"
                    @click="collectionCourseware(courseware)"
                  >
                    <template #icon>
                      <icon-star />
                    </template>
                    <template #default>收藏</template>
                  </a-button>
                </div>
              </div>
            </a-grid-item>
          </a-grid>
        </div>
        <div class="pagination">
          <a-pagination
            :total="total"
            :current="form.pageNum"
            :page-size="form.pageSize"
            show-total
            @page-size-change="pageSizeChange"
            @change="pageChange"
            size="large"
            show-jumper
            show-page-size
          >
            <template #page-item="{ page }"> - {{ page }} - </template>
            <template #page-item-step="{ type }">
              <span class="step-btn">
                {{ type === "previous" ? "上一页" : "下一页" }}
              </span>
            </template>
          </a-pagination>
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
  pageNum: 1,
  pageSize: 10,
});
const subjectList = ref([
  {
    value: "1",
    label: "语文课件",
  },
  {
    value: "2",
    label: "数学课件",
  },
  {
    value: "3",
    label: "道德课件",
  },
  {
    value: "4",
    label: "历史课件",
  },
  {
    value: "5",
    label: "地理课件",
  },
  {
    value: "6",
    label: "物理课件",
  },
  {
    value: "7",
    label: "化学课件",
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

const coursewareList = ref([]);
const total = ref(0);
onMounted(() => {
  search(form.value);
});
const subjectChanged = (value) => {
  console.log("科目", value);
  search(form.value);
};
const gradeChanged = (value) => {
  console.log("年级", value);
  search(form.value);
};
const pageSizeChange = (page) => {
  console.log("当前页码大小", page);
  search(form.value);
};
const pageChange = (pageSize) => {
  console.log("当前页码", pageSize);
  search(form.value);
};
const search = (params) => {
  console.log("搜索", params);
  coursewareList.value = [
    {
      postsrc: "https://s6.jpg.cm/2022/04/29/LiTWS5.png",
      introduction:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      publishTime: "2022年07月12日",
      downloadTimes: "100",
      size: "2.5M",
      id: "1",
    },
    {
      postsrc: "https://s6.jpg.cm/2022/04/29/LiTWS5.png",
      introduction:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      publishTime: "2022年07月12日",
      downloadTimes: "100",
      size: "2.5M",
      id: "2",
    },
    {
      postsrc: "https://s6.jpg.cm/2022/04/29/LiTWS5.png",
      introduction:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      publishTime: "2022年07月12日",
      downloadTimes: "100",
      size: "2.5M",
      id: "3",
    },
    {
      postsrc: "https://s6.jpg.cm/2022/04/29/LiTWS5.png",
      introduction:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      publishTime: "2022年07月12日",
      downloadTimes: "100",
      size: "2.5M",
      id: "4",
    },
    {
      postsrc: "https://s6.jpg.cm/2022/04/29/LiTWS5.png",
      introduction:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      publishTime: "2022年07月12日",
      downloadTimes: "100",
      size: "2.5M",
      id: "5",
    },
    {
      postsrc: "https://s6.jpg.cm/2022/04/29/LiTWS5.png",
      introduction:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      publishTime: "2022年07月12日",
      downloadTimes: "100",
      size: "2.5M",
      id: "6",
    },
    {
      postsrc: "https://s6.jpg.cm/2022/04/29/LiTWS5.png",
      introduction:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      publishTime: "2022年07月12日",
      downloadTimes: "100",
      size: "2.5M",
      id: "7",
    },
  ];
  total.value = coursewareList.value.length || 0;
};
/* 下载 */
const downloadCourseware = () => {};
/* 收藏 */
const collectionCourseware = () => {};
</script>

<style lang="scss" scoped>
.teaching_video {
  .banner {
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
  .video_query {
    width: 75%;
    margin: 0 auto;
    .query_form {
      width: 100%;
      height: 120px;
      display: inline-block;
      margin-top: -24px;
      background-color: #ffffff;
      box-shadow: 0px 0px 13px 0px rgb(6 0 1 / 7%);
      border-radius: 4px;
      z-index: 99;
      padding: 20px;
      box-sizing: border-box;
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
      .line {
        height: 1px;
        width: 100%;
        margin: 10px 0;
        background-color: #e5e5e5;
      }
    }
    .video_list {
      margin-top: 40px;
      .list_title {
        display: flex;
        height: 32px;
        align-items: flex-end;
        margin: 30px 0;
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
      .list {
        .teaching_courseware_list_info {
          position: relative;
          padding: 10px;
          box-shadow: 4px 7px 54px 0px rgba(60, 118, 122, 0.19);
          border-radius: 3px;
          margin-right: 25px;
          display: flex;
          flex-direction: column;
          &:hover {
            .courseware_mask {
              opacity: 1;
              animation: mask 0.3s ease-in-out;
            }
          }
          .courseware_title {
            font-size: 22px;
            font-weight: bold;
            line-height: 40px;
            width: 100%;
            text-align: center;
          }
          .courseware_sub_info {
            display: flex;
            justify-content: space-evenly;
            div {
              color: #535353;
              line-height: 30px;
              font-size: 12px;
            }
          }
          .courseware_postsrc {
            border-radius: 4px;
            border: 12px solid #000;
            overflow: hidden;
            transition: all 0.3s ease;
            &:hover {
              img {
                transform: scale(1.2);
              }
            }
            img {
              transition: all 0.3s ease;
              width: 100%;
              height: 200px;
              object-fit: cover;
            }
          }
          .courseware_introduction {
            margin-top: 10px;
            display: -webkit-box;
            word-break: break-all;
            line-height: 20px;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2; //需要显示的行数
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .courseware_mask {
            position: absolute;
            bottom: 0;
            left: 50%;
            opacity: 0;
            transition: all 0.3s ease-in-out;
            height: calc(40% - 20px);
            width: calc(100% - 20px);
            transform: translate(-50%);
            background-color: rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;
            button {
              margin: 0 20px;
              padding: 0 10px;
            }
          }
        }
      }
      .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
      }
    }
  }
  @keyframes mask {
    0% {
      bottom: -10%;
    }
    100% {
      bottom: 0;
    }
  }
}
</style>