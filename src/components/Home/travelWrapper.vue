<template>
  <div class="wrapper_travel">
    <div class="travel_head">
      <div class="title">
        <div class="titleName">旅行攻略</div>
        <div class="todo">
          <div class="createTravel">
            <a href="#nowhere">
              <i class="el-icon-edit-outline"></i>
              <span>创建行程</span>
            </a>
          </div>
          <span class="spacer"> | </span>
          <div class="publishNote">
            <a href="#nowhere">
              <i class="el-icon-document"></i>
              <span>发表游记</span>
            </a>
          </div>
        </div>
        <div class="more">
          <a href="#nowhere">
            <span>更多精彩攻略</span>
            <img src="../../assets/right2.png" class="right" />
          </a>
        </div>
      </div>
      <div class="tab">
        <ul class="travel_nav">
          <li v-on:mouseenter="enter1()">
            <a href="#nowhere" v-bind:class="show1 ? 'active' : 'unactive'">趣味亲子游</a>
          </li>
          <li v-on:mouseenter="enter2()">
            <a href="#nowhere" v-bind:class="show2 ? 'active' : 'unactive'">旅游也要拍大片</a>
          </li>
          <li v-on:mouseenter="enter3()">
            <a href="#nowhere" v-bind:class="show3 ? 'active' : 'unactive'">旅行邂逅文艺范儿</a>
          </li>
          <li v-on:mouseenter="enter4()">
            <a href="#nowhere" v-bind:class="show4 ? 'active' : 'unactive'">韵味古城游</a>
          </li>
          <li v-on:mouseenter="enter5()">
            <a href="#nowhere" v-bind:class="show5 ? 'active' : 'unactive'">畅游海岛好时光</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="travel_content" v-if="show1">
      <div class="travel_content_footer">
        <div class="inAndOut">
          <div class="title">国内热门目的地</div>
          <ul>
            <li>
              <a href="#nowhere">
                <span class="city">西安</span>
                <span class="purpose">探寻千年秦俑，长安留一梦</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">贵州</span>
                <span class="purpose">多彩贵州，解锁苗寨新玩法</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">青岛</span>
                <span class="purpose">蔚蓝海边，寻找夏天的风</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">上海</span>
                <span class="purpose">畅游海昌，蓝色海洋里的亲子乐园</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="inAndOut overseas">
          <div class="title">国外热门目的地</div>
          <ul>
            <li>
              <a href="#nowhere">
                <span class="city">冲绳</span>
                <span class="purpose">邂逅蓝色大海里的美丽传说</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">普吉岛</span>
                <span class="purpose">安达曼海上的明珠，爱在普吉</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">新加坡</span>
                <span class="purpose">狮城亲子游，花园城市别样精彩</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">长滩岛</span>
                <span class="purpose">细腻沙滩享受惬意好时光</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="travel_content_body">
        <div class="travel_body_left">
          <a href="#nowhere">
            <img src="../../assets/travel1.jpg" />
          </a>
        </div>
        <div class="travel_body_right">
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel2.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel3.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel4.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel5.jpg" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="travel_content" v-if="show2">
      <div class="travel_content_footer">
        <div class="inAndOut">
          <div class="title">国内热门目的地</div>
          <ul>
            <li>
              <a href="#nowhere">
                <span class="city">北京</span>
                <span class="purpose">一起去北京老胡同走一走</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">上海</span>
                <span class="purpose">诉说着上海滩的浮华旧梦</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">成都</span>
                <span class="purpose">蜀往今来，赐你一场人间烟火</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">安徽</span>
                <span class="purpose">一生痴绝处，无梦倒徽州</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="inAndOut overseas">
          <div class="title">国外热门目的地</div>
          <ul>
            <li>
              <a href="#nowhere">
                <span class="city">塞班岛</span>
                <span class="purpose">潜入海底看那一抹梦幻蓝</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">拉斯维加斯</span>
                <span class="purpose">沉醉于这个世界娱乐之都</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">摩洛哥</span>
                <span class="purpose">沙与海，摩洛哥的一千零一夜</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">新西兰</span>
                <span class="purpose">去新西兰，拥抱漫天萤火虫</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="travel_content_body">
        <div class="travel_body_left">
          <a href="#nowhere">
            <img src="../../assets/travel6.jpg" />
          </a>
        </div>
        <div class="travel_body_right">
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel7.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel8.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel9.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel10.jpg" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="travel_content" v-if="show3">
      <div class="travel_content_footer">
        <div class="inAndOut">
          <div class="title">国内热门目的地</div>
          <ul>
            <li>
              <a href="#nowhere">
                <span class="city">台北</span>
                <span class="purpose">台北物语，与你相遇好幸运</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">厦门</span>
                <span class="purpose">巡礼厦门，天高海阔水无垠</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">拉萨</span>
                <span class="purpose">日光之城，灵魂自由而虔诚</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">青海</span>
                <span class="purpose">西北偏北，青海湖边月正圆</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="inAndOut overseas">
          <div class="title">国外热门目的地</div>
          <ul>
            <li>
              <a href="#nowhere">
                <span class="city">镰仓</span>
                <span class="purpose">致敬青春，陪你到镰仓尽头</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">布拉格</span>
                <span class="purpose">揭开童话外衣，寻找中世纪的浪漫</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">马德里</span>
                <span class="purpose">西班牙狂想曲，共舞热情探戈</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">弗洛伦萨</span>
                <span class="purpose">迷人意大利，天堂翡冷翠</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="travel_content_body">
        <div class="travel_body_left">
          <a href="#nowhere">
            <img src="../../assets/travel11.jpg" />
          </a>
        </div>
        <div class="travel_body_right">
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel12.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel13.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel14.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel15.jpg" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="travel_content" v-if="show4">
      <div class="travel_content_footer">
        <div class="inAndOut">
          <div class="title">国内热门目的地</div>
          <ul>
            <li>
              <a href="#nowhere">
                <span class="city">阳朔</span>
                <span class="purpose">一品烟雨漓江的飘渺梦幻</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">大理</span>
                <span class="purpose">玉洱银沧，美得不经意</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">苏州</span>
                <span class="purpose">都挺好之以温柔水乡~~</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">嘉兴</span>
                <span class="purpose">春秋的水，唐宋的镇~</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="inAndOut overseas">
          <div class="title">国外热门目的地</div>
          <ul>
            <li>
              <a href="#nowhere">
                <span class="city">巴黎</span>
                <span class="purpose">爱在系列，最浪漫的巴黎</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">俄罗斯</span>
                <span class="purpose">没放晴的天，空旷的广场</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">伦敦</span>
                <span class="purpose">古典与现代在这里碰撞</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">罗马</span>
                <span class="purpose">重温赫本眼里的罗马假日</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="travel_content_body">
        <div class="travel_body_left">
          <a href="#nowhere">
            <img src="../../assets/travel16.jpg" />
          </a>
        </div>
        <div class="travel_body_right">
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel17.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel18.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel19.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel20.jpg" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="travel_content" v-if="show5">
      <div class="travel_content_footer">
        <div class="inAndOut">
          <div class="title">国内热门目的地</div>
          <ul>
            <li>
              <a href="#nowhere">
                <span class="city">三亚</span>
                <span class="purpose">这是我梦想中的南国之城</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">台湾</span>
                <span class="purpose">古朴和时尚元素的完美融合</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">厦门</span>
                <span class="purpose">充满小资情调的秀美鹭岛</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">大连</span>
                <span class="purpose">牵着ta的手，游玩在这海滨城市</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="inAndOut overseas">
          <div class="title">国外热门目的地</div>
          <ul>
            <li>
              <a href="#nowhere">
                <span class="city">冲绳</span>
                <span class="purpose">潜水爱好者风靡向往的冲绳之海</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">普吉岛</span>
                <span class="purpose">走进最美的海底生态世界</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">黄金海岸</span>
                <span class="purpose">别错过4月超盛大的冲浪者天堂</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">薄荷岛</span>
                <span class="purpose">蓝天白云细沙海浪还有巧克力山</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="travel_content_body">
        <div class="travel_body_left">
          <a href="#nowhere">
            <img src="../../assets/travel21.jpg" />
          </a>
        </div>
        <div class="travel_body_right">
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel22.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel23.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel24.jpg" />
            </a>
          </div>
          <div class="travel_body_right_item">
            <a href="#nowhere">
              <img src="../../assets/travel25.jpg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "travelWrapper",
  data() {
    return {
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
    };
  },
  methods: {
    enter1() {
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
    },
    enter2() {
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
    },
    enter3() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
      this.show4 = false;
      this.show5 = false;
    },
    enter4() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = true;
      this.show5 = false;
    },
    enter5() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = true;
    },
  },
};
</script>

<style>
.wrapper_travel {
  font-family: tahoma, arial, "Hiragino Sans GB", simsun, sans-serif;
  height: 452px;
}

.wrapper_travel .travel_head .title {
  position: relative;
  height: 45px;
  border-bottom: 2px solid #eceef3;
  margin-bottom: 15px;
}

.wrapper_travel .travel_head .title .titleName {
  float: left;
  font-size: 18px;
  color: #333;
  letter-spacing: 0;
  height: 40px;
  line-height: 40px;
  font-family: "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1";
  font-weight: 700;
  margin-left: 15px;
  margin-top: 5px;
}

.wrapper_travel .travel_head .title .todo {
  float: left !important;
  margin-left: 125px;
}

.wrapper_travel .travel_head .title .todo .spacer {
  display: inline-block;
  color: lightgray;
}

.wrapper_travel .travel_head .title .todo .createTravel {
  margin-top: 5px;
  padding: 0 20px;
  display: inline-block;
}

.wrapper_travel .travel_head .title .todo .createTravel a {
  color: #00d0d4;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 40px;
  font-weight: 600;
  text-decoration: none;
}

.wrapper_travel .travel_head .title .todo .publishNote {
  display: inline-block;
  padding: 0 20px;
}

.wrapper_travel .travel_head .title .todo .publishNote a {
  color: #00d0d4;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 40px;
  font-weight: 600;
  text-decoration: none;
}

.wrapper_travel .travel_head .title .more {
  float: right;
  margin-top: 5px;
  line-height: 40px;
}

.wrapper_travel .travel_head .title .more a {
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  color: #757575;
  letter-spacing: 0;
}

.wrapper_travel .travel_head .title .more a:hover {
  color: #00d0d4;
}

.wrapper_travel .travel_head .title .more a .right {
  display: inline-block;
  margin-bottom: -5px;
}

.wrapper_travel .travel_head .tab {
  margin-left: 243px;
}

.wrapper_travel .travel_head .tab ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.wrapper_travel .travel_head .tab ul li {
  float: left;
  margin-right: 18px;
}

.wrapper_travel .travel_head .tab ul li a {
  display: inline-block;
  text-decoration: none;
  padding: 0 10px;
  height: 28px;
  line-height: 28px;
  color: #666;
  font-size: 12px;
}

.wrapper_travel .travel_head .tab ul li .active {
  background: #00d0d4;
  color: #fff;
  border-radius: 5px;
}

.wrapper_travel .travel_content .travel_content_footer {
  width: 227px;
  height: 320px;
}

.wrapper_travel .travel_content .travel_content_footer .inAndOut {
  margin-right: 10px;
  width: 217px;
  height: 155px;
  float: none;
  display: inline-block;
  margin-top: -28px;
}

.wrapper_travel .travel_content .travel_content_footer .inAndOut .title {
  font-weight: 700;
  font-size: 14px;
  color: #333;
  letter-spacing: 0;
  line-height: 35px;
  float: left;
}

.wrapper_travel .travel_content .travel_content_footer .inAndOut ul {
  list-style: none;
  float: left;
  height: 120px;
  margin-top: -3px;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

.wrapper_travel .travel_content .travel_content_footer .inAndOut ul li {
  min-width: 213px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  overflow: hidden;
}

.wrapper_travel .travel_content .travel_content_footer .inAndOut ul li a {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-decoration: none;
  white-space: nowrap;
}

.wrapper_travel
  .travel_content
  .travel_content_footer
  .inAndOut
  ul
  li
  a
  .purpose:hover {
  color: #00d0d4;
}

.wrapper_travel .travel_content .travel_content_footer .inAndOut ul li a .city {
  color: #616161;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 30px;
  font-weight: 600;
  margin-right: 4px;
}

.wrapper_travel
  .travel_content
  .travel_content_footer
  .inAndOut
  ul
  li
  a
  .purpose {
  font-size: 12px;
  color: #9e9e9e;
  letter-spacing: 0;
  line-height: 30px;
}

.wrapper_travel .travel_content .travel_content_footer .overseas {
  margin-top: 7px;
}

.wrapper_travel .travel_content .travel_content_body {
  width: calc(100% - 227px);
  margin-left: 227px;
  margin-top: -284px;
  height: 332px;
}

.wrapper_travel .travel_content .travel_content_body .travel_body_left {
  position: relative;
  left: 0;
  top: 0;
  display: inline-block;
  width: 432px;
  margin-left: 16px;
  height: 332px;
}

.wrapper_travel .travel_content .travel_content_body .travel_body_left a {
  width: 100%;
  height: 100%;
  display: inline-block;
}

.wrapper_travel .travel_content .travel_content_body .travel_body_left a img {
  width: 100%;
  height: 100%;
  display: inline-block;
}

.wrapper_travel .travel_content .travel_content_body .travel_body_right {
  display: inline-block;
  width: calc(100% - 464px);
  height: 332px;
  position: relative;
}

.wrapper_travel .travel_content .travel_content_body .travel_body_right a img {
  width: 100%;
  height: 100%;
  display: inline-block;
}

.wrapper_travel
  .travel_content
  .travel_content_body
  .travel_body_right
  .travel_body_right_item {
  display: inline-block;
  width: 242px;
  height: 158px;
  margin-bottom: 15px;
  margin-left: 10px;
}
</style>