<template>
  <div class="profile_online_exercise">
    <ul class="exercise_item">
      <li
        v-for="(item, index) in exercisesList"
        :key="index"
        :class="{ gray: index % 2 === 0 }"
      >
        <div class="exercise_info">
          <div class="title">
            <span>{{ index + 1 }}.{{ item.title }}</span>
            <span>{{ typeMap[item.type] }}</span>
          </div>
          <div class="difficulty_integral">
            <span>难度：</span>
            <a-rate
              color="red"
              :readonly="true"
              :default-value="item.difficulty"
            />
            <span class="integral">积分：</span><icon-layers />{{
              item.integral
            }}积分
          </div>
        </div>
        <div class="operations">
          <a-button type="primary" status="warning" shape="round"
            >查看详情</a-button
          >
          <a-button type="primary" status="danger" @click="del" shape="round"
            >删除</a-button
          >
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
<script setup name="profileOnlineExercise">
import { onMounted, ref, getCurrentInstance } from "vue";

const form = ref({
  subject: "1",
  grade: "1",
  pageNum: 1,
  pageSize: 10,
});
const total = ref(0);

const exercisesList = ref([]);
const typeMap = ref({
  1: "单选",
  2: "填空",
  3: "判断",
  4: "多选",
  5: "简答",
  6: "论述",
});
const { $modal } = getCurrentInstance().appContext.config.globalProperties;
const pageSizeChange = (page) => {
  console.log("当前页码大小", page);
};
const pageChange = (pageSize) => {
  console.log("当前页码", pageSize);
};
const del = () => {
  $modal.error({
    title: "操作提示",
    content: "确认删除该条题目吗？",
  });
};
onMounted(() => {
  const arr = new Array(5).fill({
    title: "就时间复杂性而言，作为优先队列性能最好的数据结构是( )",
    type: "1",
    difficulty: 3,
    integral: "10",
  });
  const arr1 = new Array(5).fill({
    title: "世界上最高峰的山是___",
    type: "2",
    difficulty: 4,
    integral: "18",
  });
  const arr2 = new Array(5).fill({
    title: "世界上最高峰的山是 ()",
    type: "3",
    difficulty: 1,
    integral: "4",
  });
  exercisesList.value = [...arr, ...arr1,...arr2];
  total.value = exercisesList.value.length;
});
</script>
<style lang="scss" scoped>
.profile_online_exercise {
  background: #fff;
  padding: 10px 0;
  .exercise_item {
    .gray {
      background: #fbfbfb;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      border: 1px solid #f4f4f4;
    }
    .exercise_info {
      .title {
        span:nth-child(2) {
          color: rgba(0, 0, 0, 0.5);
          margin: 0 10px;
        }
      }
      .difficulty_integral {
        display: flex;
        align-items: center;
        & > span {
          color: rgba(0, 0, 0, 0.5);
        }
        & .integral {
          margin-left: 40px;
        }
        & svg {
          color: red;
        }
      }
    }
    .operations {
      button {
        margin: 0 4px;
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
</style>