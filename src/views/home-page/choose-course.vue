<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-27 17:38:02
 * @LastEditTime: 2022-04-27 18:10:31
 * @Description: 选课内容
 -->

<template>
  <div class="choose_course">
    <div class="choose_course_content">
      <div class="green_bg"></div>
      <div class="img-1">
        <div class="choose_btn_1">
          <div class="choose_btn_2">
            <div class="choose_btn_3">选课+</div>
          </div>
        </div>
      </div>
      <div class="left-top">
        <p>选课</p>
        <p>courseContent</p>
        <p>内容</p>
      </div>
      <div class="content-text">
        <div class="title">" 新高考3+1+2 <span>组合</span></div>
        <div class="tip">必选课：语文、数学、外语</div>
        <div class="content">
          所谓“3+1+2”的模式，即除了语数外三科，学生们还要根据自己的特长、偏好等分别从物理、化学、生物、政治、历史、地理6门科目中选出3门作为选考科目，于是产生了20种“风格各异”的选考方式。浙江需要从物理、化学、生物、政治、历史、地理、技术7门学科中选择3门，有35种不同的选科组合。随着浙江、上海首届新高考改革的试点完成，高校对于专业的选科科目要求也较为完善了。
        </div>
        <div class="more">
          <a-button type="primary" shape="round" size="large"
            >前往查看更多+</a-button
          >
          <span>"</span>
        </div>
      </div>
      <img
        class="img-2"
        src="@/assets/images/chooseCourse/selection_bottom.png"
        alt=""
      />
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.choose_course {
  width: 100%;
  max-width: 100%;
  background-image: url("@/assets/images/chooseCourse/selection_bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 80px 10%;
  &_content {
    position: relative;
    background: #f7f8fa;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    height: 100%;
    .green_bg {
      background: $--primary-6;
      height: 430px;
      width: 400px;
    }
    .choose_btn_1 {
      width: 180px;
      height: 180px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .choose_btn_2 {
        width: 123px;
        height: 123px;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .choose_btn_3 {
          width: 92px;
          height: 92px;
          background-color: rgba(253, 91, 68, 0.8);
          font-family: MicrosoftYaHei-Bold;
          font-size: 24px;
          color: #ffffff;
          border-radius: 50%;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }

    .img-1 {
      position: absolute;
      top: -50px;
      left: 50px;
      width: 567px;
      height: 434px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("@/assets/images/chooseCourse/selection_left_bg.png");
    }
    .left-top {
      position: absolute;
      top: -50px;
      right: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 120px;
      background: #fd5b44;
      font-size: 22px;
      color: #fff;
      p:nth-child(2) {
        font-size: 12px;
      }
    }
    .content-text {
      position: absolute;
      top: 60px;
      left: 50%;
      right: 50px;
      .title {
        font-size: 30px;
        color: #333;
        font-weight: 700;
        margin-left: -25px;
        span {
          color: #fd5b44;
        }
      }
      .tip {
        font-family: MicrosoftYaHei-Bold;
        font-size: 16px;
        color: #777777;
        position: relative;
      }
      .content {
        margin-top: 35px;
        font-family: MicrosoftYaHei;
        font-size: 16px;
        color: #111111;
        line-height: 24px;
      }
      .more {
        margin: 40px 0;
        button {
          padding: 0 15px;
          font-size: 14px;
        }
        span {
          font-size: 30px;
          color: #333;
          font-weight: 700;
          float: right;
        }
      }
    }
    .img-2 {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>