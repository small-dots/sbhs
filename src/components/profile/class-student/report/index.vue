<template>
  <div class="student_report">
    <div class="query_form">
      <a-date-picker style="width: 250px" placeholder="请选择日期" />
      <a-select :style="{ width: '250px' }" placeholder="请选择学期考试">
        <a-option>高一上学期</a-option>
        <a-option>高一下学期</a-option>
        <a-option>高二上学期</a-option>
        <a-option>高二下学期</a-option>
        <a-option>高三上学期</a-option>
        <a-option>高三下学期</a-option>
      </a-select>
      <a-button type="primary">查询</a-button>
    </div>
    <div class="report_analysis">
      <report-analysis />
    </div>
    <div class="report_table">
      <report-table />
    </div>
    <div class="report_course_analysis">
      <report-course-analysis />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import reportAnalysis from "@/components/profile/class-student/report/report-analysis.vue";
import reportTable from "@/components/profile/class-student/report/report-table.vue";
import reportCourseAnalysis from "@/components/profile/class-student/report/report-course-analysis.vue";
</script>
<style lang="scss" scoed>
.query_form {
  & > div {
    margin-right: 10px;
  }
  & > span {
    margin-right: 10px;
  }
}
.report_analysis,
.report_table,
.report_course_analysis {
  background: #fbfbfb;
  border: 1px solid #eeeded;
  border-radius: 10px;
  margin: 10px 0;
  .title {
    font-size: 20px;
    line-height: 30px;
    color: #222222;
    margin-left: 8px;
    margin-right: 8px;
    text-align: center;
    font-weight: bold;
  }
  .cards {
    padding: 5px;
    .card-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      border-radius: 8px;
      color: #ffffff;
      padding: 10px;
      .card_title {
        margin: 5px 0;
      }
      .card_content {
        margin: 5px 0;
      }
      .btn {
        font-size: 12px;
        background: #ef9c7b;
        padding: 3px 10px;
        border-radius: 20px;
      }
    }
  }
}
</style>