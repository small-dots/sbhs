<template>
  <div>
    <div class="title">-2021年上学期总成绩分析-</div>
    <div class="cards">
      <a-grid
        :cols="{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4, xxl: 4 }"
        :colGap="24"
        :rowGap="16"
      >
        <a-grid-item
          class="card-item"
          v-for="(item, index) in analysisList"
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
    <div id="barchart" style="height: 400px"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
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
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);
const analysisList = ref([
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
  renderChart(1);
});
const renderChart = (type) => {
  const myChart = echarts.init(document.getElementById("barchart"));
  const option = {
    xAxis: {
      type: "category",
      name: "(日期)",
      data: ["03/20", "04/20", "05/11", "06/21", "07/01", "07/20"],
    },
    yAxis: {
      name: "(分数)",
      splitLine: {
        show: false,
      },
      axisLine: {
        show:true
      },
      type: "value",
    },
    label: {
      show: true,
      position: "top",
      align: "center",
      formatter: ["{a|(开学考试)}", "{b|{c}}"].join("\n"),
      rich: {
        a: {
          color: "gray",
          lineHeight: 20,
        },
        b: {
          color: "#fd5b43",
        },
      },
    },

    series: [
      {
        data: [485, 390, 580, 485, 610, 550],
        type: "bar",
        barWidth: "15px",
        itemStyle: {
          color: "#00d3a0",
          borderRadius: [10, 10, 0, 0],
        },
      },
    ],
  };
  option && myChart.setOption(option);
};
</script>
