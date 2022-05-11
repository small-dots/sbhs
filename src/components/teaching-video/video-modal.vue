<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-29 11:29:11
 * @LastEditTime: 2022-04-29 16:41:33
 * @Description: 视屏播放弹窗
 -->
<template>
  <div class="video_modal">
    <a-modal
      v-model:visible="visible"
      draggable
      unmountOnClose
      width="60%"
      class="video_modal"
      @cancel="handleCancel"
      modal-class="video_modal_content"
      title-align="start"
    >
      <template #title>
        <span class="modal_title">{{ videoMap.title }} </span></template
      >
      <div class="video_box">
        <div class="center">
          <div v-show="!isError">
            <video
              id="videobox"
              class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9"
              preload="auto"
              width="100%"
              ref="videoRef"
              autoplay="true"
            >
              <p class="vjs-no-js">不支持播放</p>
            </video>
          </div>
          <div v-show="isError" class="errorTip"><p>视频出错了！</p></div>
        </div>
      </div>
      <template #footer>
        <div class="modal_footer">
          <div class="video_info">
            <div class="title">
              <span class="video_title">李老师高三经典视频讲解</span>
              <span class="video_clo">
                <a-button shape="round" size="mini">
                  <template #icon>
                    <icon-star />
                  </template>
                  <template #default>收藏</template>
                </a-button></span
              >
            </div>
            <div class="video_info_other">
              <div class="upload_time">
                <icon-clock-circle />2021-05-12 12:12:32 上传
              </div>
              <div class="video_time"><icon-clock-circle />19:01:21</div>
              <div class="watched">观看人数：1989 人次</div>
            </div>
          </div>
          <div class="author">
            <div class="img">
              <img
                src="https://s6.jpg.cm/2022/05/03/LxJpJh.png"
                alt="老师头像"
              />
            </div>
            <div class="uploader">
              <div class="name">主讲老师：廖老师</div>
              <a-button type="primary" shape="round" size="mini">
                <template #icon>
                  <icon-plus />
                </template>
                <template #default>关注</template>
              </a-button>
              <a-button type="primary" shape="round" size="mini">私信</a-button>
            </div>
          </div>
        </div>
      </template>
      <div class="close_btn_video" @click="handleCancel">
        <icon-close-circle-fill size="30" />
      </div>
    </a-modal>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, nextTick, watch } from "vue";
import videojs from "video.js";
const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  videoMap: {
    type: Object,
    default: () => {},
  },
});

const isError = ref(false);
const videoSrc = ref("");
const videoRef = ref(null);
const player = ref();
const emit = defineEmits(["close"]);
const visible = computed(() => {
  return props.showModal;
});
watch(visible, async (newValue) => {
  if (newValue) {
    nextTick(() => {
      init();
    });
  }
});
/* 初始化视频播放器 */
const init = () => {
  player.value = videojs(
    videoRef.value,
    {
      //视频源
      sources: [
        {
          src: props.videoMap.src,
          type: "video/mp4",
        },
      ],
      //是否显示播放按钮
      bigPlayButton: true,
      playbackRates: [0.5, 1, 1.5, 2],
      controls: true,
      //设置小喇叭音量键
      controlBar: {
        fullscreenToggle: true,
        // 音量条的横向还是纵向显示
        volumePanel: {
          inline: false,
        },
      },
    },
    () => {
      player.value.on("play", () => {
        console.log("开始播放");
      });
    }
  );
};
const handleCancel = () => {
  close();
};
const close = () => {
  emit("close");
};
</script>

<style lang="scss">
.video_modal {
  .video_box {
    width: 100%;
    height: 100%;
  }
  .video_modal_content {
    background: #1e242c;
    .modal_title {
      color: #fff;
    }
    .arco-modal-header {
      display: none !important;
      border-bottom: none;
    }
    .arco-modal-body {
      padding: 0;
    }
    .arco-modal-footer {
      border-top: 1px solid #39393c;
    }
  }
  .modal_footer {
    display: flex;
    justify-content: space-between;
    .video_info {
      .title {
        display: flex;
        align-items: center;
        .video_title {
          font-size: 22px;
          color: #fff;
        }
        .video_clo {
          margin-left: 20px;
        }
      }
      .video_info_other {
        display: flex;
        flex-wrap: nowrap;
        margin: 10px 0;
        color: #8d8e8f;
        .upload_time {
          margin-right: 5px;
        }
        .video_time {
          margin: 0 5px;
        }
        .watched {
          margin-left: 5px;
        }
      }
    }
    .author {
      display: flex;
      align-items: center;
      border: 1px solid #888888;
      border-radius: 12px;
      padding: 0 10px;
      .img {
        width: 50px;
        height: 50px;
        cursor: pointer;
        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
      }
      .uploader{
        .name{
          color: #fff;
        }
        button{
          margin: 0 2px;
        }
      }
    }
  }
  .close_btn_video {
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
</style>