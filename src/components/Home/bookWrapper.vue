<template>
  <div class="wrapper_book">
    <div class="book_head">
      <div class="book_head_name">骆驼书</div>
      <div class="book_head_more">
        <a href="#nowhere">
          <span>更多骆驼书</span>
          <img src="../../assets/right2.png" class="right" />
        </a>
      </div>
      <ul class="book_head_nav">
        <li v-on:mouseenter="enter1()">
          <a href="#nowhere" v-bind:class="bookShow1 ? 'active' : 'unactive'">专题</a>
        </li>
        <li v-on:mouseenter="enter2()">
          <a href="#nowhere" v-bind:class="bookShow2 ? 'active' : 'unactive'">亚洲</a>
        </li>
        <li v-on:mouseenter="enter3()">
          <a href="#nowhere" v-bind:class="bookShow3 ? 'active' : 'unactive'">欧洲</a>
        </li>
        <li v-on:mouseenter="enter4()">
          <a href="#nowhere" v-bind:class="bookShow4 ? 'active' : 'unactive'">北美洲</a>
        </li>
        <li v-on:mouseenter="enter5()">
          <a href="#nowhere" v-bind:class="bookShow5 ? 'active' : 'unactive'">大洋洲</a>
        </li>
      </ul>
    </div>
    <div class="book_body">
      <div class="book_body_left">
        <div class="book_body_left_first">
          <div class="title">热门出境骆驼书</div>
          <ul>
            <li>
              <a href="#nowhere">
                <span class="city">日本花见</span>
                <span class="purpose">灿烂春光，赏尽樱吹雪</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">素可秦</span>
                <span class="purpose">承载泰国寺庙文化的王朝古都</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">芭堤雅</span>
                <span class="purpose">风光旖旎的东方夏威夷</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">胡志明市</span>
                <span class="purpose">湄公河上的风情浪漫的明珠</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="book_body_left_first">
          <div class="title">热门海岛骆驼书</div>
          <ul>
            <li>
              <a href="#nowhere">
                <span class="city">甲米</span>
                <span class="purpose">诗情画意、宛如天堂秘境的热带半岛</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">巴厘岛</span>
                <span class="purpose">极具人文热带风情的度假天堂</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">苏梅岛</span>
                <span class="purpose">拒绝好莱坞选景荣耀的纯天然海岛</span>
              </a>
            </li>
            <li>
              <a href="#nowhere">
                <span class="city">毛里求斯</span>
                <span class="purpose">印度洋的珍珠，欧洲的后花园</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="book_body_right">
        <div class="book_ctn" v-if="bookShow1">
          <div class="book_img">
            <img src="../../assets/book1.jpg" />
            <img src="../../assets/book2.jpg" />
            <img src="../../assets/book3.jpg" />
            <img src="../../assets/book4.jpg" />
          </div>
        </div>
        <div class="book_ctn" v-if="bookShow2">
          <div class="book_img">
            <img src="../../assets/book5.jpg" />
            <img src="../../assets/book6.jpg" />
            <img src="../../assets/book7.jpg" />
            <img src="../../assets/book8.jpg" />
          </div>
        </div>
        <div class="book_ctn" v-if="bookShow3">
          <div class="book_img">
            <img src="../../assets/book9.jpg" />
            <img src="../../assets/book10.jpg" />
            <img src="../../assets/book11.jpg" />
            <img src="../../assets/book12.jpg" />
          </div>
        </div>
        <div class="book_ctn" v-if="bookShow4">
          <div class="book_img">
            <img src="../../assets/book13.jpg" />
            <img src="../../assets/book14.jpg" />
            <img src="../../assets/book15.jpg" />
            <img src="../../assets/book16.jpg" />
          </div>
        </div>
        <div class="book_ctn" v-if="bookShow5">
          <div class="book_img">
            <img src="../../assets/book17.jpg" />
            <img src="../../assets/book18.jpg" />
            <img src="../../assets/book19.jpg" />
            <img src="../../assets/book20.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookWrapper",
  data(){
    return{
      bookShow1: true,
      bookShow2: false,
      bookShow3: false,
      bookShow4: false,
      bookShow5: false,
    };
  },
  methods:{
    enter1() {
      this.bookShow1 = true;
      this.bookShow2 = false;
      this.bookShow3 = false;
      this.bookShow4 = false;
      this.bookShow5 = false;
    },
    enter2() {
      this.bookShow1 = false;
      this.bookShow2 = true;
      this.bookShow3 = false;
      this.bookShow4 = false;
      this.bookShow5 = false;
    },
    enter3() {
      this.bookShow1 = false;
      this.bookShow2 = false;
      this.bookShow3 = true;
      this.bookShow4 = false;
      this.bookShow5 = false;
    },
    enter4() {
      this.bookShow1 = false;
      this.bookShow2 = false;
      this.bookShow3 = false;
      this.bookShow4 = true;
      this.bookShow5 = false;
    },
    enter5() {
      this.bookShow1 = false;
      this.bookShow2 = false;
      this.bookShow3 = false;
      this.bookShow4 = false;
      this.bookShow5 = true;
    },
  }
};
</script>

<style>
.wrapper_book {
  font-family: tahoma, arial, "Hiragino Sans GB", simsun, sans-serif;
  height: 452px;
}

.wrapper_book .book_head {
  height: 45px;
  margin-bottom: 15px;
  border-bottom: 2px solid #eceef3;
}

.wrapper_book .book_head .book_head_name {
  font-size: 18px;
  color: #333;
  letter-spacing: 0;
  height: 45px;
  line-height: 40px;
  font-family: "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1";
  font-weight: 700;
  margin-left: 15px;
  margin-top: 5px;
  display: inline-block;
}

.wrapper_book .book_head .book_head_more {
  float: right;
  line-height: 40px;
  margin-top: 5px;
}

.wrapper_book .book_head .book_head_more a {
  font-size: 14px;
  color: #757575;
  letter-spacing: 0;
  line-height: 14px;
  display: inline-block;
  width: 95px;
  text-decoration: none;
  font-family: tahoma, arial, "Hiragino Sans GB", simsun, sans-serif;
}

.wrapper_book .book_head .book_head_more a:hover {
  color: #00d0d4;
}

.wrapper_book .book_head .book_head_more a .right {
  display: inline-block;
  margin-bottom: -5px;
}

.wrapper_book .book_head .book_head_nav {
  list-style: none;
  margin-left: 243px;
  width: 378px;
  padding-inline-start: 0;
  margin-top: -34px;
}

.wrapper_book .book_head .book_head_nav li {
  display: inline-block;
  margin-right: 18px;
  line-height: 28px;
}

.wrapper_book .book_head .book_head_nav li a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  display: inline-block;
  padding: 0px 10px 0px 10px;
  font-family: tahoma, arial, "Hiragino Sans GB", simsun, sans-serif;
}

.wrapper_book .book_head .book_head_nav li .active{
  color: #0cccde;
  border-bottom: 2px solid #0cccde;
}

.wrapper_book .book_body {
  display: inline-block;
  width: 1200px;
}

.wrapper_book .book_body .book_body_left {
  width: 227px;
  height: 321px;
  float: left;
}

.wrapper_book .book_body .book_body_left .book_body_left_first {
  margin-right: 10px;
  width: 217px;
  height: 155px;
  float: none;
  display: inline-block;
  margin-bottom: 11px;
}

.wrapper_book .book_body .book_body_left .book_body_left_first .title {
  font-weight: 700;
  font-size: 15px;
  color: #333;
  letter-spacing: 0;
  line-height: 35px;
  float: left;
}

.wrapper_book .book_body .book_body_left .book_body_left_first ul {
  list-style: none;
  float: left;
  height: 120px;
  margin-top: -3px;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

.wrapper_book .book_body .book_body_left .book_body_left_first ul li {
  min-width: 213px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  overflow: hidden;
}

.wrapper_book .book_body .book_body_left .book_body_left_first ul li a {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-decoration: none;
  white-space: nowrap;
  color: #9e9e9e;
}

.wrapper_book
  .book_body
  .book_body_left
  .book_body_left_first
  ul
  li
  a
  .purpose:hover {
  color: #00d0d4;
}

.wrapper_book .book_body .book_body_left .book_body_left_first ul li a .city {
  color: #616161;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 30px;
  font-weight: 600;
  margin-right: 4px;
}

.wrapper_book .book_body .book_body_right {
  width: calc(100% - 240px);
  height: 321px;
  float: left;
  margin-left: 10px;
}

.wrapper_book .book_body .book_body_right .book_ctn {
  display: inline-block;
}

.wrapper_book .book_body .book_body_right .book_ctn .book_img img {
  width: 227px;
  height: 321px;
  display: inline-block;
  margin-left: 8px;
}
</style>