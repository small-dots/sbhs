<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-28 15:36:11
 * @LastEditTime: 2022-04-28 15:36:12
 * @Description: 名师展示
 -->
<template>
  <div class="teaching_video">
    <div class="banner">
      <img src="@/assets/images/teaching-video/video_banner.png" alt="" />
    </div>
    <div class="video_query">
      <div class="video_list">
        <div class="list_title">
          <div class="banner"></div>
          <div class="title">名师<span>展示</span></div>
          <div class="subtitle">我们有优质的教师资源，保证教学质量</div>
        </div>
        <div class="list">
          <a-grid
            :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5 }"
            :colGap="24"
            :rowGap="16"
            class="grid-video-grid"
          >
            <a-grid-item v-for="(teacher, index) in teacherList" :key="index">
              <div class="teachers_list_info">
                <div class="profile-image">
                  <img :src="teacher.image" alt="" />
                </div>
                <div class="teacher_role">{{ teacher.role }}</div>
                <div class="teacher_name">{{ teacher.name }}</div>
                <div class="teacher_introdaction">
                  {{ teacher.introdaction }}
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
const teacherList = ref([]);
const total = ref(0);
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
  teacherList.value = [
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx77D4.png",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      role: "生物、化学老师",
      name: " 李老师",
      id: "1",
    },
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx77D4.png",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      role: "语文老师",
      name: " 李老师",

      id: "2",
    },
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx77D4.png",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      role: "生物老师",
      name: " 李老师",

      id: "3",
    },
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx77D4.png",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      role: "语文老师",
      name: " 李老师",

      id: "4",
    },
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx77D4.png",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      role: "数理化老师",
      name: " 李老师",

      id: "5",
    },
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx77D4.png",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      role: "体育老师",
      name: " 李老师",

      id: "6",
    },
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx77D4.png",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      role: "语文、政治老师",
      name: " 张老师",

      id: "7",
    },
  ];
  total.value = teacherList.value.length || 0;
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
        .teachers_list_info {
          background-image: url("@/assets/images/famouse_teacher/teacher_list_bg.png");
          background-size:100%;
          background-repeat: no-repeat;
          box-shadow: 4px 7px 54px 0px rgba(60, 118, 122, 0.19);
          border-radius: 3px;
          display: flex;
          flex-direction: column;
          position: relative;
          display: flex;
          align-items: center;
          padding: 0 20px;
          cursor: pointer;
          .profile-image {
            width: 60%;
            height: 60%;
            border-radius: 50%;
            padding: 10px;
            margin-top: 40px;
            box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff !important;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .teacher_role {
            font-family: MicrosoftYaHei-Bold;
            font-size: 21.26px;
            color: #333333;
            margin-top: 15px;
            margin-bottom: 16px;
            font-weight: bold;
          }
          .teacher_name {
            font-size: 20px;
            color: #31344b;
            margin: 15px 7px;
            font-family: "Nunito Sans", sans-serif;
            font-weight: 400;
            &:before {
              content: "";
              display: inline-block;
              width: 29px;
              border: 1px solid #aaaaaa;
              vertical-align: middle;
            }
            &:after {
              content: "";
              display: inline-block;
              width: 29px;
              border: 1px solid #aaaaaa;
              vertical-align: middle;
            }
          }
          .teacher_introdaction {
            font-family: MicrosoftYaHei;
            font-size: 12.75px;
            color: #777777;
            margin-bottom: 20px;
            display: -webkit-box;
            word-break: break-all;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3; //需要显示的行数
            overflow: hidden;
            text-overflow: ellipsis;
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
