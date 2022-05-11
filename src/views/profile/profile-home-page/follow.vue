<template>
  <div>
    <div class="follow_total">共关注<span>23</span>人</div>
    <my-follow />
  </div>
</template>
<script setup>
import myFollow from "@/components/profile/my-home-page/my-follow/index.vue";
</script>
<style lang="scss" scoped>
.follow_total {
  margin: 20px;
  span{
    color: $--warning-9;
    margin: 0 4px;
  }
}
</style>