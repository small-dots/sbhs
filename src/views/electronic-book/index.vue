<template>
  <div class="electronic_book_container">
    <div class="electronic_book_header"></div>
    <div class="electronic_book_query">
      <div class="query_form">
        <div class="query_form_item">
          类别：
          <a-radio-group
            v-model="form.type"
            type="button"
            class="query_form_item_radio"
            @change="typeChanged"
          >
            <a-radio
              :value="type.value"
              v-for="type in typeList"
              :key="type.value"
              class="radio_button"
              >{{ type.label }}</a-radio
            >
          </a-radio-group>
        </div>
        <div class="line"></div>
        <div class="query_form_item">
          上架时间：
          <a-radio-group
            v-model="form.shelfTime"
            type="button"
            class="query_form_item_radio"
            @change="shelfTimeChanged"
          >
            <a-radio
              :value="shelf.value"
              v-for="shelf in shelfTimeList"
              :key="shelf.value"
              class="radio_button"
              >{{ shelf.label }}</a-radio
            >
          </a-radio-group>
        </div>
      </div>
      <div class="electronic_book_list">
        <div class="list_title">
          <div class="banner"></div>
          <div class="title">书籍<span>展示</span></div>
          <div class="subtitle">学校致力于培养全省优质学子</div>
        </div>
        <div class="list">
          <a-grid
            :cols="{ xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 4 }"
            :colGap="24"
            :rowGap="16"
            class="grid-electronic_book_grid"
          >
            <a-grid-item v-for="(book, index) in bookList" :key="index">
              <div class="book_item">
                <div class="book_img"><img :src="book.image" alt="" /></div>
                <h2 class="book_name">{{ book.bookname }}</h2>
                <div class="line"></div>
                <div class="book_author">{{ book.author }}</div>
                <div class="book_cover">
                  <ul>
                    <li>内容简介：{{ book.introdaction }}</li>
                    <li>
                      <span
                        v-for="tag in book.tags.split(',').filter(Boolean)"
                        :key="tag"
                        >{{ tag }}</span
                      >
                    </li>
                    <li>上架时间：{{ book.shelfTime || "未知" }}</li>
                    <li>共{{ book.pages || "0" }}页</li>
                    <li>
                      <a-button shape="round" type="outline" status="warning"
                        >立即阅读</a-button
                      >
                      <a-button
                        style="margin-left: 4px"
                        shape="round"
                        type="outline"
                        status="success"
                      >
                        <template #icon>
                          <icon-heart />
                        </template>
                        <template #default>收藏</template></a-button
                      >
                    </li>
                  </ul>
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
<script setup name="electronicBook">
import { ref, reactive, onMounted } from "vue";
const form = ref({
  type: "1",
  shelfTime: "1",
  pageNum: 1,
  pageSize: 10,
});
const typeList = ref([
  {
    value: "1",
    label: "哲学类",
  },
  {
    value: "2",
    label: "社会科学",
  },
  {
    value: "3",
    label: "政治法律",
  },
  {
    value: "4",
    label: "军事科学",
  },
  {
    value: "5",
    label: "财经管理",
  },
  {
    value: "6",
    label: "历史地理",
  },
  {
    value: "7",
    label: "中国文学",
  },
  {
    value: "8",
    label: "音乐",
  },
]);
const shelfTimeList = ref([
  {
    value: "1",
    label: "2022年",
  },
  {
    value: "2",
    label: "2021年",
  },
  {
    value: "3",
    label: "2020年",
  },
]);
const bookList = ref([]);
const total = ref(0);
onMounted(() => {
  search(form.value);
});
const typeChanged = (value) => {
  console.log("科目", value);
  search(form.value);
};
const shelfTimeChanged = (value) => {
  console.log("年级", value);
  search(form.value);
};
const pageSizeChange = (page) => {
  console.log("当前页码大小", page);
  search(form.value);
};
const pageChange = (pageSize) => {
  console.log("当前页码", pageSize);
  search(form.value);
};
const search = (params) => {
  bookList.value = [
    {
      image: "https://tympanus.net/Development/BookPreview/img/cover1.svg",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      bookname: "9 Lives",
      author: " ANDREW HUDSON",
      shelfTime: "2020年12月",
      tags: "社会科学,文学,教育",
      pages: "762",
      id: "1",
    },
    {
      image: "https://tympanus.net/Development/BookPreview/img/cover2.svg",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      bookname: "蠕虫般生活",
      author: "WILL FLORES",
      shelfTime: "2020年12月",
      tags: "社会科学,文学,教育",
      pages: "762",
      id: "2",
    },
    {
      image: "https://tympanus.net/Development/BookPreview/img/cover8.svg",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      bookname: "柠檬彩虹",
      author: " 张乐乐",
      shelfTime: "2020年12月",
      tags: "社会科学,文学,教育",
      pages: "762",
      id: "3",
    },
    {
      image: "https://tympanus.net/Development/BookPreview/img/cover3.svg",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      bookname: "Structure and Space",
      author: " 张乐乐",
      shelfTime: "2020年12月",
      tags: "社会科学,文学,教育",
      pages: "762",
      id: "4",
    },
    {
      image: "https://tympanus.net/Development/BookPreview/img/cover4.svg",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      bookname: "The Rock Enigma",
      author: " 张乐乐",
      shelfTime: "2020年12月",
      tags: "社会科学,文学,教育",
      pages: "762",
      id: "5",
    },
    {
      image: "https://tympanus.net/Development/BookPreview/img/cover5.svg",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      bookname: "Neural Science",
      author: " SIMON ABRAMOVICH",
      shelfTime: "2020年12月",
      tags: "社会科学,文学,教育",
      pages: "762",
      id: "6",
    },
    {
      image: "https://tympanus.net/Development/BookPreview/img/cover6.svg",
      introdaction:
        "毕业于北京师范大学数学系，海淀区数学骨干教师，海淀区中学班主任带头人；七次荣获海淀区教育系统青年先进教育工作者称号；海淀区教学基本功比赛一等奖获得者；",
      bookname: "Life in Transit",
      author: "MARINA DOKOVA",
      shelfTime: "2020年12月",
      tags: "社会科学,文学,教育",
      pages: "762",
      id: "7",
    },
  ];
  total.value = bookList.value.length || 0;
};
</script>
<style lang="scss" scoped>
.electronic_book_container {
  width: 100%;
  position: relative;
  .electronic_book_header {
    background-image: url("@/assets/images/electronic-books/bg.webp");
    background-size: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    width: 100%;
    height: 300px;
  }
  .electronic_book_query {
    width: 75%;
    margin: 0 auto;
    .query_form {
      width: 100%;
      height: 120px;
      display: inline-block;
      margin-top: -24px;
      background-color: #ffffff;
      box-shadow: 0px 0px 13px 0px rgb(6 0 1 / 7%);
      border-radius: 4px;
      z-index: 99;
      padding: 20px;
      box-sizing: border-box;
      .query_form_item {
        .query_form_item_radio {
          background: #fff !important;
          .radio_button {
            margin: 0 15px;
            background: #fff;
          }
          .arco-radio-checked.radio_button {
            color: #fff;
            background: $--warning-9;
          }
        }
      }
      .line {
        height: 1px;
        width: 100%;
        margin: 10px 0;
        background-color: #e5e5e5;
      }
    }
    .electronic_book_list {
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
        .book_item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          z-index: 100;
          transition: z-index 0s 0.3s;
          padding: 30px 0;
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            visibility: hidden;
            width: 100%;
            height: 100%;
            border-radius: 4px;
            background: rgba(242, 243, 245, 1);
            content: "";
            opacity: 0;
            -webkit-transition: opacity 0.3s, visibility 0s 0.3s;
            transition: opacity 0.3s, visibility 0s 0.3s;
          }
          .book_img {
            visibility: visible;
            opacity: 1;
            transition: all 0.5s ease;
          }
          .book_name {
            position: relative;
            margin: 1em 0 0 0;
            font-weight: 300;
            font-size: 1.8em;
            font-family: "Abril Fatface", serif;
          }
          .line {
            width: 20%;
            height: 1px;
            margin: 10px 0 5px 0;
            background: rgba(0, 0, 0, 0.1);
          }
          .book_author {
            position: relative;
            display: block;
            margin: 1em 0 0 0;
            padding: 1em 0 0 0;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 400;
            font-size: 0.4em;
            font-family: "Lato", sans-serif;
          }
          .book_cover {
            position: absolute;
            top: 0;
            width: 100%;
            visibility: hidden;
            opacity: 0;
            z-index: -1;
            -webkit-transition: opacity 0.5s, visibility 0s 0.5s;
            transition: opacity 0.5s, visibility 0s 0.5s;
            ul {
              padding: 60px 2rem 0 2rem;
              margin: 0;
              list-style: none;
              text-align: left;
              li {
                visibility: visible;
                opacity: 0;
                -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
                transition: transform 0.3s, opacity 0.3s;
                -webkit-transform: translateX(30%);
                transform: translateX(30%);
                opacity: 1;
                -webkit-transform: translateX(0);
                transform: translateX(0);
                color: #64696a;
                margin: 0 0 10px;
                &:not(:first-child) {
                  font-weight: 700;
                  margin: 0 0 10px;
                }
                &:first-child {
                  transition-delay: 0.1s;
                  position: relative;
                  margin: 0 0 15px 0;
                  line-height: 20px;
                  text-align: justify;
                  display: -webkit-box;
                  word-break: break-all;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 3; //需要显示的行数
                  overflow: hidden;
                  text-overflow: ellipsis;
                  &:after {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 20%;
                    height: 1px;
                    background: rgba(0, 0, 0, 0.1);
                    content: "";
                  }
                }
                &:nth-child(2) span {
                  margin-right: 12px;
                  padding: 0 6px;
                  line-height: 20px;
                  line-height: 18px;
                  color: rgb(0, 180, 42);
                  background: rgb(232, 255, 234);
                  border: 1px solid rgb(0, 180, 42);
                  display: inline-block;
                  white-space: nowrap;
                  border-radius: 4px;
                  transition: all 0.3s;
                }
              }
            }
          }

          &:hover {
            transition: none;
            z-index: 101;
            &:before {
              visibility: visible;
              opacity: 1;
              -webkit-transition: opacity 0.3s, visibility 0s;
              transition: opacity 0.3s, visibility 0s;
            }
            .book_img {
              visibility: visible;
              opacity: 0;
              transition: opacity 0.5s, visibility 0s;
            }
            .book_cover {
              visibility: hidden;
              opacity: 1;
              z-index: 10;
              -webkit-transition: opacity 0.5s, visibility 0s;
              transition: opacity 0.5s, visibility 0s;
            }
          }
        }
      }
      .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        text-align: center;
      }
    }
  }
}
</style>