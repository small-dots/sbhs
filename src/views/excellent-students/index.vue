<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-28 15:34:33
 * @LastEditTime: 2022-04-28 16:06:42
 * @Description: 优秀学生
 -->
<template>
  <div class="teaching_video">
    <div class="banner">
      <img src="@/assets/images/excellent_student/student_banner.png" alt="" />
    </div>
    <div class="video_query">
      <div class="video_list">
        <div class="list_title">
          <div class="banner"></div>
          <div class="title">优秀<span>学生</span></div>
          <div class="subtitle">学校致力于培养全省优质学子</div>
        </div>
        <div class="list">
          <a-grid
            :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5 }"
            :colGap="24"
            :rowGap="16"
            class="grid-video-grid"
          >
            <a-grid-item v-for="(student, index) in studentList" :key="index">
              <div class="students_list_info">
                <div class="profile-image">
                  <img :src="student.image" alt="" />
                </div>
                <div class="student_info">
                  <div class="student_name">优秀学生：{{ student.name }}</div>
                  <div class="student_grade">年级：{{ student.grade }}</div>
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
const studentList = ref([]);
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
  console.log("搜索", params);
  studentList.value = [
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx7Ubh.webp",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      grade: "高一（2）班",
      name: " 张乐乐",
      id: "1",
    },
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx7Ubh.webp",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      grade: "高一（2）班",
      name: " 张乐乐",

      id: "2",
    },
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx7Ubh.webp",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      grade: "高一（2）班",
      name: " 张乐乐",

      id: "3",
    },
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx7Ubh.webp",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      grade: "高一（2）班",
      name: " 张乐乐",

      id: "4",
    },
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx7Ubh.webp",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      grade: "高一（2）班",
      name: " 张乐乐",

      id: "5",
    },
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx7Ubh.webp",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      grade: "高一（2）班",
      name: " 张乐乐",

      id: "6",
    },
    {
      image: "https://s6.jpg.cm/2022/04/30/Lx7Ubh.webp",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      grade: "高一（2）班",
      name: "王萌",

      id: "7",
    },
  ];
  total.value = studentList.value.length || 0;
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
        .students_list_info {
          box-shadow: 4px 7px 54px 0px rgba(60, 118, 122, 0.19);
          display: flex;
          flex-direction: column;
          position: relative;
          display: flex;
          align-items: center;
          cursor: pointer;
          border-radius: 5px;
          .profile-image {
            width: 100%;
            height: 100%;
            overflow: hidden;
            &:hover {
              img {
                transform: scale(1.2);
              }
            }
            img {
              width: 100%;
              height: 100%;
              padding: 0;
              margin: 0;
              transition: all 0.3s ease-in-out;
              border-radius: 5px;
              vertical-align: baseline;
            }
          }
          .student_info {
            position: absolute;
            width: 100%;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #00000042;
            .student_name {
              font-family: MicrosoftYaHei;
              font-size: 16px;
              color: #ffffff;
              padding: 5px 0;
            }
            .student_grade {
              font-family: MicrosoftYaHei;
              font-size: 12px;
              color: #eeeeee;
              padding: 5px 0;
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
