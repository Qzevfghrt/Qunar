<template>
  <div class="recommend">
      <div class="recommend_left">
          <a href="#nowhere">
              <img src="../../assets/recommend.png">
          </a>
      </div>
      <div class="recommend_right">
          <div class="slide">
              <span class="title">旅行咨询</span>
              <div class="content">
                  <a href="#nowhere"><span>中华人民共和国外交部安全提醒</span></a>
                  <a href="#nowhere"><span>中华人民共和国文化和旅游部出行提示</span></a>
                  <a href="#nowhere"><span>请留意：坦桑尼亚将实施"禁塑令"</span></a>
                  <a href="#nowhere"><span>带这些东西去韩国，可能被罚6万元</span></a>
                  <a href="#nowhere"><span>反网络诈骗专栏</span></a>
                  <a href="#nowhere"><span>去哪儿网已通过支付卡产业数据安全标准</span></a>
                  <a href="#nowhere"><span>"放心消费在社区"系列活动</span></a>
                  <a href="#nowhere"><span>全国旅游投诉渠道</span></a>
              </div>
          </div>
          <div class="slide">
              <span class="title">旅行小贴士</span>
              <div class="content">
                  <a href="#nowhere"><span>去哪儿网郑重承诺"诚信经营""放心消费"</span></a>
                  <a href="#nowhere"><span>服药的最佳时间</span></a>
                  <a href="#nowhere"><span>吃药讲究姿势</span></a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.recommend{
    margin-top: 15px;
    margin-bottom: 20px;
}
.recommend .recommend_left{
    width: 945px;
    height: 288px;
    display: inline-block;
}

.recommend .recommend_right{
    width: 227px;
    display: inline-block;
    margin-left: 20px;
    height: 311px;
}

.recommend .recommend_right .slide{
    margin-top: 20px;
}

.recommend .recommend_right .slide .title{
    color:#333;
    font-size: 16px;
    letter-spacing: 0;
}

.recommend .recommend_right .slide .content a{
    text-decoration: none;
}

.recommend .recommend_right .slide .content a span:hover{
    color: #00d0d4;
}

.recommend .recommend_right .slide .content a span{
    color: #999;  
    font-size: 12px;
    display: inline-block;
    font-family: tahoma,arial,"Hiragino Sans GB",simsun,sans-serif;
    width: 100%;
}
</style>