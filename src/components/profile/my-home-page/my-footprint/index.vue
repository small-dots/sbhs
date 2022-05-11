<template>
  <div class="profile_footprint">
    <div class="profile_footprint_list">
      <a-table :columns="columns" :data="data" @change="handleChange">
        <template #title="{ record }">
          <span style="color: #009688">{{ record.title }}</span>
        </template>
        <template #operation="{ record }">
          <a-button shape="round" type="primary" status="danger" @click="detailView(record)"
            >查看详情</a-button
          >
        </template>
      </a-table>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
const data = ref([]);
const columns = [
  {
    title: "标题",
    slotName: "title",
    ellipsis: true,
    tooltip: { position: "left" },
    align: "center",
  },
  {
    title: "内容",
    dataIndex: "browse_content",
    ellipsis: true,
    tooltip: { position: "left" },
    align: "center",
  },
  {
    title: "时间",
    dataIndex: "browse_time",
    sortable: {
      sortDirections: ["ascend"],
    },
    align: "center",
    width: 150,
  },
  {
    title: "操作",
    slotName: "operation",
    align: "center",
    width: 150,
  },
];
const detailView = (record) => {
  console.log(record);
};
onMounted(() => {
  const arr = new Array(20).fill({
    key: "1",
    title: "王百川老师精心解读",
    browse_content:
      "王百川老师精心解读了《算法导论》，并且提供了一些算法的实践案例，希望大家能够学习和掌握。",
    browse_time: "2019-12-12",
    email: "jane.doe@example.com",
  });
  data.value = arr;
});
const handleChange = (data, extra) => {
  console.log("change", data, extra);
};
</script>

<style lang="scss" scoped>
.profile_footprint {
  background-color: #fff;
  padding: 20px 30px;
  position: relative;
  .profile_footprint_list {
    padding: 10px 0;
  }
}
</style>