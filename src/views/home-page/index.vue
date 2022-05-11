<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-27 13:54:47
 * @LastEditTime: 2022-05-07 09:50:50
 * @Description: 首页
 -->
 <template>
  <div id="home_basic">
    <!-- 轮播 -->
    <carousel />
    <!-- 站点资源数据统计 -->
    <div class="resource_statistics">
      <div class="statistics_tiem">
        <div class="icon">
          <img
            src="@/assets/images/statistics/strength_courseware.png"
            alt=""
          />
        </div>
        <div class="count">
          <span>500 </span>
        </div>
        <div class="title">教师在线课件总数</div>
      </div>
      <div class="statistics_tiem">
        <div class="icon">
          <img src="@/assets/images/statistics/strength_video.png" alt="" />
        </div>
        <div class="count">
          <span>258</span>
        </div>
        <div class="title">在线视频教学总数</div>
      </div>
      <div class="statistics_tiem">
        <div class="icon">
          <img src="@/assets/images/statistics/strength_book.png" alt="" />
        </div>
        <div class="count">
          <span>8732</span>
        </div>
        <div class="title">线上电子书总计</div>
      </div>
      <div class="statistics_tiem">
        <div class="icon">
          <img src="@/assets/images/statistics/strength_exercises.png" alt="" />
        </div>
        <div class="count">
          <span>901</span>
        </div>
        <div class="title">学生在线习题展示</div>
      </div>
    </div>

    <!-- 选课内容 -->
    <choose-course />
    <!-- 经典视频 -->
    <classic-video />
    <!-- 优选课件 -->
    <courseware />
    <!-- 优秀学生 -->
    <excellent-student />
    <!-- 优秀老师 -->
    <excellent-teacher />
    <!-- 电子书 -->
    <elec-book />
    <!-- 政策说明 -->
    <poilcy />
  </div>
</template>
<script setup>
import carousel from "views/home-page/carousel.vue";
import chooseCourse from "views/home-page/choose-course.vue";
import classicVideo from "views/home-page/classic-video.vue";
import courseware from "views/home-page/courseware.vue";
import excellentStudent from "views/home-page/excellent-student.vue";
import excellentTeacher from "views/home-page/excellent-teacher.vue";
import elecBook from "views/home-page/elec-book.vue";
import poilcy from "views/home-page/poilcy.vue";
</script>
<style lang="scss" scoped>
.resource_statistics {
  padding: 0 10%;
  display: flex;
  margin: 80px 0;
  align-items: center;
  justify-content: center;
  .statistics_tiem {
    cursor: pointer;
    margin: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon img {
      transition: all 0.5s ease-in-out;
    }
    .icon img:hover {
      transform: scale(1.2);
    }
    .count {
      span {
        font-size: 34px;
        line-height: 40px;
        position: relative;
      }
      span:after {
        content: "+";
        color: $--warning-9;
        display: block;
        position: absolute;
        top: -50%;
        right: -50%;
      }
    }
    .title {
      font-size: 20px;
      line-height: 40px;
    }
  }
}
</style>
