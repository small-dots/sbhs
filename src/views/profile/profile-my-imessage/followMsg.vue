<template>
  <div class="profile_follow_msg">
    <div class="msg_total">
      <a-tabs type="rounded" @tab-click="filterByStatus">
        <a-tab-pane key="1" title="未读(9)"></a-tab-pane>
        <a-tab-pane key="2" title="已读(9)"></a-tab-pane>
      </a-tabs>
    </div>
    <div class="msg_list">
      <ul>
        <li v-for="(msg, index) in msgList" :key="index">
          <div class="msg_info">
            <div class="statu_content" :class="readClass[msg.status]">
              {{ msg.msg_title }}
            </div>
            <div class="msg_time">{{ msg.msg_time }}</div>
          </div>
          <div class="operation">
            <span @click="viewDetail(msg)">查看更多 ></span>
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
    <a-modal
      modal-class="modal_class"
      v-model:visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      width="50%"
      ok-text="关闭"
    >
      <msg-detail :rowData="rowData" />
    </a-modal>
  </div>
</template>
<script setup name="profilefollowMsg">
import { onMounted, ref } from "vue";
import msgDetail from "@/components/profile/my-message/msg-detail.vue";
const msgList = ref([]);
const filterList = ref([]);
const readClass = {
  1: "unread",
  2: "read",
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
const filterByStatus = (status) => {
  msgList.value = filterList.value.filter((item) => {
    return item.status === status;
  });
  total.value = msgList.value.length;
};
const rowData = ref({}); // 弹框数据
const visible = ref(false);
const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};
const viewDetail = (row) => {
  visible.value = true;
  rowData.value = row;
};
onMounted(() => {
  const arr = new Array(9).fill({
    status: "2",
    msg_title: " 张虎 关注了你 ",
    msg_time: "2019-12-12 10:45",
    msg_content: `CommonJs 规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的 exports属性（即module.exports）是对外的接口，加载某个模块，其实是加载该模块的module.exports属性。
commonjs模块的特点

所有代码运行在模块作用域，不会污染全局作用域
模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
模块加载的顺序，按照其在代码中出现的顺序

module对象
Node内部提供一个Module构建函数。所有模块都是Module的实例。
function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  // ...
}
每个模块的内部，都有Module的实例对象----module，module对象有以下的熟悉

module.id 模块的识别符，通常是带有绝对路径的模块文件名。
module.filename 模块的文件名，带有绝对路径。
module.loaded 返回一个布尔值，表示模块是否已经完成加载。
module.parent 返回一个对象，表示调用该模块的模块。
module.children 返回一个数组，表示该模块要用到的其他模块。
module.exports 表示模块对外输出的值。

module.exports属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量。

作者：菜鸡王努力往上爬
链接：https://juejin.cn/post/7095196370658656263
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`,
  });
  const arr1 = new Array(9).fill({
    status: "1",
    msg_title: "爱学习的小林 关注了你 ",
    msg_time: "2019-12-12 10:45",
    msg_content: `CommonJs 规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的 exports属性（即module.exports）是对外的接口，加载某个模块，其实是加载该模块的module.exports属性。
commonjs模块的特点

所有代码运行在模块作用域，不会污染全局作用域
模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
模块加载的顺序，按照其在代码中出现的顺序

module对象
Node内部提供一个Module构建函数。所有模块都是Module的实例。
function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  // ...
}
复制代码
每个模块的内部，都有Module的实例对象----module，module对象有以下的熟悉

module.id 模块的识别符，通常是带有绝对路径的模块文件名。
module.filename 模块的文件名，带有绝对路径。
module.loaded 返回一个布尔值，表示模块是否已经完成加载。
module.parent 返回一个对象，表示调用该模块的模块。
module.children 返回一个数组，表示该模块要用到的其他模块。
module.exports 表示模块对外输出的值。

module.exports属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量。

作者：菜鸡王努力往上爬
链接：https://juejin.cn/post/7095196370658656263
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`,
  });
  filterList.value = [...arr, ...arr1];
  msgList.value = [...arr, ...arr1];
  total.value = msgList.value.length;
  filterByStatus("1");
});
</script>
<style lang="scss" scoped>
.profile_follow_msg {
  .msg_total {
    button {
      margin: 0 4px;
    }
    margin: 20px;
    span {
      color: $--warning-9;
      margin: 0 4px;
    }
  }
  .msg_list {
    background-color: #fff;
    padding: 20px 30px;
    position: relative;
    li {
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .msg_info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .statu_content {
          font-size: 16px;
          line-height: 30px;
        }
        .read {
          &:before {
            content: "";
            margin-right: 10px;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: gray;
          }
        }
        .unread {
          &:before {
            content: "";
            margin-right: 10px;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: $--warning-9;
          }
        }
        .msg_time {
          font-size: 12px;
          color: #999999;
          margin-top: 5px;
          padding-left: 20px;
        }
      }
      .operation {
        span {
          color: rgb(78, 89, 105);
          cursor: pointer;
        }
      }
      &:not(:first-child) {
        border-top: 1px solid #f0f0f0;
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
<style lang="scss">
.modal_class {
  .arco-modal-header {
    display: none;
  }
}
</style>