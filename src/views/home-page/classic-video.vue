<template>
  <div class="home_video">
    <div class="home_video_info">
      <div class="home_video_top">
        <div class="home_video_top_left">
          <div class="home_video_top_left_title">经典<span>视频</span></div>
          <div class="home_video_top_left_tip">
            优质的经典视频资源，学生老师共享
          </div>
          <div class="video_title_bg">
            <img
              src="@/assets/images/classic-video/video_title_bg.png"
              alt=""
            />
          </div>
        </div>
        <div class="home_video_top_more">前往查看更多+</div>
      </div>
      <div class="home_video_list">
        <a-grid
          :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5 }"
          :colGap="12"
          :rowGap="16"
          class="grid-video-grid"
        >
          <a-grid-item
            v-for="(item, index) in videoList"
            :key="index"
            class="video-item"
          >
            <div class="home_video_list_info">
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
              <div class="video_more">
                <div class="video_more_info">查看详情+</div>
              </div>
            </div>
          </a-grid-item>
        </a-grid>
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
import { ref ,reactive} from "vue";
import videoModal from "@/components/teaching-video/video-modal.vue";
const showModal = ref(false); // 是否显示视频播放弹窗
const videoRowData = reactive({}); // 传递的视频参数
/* 点击视频播放按钮 ，弹出弹框并自动播放视频 */
const playVideo = () => {
  showModal.value = true;
  videoRowData["src"] = "https://media.w3.org/2010/05/sintel/trailer.mp4";
  videoRowData["title"] = "李老师的经典教学视频";
};
const closeModel = () => {
  showModal.value = false;
};
const videoList = [
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
];
</script>
<style lang="scss" scoped>
.home_video {
  margin-top: 84px;
  .home_video_info {
    padding: 0 10%;
    margin: 0 auto;
    .home_video_top {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .home_video_top_left {
        position: relative;
        .home_video_top_left_title {
          font-family: MicrosoftYaHei-Bold;
          font-size: 30px;
          color: #000000;
          font-weight: bold;
          span {
            font-family: MicrosoftYaHei-Bold;
            font-size: 30px;
            color: #fd5b44;
          }
        }
        .home_video_top_left_tip {
          font-family: MicrosoftYaHei;
          font-size: 16px;
          color: #777777;
        }
        .video_title_bg {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(-50%, -30%);
          width: 41px;
          height: 41px;
          img {
            width: 41px;
            height: 41px;
          }
        }
      }
      .home_video_top_more {
        cursor: pointer;
        width: 146px;
        height: 39px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        border: solid 1px #c3c6cc;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #2d2d40;
        &:hover {
          background-color: $--primary-6;
          color: #ffffff;
        }
      }
    }
    .home_video_list {
      margin-top: 45px;

      .home_video_list_info {
        height: 417px;
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
              color: #fff;
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
        .video_more {
          background-color: #f7f8fa;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          .video_more_info {
            width: 120px;
            height: 42px;
            border-radius: 5px;
            border: solid 1px #666666;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: MicrosoftYaHei;
            font-size: 12px;
            color: #111111;
            cursor: pointer;
            &:hover {
              background-color: $--primary-6;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
</style>
