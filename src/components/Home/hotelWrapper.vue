<template>
  <div class="wrapper_hotel">
    <div class="hotel_head">
      <div class="hotel_head_more">
        <a href="#nowhere">
          <span>更多优惠酒店</span>
          <img src="../../assets/right2.png" />
        </a>
      </div>
      <div class="hotel_head_title">
        <ul>
          <li
            v-on:mouseenter="enter1()"
            v-bind:class="show1 ? 'active' : 'unactive'"
          >
            <a v-bind:class="show1 ? 'active2' : 'unactive'" href="#nowhere"
              >国内酒店必住榜</a
            >
          </li>
          <li
            v-on:mouseenter="enter2()"
            v-bind:class="show2 ? 'active' : 'unactive'"
          >
            <a v-bind:class="show2 ? 'active2' : 'unactive'" href="#nowhere"
              >国内酒店推荐</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="hotel_body">
      <div class="hotel_body_mustTry" v-if="show1">
        <ul>
          <li id="hotel_1">
            <a href="#nowhere">
              <div>热门推荐榜 ›</div>
            </a>
          </li>
          <li id="hotel_2">
            <a href="#nowhere">
              <div>试睡员推荐榜 ›</div>
            </a>
          </li>
          <li id="hotel_3">
            <a href="#nowhere">
              <div>必住主题酒店榜单 ›</div>
            </a>
          </li>
          <li id="hotel_4">
            <a href="#nowhere">
              <div>必住亲子酒店榜单 ›</div>
            </a>
          </li>
          <li id="hotel_5">
            <a href="#nowhere">
              <div>必住青旅酒店榜单 ›</div>
            </a>
          </li>
        </ul>
      </div>

      <div class="hotel_body_recommend" v-if="show2">
        <ul>
          <li id="hotel_6">
            <a href="#nowhere">
              <img />
              <div class="hotel_name">上海国际贵都大饭店</div>
              <div class="hotel_score">4.5分</div>
              <div class="hotel_remark">5458条评论</div>
              <div class="hotel_address">
                距市中心直线3.8公里·静安寺/南京西路
              </div>
              <div class="tagList">
                <div class="tagItem">亲子家庭</div>
                <div class="tagItem">亲子精选</div>
              </div>
              <div class="hotel_price">
                <div class="num">¥792</div>
                <div class="qi">起</div>
              </div>
            </a>
          </li>
          <li id="hotel_7">
            <a href="#nowhere">
              <img />
              <div class="hotel_name">上海迪宫酒店</div>
              <div class="hotel_score">4.8分</div>
              <div class="hotel_remark">3293条评论</div>
              <div class="hotel_address">迪士尼</div>
              <div class="tagList">
                <div class="tagItem">迪士尼周边</div>
              </div>
              <div class="hotel_price">
                <div class="num">¥392</div>
                <div class="qi">起</div>
              </div>
            </a>
          </li>
          <li id="hotel_8">
            <a href="#nowhere">
              <img />
              <div class="hotel_name">上海浦东文化东方酒店</div>
              <div class="hotel_score">4.7分</div>
              <div class="hotel_remark">3425条评论</div>
              <div class="hotel_address">距市中心直线2.7公里·陆家嘴</div>
              <div class="tagList">
                <div class="tagItem">外滩江景</div>
                <div class="tagItem">亲子精选</div>
              </div>
              <div class="hotel_price">
                <div class="num">¥2124</div>
                <div class="qi">起</div>
              </div>
            </a>
          </li>
          <li id="hotel_9">
            <a href="#nowhere">
              <img />
              <div class="hotel_name">格林豪泰酒店(上海火车站澳门路店)</div>
              <div class="hotel_score">4.7分</div>
              <div class="hotel_remark">149条评论</div>
              <div class="hotel_address">距市中心直线4.2公里·长寿路</div>
              <div class="tagList">
                <div class="tagItem">免费取消</div>
                <div class="tagItem">亲子家庭</div>
              </div>
              <div class="hotel_price">
                <div class="num">¥260</div>
                <div class="qi">起</div>
              </div>
            </a>
          </li>
          <li id="hotel_10">
            <a href="#nowhere">
              <img />
              <div class="hotel_name">上海田林宾馆</div>
              <div class="hotel_score">4.5分</div>
              <div class="hotel_remark">776条评论</div>
              <div class="hotel_address">
                距市中心直线9.0公里·光大会展中心/漕河泾地区
              </div>
              <div class="tagList">
                <div class="tagItem">亲子家庭</div>
                <div class="tagItem">亲子精选</div>
              </div>
              <div class="hotel_price">
                <div class="num">¥472</div>
                <div class="qi">起</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotelWrapper",
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
      this.show1 = false;
      this.show2 = true;
    },
  },
};
</script>

<style>
.wrapper_hotel {
  line-height: 1.5;
  font-family: tahoma, arial, "Hiragino Sans GB", simsun, sans-serif;
}

.hotel_head {
  width: 100%;
  height: 44px;
  border-bottom: 2px solid #eceef3;
  margin-bottom: 15px;
}

.hotel_head .hotel_head_more {
  float: right;
  margin-top: 5px;
}

.hotel_head .hotel_head_more a {
  text-decoration: none;
  color: #757575;
  font-family: "SimSun";
  font-size: 14px;
  letter-spacing: 0;
}

.hotel_head .hotel_head_more a:hover {
  color: #00bcd4;
}

.hotel_head .hotel_head_more a span {
  display: inline-block;
  height: 39px;
  line-height: 39px;
}

.hotel_head .hotel_head_more a img {
  margin-bottom: -5px;
}

.hotel_head .hotel_head_title ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.hotel_head .hotel_head_title ul li {
  float: left;
  margin-top: 2px;
  padding-right: 7px;
}

.hotel_head .hotel_head_title ul .active {
  padding-bottom: 9px;
  border-bottom: 2px solid #00bcd4;
}

.hotel_head .hotel_head_title ul li .active2 {
  color: #00bcd4;
  font-weight: bold;
}

.hotel_head .hotel_head_title ul li a {
  font: normal 16px Microsoft YaHei;
  padding: 0 0 0 13px;
  display: inline-block;
  height: 33px;
  line-height: 33px;
  text-decoration: none;
  color: #000;
}

.hotel_body .hotel_body_mustTry ul {
  margin: 0;
  padding: 0;
}

.hotel_body .hotel_body_mustTry ul #hotel_1 {
  background-image: url("../../assets/hotel_1.png");
}

.hotel_body .hotel_body_mustTry ul #hotel_2 {
  background-image: url("../../assets/hotel_2.png");
}

.hotel_body .hotel_body_mustTry ul #hotel_3 {
  background-image: url("../../assets/hotel_3.png");
}

.hotel_body .hotel_body_mustTry ul #hotel_4 {
  background-image: url("../../assets/hotel_4.png");
}
.hotel_body .hotel_body_mustTry ul #hotel_5 {
  background-image: url("../../assets/hotel_5.png");
  margin-right: 0;
}

.hotel_body .hotel_body_mustTry ul li {
  list-style: none;
  display: inline-block;
  width: 227px;
  height: 301px;
  margin-right: 11px;
  background-repeat: no-repeat;
  background-size: auto 100%;
}

.hotel_body .hotel_body_mustTry ul li a {
  display: inline-block;
  padding: 16px;
  width: calc(100% - 32px);
  height: 120px;
  text-decoration: none;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0, transparent 100%);
}

.hotel_body .hotel_body_mustTry ul li a div {
  color: #fff;
  font-weight: 700;
  font-size: 20px;
}

.hotel_body .hotel_body_recommend ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.hotel_body .hotel_body_recommend ul li {
  display: inline-block;
  width: 227px;
  height: 301px;
  padding: 0;
  margin-right: 11px;
  background: #f7f7f7;
  background-position: center bottom;
  background-size: auto 100%;
}

.hotel_body .hotel_body_recommend ul #hotel_6 a img {
  background-image: url("../../assets/hotel_6.jpg");
}

.hotel_body .hotel_body_recommend ul #hotel_7 a img {
  background-image: url("../../assets/hotel_7.jpg");
}

.hotel_body .hotel_body_recommend ul #hotel_8 a img {
  background-image: url("../../assets/hotel_8.jpg");
}

.hotel_body .hotel_body_recommend ul #hotel_9 a img {
  background-image: url("../../assets/hotel_9.jpg");
}

.hotel_body .hotel_body_recommend ul #hotel_10 a img {
  background-image: url("../../assets/hotel_10.jpg");
}

.hotel_body .hotel_body_recommend ul #hotel_10 {
  margin-right: 0px;
}

.hotel_body .hotel_body_recommend ul li a {
  display: inline-block;
  width: 100%;
  height: 120px;
  text-decoration: none;
}

.hotel_body .hotel_body_recommend ul li a img {
  width: 227px;
  height: 170px;
  background-size: auto 100%;
}

.hotel_body .hotel_body_recommend ul li a .hotel_name {
  width: 203px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
  color: #333;
  font-weight: 500;
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 6px;
}

.hotel_body .hotel_body_recommend ul li a .hotel_score {
  display: inline-block;
  color: #00d0d4;
  font-size: 14px;
  margin-left: 12px;
  margin-right: 4px;
}

.hotel_body .hotel_body_recommend ul li a .hotel_remark {
  display: inline-block;
  color: #9e9e9e;
  font-weight: 500;
  font-size: 12px;
}

.hotel_body .hotel_body_recommend ul li a .hotel_address {
  width: 203px;
  margin: 0 auto;
  color: #9e9e9e;
  font-size: 12px;
  margin-top: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.hotel_body .hotel_body_recommend ul li a .tagList {
  display: inline-block;
  margin-top: 7px;
  margin-left: 12px;
  width: 135px;
  height: 22px;
  overflow: hidden;
}

.hotel_body .hotel_body_recommend ul li a .tagList .tagItem {
  display: inline-block;
  height: 15px;
  border-radius: 2px;
  border: 1px solid #00d0d4;
  color: #00d0d4;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  line-height: 15px;
  padding: 0 4px;
}

.hotel_body .hotel_body_recommend ul li a .hotel_price {
  float: right;
  margin-right: 12px;
  margin-top: 10px;
}

.hotel_body .hotel_body_recommend ul li a .hotel_price .num {
  display: inline-block;
  color: #ff7400;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  font-family: arial;
}

.hotel_body .hotel_body_recommend ul li a .hotel_price .qi {
  display: inline-block;
  color: #ff7400;
  font-weight: 400;
  font-size: 12px;
  margin-left: -5px;
}
</style>