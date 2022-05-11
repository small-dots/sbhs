<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-28 15:36:19
 * @LastEditTime: 2022-04-29 16:46:29
 * @Description: 教学视频
 -->
 <template>
  <div class="teaching_video">
    <div class="banner">
      <img src="@/assets/images/teaching-video/video_banner.png" alt="" />
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
          <div class="title">经典<span>视频</span></div>
          <div class="subtitle">优质的经典视频资源，学生老师共享</div>
        </div>
        <div class="list">
          <a-grid
            :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6, xxl: 6 }"
            :colGap="12"
            :rowGap="16"
            class="grid-video-grid"
          >
            <a-grid-item
              v-for="(item, index) in videoList"
              :key="index"
              class="video-item"
            >
              <div class="teaching_video_list_info">
                <div class="video_img">
                  <img :src="item.video_img" alt="" />
                  <div class="video_tip_say">{{ item.videotip }}</div>
                  <div class="video_play" @click="playVideo">
                    <icon-play-circle size="30" />
                  </div>
                </div>
                <div class="video_tip">
                  <div class="video_tip_title">{{ item.title }}</div>
                  <div class="video_tip_teacher">
                    <div class="teacher_info">
                      <div class="teacher_info_img">
                        <img :src="item.video_img" alt="" />
                      </div>
                      <div class="teacher_info_name">{{ item.name }}</div>
                    </div>
                    <div class="video_info_data">
                      <div class="video_info_data_time">
                        <div class="time_img">
                          <icon-clock-circle />
                        </div>
                        <div class="time_title">{{ item.video_time }}</div>
                      </div>
                      <div class="video_info_data_view">
                        <div class="view_img">
                          <icon-eye />
                        </div>
                        <div class="time_title">{{ item.view }}</div>
                      </div>
                    </div>
                  </div>
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
    <video-modal
      :showModal="showModal"
      :videoMap="videoRowData"
      @close="closeModel"
    />
  </div>
</template>
<script setup>
import videoModal from "@/components/teaching-video/video-modal.vue";
import { ref, reactive, onMounted } from "vue";
const form = ref({
  subject: "1",
  grade: "1",
  pageNum: 1,
  pageSize: 10,
});
const showModal = ref(false); // 是否显示视频播放弹窗
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

const videoList = ref([]);
const total = ref(0);
const videoRowData = reactive({}); // 传递的视频参数
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
  videoList.value = [
    {
      video_img: "https://s6.jpg.cm/2022/04/28/LikNBw.png",
      videotip:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      video_time: "00:12:27",
      view: "100",
      id: "1",
    },
    {
      video_img: "https://s6.jpg.cm/2022/04/28/LikNBw.png",
      videotip:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      video_time: "00:12:27",
      view: "100",
      id: "2",
    },
    {
      video_img: "https://s6.jpg.cm/2022/04/28/LikNBw.png",
      videotip:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      video_time: "00:12:27",
      view: "100",
      id: "3",
    },
    {
      video_img: "https://s6.jpg.cm/2022/04/28/LikNBw.png",
      videotip:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      video_time: "00:12:27",
      view: "100",
      id: "4",
    },
    {
      video_img: "https://s6.jpg.cm/2022/04/28/LikNBw.png",
      videotip:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      video_time: "00:12:27",
      view: "100",
      id: "5",
    },
    {
      video_img: "https://s6.jpg.cm/2022/04/28/LikNBw.png",
      videotip:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      video_time: "00:12:27",
      view: "100",
      id: "6",
    },
    {
      video_img: "https://s6.jpg.cm/2022/04/28/LikNBw.png",
      videotip:
        "视频简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
      title: "李老师的经典教学视频",
      name: " 李老师",
      video_time: "00:12:27",
      view: "100",
      id: "7",
    },
  ];
  total.value = videoList.value.length || 0;
};
/* 点击视频播放按钮 ，弹出弹框并自动播放视频 */
const playVideo = () => {
  showModal.value = true;
  videoRowData["src"] = "https://media.w3.org/2010/05/sintel/trailer.mp4";
  videoRowData["title"] = "李老师的经典教学视频";
};
const closeModel = () => {
  showModal.value = false;
};
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
      .list {
        .teaching_video_list_info {
          box-shadow: 4px 7px 54px 0px rgba(60, 118, 122, 0.19);
          border-radius: 3px;
          margin-right: 25px;
          display: flex;
          flex-direction: column;
          &:last-child {
            margin-right: 0;
          }
          &:hover .video_tip {
            background-color: #ffffff !important;
          }
          .video_img {
            height: 227px;
            border-radius: 3px;
            position: relative;
            cursor: pointer;
            &:hover .video_tip_say {
              opacity: 1;
            }

            img {
              width: 100%;
              height: 100%;
              border-radius: 3px;
            }
            .video_tip_say {
              position: absolute;
              bottom: 0;
              padding: 0 25px;
              box-sizing: border-box;
              height: 156px;
              background: rgba(255, 255, 255, 0.7);
              justify-content: center;
              align-items: center;
              font-size: 14px;
              color: #333333;
              opacity: 0;
              transition: all 0.2s ease-in-out;
              display: flex;
            }
            .video_play {
              position: absolute;
              bottom: 9px;
              right: 12px;
              width: 25px;
              height: 25px;
              cursor: pointer;
              svg {
                color: $--primary-6;
              }
            }
          }
          .video_tip {
            padding: 13px 20px;
            box-sizing: border-box;
            border-bottom: 1px solid #eeeeee;
            background-color: #f7f8fa;
            .video_tip_title {
              font-family: MicrosoftYaHei;
              font-size: 16px;
              color: #333333;
            }
            .video_tip_teacher {
              margin-top: 16px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .teacher_info {
                display: flex;
                align-items: center;
                .teacher_info_img {
                  width: 35px;
                  height: 35px;
                  border-radius: 50%;
                  img {
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                  }
                }
                .teacher_info_name {
                  font-family: MicrosoftYaHei;
                  font-size: 12px;
                  color: #111111;
                  margin-left: 7px;
                }
              }
              .video_info_data {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                .video_info_data_time {
                  display: flex;
                  align-items: center;
                  .time_img {
                    width: 14px;
                    height: 14px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                      width: 14px;
                      height: 14px;
                    }
                  }
                  .time_title {
                    font-family: MicrosoftYaHei;
                    font-size: 12px;
                    color: #999999;
                    margin-left: 4px;
                  }
                }
                .video_info_data_view {
                  display: flex;
                  align-items: center;
                  margin-left: 25px;
                  .view_img {
                    width: 17px;
                    height: 13px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                      width: 17px;
                      height: 13px;
                    }
                  }
                  .time_title {
                    font-family: MicrosoftYaHei;
                    font-size: 12px;
                    color: #999999;
                    margin-left: 4px;
                  }
                }
              }
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
}
</style>