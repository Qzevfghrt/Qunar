<template>
  <div class="appfoot">
    <div class="appfoot_container">
      <div class="appfoot_container_left"></div>
      <div class="appfoot_container_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appfoot",
};
</script>

<style>
.appfoot{
    min-width: 980px;
    margin-top: 100px;
    clear: both;
    background: linear-gradient(90deg, #00d0d4 19%, #00c5c3 58%, #9effa4 100%);
}

.appfoot_container{
    margin: 0 auto;
    width: 1200px;
    height: 200px;
    position: relative;
}

.appfoot_container_left{
    background-image: url("../../assets/appfootl.png");
    background-size: contain;
    width: 330px;
    height: 160px;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    bottom: 0;
}

.appfoot_container_right{
    background-image: url("../../assets/appfootr.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 285px;
    height: 239px;
    position: absolute;
    left: 723px;
    bottom: 0;

}

</style>