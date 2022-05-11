<template>
  <div class="footer_main">
    <div class="footer_main_links">
      <div>友情链接：</div>
      <a href="#">腾讯教育</a>
      <a href="#">网易教育</a>
      <a href="#">233网校</a>
      <a href="#">无忧考网</a>
      <a href="#">考试吧</a>
      <a href="#">考研帮</a>
      <a href="#">可可英语查查</a>
      <a href="#">在线词典</a>
      <a href="#">公务员考试网</a>
    </div>
    <div class="footer_main_address">
      <div>
        <icon-location />公司地址：甘肃省兰州市七里河区兰石豪布斯卡总部办公楼8层
      </div>
      <div>学校邮箱：shuobihai@163.com</div>
    </div>
    <div class="footer_main_copyright">
      Copyright&nbsp;&nbsp;©2005-2021甘肃硕博海教育装备有限公司&nbsp;&nbsp;&nbsp;&nbsp;陇ICP备2021001550号
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer_main {
  height: auto;
  padding: 0 10%;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  &_links {
    height: auto;
    line-height: 30px;
    display: flex;
    & > div {
      color: $--primary-6;
    }
    & > a {
      color: $--gray-10;
      margin: 0 20px;
      &:hover {
        color: rgb(255, 0, 0);
      }
    }
  }
  &_address {
    height: auto;
    line-height: 30px;
    display: flex;
    color: #ffffff;
    &_icon {
      margin-right: 10px;
    }
    & > div {
      margin: 0 10px;
    }
  }
  &_copyright {
    height: auto;
    line-height: 30px;
    color: $--gray-10;
    text-align: center;
  }
}
</style>
