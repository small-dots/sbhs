<template>
  <div class="student_base_info">
    <div class="base_info_item">
      <span>头像：</span>
      <div class="avator">
        <img src="https://s6.jpg.cm/2022/05/03/LxJpJh.png" alt="用户头像" />
      </div>
    </div>
    <div class="base_info_item">
      <span>姓名：</span>
      <span>胡可可</span>
    </div>
    <div class="base_info_item">
      <span>学号：</span>
      <span>1751245</span>
    </div>
    <div class="base_info_item">
      <span>性别：</span>
      <span>女</span>
    </div>
    <div class="base_info_item">
      <span>出生年月：</span>
      <span>2001-01-06</span>
    </div>
    <div class="base_info_item">
      <span>家庭住址：</span>
      <span>安徽省合肥市庐江县 </span>
    </div>
    <div class="base_info_item">
      <span>家庭情况：</span>
      <span>父亲，母亲，弟弟，妹妹</span>
    </div>
    <div class="base_info_item">
      <span>政治面貌：</span>
      <span>团员</span>
    </div>
    <div class="base_info_item">
      <span>所在学校：</span>
      <span>甘肃一中</span>
    </div>
    <div class="base_info_item">
      <span>年级：</span>
      <span>高二</span>
    </div>
    <div class="base_info_item">
      <span>班级：</span>
      <span>3班</span>
    </div>
    <div class="base_info_item">
      <span>入学时间：</span>
      <span>2021-09-01</span>
    </div>
    <div class="base_info_item">
      <span>手机号码：</span>
      <span>150012458954</span>
    </div>
    <div class="base_info_item">
      <span>邮箱：</span>
      <span>123798746548@qq.com</span>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.student_base_info {
  .base_info_item {
    display: flex;
    align-items: center;
    & > span:first-child {
      margin-right: 40px;
      color: #787b7f;
      display: inline-block;
      width: 100px;
      text-align: right;
    }
    & > span:nth-child(2) {
      color: #213547;
    }
    &:not(first-child) {
      margin: 20px 0;
    }
    .avator {
      height: 100px;
      width: 100px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
}
</style>