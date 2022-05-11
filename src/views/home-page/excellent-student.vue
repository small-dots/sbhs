<!--
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-28 11:34:52
 * @LastEditTime: 2022-04-28 14:51:11
 * @Description: 哟秀学生
 -->
 <template>
  <div class="home_students">
    <div class="home_students_info">
      <div class="home_student_top">
        <div class="home_student_top_left">
          <div class="home_student_top_left_title">优秀<span>学生</span></div>
          <div class="home_student_top_left_tip">
            学校致力于培养全省优质学子
          </div>
          <div class="student_title_bg">
            <img
              src="@/assets/images/classic-video/video_title_bg.png"
              alt=""
            />
          </div>
        </div>
        <div class="home_student_top_more">前往查看更多+</div>
      </div>
      <div class="home_students_info_list">
        <div class="students_info_list_tip">
          <div class="students_one">
            <img
              src="@/assets/images/chooseCourse/selection_left_bg.png"
              alt=""
            />
          </div>
          <div class="students_two">
            <img
              src="@/assets/images/chooseCourse/selection_left_bg.png"
              alt=""
            />
          </div>
        </div>
        <div class="students_info_list_big">
          <img
            src="@/assets/images/chooseCourse/selection_left_bg.png"
            alt=""
          />
          <div class="students_info">
            <div class="students_info_name">优秀学生：刘悦</div>
            <div class="students_info_class">年级：高三（1）班</div>
          </div>
        </div>
        <div class="students_info_list_tip">
          <div class="students_one">
            <img
              src="@/assets/images/chooseCourse/selection_left_bg.png"
              alt=""
            />
          </div>
          <div class="students_two">
            <img
              src="@/assets/images/chooseCourse/selection_left_bg.png"
              alt=""
            />
          </div>
        </div>
        <div class="students_info_list_tip">
          <div class="students_one">
            <img
              src="@/assets/images/chooseCourse/selection_left_bg.png"
              alt=""
            />
          </div>
          <div class="students_two">
            <img
              src="@/assets/images/chooseCourse/selection_left_bg.png"
              alt=""
            />
          </div>
        </div>
        <div class="students_info_list_tip">
          <div class="students_one">
            <img
              src="@/assets/images/chooseCourse/selection_left_bg.png"
              alt=""
            />
          </div>
          <div class="students_two">
            <img
              src="@/assets/images/chooseCourse/selection_left_bg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home_students {
  .home_students_info {
    padding: 0 10%;
    margin: 0 auto;
    padding-top: 90px;
    padding-bottom: 91px;
    box-sizing: border-box;
    .home_student_top {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .home_student_top_left {
        position: relative;
        .home_student_top_left_title {
          font-family: MicrosoftYaHei-Bold;
          font-size: 30px;
          color: #000000;
          font-weight: bold;
          span {
            font-family: MicrosoftYaHei-Bold;
            font-size: 30px;
            color: #fd5b44;
          }
        }
        .home_student_top_left_tip {
          font-family: MicrosoftYaHei;
          font-size: 16px;
          color: #777777;
        }
        .student_title_bg {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(-50%, -30%);
          width: 41px;
          height: 41px;
          img {
            width: 41px;
            height: 41px;
          }
        }
      }
      .home_student_top_more {
        cursor: pointer;
        width: 146px;
        height: 39px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        border: solid 1px #c3c6cc;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #2d2d40;
        &:hover {
          background-color: $--primary-6;
          color: #ffffff;
        }
      }
    }
    .home_students_info_list {
      margin-top: 47px;
      display: flex;
      justify-content: space-between;
      .students_info_list_tip {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 1px;
        flex: 1;
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
        .students_one {
          margin-bottom: 1px;
          overflow: hidden;
          img {
            transition: all 0.3s ease-in-out;
          }
          &:hover img {
            transform: scale(1.2);
          }
        }
        .students_two {
          overflow: hidden;
          img {
            transition: all 0.3s ease-in-out;
          }
          &:hover img {
            transform: scale(1.2);
          }
        }
      }
      .students_info_list_big {
        margin-right: 1px;
        flex: 2;
        position: relative;
        overflow: hidden;
        &:hover img {
          transform: scale(1.2);
        }
        img {
          width: 100%;
          height: 100%;
          transition: all 0.3s ease-in-out;
        }
        .students_info {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding-bottom: 20px;
          box-sizing: border-box;
          .students_info_name {
            font-family: MicrosoftYaHei;
            font-size: 16px;
            color: #ffffff;
            font-weight: bold;
          }
          .students_info_class {
            font-family: MicrosoftYaHei;
            font-size: 12px;
            color: #dddddd;
            margin-top: 8px;
            line-height: 12px;
          }
        }
      }
    }
  }
}
</style>