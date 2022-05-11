<template>
  <div class="profile-fan">
    <ul class="fan-item">
      <li v-for="(fanItem, index) in fanList" :key="index">
        <div class="user_info">
          <div class="avator">
            <img :src="fanItem.user_avator" alt="用户头像" />
          </div>
          <div class="user">
            <div class="user_name">{{ fanItem.user_name }}</div>
            <div class="user_grade">{{ fanItem.user_grade }}</div>
            <div class="fan_fans">
              <span>关注:{{ fanItem.user_fans }}</span>
              <span>粉丝:{{ fanItem.user_fans }}</span>
            </div>
            <div class="operations">
              <a-button shape="round" status="danger">关注</a-button>
              <a-button shape="round" status="success">私信</a-button>
            </div>
          </div>
        </div>
        <div class="more">
          <a-button shape="circle"><icon-more /></a-button>
        </div>
      </li>
    </ul>
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
<script setup name="profileFan">
import { onMounted, ref } from "vue";
const fanList = ref([]);
const total = ref(0);
const form = ref({
  subject: "1",
  grade: "1",
  pageNum: 1,
  pageSize: 10,
});
const pageSizeChange = (page) => {
  console.log("当前页码大小", page);
};
const pageChange = (pageSize) => {
  console.log("当前页码", pageSize);
};
onMounted(() => {
  const arr = new Array(10).fill({
    user_avator:
      "https://img0.baidu.com/it/u=1622745092,3121282717&fm=253&fmt=auto&app=138&f=JPEG?w=629&h=500",
    user_name: "张灵儿",
    user_grade: "高三（1）班",
    user_fans: "14",
    user_fans: "90",
  });
  fanList.value = arr;
  total.value = fanList.value.length;
});
</script>
<style lang="scss" scoped>
.profile-fan {
  background-color: #fff;
  padding: 20px 30px;
  position: relative;
  .fan-item {
    li {
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user_info {
        display: flex;
        align-items: center;
        .avator {
          width: 120px;
          height: 120px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
          }
        }
        .user {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin-left: 20px;
          .user_name {
            font-size: 17px;
            color: #000000;
            font-weight: 700;
            margin: 5px 0;
          }
          .user_grade {
            font-size: 12px;
            color: #666666;
            margin: 5px 0;
          }
          .fan_fans {
            font-size: 14px;
            color: #000000;
            margin: 5px 0;
            & span:first-child:after {
              content: "";
              display: inline-block;
              height: 12px;
              width: 2px;
              background: #666666;
              margin: 0 15px;
            }
          }
          .operations {
            button {
              margin-right: 10px;
            }
          }
        }
      }
      &:not(:last-child) {
        border-bottom: 1px solid #eee;
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
