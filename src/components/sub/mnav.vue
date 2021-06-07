<template>
  <div class="mnav">
      <div class="mnav_message">
          <ul>
              <li class="q_header_home"><a href="nowhere"><span>首页</span></a></li>
              <li class="q_header_diy"><a href="nowhere"><span>机票</span></a></li>
              <li class="q_header_diy"><a href="nowhere"><span>酒店</span></a></li>
              <li class="q_header_train"><a href="nowhere"><span>火车票</span></a></li>
              <li class="q_header_diy"><a href="nowhere"><span>度假</span></a></li>
              <li class="q_header_diy"><a href="nowhere"><span>团购</span></a></li>
              <li class="q_header_diy"><a href="nowhere"><span>门票</span></a></li>
              <li class="q_header_local"><a href="nowhere"><span>当地人</span></a></li>
              <li class="q_header_car"><a href="nowhere"><span>汽车票</span></a></li>
              <li class="q_header_design"><a href="nowhere"><span>行程设计</span></a></li>
              <li class="q_header_diy"><a href="nowhere"><span>攻略</span></a></li>
              <li class="q_header_quick"><a href="nowhere"><span>旅游快讯</span></a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "mnav",
};
</script>

<style>
.mnav{
    background:linear-gradient(90deg,#00d0d4 19%,#00c5c3 58%,#9effa4 100%);
    height: 44px;
}

.mnav .mnav_message{
    height: 44px;
    width: 1200px;
    padding: 0;
    float: none;
    margin-right: 0;
    margin: 0 auto;
}

.mnav .mnav_message ul{
    position: relative;
    margin:0;
}

.mnav .mnav_message ul li{
    list-style-type: none;
    float: left;
    width: 60px;
    height: 44px;
}

.mnav .mnav_message ul li a{
    text-decoration: none;
    color: white;
    display: inline-block;
    height: 100%;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
}

.mnav .mnav_message ul li a:hover{
    background-color: #00bcd4;
}

.mnav .mnav_message ul li a span{
    display: inline-block;
    margin: 12px 10px 0px 10px;
    vertical-align: top;
}

.mnav .mnav_message .q_header_home{
    margin-left: -38px;
    background-color: #00bcd4;
}

.mnav .mnav_message .q_header_train{
    width: 70px;
}

.mnav .mnav_message .q_header_local{
    width:70px;
}

.mnav .mnav_message .q_header_car{
    width:70px;
}

.mnav .mnav_message .q_header_design{
    width: 85px;
}

.mnav .mnav_message .q_header_quick{
    width: 85px;
}
</style>