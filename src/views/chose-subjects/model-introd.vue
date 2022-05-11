<template>
  <!--新高考模式介绍-->
  <div class="introdus">
    <div class="imgDiv">
      <div class="font-top">
        新高考 3+1+2 模式
      </div>
      <div class="font-center">
        含义介绍：
      </div>
      <div class="font-button">
        考试科目包括语文、数学、外语3门统一高考科目和学业水平考试的3门选考科目。其中，考生应从物理、历史中首选1门，从另外的思想政治、地理、化学、生物学中再选2门，即“3+1+2”模式。考生总成绩由统一高考科目成绩和学业水平考试选考科目成绩构成，满分750分。
      </div>
    </div>

  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.introdus {
  width : 430px;
  height : 300px;
  .imgDiv {
    width :100%;
    height :100%;
    background-image: url('../../assets/images/subject/subject_banner_center.png');
    background-size: 100% 100%;
    .font-top {
      padding : 35px 60px 0 60px;
      font-size : 26px;
      color : #fd5b44;
      font-family : MicrosoftYaHei-Bold;
      font-weight : bold;
    }
    .font-center {
      padding : 0 60px 0px 60px;
      font-size : 22px;
      color : #000000;
      margin-top : 15px;
      font-family : MicrosoftYaHei;
    }
    .font-button {
      padding : 0 20px 0px 60px;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      color: #444444;
      margin-top: 15px;
      line-height : 1.5;
    }
  }

}


</style>