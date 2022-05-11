<template>
  <div class="collection">
    <div class="collection_type">
      <a-radio-group v-model="collection_type" type="button">
        <a-radio :value="item.key" v-for="item in tabs" :key="item.key">
          {{ item.name }}</a-radio
        >
      </a-radio-group>
    </div>
    <div class="collection_content">
      <!-- collection_type 改变时组件也改变 -->
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive, ref, markRaw } from "vue";
import teaching_video from "@/components/profile/my-home-page/my-collection/teaching-video.vue";
import teaching_vourseware from "@/components/profile/my-home-page/my-collection/teaching-courseware.vue";
import electronic_book from "@/components/profile/my-home-page/my-collection/electronic-book.vue";
import online_exercise from "@/components/profile/my-home-page/my-collection/online-exercise.vue";
const collection_type = ref("1");
const tabs = reactive([
  {
    key: "1",
    componentName: markRaw(teaching_video),
    name: "教学视频",
  },
  {
    key: "2",
    componentName: markRaw(teaching_vourseware),
    name: "教学课件",
  },
  {
    key: "3",
    componentName: markRaw(electronic_book),
    name: "电子书",
  },
  {
    key: "4",
    componentName: markRaw(online_exercise),
    name: "在线习题",
  },
]);
const currentComponent = computed(() => {
  return tabs.find((item) => item.key === collection_type.value).componentName;
});
</script>
<style lang="scss" scoped>
.collection {
  .collection_type {
    margin: 20px;
    .arco-radio-group-button {
      background: #f7f8fa;
    }
    label:first-child {
      padding: 10px;
      padding-right: 40px;
    }
    label:first-child ~ label {
      padding: 10px 40px;
    }
    .arco-radio-button.arco-radio-checked {
      color: $--warning-9;
    }
  }
}
</style>