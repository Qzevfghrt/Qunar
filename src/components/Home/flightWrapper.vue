<template>
  <div class="wrapper_flight">
    <div class="flight_head">
      <ul class="flight_head_title">
        <li
          v-on:mouseenter="enter1()"
          v-bind:class="show1 ? 'active' : 'unactive'"
        >
          <a href="#nowhere" v-bind:class="show1 ? 'active' : 'unactive'">国内低价机票</a>
        </li>
        <li
          v-on:mouseenter="enter2()"
          v-bind:class="show2 ? 'active' : 'unactive'"
        >
          <a href="#nowhere" v-bind:class="show2 ? 'active' : 'unactive'">国际·港澳台低价航线(单程)</a>
        </li>
        <li
          v-on:mouseenter="enter3()"
          v-bind:class="show3 ? 'active' : 'unactive'"
        >
          <a href="#nowhere" v-bind:class="show3 ? 'active' : 'unactive'">国际·港澳台低价(往返)</a>
        </li>
      </ul>
      <div class="flight_head_more">
        <a href="#nowhere">
          <span>更多低价机票</span>
          <img src="../../assets/right2.png" class="rightIcon">
        </a>
      </div>
    </div>
    <div class="flight_body">
      <div class="flight_domestic" v-if="show1">
        <ul class="flight_domestic_ul">
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>上海</span>
                <img src="../../assets/right.png" />
                <span>昆明</span>
              </div>
              <div class="flight_date">10月12日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">318</span>
                <span class="flight_price_word">起</span>
                <span class="flight_price_discount">1.3折</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>上海</span>
                <img src="../../assets/right.png" />
                <span>北京</span>
              </div>
              <div class="flight_date">6月6日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">294</span>
                <span class="flight_price_word">起</span>
                <span class="flight_price_discount">1.7折</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>上海</span>
                <img src="../../assets/right.png" />
                <span>成都</span>
              </div>
              <div class="flight_date">5月30日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">480</span>
                <span class="flight_price_word">起</span>
                <span class="flight_price_discount">1.9折</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>上海</span>
                <img src="../../assets/right.png" />
                <span>西安</span>
              </div>
              <div class="flight_date">6月2日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">370</span>
                <span class="flight_price_word">起</span>
                <span class="flight_price_discount">2.7折</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li class="noMarginRight">
            <a href="#nowhere">
              <div class="flight_place">
                <span>上海</span>
                <img src="../../assets/right.png" />
                <span>重庆</span>
              </div>
              <div class="flight_date">10月20日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">318</span>
                <span class="flight_price_word">起</span>
                <span class="flight_price_discount">1.6折</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>上海</span>
                <img src="../../assets/right.png" />
                <span>深圳</span>
              </div>
              <div class="flight_date">6月13日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">300</span>
                <span class="flight_price_word">起</span>
                <span class="flight_price_discount">1.7折</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>上海</span>
                <img src="../../assets/right.png" />
                <span>广州</span>
              </div>
              <div class="flight_date">10月12日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">288</span>
                <span class="flight_price_word">起</span>
                <span class="flight_price_discount">1.5折</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>上海</span>
                <img src="../../assets/right.png" />
                <span>海口</span>
              </div>
              <div class="flight_date">5月31日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">506</span>
                <span class="flight_price_word">起</span>
                <span class="flight_price_discount">2.7折</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>上海</span>
                <img src="../../assets/right.png" />
                <span>郑州</span>
              </div>
              <div class="flight_date">10月20日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">218</span>
                <span class="flight_price_word">起</span>
                <span class="flight_price_discount">1.6折</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li class="noMarginRight">
            <a href="#nowhere">
              <div class="flight_place">
                <span>上海</span>
                <img src="../../assets/right.png" />
                <span>厦门</span>
              </div>
              <div class="flight_date">10月11日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">348</span>
                <span class="flight_price_word">起</span>
                <span class="flight_price_discount">2折</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
        </ul>
      </div>

      <div class="flight_inter_ow" v-if="show2">
        <ul class="flight_domestic_ul">
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>澳门</span>
              </div>
              <div class="flight_date">5月30日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">640</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>香港</span>
              </div>
              <div class="flight_date">9月5日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">1031</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>台北</span>
              </div>
              <div class="flight_date">6月20日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">1198</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>首尔</span>
              </div>
              <div class="flight_date">6月4日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">1236</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li class="noMarginRight">
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>曼谷</span>
              </div>
              <div class="flight_date">11月15日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">1253</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>吉隆坡</span>
              </div>
              <div class="flight_date">6月28日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">1371</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>马尼拉</span>
              </div>
              <div class="flight_date">8月21日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">1401</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>金边</span>
              </div>
              <div class="flight_date">6月20日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">1706</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>新加坡</span>
              </div>
              <div class="flight_date">10月6日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">1812</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li class="noMarginRight">
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>釜山</span>
              </div>
              <div class="flight_date">6月30日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">1917</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
        </ul>
      </div>

      <div class="flight_inter_rt" v-if="show3">
        <ul class="flight_domestic_ul">
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>澳门</span>
              </div>
              <div class="flight_date">6月21日 -- 6月23日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">1080</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>香港</span>
              </div>
              <div class="flight_date">8月1日 -- 8月7日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">1938</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>吉普</span>
              </div>
              <div class="flight_date">8月6日 -- 8月15日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">3434</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>新加坡</span>
              </div>
              <div class="flight_date">8月15日 -- 8月28日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">3558</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li class="noMarginRight">
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>台北</span>
              </div>
              <div class="flight_date">6月4日 -- 6月8日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">3842</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>东京</span>
              </div>
              <div class="flight_date">8月13日 -- 8月16日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">4216</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>雅加达</span>
              </div>
              <div class="flight_date">6月11日 -- 8月23日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">4292</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>高雄</span>
              </div>
              <div class="flight_date">10月1日 -- 10月7日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">4598</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li>
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>巴厘岛</span>
              </div>
              <div class="flight_date">1月30日 -- 2月4日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">4698</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
          <li class="noMarginRight">
            <a href="#nowhere">
              <div class="flight_place">
                <span>北京</span>
                <img src="../../assets/right.png" />
                <span>大阪</span>
              </div>
              <div class="flight_date">1月30日 -- 2月4日</div>
              <div class="flight_price">
                <img src="../../assets/rmb.png" />
                <span class="flight_price_count">4946</span>
                <span class="flight_price_word">起</span>
              </div>
              <div class="flight_btn">立抢</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flightwrapper",
  data() {
    return {
      show1: true,
      show2: false,
      show3: false,
    };
  },
  methods: {
    enter1() {
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
    },
    enter2() {
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
    },
    enter3() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
    },
  },
};
</script>

<style>
.flight_head {
  height: 44px;
  border-bottom: 2px solid #eceef3;
}

.flight_head_title {
  padding-block-start: 0px;
  padding-inline-start: 0px;
}

.flight_head_title .active {
  padding-bottom: 1px;
  border-bottom: 2px solid #00bcd4;
}

.flight_head_title li .active{
  color:#00bcd4;
  font-weight: bold;
}

.flight_head_title li {
  list-style-type: none;
  float: left;
  height: 36px;
  padding: 7px 8px 0px 11px;
}

.flight_head_title li a {
  text-decoration: none;
  color: black;
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 16px;
}


.flight_head .flight_head_more {
  float: right;
  margin-top: 10px;
}

.flight_head .flight_head_more a {
  text-decoration: none;
  color: #757575;
  font-family: "Simsun";
  font-size: 14px;
  letter-spacing: 0;
}

.flight_head .flight_head_more .rightIcon{
  margin-bottom: -5px;
}

.flight_head .flight_head_more a:hover {
  color: #00bcd4;
}

.flight_domestic_ul {
  list-style: none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}

.flight_domestic_ul li {
  display: inline-block;
  width: 211px;
  height: 105px;
  background: #f7f7f7;
  margin-right: 11px;
  margin-bottom: 16px;
  padding-left: 16px;
}

.noMarginRight {
  margin-right: 0 !important;
}

.flight_domestic_ul li a {
  text-decoration: none;
}

.flight_domestic_ul li a .flight_place {
  height: 20px;
  margin-top: 16px;
}

.flight_domestic_ul li a .flight_place span {
  color: #000;
  font-weight: 500;
  font-size: 14px;
}

.flight_domestic_ul li a .flight_date {
  color: #9e9e9e;
  font-weight: 400;
  font-size: 12px;
  margin-top: 4px;
  margin-bottom: 10px;
}

.flight_domestic_ul li a .flight_price {
  display: inline-block;
}

.flight_domestic_ul li a .flight_price img{
  margin-bottom: -3px;
}

.flight_domestic_ul li a .flight_price .flight_price_count {
  color: #ff7400;
  font-weight: 700;
  font-size: 20px;
  height: 30px;
  font-family: arial;
  margin-left: -5px;
}

.flight_domestic_ul li a .flight_price .flight_price_word {
  color: #ff7400;
  font-weight: 400;
  font-size: 12px;
  margin-left: 2px;
  line-height: 35px;
}

.flight_domestic_ul li a .flight_price .flight_price_discount {
  display: inline-block;
  width: 30px;
  color: #9e9e9e;
  font-weight: 400;
  font-size: 12px;
  line-height: 35px;
}

.flight_domestic_ul li a .flight_btn {
  width: 52px;
  height: 24px;
  border-radius: 4px;
  background: linear-gradient(to bottom, #fac928 0, #ff9800 100%);
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  float: right;
  margin-right: 16px;
}
</style>