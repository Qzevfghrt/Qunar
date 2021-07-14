<template>
  <div class="q_header_tnav">
    <ul class="pull_right">
      <li class="inline_block">
        <span>请</span>
        <a href="#nowhere" class="q_head_login">登录</a>
      </li>
      <li class="inline_block">
        <span>或</span>
        <a href="/#/loginOn" class="q_head_login" target="_blank">免费注册</a>
      </li>
      <li class="inline_block">
        <span class="q_head_line">|</span>
        <i class="el-icon-message"></i>
        <a href="#nowhere" class="q_head_a">消息</a>
        <i class="el-icon-arrow-down"></i>
      </li>
      <li class="inline_block q_head_message">
        <span class="q_head_line">|</span>
        <a href="#nowhere" class="q_head_a">查看订单</a>
        <i class="el-icon-arrow-down"></i>
      </li>
      <li class="inline_block q_head_message">
        <span class="q_head_line">|</span>
        <a href="#nowhere" class="q_head_a">积分商城</a>
      </li>
      <li class="inline_block q_head_message">
        <span class="q_head_line">|</span>
        <a href="#nowhere" class="q_head_a">联系客服</a>
      </li>
      <li class="inline_block">
        <span class="q_head_line">|</span>
        <i class="el-icon-mobile-phone"></i>
        <img src="../../assets/weixin.png" class="weixin_icon">
      </li>
    </ul>

  </div>
</template>

<script scoped>
export default {
  name: "topMessage",
};
</script>

<style scoped>
div.q_header_tnav{
  width: 688px;
  height: 42px;
  font: normal 12px tahoma,arial,sans-serif;
  margin-top: -5px;
}
div.q_header_tnav ul{
  margin-top: 2px;
}
li.inline_block {
  display: inline-block;
}

.q_head_a{
  text-decoration: none;
  color:#666;
}
.q_head_a:hover{
  color:rgb(28, 162, 196);
}
.q_head_login{
  color:rgb(56, 212, 212);
  text-decoration: none;
}
.q_head_line{
  color:lightgray;
  padding:0 4px 0 4px;
}
.pull_right{
  float: right;
}

.weixin_icon{
  position: relative;
  width:14px;
  height: 14px;
  margin-bottom: -3px;
  margin-left: 17px;
}
.el-icon-mobile-phone{
  color: rgb(28, 162, 196);
}

</style>>

