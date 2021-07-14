<template>
  <div class="simpleHead">
    <div class="message">
      <ul>
        <li><a href="#nowhere">登录</a></li>
        <li><a href="/#/loginOn">注册 |</a></li>
        <li><a href="#/" class="home">去哪儿网首页</a></li>
        <li><a href="#nowhere">| 联系客服</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "simpleHead",
};
</script>

<style>
.simpleHead {
  width: 100%;
  height: 28px;
  border-bottom: 1px solid #ddd;
  background-color: #f5f5f5;
  line-height: 1.5;
  font-family: tahoma, arial, "Hiragino Sans GB", simsun, sans-serif;
  font-size: 12px;
}

.simpleHead .message {
  width: 980px;
  margin: 0 auto;
  height: 28px;
}

.simpleHead .message ul {
  list-style: none;
  display: inline;
  float: right;
  font-family: tahoma, arial, sans-serif;
  line-height: 14px;
  height: 14px;
  margin-top: 8px;
}

.simpleHead .message ul li {
  display: inline-block;
  padding: 0 4px;
}

.simpleHead .message ul li a {
  text-decoration: none;
  color: #555;
}

.simpleHead .message ul li .home{
    color: #ff7c00;
}
</style>