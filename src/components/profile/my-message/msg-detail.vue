<template>
  <div class="sys_msg">
    <div class="msg_title">{{ rowData.msg_title }}</div>
    <div class="msg_time">发布时间：{{ rowData.msg_time }}</div>
    <div class="line"></div>
    <div class="msg_content">{{ rowData.msg_content }}</div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const prop = defineProps({
  rowData: {
    type: Object,
    default: () => ({}),
  },
});
onMounted(() => {
  console.log("rowData", prop.rowData);
});
</script>
<style lang="scss" scoped>
.sys_msg {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .msg_title {
    font-size: 18px;
  }
  .line{
    width: 100%;
    margin: 20px 0;
    border-bottom: 1px dashed gray;
  }
  .msg_time {
    color: gray;
  }
}
</style>
