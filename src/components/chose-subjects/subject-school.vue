<template>
  <div class="subject-school">
    <div class="title">
      <div class="sub_title">各组合学科对应的专业及学校详情</div>
      <div class="sub_top">(供大家参考)</div>
    </div>

    <div class="table_scroll">
      <div class="left_btn" @click="moveTable('l')">
        <icon-left-circle size="30" />
      </div>
      <div class="table">
        <a-table
          :columns="columns"
          :data="data"
          :bordered="{ headerCell: true }"
        ></a-table>
      </div>
      <div class="right_btn" @click="moveTable('r')">
        <icon-right-circle size="30" />
      </div>
    </div>
  </div>
</template>
<script setup name="subjectSchool">
import { reactive, ref } from "vue";
const currentMoveIndex = ref(0); // 当前移动的索引

const moveTable = (direction) => {
  /* 左移 */
  const table = document.querySelector(".table_scroll .arco-table-container");
  const tableWidth = 1240;
  if (direction && direction === "l") {
    if (currentMoveIndex.value <= 0) return;
    currentMoveIndex.value--;
    table.scrollTo({
      left: currentMoveIndex.value * tableWidth,
      behavior: "smooth",
    });
  } else if (direction && direction === "r") {
    if (currentMoveIndex.value >= 3) return;
    currentMoveIndex.value++;
    table.scrollTo({
      left: currentMoveIndex.value * tableWidth,
      behavior: "smooth",
    }); // 滚动条平滑滚动
  }
};
const columns = [
  {
    title: "地理+历史+政治",
    children: [
      {
        title: "专业",
        dataIndex: "subject1",
        width: 206,
        align: "center",
      },
      {
        title: "所属学校",
        dataIndex: "school1",
        width: 206,
        align: "center",
      },
    ],
  },
  {
    title: "地理+历史+政治",
    children: [
      {
        title: "专业",
        dataIndex: "subject2",
        width: 206,
        align: "center",
      },
      {
        title: "所属学校",
        dataIndex: "school2",
        width: 206,
        align: "center",
      },
    ],
  },
  {
    title: "地理+历史+政治",
    children: [
      {
        title: "专业",
        dataIndex: "subject3",
        width: 206,
        align: "center",
      },
      {
        title: "所属学校",
        dataIndex: "school3",
        width: 206,
        align: "center",
      },
    ],
  },
  {
    title: "地理+历史+政治",
    children: [
      {
        title: "专业",
        dataIndex: "subject4",
        width: 206,
        align: "center",
      },
      {
        title: "所属学校",
        dataIndex: "school4",
        width: 206,
        align: "center",
      },
    ],
  },
  {
    title: "地理+历史+政治",
    children: [
      {
        title: "专业",
        dataIndex: "subject5",
        width: 206,
        align: "center",
      },
      {
        title: "所属学校",
        dataIndex: "school5",
        width: 206,
        align: "center",
      },
    ],
  },
  {
    title: "地理+历史+政治",
    children: [
      {
        title: "专业",
        dataIndex: "subject6",
        width: 206,
        align: "center",
      },
      {
        title: "所属学校",
        dataIndex: "school6",
        width: 206,
        align: "center",
      },
    ],
  },
  {
    title: "地理+历史+政治",
    children: [
      {
        title: "专业",
        dataIndex: "subject7",
        width: 206,
        align: "center",
      },
      {
        title: "所属学校",
        dataIndex: "school7",
        width: 206,
        align: "center",
      },
    ],
  },
  {
    title: "地理+历史+政治",
    children: [
      {
        title: "专业",
        dataIndex: "subject8",
        width: 206,
        align: "center",
      },
      {
        title: "所属学校",
        dataIndex: "school8",
        width: 206,
        align: "center",
      },
    ],
  },
  {
    title: "地理+历史+政治",
    children: [
      {
        title: "专业",
        dataIndex: "subject9",
        width: 206,
        align: "center",
      },
      {
        title: "所属学校",
        dataIndex: "school9",
        width: 206,
        align: "center",
      },
    ],
  },
  {
    title: "地理+历史+政治",
    children: [
      {
        title: "专业",
        dataIndex: "subject10",
        width: 206,
        align: "center",
      },
      {
        title: "所属学校",
        dataIndex: "school10",
        width: 206,
        align: "center",
      },
    ],
  },
  {
    title: "地理+历史+政治",
    children: [
      {
        title: "专业",
        dataIndex: "subject11",
        width: 206,
        align: "center",
      },
      {
        title: "所属学校",
        dataIndex: "school11",
        width: 206,
        align: "center",
      },
    ],
  },
  {
    title: "地理+历史+政治",
    children: [
      {
        title: "专业",
        dataIndex: "subject12",
        width: 206,
        align: "center",
      },
      {
        title: "所属学校",
        dataIndex: "school12",
        width: 206,
        align: "center",
      },
    ],
  },
];
const data = reactive([
  {
    subject1: "土木工程",
    school1: "清华大学",
    subject2: "土木工程",
    school2: "清华大学",
    subject4: "土木工程",
    school4: "清华大学",
    subject5: "土木工程",
    school5: "清华大学",
    subject6: "土木工程",
    school6: "清华大学",
  },
  {
    subject1: "土木工程",
    school1: "清华大学",
    subject2: "土木工程",
    school2: "清华大学",
    subject4: "土木工程",
    school4: "清华大学",
    subject5: "土木工程",
    school5: "清华大学",
    subject6: "土木工程",
    school6: "清华大学",
  },
  {
    subject1: "土木工程",
    school1: "清华大学",
    subject2: "土木工程",
    school2: "清华大学",
    subject4: "土木工程",
    school4: "清华大学",
    subject5: "土木工程",
    school5: "清华大学",
    subject6: "土木工程",
    school6: "清华大学",
  },
  {
    subject1: "土木工程",
    school1: "清华大学",
    subject2: "土木工程",
    school2: "清华大学",
    subject4: "土木工程",
    school4: "清华大学",
    subject5: "土木工程",
    school5: "清华大学",
    subject6: "土木工程",
    school6: "清华大学",
  },
  {
    subject1: "土木工程",
    school1: "清华大学",
    subject2: "土木工程",
    school2: "清华大学",
    subject4: "土木工程",
    school4: "清华大学",
    subject5: "土木工程",
    school5: "清华大学",
    subject6: "土木工程",
    school6: "清华大学",
  },
  {
    subject1: "土木工程",
    school1: "清华大学",
    subject2: "土木工程",
    school2: "清华大学",
    subject4: "土木工程",
    school4: "清华大学",
    subject5: "土木工程",
    school5: "清华大学",
    subject12: "土木工程",
    school12: "清华大学",
  },
  {
    subject1: "土木工程",
    school1: "清华大学",
    subject2: "土木工程",
    school2: "清华大学",
    subject4: "土木工程",
    school4: "清华大学",
    subject5: "土木工程",
    school5: "清华大学",
    subject12: "土木工程",
    school12: "清华大学",
  },
  { subject1: "电子信息与技术", school1: "清华大学" },
  { subject1: "计算机科学与技术", school1: "清华大学" },
  { subject1: "护理", school1: "清华大学" },
]);
</script>
<style lang="scss" >
.subject-school {
  position: relative;
  background-image: url("@/assets/images/choose_subject/consult_bg.png");
  width: 100%;
  height: 1000px;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px 0;
    .sub_top,
    .sub_title {
      font-size: 36px;
      color: #ffffff;
      font-weight: bold;
    }
  }

  .table_scroll {
    position: relative;
    width: 1240px;
    .left_btn,
    .right_btn {
      display: inline-block;
      background: #009688;
      position: absolute;
      height: 100px;
      width: 40px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        transition: all 0.3s ease;
        color: #fff;
      }
    }
    .left_btn {
      left: -45px;
    }
    .right_btn {
      right: -45px;
    }
    .table {
      height: 100%;
      width: 100%;
      th[colspan="2"] {
        color: #fff;
        font-size: 22px;
        height: 60px;
        background-color: #fd5b44;
      }
    }
  }
}
</style>