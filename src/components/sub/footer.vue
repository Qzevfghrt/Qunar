<template>
  <div class="footer">
    <div class="links">
      <div class="fh-about">关于Qunar.com</div>
      <span>|</span>
      <a href="#nowhere">业务合作</a>
      <span>|</span>
      <a href="#nowhere">加入我们</a>
      <span>|</span>
      <a href="#nowhere">"严重违规失信"专项整治举报</a>
      <span>|</span>
      <a href="#nowhere">安全中心</a>
      <span>|</span>
      <a href="#nowhere">星骆驼公益</a>
      <span>|</span>
      <a href="#nowhere">About Us</a>
    </div>
    <div class="copyright">
      <span>Copyright 2021 Qunar.com</span>
      <a href="#nowhere">京公网安备11010802030542</a>
      <a href="#nowhere">京ICP备05021087号</a>
      <a href="#nowhere">京ICP证060856号</a>
      <a href="#nowhere">营业执照信息</a>
      <a href="#nowhere">(京)-非经营性-2016-0110</a>
      <span>去哪儿网客服电话95117</span>
    </div>
    <div class="copyright">
      <span>违法和不良信息举报电话：010-59606977</span>
      <span>违法和不良信息举报邮箱：tousu@qunar.com</span>
    </div>
    <a href="https://globalsign.cn/" target="block">
      <img src="../../assets/globalsign.gif" class="globalsign" />
    </a>
    <a href="https://www.12377.cn/" target="block">
      <img src="../../assets/report.png" class="report" />
    </a>
    <a href="https://www.creditchina.gov.cn/" target="block">
      <img src="../../assets/credit.png" class="credit" />
    </a>
  </div>
</template>

<script>
export default {
  name: "q_footer",
};
</script>

<style>
.footer {
  font-size: 12px;
  padding-top: 20px;
  color: #999;
  text-align: center;
}

.footer .links .fh-about {
  display: inline-block;
}
.footer a {
  text-decoration: none;
  height: 22px;
  color: #999;
}
.footer a:hover {
  color: rgb(238, 77, 14);
}

.footer .copyright {
  line-height: 22px;
  padding: 7px 0 0;
}

.footer .globalsign {
  margin: 5px 4px 0 4px;
  height: 28px;
  border: 1px solid rgb(206, 200, 200);
}

.footer .report{
  margin: 5px 4px 0 4px;
  height: 28px;
  border: 1px solid rgb(206, 200, 200);
}

.footer .credit{
  margin: 5px 4px 0 4px;
  height: 28px;
  border: 1px solid rgb(206, 200, 200);
  padding-right: 5px;
}
</style>