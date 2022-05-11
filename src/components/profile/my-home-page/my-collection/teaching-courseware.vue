<template>
  <div class="profile_courseware">
    <a-grid
      :cols="{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 }"
      :colGap="12"
      :rowGap="16"
    >
      <a-grid-item v-for="(courseware, index) in coursewareList" :key="index">
        <div class="courseware_info">
          <div class="img">
            <img :src="courseware.img" alt="课件图片" />
          </div>
          <div class="courseware_name">{{ courseware.courseware_name }}</div>
          <div class="curseware">
            <div class="courseware_upload_time">
              {{ courseware.courseware_upload_time }}
            </div>
            <div class="courseware_size">
              大小:{{ courseware.courseware_size }}
            </div>
            <div class="courseware_download_times">
              <icon-download />{{ courseware.courseware_download_times }}次
            </div>
          </div>
        </div>
      </a-grid-item>
    </a-grid>
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
</template>
<script setup name="profileCourseware">
import { onMounted, ref } from "vue";
const coursewareList = ref([]);
const form = ref({
  subject: "1",
  grade: "1",
  pageNum: 1,
  pageSize: 10,
});
const total = ref(0);
const pageSizeChange = (page) => {
  console.log("当前页码大小", page);
};
const pageChange = (pageSize) => {
  console.log("当前页码", pageSize);
};
onMounted(() => {
  const arr = new Array(10).fill({
    img: "https://p1-live.byteimg.com/tos-cn-i-gjr78lqtd0/c7042f72422646adb9abef42576e3200~tplv-gjr78lqtd0-image.image",
    courseware_name: "教师PPT课件",
    courseware_upload_time: "2020年01月01日",
    courseware_size: "1.5M",
    courseware_download_times: "100",
  });
  coursewareList.value = arr;
  total.value = coursewareList.value.length;
});
</script>
<style lang="scss" scoped>
.profile_courseware {
  background-color: #fff;
  padding: 20px 30px;
  position: relative;
  .courseware_info {
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background: #f7f8fa;
    padding: 5px;
    .img {
      width: 80%;
      border: 5px solid #212836;
      border-radius: 4px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: middle;
        transform: scale(1.01);
      }
    }
    .courseware_name {
      font-size: 16px;
      line-height: 25px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .curseware {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      color: #212836;
      cursor: default;
      div{
        margin: 0 3px;
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