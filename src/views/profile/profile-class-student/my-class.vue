<template>
  <div class="profile_myclass">
    <div class="class_tabs">
      <a-tabs type="rounded" @tab-click="filterByStatus">
        <a-tab-pane key="1" title="已通过"></a-tab-pane>
        <a-tab-pane key="2" title="已拒绝"></a-tab-pane>
      </a-tabs>
    </div>
    <div class="class_tables">
      <div class="table_container">
        <div class="table_header">高中一年级学生及选课信息</div>
        <a-table
          row-key="name"
          :columns="columns"
          :data="classList"
          :row-selection="rowSelection"
          v-model:selectedKeys="selectedKeys"
        >
          <template #composition="{ record }">
            <span style="color: #009788">{{ record.composition }}</span>
          </template>
          <template #operation="{ rowIndex, record }">
            <a-switch
              size="large"
              v-model="classList[rowIndex].status"
              checked-value="1"
              unchecked-value="2"
              checked-color="#009788"
              @change="handleChange(record)"
            >
              <template #checked> 通过 </template>
              <template #unchecked> 拒绝 </template>
              <template #checked-icon>
                <icon-check />
              </template>
              <template #unchecked-icon>
                <icon-close />
              </template>
            </a-switch> </template
        ></a-table>
        <div class="batch_operation">
          <a-button type="primary" @click="batchHandle('1')">批量通过</a-button>
          <a-button type="primary" status="danger" @click="batchHandle('2')"
            >批量拒绝</a-button
          >
        </div>
      </div>
    </div>
    <a-modal
      modal-class="modal_class"
      v-model:visible="modalVisible"
      @ok="handleOk"
      @cancel="handleCancel"
      width="30%"
    >
      <div class="batch_refuse">
        正在对
        <span style="color: #009788" v-for="user in selectedKeys" :key="user">{{
          user
        }}</span>
        的选课进行批量拒绝
        <p>请输入拒绝理由：</p>
        <a-input
          :style="{ width: '320px' }"
          placeholder="请输入..."
          allow-clear
        />
      </div>
    </a-modal>
  </div>
</template>
<script setup name="profileClass">
import { ref, reactive, onMounted, getCurrentInstance } from "vue";
const selectedKeys = ref([]);

const rowSelection = {
  type: "checkbox",
  showCheckedAll: true,
};
const modalVisible = ref(false);
const isPass = ref(true);
const classList = ref([]);
const filterList = ref([]);
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
    align: "center",
  },
  {
    title: "选课组合",
    dataIndex: "composition",
    slotName: "composition",
    align: "center",
  },
  {
    title: "提交时间",
    dataIndex: "submitTime",
    align: "center",
  },
  {
    title: "操作",
    slotName: "operation",
    align: "center",
  },
];
const { $modal } = getCurrentInstance().appContext.config.globalProperties;

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
    status: "1",
    composition: "语文+数学+英语",
    submitTime: "2021-12-01",
  });
  const arr1 = new Array(8).fill({
    num: "201910",
    name: "王柏慧",
    sex: 1,
    status: "2",
    composition: "语文+数学+地理",
    submitTime: "2021-12-01",
  });
  classList.value = [...arr, ...arr1];
  filterList.value = [...arr, ...arr1];
});
const handleChange = (rowData) => {
  console.log(rowData);
};
const filterByStatus = (status) => {
  classList.value = filterList.value.filter((item) => {
    return item.status === status;
  });
  total.value = classList.value.length;
};
/* 批量操作 */
const batchHandle = (status) => {
  // 拒绝
  if (status === "2") {
    if (selectedKeys.value.length <= 0) {
      $modal.error({
        title: "请选择需要删除的数据！",
      });
      return;
    }
    modalVisible.value = true;
  }
};
const handleOk = () => {
  modalVisible.value = false;
};
const handleCancel = () => {
  modalVisible.value = false;
};
</script>

<style lang="scss" scoped>
.profile_myclass {
  .class_tabs {
    margin: 10px;
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
      .batch_operation {
        padding: 3px;
        button {
          margin-right: 10px;
        }
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
  .batch_refuse {
    span,
    p {
      line-height: 30px;
    }
    & > span:not(:first-child, :last-child):before {
      content: ",";
      display: inline-block;
    }
  }
}
</style>