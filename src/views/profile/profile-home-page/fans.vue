<template>
  <div>
    <div class="fans_total">共<span>23</span>位粉丝</div>
    <my-fans />
  </div>
</template>
<script setup >
import myFans from "@/components/profile/my-home-page/my-fans/index.vue";
</script>
<style lang="scss" scoped>
.fans_total {
  margin: 20px;
  span {
    color: $--warning-9;
    margin: 0 4px;
  }
}
</style>