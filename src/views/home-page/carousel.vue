<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-28 16:10:11
 * @LastEditTime: 2022-04-28 16:31:08
 * @Description: 轮播
 -->
 <template>
  <div class="carousel">
    <a-carousel
      :style="{
        width: '100%',
        height: '400px',
      }"
      indicator-type="line"
      :auto-play="true"
      animation-name="fade"
      :move-speed="2000"
      @change="handleChange"
    >
      <a-carousel-item
        class="carousel-items"
        v-for="(image, index) in images"
        :key="index"
      >
        <img
          :src="image"
          :style="{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }"
        />
        <div v-if="currentIndex === index + 1" class="mask_info">
          <div class="mask_info_items">
            <div class="info-1">一站/式/教/学</div>
            <div class="info-2">智慧校园精准教学</div>
            <div class="info-3">
              教学更精准+老师更轻松+学生更方便+家长更省心
            </div>
          </div>
        </div>
      </a-carousel-item>
    </a-carousel>
    <div class="carousel_login_panel"><login-panel /></div>
  </div>
</template>
<script setup>
import loginPanel from "views/home-page/login-panel.vue";
import { ref, onMounted } from "vue";
const images = ref([]);
onMounted(() => {
  images.value = [
    "https://s6.jpg.cm/2022/04/27/LiNayU.png",
    "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
    "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
  ];
});
const currentIndex = ref(1);
/* 轮播切换时触发 */
const handleChange = (index) => {
  currentIndex.value = index;
};
</script>
<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 540px;
  position: relative;
  &.carousel-items {
    & img {
      object-fit: cover;
    }
  }
  /* 轮播上的文字信息 */
  .mask_info {
    position: absolute;
    z-index: 2;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    & .info-1 {
      font-size: 24px;
      font-weight: 500;
      color: red;
      margin-bottom: 10px;
      margin: 30px 0;
      animation: textEffect_1 2s ease-in-out;
    }
    & .info-2 {
      font-size: 50px;
      font-weight: bold;
      margin-bottom: 10px;
      margin: 30px 0;
      animation: textEffect_2 1.5s ease-in-out;
    }
    & .info-3 {
      font-size: 20px;
      margin-bottom: 10px;
      margin: 50px 0;
      animation: textEffect_3 2s ease-in-out;
    }
  }
  @keyframes textEffect_1 {
    0% {
      margin-left: -100vw;
    }
    70% {
      margin-left: 20px;
    }
    80% {
      margin-left: -20px;
    }
    100% {
      margin-left: 0;
    }
  }
  @keyframes textEffect_2 {
    0% {
      margin-top: -100vh;
    }
    100% {
      margin-top: 0;
    }
  }
  @keyframes textEffect_3 {
    0% {
      margin-right: -100vw;
    }
    70% {
      margin-right: 20px;
    }
    80% {
      margin-right: -20px;
    }
    100% {
      margin-right: 0;
    }
  }
  /* 登录面 */
  &_login_panel {
    position: absolute;
    top:35%;
    right: 7%;
    transform: translateY(-50%);
    z-index: 2;
  }
}
</style>