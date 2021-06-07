<template>
  <div class="wrapper_ticket">
    <div class="ticket_head">
      <ul class="ticket_head_title">
        <li 
          v-on:mouseenter="enter1()"
          v-bind:class="show1 ? 'active' : 'unactive'"
        >
          <a href="#nowhere" v-bind:class="show1 ? 'active' : 'unactive'">当季景点门票</a>
        </li>
        <li v-on:mouseenter="enter2()">
          <a href="#nowhere">特惠门票</a>
        </li>
      </ul>

      <div class="ticket_head_more">
        <a href="#nowhere">
          <span>特惠门票</span>
          <img src="../../assets/right2.png" class="rightIcon" />
        </a>
      </div>
    </div>

    <div class="ticket_body">
      <div class="ticket_body_scenery" v-if='show1'>
        <div class="ticket_body_scenery_link">
          <div class="link_text_item">
            <p>热门景点</p>
            <div class="link_text_content">
              <ul class="clrfix">
                <li>
                  <a href="#nowhere"><span></span>外滩观光隧道</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>东平国家森林公园</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>海湾国家森林公园</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>强生浦江游览</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>上海长风海洋世界</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>上海世博会月亮船</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>朱家角古镇</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>上海世纪公园</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>信不信有你展</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="link_text_item">
            <p>国内目的地</p>
            <div class="link_text_content">
              <ul class="clrfix">
                <li>
                  <a href="#nowhere"><span></span>武汉</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>北京</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>上海</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>三亚</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>成都</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>厦门</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>广州</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>深圳</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>杭州</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>大连</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>桂林</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>重庆</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>青岛</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>苏州</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>南京</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>丽江</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>天津</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>昆明</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>张家界</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="link_text_item">
            <p>品质一日游</p>
            <div class="link_text_content">
              <ul class="clrfix">
                <li>
                  <a href="#nowhere"><span></span>上海迪士尼乐园</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>东方明珠</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>黄浦江游览(十六铺码头)</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>东方明珠码头·黄浦江游船</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>周庄</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>西塘古镇</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>千岛湖一日游</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>清河坊</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>云上草原七星谷</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="ticket_body_right_ctn">
          <a href="#nowhere">
            <div class="image_ctn">
              <img src="../../assets/ticket_dishini.jpg" />
            </div>
            <div class="content_border">
              <div class="title">上海迪士尼乐园</div>
              <div class="detail">每个女孩都有一场迪士尼梦</div>
              <div class="price">¥275</div>
            </div>
          </a>
          <a href="#nowhere">
            <div class="image_ctn">
              <img src="../../assets/ticket_wildAnimal.jpg" />
            </div>
            <div class="content_border">
              <div class="title">上海野生动物园</div>
              <div class="detail">全球动物聚集地 | 零距离和动物做朋友</div>
              <div class="price">¥120</div>
            </div>
          </a>
          <a href="#nowhere">
            <div class="image_ctn">
              <img src="../../assets/ticket_east.jpg" />
            </div>
            <div class="content_border">
              <div class="title">东方明珠</div>
              <div class="detail">感受云端漫步，品味上海老风情</div>
              <div class="price">¥54</div>
            </div>
          </a>
          <a href="#nowhere">
            <div class="image_ctn">
              <img src="../../assets/ticket_science.jpg" />
            </div>
            <div class="content_border">
              <div class="title">上海科技馆</div>
              <div class="detail">魔都科普教育殿堂 | 周末遛娃圣地</div>
              <div class="price">¥45</div>
            </div>
          </a>
          <a href="#nowhere">
            <div class="image_ctn">
              <img src="../../assets/ticket_yuyuan.jpg" />
            </div>
            <div class="content_border">
              <div class="title">豫园</div>
              <div class="detail">"奇秀甲于东南"、"东南名园冠"</div>
              <div class="price">¥39.9</div>
            </div>
          </a>
          <a href="#nowhere">
            <div class="image_ctn">
              <img src="../../assets/ticket_sea.jpg" />
            </div>
            <div class="content_border">
              <div class="title">上海海洋水族馆</div>
              <div class="detail">穿越世界，来一次终生难忘的海洋之旅</div>
              <div class="price">¥154</div>
            </div>
          </a>
          <a href="#nowhere">
            <div class="image_ctn">
              <img src="../../assets/ticket_animal.jpg" />
            </div>
            <div class="content_border">
              <div class="title">上海动物园</div>
              <div class="detail">大型城市动物园 | 620余种可爱动物</div>
              <div class="price">¥39.6</div>
            </div>
          </a>
          <a href="#nowhere">
            <div class="image_ctn">
              <img src="../../assets/ticket_nature.jpg" />
            </div>
            <div class="content_border">
              <div class="title">上海自然博物馆</div>
              <div class="detail">在这里领略物种的变迁</div>
              <div class="price">¥32.6</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ticketWrapper",
  data(){
    return{
      show1: true,
      show2: false,
    };
  },
  mehods:{
    enter1(){
      this.show1 = true;
      this.show2 = false;
    }
  }
};
</script>

<style>
.wrapper_ticket {
  font-family: tahoma, arial, "Hiragino Sans GB", simsun, sans-serif;
}

.ticket_head {
  height: 44px;
  border-bottom: 2px solid #eceef3;
}

.ticket_head_title {
  padding-block-start: 0px;
  padding-inline-start: 0px;
  margin-bottom: 15px;
}

.ticket_head_title li {
  list-style-type: none;
  float: left;
  height: 36px;
  padding: 7px 7px 0px 13px;
}

.ticket_head_title .active{
  border-bottom: 2px solid #00bcd4;
}

.ticket_head_title li .active{
  color:#00bcd4;
  font-weight: bold;
}

.ticket_head_title li a {
  text-decoration: none;
  color: black;
  display: inline-block;
  width: 100%;
  height: 100%;
  font: normal 16px Microsoft YaHei;
}

.ticket_head .ticket_head_more {
  float: right;
  margin-top: 10px;
}

.ticket_head .ticket_head_more a {
  text-decoration: none;
  color: #757575;
  font-family: "Simsun";
  font-size: 14px;
  letter-spacing: 0;
}

.ticket_head .ticket_head_more .rightIcon {
  margin-bottom: -5px;
}

.ticket_head .ticket_head_more a:hover {
  color: #00bcd4;
}

.ticket_body{
  position:relative;
  padding-block-start: 1px;
  padding-inline-start: 1px;
  border: 1px solid transparent;
}

.ticket_body_scenery_link {
  float: left;
  width: 227px;
  margin-bottom: -20px;
}

.ticket_body_scenery_link .link_text_item {
  margin-bottom: 14px;
}

.ticket_body_scenery_link .link_text_item p {
  font-size: 14px;
  color: #333;
  letter-spacing: 0;
  line-height: 35px;
  font-weight: 600;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.ticket_body_scenery_link .link_text_item .link_text_content {
  height: 129px;
}

.clrfix {
  display: block;
  padding-block-start: 1px;
  padding-inline-start: 1px;
  margin-top: -8px;
}

.clrfix li {
  list-style: none;
  display: inline-block;
  width: auto;
  height: 18px;
  margin-right: 14px;
  margin-bottom: 10px;
  white-space: nowrap;
}

.clrfix li a {
  text-decoration: none;
  display: inline-block;
  color: #666;
  font-size: 12px;
}

.clrfix li a:hover {
  color: #00bcd4;
}

.clrfix li a span {
  display: inline-block;
  width: 2px;
  height: 2px;
  border: 1px solid #d8d8d8;
  background: #d8d8d8;
  border-radius: 100%;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 2px;
  margin-right: 4px;
}

.ticket_body_right_ctn {
  display: inline-block;
  width: 967px;
  height: 570px;
}

.ticket_body_right_ctn a {
  display: inline-block;
  width: 227px;
  margin: 12px 0 0 9px;
  height: 270px;
  border: 1px solid #eee;
  text-decoration: none;
}

.ticket_body_right_ctn a:hover{
  border:1px solid #00bcd4;
}

.ticket_body_right_ctn a .image_ctn {
  width: 227px;
  height: 160px;
}

.ticket_body_right_ctn a .image_ctn img {
  width: 227px;
  height: 160px;
}

.ticket_body_right_ctn a .content_border {
  padding: 0 10px;
}

.ticket_body_right_ctn a .content_border .title {
  padding-top: 6px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  width: 100%;
  white-space: nowrap;
}

.ticket_body_right_ctn a .content_border .detail {
  height: 35px;
  font-size: 12px;
  color: #aaa;
}

.ticket_body_right_ctn a .content_border .price {
  font-size: 20px;
  font-family: arial;
  font-weight: bold;
  color: #ff7400;
}
</style>