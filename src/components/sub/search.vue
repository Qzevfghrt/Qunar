<template>
  <div class="q_header_search">
      <input type="text" name="keyword" placeholder="搜索目的地">
      <button type="button" class="searchButton">
          <i class="el-icon-search q_head_searchIcon" ></i>
      </button>
  </div>
</template>

<script>
export default {
    name: "search",
    methods: {

    }
}
</script>

<style>
    .q_header_search{
        width: 566px;
        height: 46px;
        background-color:#00d0d4;
        border-radius: 5px;
    }
    .q_header_search input{
        width: 478px;
        height: 38px;
        border: 1px solid transparent;
        margin: 2px;
        padding-left: 14px;
        font-size: 15px;
        outline: none;
    }
    .q_header_search .searchButton{
        width: 54px;
        height: 34px;
        background-color: #00d0d4;
        border: 1px solid transparent;
        margin: 2px;
    }
    .q_head_searchIcon{
        font-size: 20px;
        color: white;
    }
</style>