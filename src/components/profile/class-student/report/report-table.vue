<template>
  <div>
    <a-table :columns="columns" :data="reportList">
      <template #name="{ record }">
        <span style="fontWeight: bold;">{{ record.name }}</span>
      </template>
      <template #score="{ record }">
        <span style="color:#fd5a44">{{ record.score }}</span>
      </template>
      <template #order="{ record }">
        <span style="color:#009788">{{ record.order }}</span>
      </template>
      <template #total="{ record }">
        <span style="fontWeight: bold;">{{ record.total }}</span>
      </template>
      <template #operation="{ record }">
        <a-button
          type="primary"
          status="danger"
          shape="round"
          @click="viewDetail(record)"
          >查看各科成绩</a-button
        >
      </template>
    </a-table>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
const reportList = ref([]);
const columns = [
  {
    title: "日期",
    dataIndex: "date",
  },
  {
    title: "考试名称",
    dataIndex: "name",
    slotName: "name",
  },
  {
    title: "分数",
    dataIndex: "score",
    slotName: "score",
  },
  {
    title: "排名",
    dataIndex: "order",
    slotName: "order",
  },
  {
    title: "总人数",
    dataIndex: "total",
    slotName: "total",
  },
  {
    title: "操作",
    slotName: "operation",
  },
];
onMounted(() => {
  const arr = new Array(11).fill({
    date: "2019-12-12",
    name: "高一上学期考试名称",
    score: "485",
    order: "51",
    total: "100",
  });
  reportList.value = arr;
});
const viewDetail = (row) => {
  console.log("查看详情");
};
</script>
