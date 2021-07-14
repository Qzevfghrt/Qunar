<template>
  <div class="wrapper_vacation">
    <div class="vacation_head">
      <ul class="vacation_head_title">
        <li
          v-on:mouseenter="enter1()"
          v-bind:class="show1 ? 'active' : 'unactive'"
        >
          <a href="#nowhere" v-bind:class="show1 ? 'active' : 'unactive'"
            >当季热门度假</a
          >
        </li>
        <li
          v-on:mouseenter="enter2()"
          v-bind:class="show2 ? 'active' : 'unactive'"
        >
          <a href="#nowhere" v-bind:class="show2 ? 'active' : 'unactive'"
            >今日特惠度假</a
          >
        </li>
      </ul>

      <div class="vacation_head_more">
        <a href="#nowhere">
          <span>更多特惠度假</span>
          <img src="../../assets/right2.png" class="rightIcon" />
        </a>
      </div>
    </div>

    <div class="vacation_body">
      <div class="vacation_body_scenery" v-if="show1">
        <div class="vacation_body_scenery_link">
          <div class="link_text_item">
            <p>周边游</p>
            <div class="link_text_content">
              <ul class="clrfix">
                <li>
                  <a href="#nowhere"><span></span>普陀山</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>杭州</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>嵊泗列岛</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>上海迪士尼乐园</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>松江雪浪胡温泉</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>乌镇</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>上海浦江源温泉农庄</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="link_text_item">
            <p>国内游</p>
            <div class="link_text_content">
              <ul class="clrfix">
                <li>
                  <a href="#nowhere"><span></span>三亚</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>丽江</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>张家界</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>呼伦贝尔</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>西宁</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>成都</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>西双版纳</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>桂林</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>青海湖</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="link_text_item">
            <p>出境游</p>
            <div class="link_text_content">
              <ul class="clrfix">
                <li>
                  <a href="#nowhere"><span></span>日本</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>泰国</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>普吉岛</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>巴厘岛</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>东京</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>希腊</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>意大利</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>马尔代夫</a>
                </li>
                <li>
                  <a href="#nowhere"><span></span>迪拜</a>
                </li>
              </ul>
            </div>

            <div class="link_text_item">
              <p>签证</p>
              <div class="link_text_content">
                <ul class="clrfix">
                  <li>
                    <a href="#nowhere"><span></span>日本</a>
                  </li>
                  <li>
                    <a href="#nowhere"><span></span>泰国</a>
                  </li>
                  <li>
                    <a href="#nowhere"><span></span>韩国</a>
                  </li>
                  <li>
                    <a href="#nowhere"><span></span>美国</a>
                  </li>
                  <li>
                    <a href="#nowhere"><span></span>澳大利亚</a>
                  </li>
                  <li>
                    <a href="#nowhere"><span></span>南非</a>
                  </li>
                  <li>
                    <a href="#nowhere"><span></span>台湾</a>
                  </li>
                  <li>
                    <a href="#nowhere"><span></span>新加坡</a>
                  </li>
                  <li>
                    <a href="#nowhere"><span></span>马来西亚</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="vacation_body_right_ctn">
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
        </div>
      </div>

      <div class="vacation_body_onsale" v-if="show2">
        <div class="onsale_left">
          <a href="#nowhere">
            <div class="onsale_left_img">
              <img src="../../assets/vacation_1.jpg" />
            </div>
            <div class="onsale_left_words">
              <p class="onsale_left_words_title">上海-张家界，5天跟团游</p>
              <div class="onsale_left_words_content">
                12人小团🔥纯玩五星碧桂园别墅|张家界森林公园+天门山+凤凰五日+全景航拍+机票
              </div>
              <div class="onsale_left_words_price">
                <span class="number">¥2686</span>
                <span class="qi">起</span>
              </div>
            </div>
          </a>
        </div>
        <div class="onsale_left">
          <a href="#nowhere">
            <div class="onsale_left_img">
              <img src="../../assets/vacation_2.jpg" />
            </div>
            <div class="onsale_left_words">
              <p class="onsale_left_words_title">上海-丽江，8天跟团游</p>
              <div class="onsale_left_words_content">
                立减288|大理丽江香格里拉泸沽湖奢华游雪山登顶私人游艇网红旅拍
                儿童0团费
              </div>
              <div class="onsale_left_words_price">
                <span class="number">¥1999</span>
                <span class="qi">起</span>
              </div>
            </div>
          </a>
        </div>
        <div class="onsale_right">
          <a href="#nowhere">
            <div class="onsale_right_top">
              <img src="../../assets/vacation_3.jpg" />
            </div>
            <div class="onsale_right_bottom">
              <p class="title">上海-嘉兴 2天跟团游</p>
              <p class="content">
                门票全含//纯玩不进店//夜游乌镇+杭州船游西湖+登雷峰塔+宋城千古情2日游
              </p>
              <div class="price">
                <span class="number">¥698</span>
                <span class="qi">起</span>
              </div>
            </div>
          </a>
        </div>
        <div class="onsale_right">
          <a href="#nowhere">
            <div class="onsale_right_top">
              <img src="../../assets/vacation_3.jpg" />
            </div>
            <div class="onsale_right_bottom">
              <p class="title">上海-杭州 2天跟团游</p>
              <p class="content">
                纯玩+门票全含//杭州西湖+登雷峰塔+宋城含演出+千岛湖风光+森林氧吧2日游
              </p>
              <div class="price">
                <span class="number">¥718</span>
                <span class="qi">起</span>
              </div>
            </div>
          </a>
        </div>
        <div class="onsale_right">
          <a href="#nowhere">
            <div class="onsale_right_top">
              <img src="../../assets/vacation_4.jpg" />
            </div>
            <div class="onsale_right_bottom">
              <p class="title">上海-无锡 2天跟团游</p>
              <p class="content">
                大门票全含//纯玩0购物//苏州拙政园+寒山寺+无锡影视城+太湖2日游
              </p>
              <div class="price">
                <span class="number">¥550</span>
                <span class="qi">起</span>
              </div>
            </div>
          </a>
        </div>

        <div class="onsale_right">
          <a href="#nowhere">
            <div class="onsale_right_top">
              <img src="../../assets/vacation_4.jpg" />
            </div>
            <div class="onsale_right_bottom">
              <p class="title">上海-无锡 2天跟团游</p>
              <p class="content">
                大门票全含//纯玩0购物//苏州拙政园+寒山寺+无锡影视城+太湖2日游
              </p>
              <div class="price">
                <span class="number">¥550</span>
                <span class="qi">起</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "vacationWrapper",
  data() {
    return {
      show1: true,
      show2: false,
    };
  },
  methods: {
    enter1() {
      this.show1 = true;
      this.show2 = false;
    },
    enter2() {
      this.show2 = true;
      this.show1 = false;
    },
  },
};
</script>

<style>
.wrapper_vacation {
  font-family: tahoma, arial, "Hiragino Sans GB", simsun, sans-serif;
  height: 623px;
}


.vacation_head {
  height: 44px;
  border-bottom: 2px solid #eceef3;
  width: calc(100% - 244px);
  margin-bottom: 10px;
}

.vacation_head_title {
  padding-block-start: 0px;
  padding-inline-start: 0px;
  margin-bottom: 15px;
}

.vacation_head_title li {
  list-style-type: none;
  float: left;
  height: 36px;
  padding: 7px 7px 0px 13px;
}

.vacation_head_title .active {
  border-bottom: 2px solid #00bcd4;
}

.vacation_head_title li .active {
  color: #00bcd4;
  font-weight: bold;
}

.vacation_head_title li a {
  text-decoration: none;
  color: black;
  display: inline-block;
  width: 100%;
  height: 100%;
  font: normal 16px Microsoft YaHei;
}

.vacation_head .vacation_head_more {
  float: right;
  margin-top: 10px;
}

.vacation_head .vacation_head_more a {
  text-decoration: none;
  color: #757575;
  font-family: "Simsun";
  font-size: 14px;
  letter-spacing: 0;
}

.vacation_head .vacation_head_more .rightIcon {
  margin-bottom: -5px;
}

.vacation_head .vacation_head_more a:hover {
  color: #00bcd4;
}

.vacation_body {
  position: relative;
  padding-block-start: 1px;
  padding-inline-start: 1px;
  border: 1px solid transparent;
  height: 564px;
}

.vacation_body_scenery_link {
  float: left;
  width: 227px;
  margin-bottom: -20px;
}

.vacation_body_scenery_link .link_text_item {
  margin: 0;
  padding: 0;
  height: 134px;
}

.vacation_body_scenery_link .link_text_item p {
  font-size: 14px;
  color: #333;
  letter-spacing: 0;
  line-height: 35px;
  font-weight: 600;
  display: block;
  margin-top: 5px;
}

.vacation_body_scenery_link .link_text_item .link_text_content {
  height: 103px;
}

.clrfix {
  display: inline-block;
  height: 75px;
  width: 237px;
}

.clrfix li {
  display: inline-block;
  width: auto;
  height: 18px;
  margin-right: 14px;
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

.vacation_body_right_ctn {
  display: inline-block;
  width: calc(100% - 244px);
  height: 570px;
  margin-top: -5px;
}

.vacation_body_right_ctn a {
  display: inline-block;
  width: 227px;
  margin: 12px 0 0 9px;
  height: 270px;
  border: 1px solid #eee;
  text-decoration: none;
}

.vacation_body_right_ctn a:hover {
  border: 1px solid #00bcd4;
}

.vacation_body_right_ctn a .image_ctn {
  width: 227px;
  height: 160px;
}

.vacation_body_right_ctn a .image_ctn img {
  width: 227px;
  height: 160px;
}

.vacation_body_right_ctn a .content_border {
  padding: 0 10px;
}

.vacation_body_right_ctn a .content_border .title {
  padding-top: 6px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  width: 100%;
  white-space: nowrap;
}

.vacation_body_right_ctn a .content_border .detail {
  height: 35px;
  font-size: 12px;
  color: #aaa;
}

.vacation_body_right_ctn a .content_border .price {
  font-size: 20px;
  font-family: arial;
  font-weight: bold;
  color: #ff7400;
}

.vacation_body_onsale .onsale_left {
  width: 468px;
  display: inline-block;
  margin: 0 9px 16px 0;
  border: 1px solid #eee;
  height: 264px;
}

.vacation_body_onsale .onsale_left a {
  width: 100%;
  height: 100%;
}

.vacation_body_onsale .onsale_left a .onsale_left_img {
  width: 290px;
  height: 100%;
  overflow: hidden;
  float: left;
}

.vacation_body_onsale .onsale_left a .onsale_left_img img {
  width: 100%;
  height: 100%;
}

.vacation_body_onsale .onsale_left a .onsale_left_words {
  width: 178px;
  height: 264px;
  float: left;
  background: rgba(0, 0, 0, 0.8);
}

.vacation_body_onsale .onsale_left a .onsale_left_words p {
  padding: 10px;
  color: #fff;
  line-height: 20px;
  font-size: 16px;
  letter-spacing: 0;
  font-family: arial;
}

.vacation_body_onsale
  .onsale_left
  a
  .onsale_left_words
  .onsale_left_words_content {
  padding: 12px;
  height: 90px;
  overflow: hidden;
  font-size: 12px;
  color: #fff;
  letter-spacing: 0;
}

.vacation_body_onsale
  .onsale_left
  a
  .onsale_left_words
  .onsale_left_words_price {
  margin-left: 14px;
}

.vacation_body_onsale
  .onsale_left
  a
  .onsale_left_words
  .onsale_left_words_price
  .number {
  color: #ff7400;
  font: bold 20px arial, sans-serif;
}

.vacation_body_onsale
  .onsale_left
  a
  .onsale_left_words
  .onsale_left_words_price
  .qi {
  color: #ff7400;
  line-height: 25px;
  margin-left: 4px;
}

.vacation_body_onsale .onsale_right {
  display: inline-block;
  width: 227px;
  height: 266px;
  border: 1px solid #eee;
  margin: 0 8px 16px 0;
}

.vacation_body_onsale .onsale_right a {
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.vacation_body_onsale .onsale_right a img {
  width: 100%;
  height: 100%;
}

.onsale_right_top {
  height: 170px;
}

.onsale_right_bottom .title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  margin-left: 10px;
  line-height: 16px;
  letter-spacing: 2px;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
}

.onsale_right_bottom .content {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 14px;
  line-height: 14px;
  color: #999;
  font-size: 12px;
  margin: 7px 10px 8px 10px;
}

.onsale_right_bottom .price {
  height: 18px;
  margin: 7px 10px 0 10px;
}

.onsale_right_bottom .price .number {
  float: left;
  color: #ff7400;
  font: bold 20px arial, sans-serif;
}

.onsale_right_bottom .price .qi {
  color: #ff7400;
  font-size: 12px;
  font-weight: 400;
}
</style>