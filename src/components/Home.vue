<template>
  <div>
    <Header class="q_header"></Header>
    <mnav class="q_mnav"></mnav>
    <Wrapper class="q_wrapper"></Wrapper>
    <appfoot></appfoot>
    <Foot class="q_foot"></Foot>
    <LeftMessage></LeftMessage>

  </div>
</template>

<script>
import Header from './Home/Header.vue'
import Foot from './Home/Footer'
import mnav from './sub/mnav'
import Wrapper from './Home/Wrapper'
import appfoot from './Home/appfoot'
import LeftMessage from './Home/leftMessage'

export default {
  name: 'Home',
  components: {
    Header,
    Foot,
    mnav,
    Wrapper,
    appfoot,
    LeftMessage,
}
}
</script>

<style>
  .q_header{
    margin: 0 auto;
    position: relative;
    width: 1200px;
    height: 110px;
  }

  .q_foot{
    margin:0 auto;
    width:1200px;
  }

  .q_wrapper{
    width: 1200px;
    margin: 0 auto;
  }



</style>