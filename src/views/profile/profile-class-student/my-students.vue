<template>
  <div class="profile_mystudent">
    <div class="student_tabs">我所带的所有班级及所有学生的信息</div>
    <div class="class_tables">
      <div class="table_container">
        <div class="table_header">高中一年级(一)班</div>
        <a-table :columns="columns" :data="studentList">
          <template #sex="{ record }">
            <span style="color: #009788">{{ sexMap[record.sex] }}</span>
          </template>
          <template #operation="{ record }">
            <a-button
              type="primary"
              status="danger"
              shape="round"
              @click="viewDetail(record)"
              >查看个人详情</a-button
            >
          </template></a-table
        >
      </div>
    </div>
  </div>
</template>
<script setup name="profileStudent">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

const studentList = ref([]);
const router = useRouter();
const columns = [
  {
    title: "学号",
    dataIndex: "num",
    align: "center",
  },
  {
    title: "姓名",
    dataIndex: "name",
    align: "center",
  },
  {
    title: "性别",
    dataIndex: "sex",
    slotName: "sex",
    align: "center",
  },
  {
    title: "操作",
    slotName: "operation",
    align: "center",
  },
];
const sexMap = {
  1: "男",
  2: "女",
};
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
  const arr = new Array(8).fill({
    num: "201920",
    name: "李娜娜",
    sex: 1,
  });
  const arr1 = new Array(8).fill({
    num: "201910",
    name: "王柏慧",
    sex: 1,
  });
  studentList.value = [...arr, ...arr1];
});
/* 批量操作 */
const viewDetail = (row) => {
  router.push({ path: '/my_student_detail', query: { ...row } });
};
</script>

<style lang="scss" scoped>
.profile_mystudent {
  .student_tabs {
    margin: 20px 10px;
  }
  .class_tables {
    background-color: #fff;
    padding: 15px 15px;
    position: relative;
    .table_container {
      background: #009688;
      border-radius: 10px;
      padding: 5px 10px;
      .table_header {
        height: 55px;
        line-height: 55px;
        font-size: 22px;
        color: #ffffff;
        font-weight: bold;
        padding-left: 20px;
      }
    }
  }
}
</style>
<style lang="scss">
.modal_class {
  .arco-modal-header {
    display: none;
  }
}
</style>