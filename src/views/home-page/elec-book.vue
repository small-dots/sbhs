<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-28 13:50:40
 * @LastEditTime: 2022-05-07 17:56:59
 * @Description: 
 -->
<template>
  <div class="home_electronic">
    <div class="home_electronic_info">
      <div class="home_elecbook_top">
        <div class="home_elecbook_top_left">
          <div class="home_elecbook_top_left_title">电子<span>书籍</span></div>
          <div class="home_elecbook_top_left_tip">
            学校致力于培养全省优质学子
          </div>
          <div class="elecbook_title_bg">
            <img
              src="@/assets/images/classic-video/video_title_bg.png"
              alt=""
            />
          </div>
        </div>
        <div class="home_elecbook_top_more" @click="lookmore">
          前往查看更多+
        </div>
      </div>
      <div class="home_electronic_info_list">
        <a-row :gutter="24">
          <a-col
            v-for="(eleitem, index) in elecBookList"
            :key="index"
            :xs="24"
            :sm="12"
            :md="8"
            :lg="6"
            :xl="4"
            :xxl="4"
          >
            <div class="electronic_info">
              <div class="electronic_info_img">
                <img :src="eleitem.img" alt="" />
                <div class="electronic_info_tip">
                  <span>内容简介：</span>
                  {{ eleitem.info }}
                </div>
              </div>
              <div class="electronic_info_title">{{ eleitem.title }}</div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const elecBookList = [
  {
    img: "https://s6.jpg.cm/2022/04/28/LimfJf.webp",
    title: "海底两万里",
    info: "此书主要讲述鹦鹉螺号潜艇的故事。1866年，海上发现了一只疑似为独角鲸的大怪物，阿龙纳斯教授及仆人康塞尔受邀参加追捕。在追捕过程中，他们与鱼叉手尼德·兰不幸落水，到了怪物的脊背上...",
  },
  {
    img: "https://s6.jpg.cm/2022/04/28/LimfJf.webp",
    title: "海底两万里",
    info: "此书主要讲述鹦鹉螺号潜艇的故事。1866年，海上发现了一只疑似为独角鲸的大怪物，阿龙纳斯教授及仆人康塞尔受邀参加追捕。在追捕过程中，他们与鱼叉手尼德·兰不幸落水，到了怪物的脊背上...",
  },
  {
    img: "https://s6.jpg.cm/2022/04/28/LimfJf.webp",
    title: "海底两万里",
    info: "此书主要讲述鹦鹉螺号潜艇的故事。1866年，海上发现了一只疑似为独角鲸的大怪物，阿龙纳斯教授及仆人康塞尔受邀参加追捕。在追捕过程中，他们与鱼叉手尼德·兰不幸落水，到了怪物的脊背上...",
  },
  {
    img: "https://s6.jpg.cm/2022/04/28/LimfJf.webp",
    title: "海底两万里",
    info: "此书主要讲述鹦鹉螺号潜艇的故事。1866年，海上发现了一只疑似为独角鲸的大怪物，阿龙纳斯教授及仆人康塞尔受邀参加追捕。在追捕过程中，他们与鱼叉手尼德·兰不幸落水，到了怪物的脊背上...",
  },
  {
    img: "https://s6.jpg.cm/2022/04/28/LimfJf.webp",
    title: "海底两万里",
    info: "此书主要讲述鹦鹉螺号潜艇的故事。1866年，海上发现了一只疑似为独角鲸的大怪物，阿龙纳斯教授及仆人康塞尔受邀参加追捕。在追捕过程中，他们与鱼叉手尼德·兰不幸落水，到了怪物的脊背上...",
  },
  {
    img: "https://s6.jpg.cm/2022/04/28/LimfJf.webp",
    title: "海底两万里",
    info: "此书主要讲述鹦鹉螺号潜艇的故事。1866年，海上发现了一只疑似为独角鲸的大怪物，阿龙纳斯教授及仆人康塞尔受邀参加追捕。在追捕过程中，他们与鱼叉手尼德·兰不幸落水，到了怪物的脊背上...",
  },
];
const lookmore = () => {
  router.push({ name:'electronicBook' });
};
</script>
<style lang="scss" scoped>
.home_electronic {
  background-color: #f7f8fa;
  .home_electronic_info {
    padding: 0 10%;
    margin: 0 auto;
    padding-top: 89px;
    padding-bottom: 72px;
    box-sizing: border-box;
    .home_elecbook_top {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .home_elecbook_top_left {
        position: relative;
        .home_elecbook_top_left_title {
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
        .home_elecbook_top_left_tip {
          font-family: MicrosoftYaHei;
          font-size: 16px;
          color: #777777;
        }
        .elecbook_title_bg {
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
      .home_elecbook_top_more {
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
    .home_electronic_info_list {
      margin-top: 50px;
      .electronic_info {
        position: relative;
        background-color: #ffffff;
        margin-right: -1px;
        padding: 30px 31.5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:before,
        &:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          transition: 0.5s ease;
        }
        &:before {
          top: -5px;
          left: -5px;
          border-top: 0px solid rgba(252, 97, 75, 0.9);
          border-left: 0px solid rgba(252, 97, 75, 0.9);
        }
        &:hover::before {
          border-top-width: 2px;
          border-left-width: 2px;
          width: calc(100% + 8px);
          height: calc(100% + 8px);
        }
        &:hover::after {
          right: -5px;
          bottom: -5px;
          border-bottom: 2px solid rgba(252, 97, 75, 0.9);
          border-right: 2px solid rgba(252, 97, 75, 0.9);
          width: calc(100% + 8px);
          height: calc(100% + 8px);
        }

        &:hover {
          .electronic_info_img .electronic_info_tip {
            opacity: 1;
            animation: ebook_info_tip_animation 0.5s ease;
          }
        }

        .electronic_info_img {
          width: 174px;
          height: 236px;
          position: relative;
          img {
            width: 174px;
            height: 236px;
          }
          .electronic_info_tip {
            position: absolute;
            top: -10px;
            bottom: -10px;
            right: -20px;
            left: -20px;
            width: 215px;
            height: 255px;
            background-color: rgba(252, 97, 75, 0.9);
            padding: 0 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: MicrosoftYaHei;
            font-size: 13px;
            color: #ffffff;
            opacity: 0;
            transition: all 0.3s;
            span {
              font-family: MicrosoftYaHei;
              font-size: 14px;
              color: #ffffff;
            }
          }
        }
        @keyframes ebook_info_tip_animation {
          0% {
            opacity: 0;
            margin-top: 0px;
          }
          20% {
            opacity: 0;
            margin-top: -80px;
          }
          100% {
            opacity: 1;
            margin-top: 0px;
          }
        }
        .electronic_info_title {
          font-family: MicrosoftYaHei;
          font-size: 16px;
          color: #333333;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>