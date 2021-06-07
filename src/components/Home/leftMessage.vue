<template>
  <div class="leftMessage">
    <div class="close">
      <a href="#nowhere">
        <i class="el-icon-close"></i>
      </a>
    </div>
    <div class="user">
        <a href="#nowhere">
            <img src="../../assets/user.png" class="icon_user">
        </a>
    </div>
    <div class="gather">
      <div class="message gatherType" >
        <a href="#nowhere">
          <img src="../../assets/message.png"> 
          <span>消息</span>
        </a>
      </div>
      <div class="order gatherType">
        <a href="#nowhere">
          <img src="../../assets/order.png">
          <span>订单</span>
        </a>
      </div>
      <div class="account gatherType">
        <a href="#nowhere">
          <img src="../../assets/account.png">
          <span>账户</span>
        </a>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: "leftMessage",
};
</script>

<style>
.leftMessage {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 35px;
  z-index: 5000;
  min-height: 480px;
  background-color: rgb(124, 137, 148);
  font-family: tahoma,arial,"Hiragino Sans GB",simsun,sans-serif;
  line-height: 1.5;
}

.close {
  position: relative;
  left: 0;
  top: 0;
  height: 35px;
}

.close a {
  width: 26px;
  height: 100%;

  display: block;
  padding: 20px 0 0 7px;
}

.close a:hover {
  background-color: rgb(103, 116, 129);
}

.close a .el-icon-close {
  color: white;
  font-size: 20px;
}

.leftMessage .user{
    position: absolute;
    top: 260px;
    left: 7px;
}

.leftMessage .gather{
  position: absolute;
  top: 320px;
}

.leftMessage .gather .gatherType{
  position: relative;
  height: 52px;
  width: 35px;
  text-align: center;
}

.leftMessage .gather .gatherType a{
  width: 100%;
  height: 100%;
  display: block;
  text-decoration: none;
}


.leftMessage .gather .gatherType a img{
  margin-top: 5px;
}

.leftMessage .gather .gatherType a span{
  font-size: 13px;
  color: white;
  font-weight: 200;
  display: block;
  margin-top: -5px;
}
</style>