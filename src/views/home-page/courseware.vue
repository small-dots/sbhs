<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-28 10:55:43
 * @LastEditTime: 2022-04-28 11:33:19
 * @Description: 优选课件
 -->
<template>
  <div class="home_courseware">
    <div class="home_courseware_info">
      <div class="home_video_top">
        <div class="home_video_top_left">
          <div class="home_video_top_left_title">优选<span>课件</span></div>
          <div class="home_video_top_left_tip">
            优质的课件资源，更方便学生和教师的学习
          </div>
          <div class="home_video_title_bg">
            <img
              src="@/assets/images/classic-video/video_title_bg.png"
              alt=""
            />
          </div>
        </div>
        <div class="home_courseware_info_top_list">
          <ul>
            <li v-for="ppttable in coursewaretabList" :key="ppttable.key">
              {{ ppttable.title }}
            </li>
          </ul>
        </div>
      </div>
      <div class="home_courseware_list">
        <a-row>
          <a-col
            v-for="(ppt, index) in coursewareList"
            :key="index"
            :xs="24"
            :sm="12"
            :md="12"
            :lg="6"
            :xl="6"
          >
            <div
              :style="{ background: ppt.color }"
              class="home_courseware_list_info"
            >
              <div class="courseware_list_info_title">{{ ppt.title }}</div>
              <div class="courseware_list_info_time">
                更新时间：{{ ppt.time }}
              </div>
              <div class="courseware_list_info_img">
                <img :src="ppt.img" alt="" />
              </div>
              <div class="courseware_list_info_say">
                <div class="info_say_border">
                  <div class="info_say_border_title">{{ ppt.title }}</div>
                  <div class="info_say_border_time">
                    更新时间：{{ ppt.time }}
                  </div>
                  <div class="info_say_border_info">
                    课件简介:
                    高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="home_border_bottom"></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const coursewaretabList = [
  { key: "1", title: "语文" },
  { key: "2", title: "数学" },
  { key: "3", title: "外语" },
  { key: "4", title: "政治" },
  { key: "5", title: "历史" },
  { key: "6", title: "地理" },
  { key: "7", title: "生物" },
  { key: "8", title: "物理" },
  { key: "9", title: "化学" },
];
const coursewareList = [
  {
    id: "1",
    title: "教师工作汇报PPT课件",
    time: "2020-10-20",
    img: "https://s6.jpg.cm/2022/04/28/LikOd2.png",
    info: "课件简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
    color: "#fc614b",
  },
  {
    id: "2",
    title: "教师工作汇报PPT课件",
    time: "2020-10-20",
    img: "https://s6.jpg.cm/2022/04/28/LikOd2.png",
    info: "课件简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
    color: "#ffffff",
  },
  {
    id: "3",
    title: "教师工作汇报PPT课件",
    time: "2020-10-20",
    img: "https://s6.jpg.cm/2022/04/28/LikOd2.png",
    info: "课件简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
    color: "#23949d",
  },
  {
    id: "4",
    title: "教师工作汇报PPT课件",
    time: "2020-10-20",
    img: "https://s6.jpg.cm/2022/04/28/LikOd2.png",
    color: "#ffffff",
    info: "课件简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
  },
  {
    id: "5",
    title: "教师工作汇报PPT课件",
    time: "2020-10-20",
    img: "https://s6.jpg.cm/2022/04/28/LikOd2.png",
    color: "#ffffff",
    info: "课件简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
  },
  {
    id: "6",
    title: "教师工作汇报PPT课件",
    time: "2020-10-20",
    img: "https://s6.jpg.cm/2022/04/28/LikOd2.png",
    color: "#54b637",
    info: "课件简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
  },
  {
    id: "7",
    title: "教师工作汇报PPT课件",
    time: "2020-10-20",
    color: "#ffffff",
    img: "https://s6.jpg.cm/2022/04/28/LikOd2.png",
    info: "课件简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
  },
  {
    id: "8",
    title: "教师工作汇报PPT课件",
    time: "2020-10-20",
    color: "#ec485b",
    img: "https://s6.jpg.cm/2022/04/28/LikOd2.png",
    info: "课件简介: 高考重难点知识，如何抓住复习关键，开启高分之路？立足20、21高考，2022高考如何高效规划复习？如何抓住实质学会举一反三?别着急，梅梅老师＆张林老师统统为你解答稳握高分在手！",
  },
];
</script>

<style lang="scss" scoped>
.home_courseware {
  margin-top: 67px;
  height: 873px;
  background-image: url("@/assets/images/coueseware/courseware_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .home_courseware_info {
    padding: 0 10%;
    margin: 0 auto;
    padding-top: 61px;
    box-sizing: border-box;
    .home_video_top {
      .home_video_top_left {
        position: relative;
        .home_video_top_left_title {
          color: #ffffff;
          font-family: MicrosoftYaHei-Bold;
          font-size: 30px;
          font-weight: bold;
        }
        .home_video_top_left_tip {
          color: #eeeeee;
          font-size: 16px;
          line-height: 30px;
        }
        .home_video_title_bg {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(-50%, -30%);
          width: 41px;
          height: 41px;
        }
      }

      .home_courseware_info_top_list {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        ul {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          li {
            padding: 0 30px;
            box-sizing: border-box;
            position: relative;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            color: #ffffff;
            &:hover {
              color: $--primary-6;
            }
            cursor: pointer;
            &:last-child {
              padding-right: 0;
            }
            &:before {
              content: "";
              position: absolute;
              display: inline-block;
              top: 50%;
              transform: translate(-50%, -50%);
              right: 0;
              width: 1px;
              height: 17px;
              border-right: 1px dashed #797c88;
            }
            &:last-child:before {
              display: block;
              content: "";
              position: absolute;
              width: 0;
              height: 0;
              right: 0;
              top: 0;
            }
          }
        }
      }
    }
    .home_courseware_list {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        display: inline-block;
        bottom: -15px;
        border-bottom: 1px solid #dddddd;
        width: 101%;
        height: 20px;
        background-color: #e4e3e3;
        box-shadow: 0px -8px 8px 0px rgba(0, 0, 0, 0.79);
        border-radius: 10px;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
      }
      .home_courseware_list_info {
        cursor: pointer;
        height: 318px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        &:hover .courseware_list_info_say {
          opacity: 1;
        }

        .courseware_list_info_title {
          font-family: MicrosoftYaHei-Bold;
          font-size: 19px;
          color: #333333;
          font-weight: bold;
        }
        .courseware_list_info_time {
          font-family: MicrosoftYaHei;
          font-size: 12px;
          color: #666666;
          margin-top: 10px;
          margin-bottom: 10px;
          line-height: 12px;
        }
        .courseware_list_info_img {
          width: 285px;
          height: 188px;
          box-sizing: content-box;
          border-bottom: 14px solid #000000;
          border-right: 14px solid #000000;
          border-top: 14px solid #000000;
          border-left: 14px solid #000000;
          //border: 14px solid #000000;
          border-radius: 6px;
          img {
            width: 285px;
            height: 188px;
          }
        }
        .courseware_list_info_say {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #fc614b;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.2s ease-in-out;
          .info_say_border {
            border: solid 1px #ffffff;
            width: 100%;
            height: 258px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;
            .info_say_border_title {
              font-family: MicrosoftYaHei-Bold;
              font-size: 19px;
              color: #ffffff;
              font-weight: bold;
            }
            .info_say_border_time {
              font-family: MicrosoftYaHei;
              font-size: 12px;
              color: #eeeeee;
              margin-top: 10px;
            }
            .info_say_border_info {
              font-family: MicrosoftYaHei;
              font-size: 14px;
              color: #f6f4f4;
              margin-top: 30px;
            }
          }
        }
      }
    }
  }
}
</style>