<template>
  <div class="loginOn">
    <simpleHead></simpleHead>
    <div class="loginOn-body">
      <div class="loginOn-body-title">
        <a href="#/"><img src="../assets/login-logo.png" /></a>
        <span>账号注册</span>
      </div>
      <div class="loginOn-body-content">
        <form>
          <div class="textbox-group">
            <label for="xx" class="label">国家/地区</label>
            <input type="text" class="textbox" placeholder="中国 86" id="country"/>
          </div>
          <div class="textbox-group">
            <label class="label">手机号码</label>
            <input type="text" class="textbox" placeholder="请输入手机号码" id="phoneNumber"/>
          </div>
          <div class="textbox-group">
            <label class="label">登陆密码</label>
            <input type="text" class="textbox" placeholder="请输入登录密码" id="passWord"/>
          </div>
          <div class="textbox-group">
            <label class="label">验证码</label>
            <input type="text" class="textbox" placeholder="请输入验证码" id="verifyCode"/>
            <div class="verify">
              <img src="../assets/verificationCode.jpg" v-bind:class ="verifyCode ? 'vcode' : 'vcode2'" />
              <span class="message" v-if="verifyCode" v-on:click="amplifyCode"> 放大验证码 </span>
              <span class="message" v-if="!verifyCode" v-on:click="reduceCode">缩小验证码</span>
            </div>
          </div>
          <div class="textbox-group">
            <label class="label">激活码</label>
            <input
              type="text"
              class="textbox textbox-short"
              placeholder="请输入激活码"
            />
            <button class="btncode">获取激活码</button>
          </div>
          <div class="sms">
            <span>收不到短信验证码？点击获取 </span>
            <a href="#">语音验证码</a>
          </div>
          <div class="textbox-group textbox-group-rule">
            <input type="checkbox" v-on:click="check">
            <label>我已阅读并同意遵守</label>
            <a href="http://www.qunar.com/site/zh/Rules.shtml" target="_blacnk">
              《去哪儿用户协议》
            </a>
          </div>
          <div class="textbox-group textbox-group-submit">
            <button v-bind:class="checkRule ? 'disagree' : 'agree'" class="btnsubmit">同意协议并注册</button>
          </div>
        </form>
        <div class="right">
          <dl>
            <dt>注册成为“去哪儿”的用户后，您可以：</dt>
            <dd>
              <ul>
                <li><span class="rounddot">· </span>畅游与去哪儿合作的<span class="redbold">机票</span>、<span class="redbold">酒店</span>、<span class="redbold">度假</span>代理商网站，轻松管理帐单</li>
                <li><span class="rounddot">· </span>查询、计划、管理您的预订信息</li>
                <li><span class="rounddot">· </span>享受优质超低价格<span class="redbold">团购</span>服务</li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import simpleHead from "../components/sub/simpleHead.vue";
import Footer from "../components/sub/footer.vue";

export default {
  name: "loginOn",
  components: {
    simpleHead,
    Footer,
  },
  data(){
    return{
      verifyCode: true,
      checkRule: true,
    }
  },
  methods:{
    amplifyCode(){
      this.verifyCode = false;
    },
    reduceCode(){
      this.verifyCode = true;
    },
    check(){
      this.checkRule = !this.checkRule;
    }
  }
};
</script>

<style>
.loginOn {
  margin-top: -9px;
}

.loginOn-body {
  width: 980px;
  margin: 0 auto;
  color: #555;
  height: 625px;
}

.loginOn-body-title {
  width: 980px;
  line-height: 53px;
  height: 53px;
  padding: 20px 11px;
}

.loginOn-body-title a {
  width: 138px;
  height: 53px;
  float: left;
}

.loginOn-body-title span {
  font: normal 18px/18px "microsoft yahei", arial, sans-serif;
  padding-left: 20px;
  float: left;
  padding-top: 34px;
}

.loginOn-body-content {
  margin: 0 auto;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  width: 980px;
  height: 532px;
}

.loginOn-body-content form {
  float: left;
  width: 615px;
  clear: both;
  padding: 40px 0 0 30px;
}

.loginOn-body-content form .textbox-group {
  padding: 10px 0;
  color: #999;
  font-family: tahoma, arial, sans-serif;
}

.loginOn-body-content form .textbox-group .label {
  display: inline-block;
  width: 80px;
  text-align: right;
  font-size: 14px;
  vertical-align: middle;
}

.loginOn-body-content form .textbox-group .textbox {
  display: inline-block;
  line-height: 34px;
  height: 34px;
  width: 244px;
  margin-left: 10px;
  font-size: 14px;
  vertical-align: middle;
  border: 1px solid #ccc;
  color: #666;
  outline: 0 none;
  padding-left: 10px;
}

.loginOn-body-content form .textbox-group .textbox:hover {
  border: 1px solid #5abec6;
}

.loginOn-body-content form .textbox-group .verify {
  margin: 20px 0 0 80px;
}

.loginOn-body-content form .textbox-group .verify .vcode {
  display: inline-block;
  line-height: 30px;
  margin-left: 16px;
  vertical-align: middle;
  cursor: pointer;
  width: 96px;
  height: 30px;
}

.loginOn-body-content form .textbox-group .verify .vcode2{
  display: inline-block;
  width: 170px;
  height: 60px;
  margin-left: 16px;
  vertical-align: middle;
  cursor: pointer;
}

.loginOn-body-content form .textbox-group .verify .message {
  display: inline-block;
  font-size: 12px;
  font-family: tahoma, arial, sans-serif;
  color: #006bc8;
  margin-left: 5px;
  vertical-align: middle;
  cursor: pointer;
}

.loginOn-body-content form .textbox-group .verify .message:hover {
  color: #f60;
}

.loginOn-body-content form .textbox-group .textbox-short {
  width: 109px;
}

.loginOn-body-content form .textbox-group .btncode {
  display: inline-block;
  width: 96px;
  margin-left: 10px;
  vertical-align: middle;
  color: #fff;
  background: #0b6bf0;
  border: 1px solid transparent;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
  border-radius: 2px;
}

.loginOn-body-content form .sms {
  margin: 2px 0 19px 94px;
  font-size: 12px;
  color: black;
}

.loginOn-body-content form .sms a{
  color: #0069ca;
  text-decoration: none;
}

.loginOn-body-content form .sms a:hover{
  color: #f60;
}

.loginOn-body-content form .textbox-group-rule{
  line-height: 20px;
  height: 20px;
  padding: 5px 0 0;
  margin-left: 90px;
  font-size: 12px;
}

.loginOn-body-content form .textbox-group-rule a{
  text-decoration: none;
  color: #006bca;
}

.loginOn-body-content form .textbox-group-rule a:hover{
  color: #f60;
}

.loginOn-body-content form .textbox-group-submit{
  margin: 10px 0 0 78px;
  vertical-align: middle;
}

.loginOn-body-content form .textbox-group-submit .btnsubmit{
  width: 116px;
  height: 30px;
  font-size: 14px;
  color: white;
  border: 0;
  margin-left: 16px;
  vertical-align: middle;
  background-color: #b6b6b6;
  border-radius: 2px;
  text-align: center;
  font-family: tahoma,arial,"Hiragino Sans GB",simsun,sans-serif;
}

.loginOn-body-content form .textbox-group-submit .disagree{
  background-color: #b6b6b6;
}

.loginOn-body-content form .textbox-group-submit .agree{
  background-color: #ff8200;
}


.loginOn-body-content .right{
  width: 320px;
  height: 455px;
  padding-right: 0;
  float: left;
}

.loginOn-body-content .right dl{
  padding: 10px;
  margin-top: 44px;
  font: normal 12px/25px simsun;
}

.loginOn-body-content .right dl dt{
  font-size: 14px;
}

.loginOn-body-content .right dl dd{
  margin-inline-start: 0px;
  margin-block-start: 0px;
}

.loginOn-body-content .right dl dd ul{
  list-style: none;
  margin-inline-start: 0px;
  margin-block-start: 0px;
  padding-inline-start: 0px;
}

.loginOn-body-content .right dl dd ul li{
  padding-top: 5px;
}

.loginOn-body-content .right dl dd ul li .rounddot{
  display: inline-block;
  font-size: 18px;
}

.loginOn-body-content .right dl dd ul li .redbold{
  color: #fd017c;
}

.footer {
  clear: both;
  margin: 0 auto;
  width: 980px;
}
</style>