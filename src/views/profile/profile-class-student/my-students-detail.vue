<template>
  <div class="profile_student_detail">
    <div class="detail_tabs">
      <a-tabs type="text" @change="tabChange">
        <a-tab-pane
          v-for="tab in tabs"
          :key="tab.key"
          :title="tab.name"
        ></a-tab-pane>
      </a-tabs>
    </div>
    <div class="detail_container">
      <KeepAlive>
        <component :is="currentComponent" />
      </KeepAlive>
    </div>
  </div>
</template>
<script setup name="profileStudentDetail">
import { ref, markRaw, reactive,computed  } from "vue";
import base_info from "@/components/profile/class-student/base-info.vue";
import report from "@/components/profile/class-student/report/index.vue";
import association from "@/components/profile/class-student/association.vue";
import reward_punishment from "@/components/profile/class-student/reward-punishment.vue";
import course_choose from "@/components/profile/class-student/course-choose.vue";
const currentTab = ref("1");
const tabs = reactive([
  {
    key: "1",
    componentName: markRaw(base_info),
    name: "基本信息",
  },
  {
    key: "2",
    componentName: markRaw(report),
    name: "他(她)的成绩单",
  },
  {
    key: "3",
    componentName: markRaw(association),
    name: "他(她)的社团",
  },
  {
    key: "4",
    componentName: markRaw(reward_punishment),
    name: "他(她)的奖罚",
  },
  {
    key: "4",
    componentName: markRaw(course_choose),
    name: "他(她)的选课",
  },
]);
const currentComponent = computed(() => {
  return tabs.find((item) => item.key === currentTab.value).componentName;
});
const tabChange = (e) => {
  currentTab.value = e;
};
</script>
<style lang="scss" scoped>
.profile_student_detail {
  .detail_tabs {
    margin: 10px 0;
  }
  .detail_container {
    background-color: #fff;
    padding: 20px 30px;
    position: relative;
  }
}
</style>
