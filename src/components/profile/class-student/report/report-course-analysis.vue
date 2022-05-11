<template>
  <div>
    <div class="title">-2021年度各科成绩分析-</div>
    <div class="tabs">
      <a-tabs type="rounded">
        <a-tab-pane key="1" title="语文" />
        <a-tab-pane key="2" title="数学" />
        <a-tab-pane key="3" title="外语" />
        <a-tab-pane key="4" title="物理" />
        <a-tab-pane key="5" title="历史" />
        <a-tab-pane key="6" title="化学" />
      </a-tabs>
    </div>
    <div class="cards">
      <a-grid
        :cols="{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4, xxl: 4 }"
        :colGap="24"
        :rowGap="16"
      >
        <a-grid-item
          class="card-item"
          v-for="(item, index) in courseAnalysisList"
          :key="index"
          :style="{
            background: `url(${backgroundList[index]}) no-repeat`,
            backgroundSize: '100% 100%',
          }"
        >
          <div class="card_title">{{ item.title }}</div>
          <div class="card_content">{{ item.value }}</div>
          <div v-if="item.btn" class="btn">{{ item.btn }}</div>
        </a-grid-item>
      </a-grid>
    </div>
    <div id="course_chart" style="height: 500px"></div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { LineChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
} from "echarts/components";
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
// 注册必须的组件
echarts.use([
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  LabelLayout,
  LegendComponent,
  UniversalTransition,
  CanvasRenderer,
]);
const courseAnalysisList = ref([
  { title: "历史最高分", value: "610分" },
  { title: "错题集数量", value: "120道", btn: "查看错题" },
  { title: "累计答题数量", value: "56道" },
  { title: "考试次数", value: "6次" },
]);
const backgroundList = ref([
  "src/assets/images/profile/student-detail/parent_soure1.png",
  "src/assets/images/profile/student-detail/parent_soure2.png",
  "src/assets/images/profile/student-detail/parent_soure3.png",
  "src/assets/images/profile/student-detail/parent_soure4.png",
]);
onMounted(() => {
  const myChart = echarts.init(document.getElementById("course_chart"));
  renderLineChart(myChart);
});
const renderLineChart = (chartDom) => {
  const options = {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00", "#3A3F53"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["语文", "数学", "外语", "物理", "历史", "化学"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        name: "(日期)",
        type: "category",
        boundaryGap: false,
        data: ["03/20", "04/07", "04/20", "05/12", "05/25", "06/20"],
      },
    ],
    yAxis: [
      {
        name: "(分数)",
        type: "value",
        splitLine: {
          show: false,
        },
        axisLine: {
          show: true,
        },
      },
    ],
    series: [
      {
        name: "语文",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(128, 255, 165)",
            },
            {
              offset: 1,
              color: "rgb(1, 191, 236)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [89, 66, 45, 87, 90, 110, 110],
      },
      {
        name: "数学",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgb(77, 119, 255)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [84, 67, 45, 87, 90, 100, 89],
      },
      {
        name: "外语",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(55, 162, 255)",
            },
            {
              offset: 1,
              color: "rgb(116, 21, 219)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [89, 66, 45, 87, 70, 10, 110],
      },
      {
        name: "物理",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 0, 135)",
            },
            {
              offset: 1,
              color: "rgb(135, 0, 157)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [81, 67, 41, 81, 91, 111, 100],
      },
      {
        name: "历史",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191, 0)",
            },
            {
              offset: 1,
              color: "rgb(224, 62, 76)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [79, 56, 45, 77, 80, 101, 120],
      },
      {
        name: "化学",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(45, 82, 95)",
            },
            {
              offset: 1,
              color: "rgb(224, 62, 76)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [69, 46, 34, 91, 45, 23, 89],
      },
    ],
  };
  options && chartDom.setOption(options);
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: center;
}
</style>