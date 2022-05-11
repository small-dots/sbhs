<template>
  <div class="profile_eBook">
    <a-grid
      :cols="{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4 }"
      :colGap="12"
      :rowGap="16"
    >
      <a-grid-item v-for="(ebook, index) in ebookList" :key="index">
        <div class="ebook_info">
          <div class="ebook_img">
            <img :src="ebook.book_img" alt="" />
          </div>
          <div class="ebook_name">{{ ebook.book_name }}</div>
          <div class="ebook_author">
            <span>作者：</span>{{ ebook.book_author }}
          </div>
          <div class="ebook_introduction">
            内容简介：{{ ebook.book_introduction }}
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
<script setup name="profileEBook">
import { onMounted, reactive, ref } from "vue";
const form = ref({
  subject: "1",
  grade: "1",
  pageNum: 1,
  pageSize: 10,
});
const total = ref(0);

const ebookList = ref([]);
const pageSizeChange = (page) => {
  console.log("当前页码大小", page);
};
const pageChange = (pageSize) => {
  console.log("当前页码", pageSize);
};
onMounted(() => {
  const arr = new Array(10).fill({
    book_img: "https://tympanus.net/Development/BookPreview/img/cover4.svg",
    book_name: "算法导论(一)",
    book_author: "谢老师",
    book_introduction: "动荡的时代，主人公从一个简单的小学生变成了一名程序员。",
  });
  ebookList.value = arr;
  total.value= ebookList.value.length;
});
</script>
<style lang="scss" scoped>
.profile_eBook {
  background-color: #fff;
  padding: 20px 30px;
  .ebook_info {
    position: relative;
    display: flex;
    padding: 10px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .ebook_img {
      width: 80%;
      height: 80%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .ebook_name {
      width: 80%;
      text-align: center;
      background: #f2f3f5;
      font-size: 18px;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ebook_author {
      width: 80%;
      text-align: left;
      line-height: 23px;
    }
    .ebook_introduction {
      line-height: 23px;
      color: #777777;
      width: 80%;
      display: -webkit-box;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; //需要显示的行数
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
}
</style>