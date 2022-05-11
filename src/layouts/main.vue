<template>
  <div class="layout">
    <a-layout>
      <a-layout-header class="header"
        ><Header :menu-list="menuList"
      /></a-layout-header>
      <a-layout-content class="main">
        <div class="container">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer class="footer"> <Footer /></a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup>
import Header from "layouts/header.vue";
import Footer from "layouts/footer.vue";
import { ref } from "vue";
defineProps({
  msg: String,
});
const menuList = [
  { name: "首页", menuName: "homePage", path: "/" },
  { name: "选学科", menuName: "selectedSubjects", path: "chose-subjects" },
  {
    name: "走班排课",
    menuName: "schedulingClasses",
    path: "scheduling-classes",
  },
  { name: "教学视频", menuName: "teachingVideo", path: "teaching-video" },
  {
    name: "教学课件",
    menuName: "teachingCourseware",
    path: "teaching-courseware",
  },
  {
    name: "名师展示",
    menuName: "famousTeacherDisplay",
    path: "famous-teacher-display",
  },
  {
    name: "电子书籍",
    menuName: "electronicBook",
    path: "electronic-book",
  },
  { name: "优秀学生", menuName: "excellentStudent", path: "excellent-student" },
  { name: "在线提问", menuName: "onlineQuestions", path: "online-questions" },
  { name: "习题展示", menuName: "exerciseDisplay", path: "exercise-display" },
];
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
  .arco-layout {
    display: flex;
    flex-direction: column;
    .header {
      flex-shrink: 0;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 999;
    }
    .main {
      margin-top: 140px;
      .container {
        max-width: 100%;
        margin: 0 auto;
      }
    }
    .footer {
    }
  }
}
</style>