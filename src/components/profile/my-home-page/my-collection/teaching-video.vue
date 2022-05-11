<template>
  <div class="teaching_video">
    <a-grid
      :cols="{ xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }"
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
            <img :src="item.video_img" alt="视频海报" />
            <div class="video_play" @click="playVideo">
              <icon-play-circle size="30" />
            </div>
            <div class="del_btn"><icon-delete size="14" />删除</div>
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
    <video-modal
      :showModal="showModal"
      :videoMap="videoRowData"
      @close="closeModel"
    />
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
const videoList = ref([]);
const total = ref(0);
const videoRowData = reactive({}); // 传递的视频参数
onMounted(() => {
  search(form.value);
});
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
  .teaching_video_list_info {
    box-shadow: 4px 7px 54px 0px rgba(60, 118, 122, 0.19);
    border-radius: 3px;
    margin-right: 25px;
    display: flex;
    flex-direction: column;
    &:last-child {
      margin-right: 0;
    }
    .video_img {
      height: 227px;
      border-radius: 3px;
      position: relative;
      cursor: pointer;
      &:hover .del_btn {
        opacity: 1;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
        object-fit: cover;
      }
      .del_btn {
        opacity: 0;
        position: absolute;
        top: 10px;
        right: 10px;
        width: 60px;
        height: 20px;
        transition: all 0.3s ease-in-out;
        background: #fff;
        border-radius: 6px;
        text-align: center;
        line-height: 20px;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          color: #fff;
          background: #000;
        }
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
</style>