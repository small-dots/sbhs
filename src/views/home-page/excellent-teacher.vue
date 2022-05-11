<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-28 11:50:28
 * @LastEditTime: 2022-04-28 13:57:00
 * @Description: 哟秀老师
 -->
 <template>
  <div class="home_teacher">
    <div class="home_teacher_info">
      <div class="home_teacher_top">
        <div class="home_teacher_top_left">
          <div class="home_teacher_top_left_title">优秀<span>老师</span></div>
          <div class="home_teacher_top_left_tip">
            我们有优质的教师资源，保证教学质量
          </div>
          <div class="teacher_title_bg">
            <img
              src="@/assets/images/classic-video/video_title_bg.png"
              alt=""
            />
          </div>
        </div>
        <div class="home_teacher_top_more">前往查看更多+</div>
      </div>
      <div class="home_teacher_info_list">
        <a-grid
          :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5 }"
          :colGap="12"
          :rowGap="16"
        >
          <a-grid-item v-for="(teacher, index) in teacherList" :key="index">
            <div class="teacher_list">
              <div class="teacher_list_img">
                <img :src="teacher.img" alt="" />
              </div>
              <div class="teacher_list_type">{{ teacher.type }}</div>
              <div class="teacher_list_name">
                <div class="teacher_list_name_left"></div>
                <div class="teacher_list_name_center">{{ teacher.name }}</div>
                <div class="teacher_list_name_left"></div>
              </div>
              <div class="teacher_list_info">{{ teacher.info }}</div>
            </div>
          </a-grid-item>
        </a-grid>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const teacherList = [
  {
    img: "https://s6.jpg.cm/2022/04/28/LimFcQ.png",
    type: "英语老师",
    name: "李云鹏",
    info: "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
  },
  {
    img: "https://s6.jpg.cm/2022/04/28/LimFcQ.png",
    type: "英语老师",
    name: "李云鹏",
    info: "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
  },
  {
    img: "https://s6.jpg.cm/2022/04/28/LimFcQ.png",
    type: "英语老师",
    name: "李云鹏",
    info: "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
  },
  {
    img: "https://s6.jpg.cm/2022/04/28/LimFcQ.png",
    type: "英语老师",
    name: "李云鹏",
    info: "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
  },
  {
    img: "https://s6.jpg.cm/2022/04/28/LimFcQ.png",
    type: "英语老师",
    name: "李云鹏",
    info: "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
  }
];
</script>
<style lang="scss" scoped>
.home_teacher {
  background-image: url("@/assets/images/excellent-teacher/teacher_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .home_teacher_info {
    padding: 0 10%;
    margin: 0 auto;
    padding-top: 79px;
    padding-bottom: 77px;
    box-sizing: border-box;
    .home_teacher_top {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .home_teacher_top_left {
        position: relative;
        .home_teacher_top_left_title {
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
        .home_teacher_top_left_tip {
          font-family: MicrosoftYaHei;
          font-size: 16px;
          color: #fff;
          line-height: 30px;
        }
        .teacher_title_bg {
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
      .home_teacher_top_more {
        cursor: pointer;
        width: 146px;
        height: 39px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        border: solid 1px #ffffff;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #ffffff;
        &:hover {
          background-color: $--primary-6;
          color: #ffffff;
        }
      }
    }
    .home_video_top_left_title {
      color: #ffffff;
    }
    .home_video_top_more {
      color: #ffffff;
    }
    .home_teacher_info_list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 49px;
      .teacher_list {
        background-image: url("@/assets/images/excellent-teacher/teacher_list_bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 440px;
        border-radius: 4px;
        padding: 0 30px;
        box-sizing: border-box;
        margin-right: 28px;
        &:last-child {
          margin-right: 0;
        }
        .teacher_list_img {
          width: 135px;
          height: 135px;
          border: solid 3px #fd5b44;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 131px;
            height: 132px;
            border-radius: 50%;
          }
        }
        .teacher_list_type {
          font-family: MicrosoftYaHei-Bold;
          font-size: 20px;
          color: #333333;
          margin-top: 15px;
          margin-bottom: 16px;
        }
        .teacher_list_name {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          .teacher_list_name_left {
            width: 29px;
            border: 1px solid #aaaaaa;
          }
          .teacher_list_name_center {
            font-family: MicrosoftYaHei;
            font-size: 18px;
            color: #333333;
            margin: 0 7px;
          }
        }
        .teacher_list_info {
          font-family: MicrosoftYaHei;
          font-size: 12px;
          color: #777777;
        }
      }
    }
  }
}
</style>