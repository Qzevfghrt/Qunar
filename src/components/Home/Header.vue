<template>
    <div class="q_header">
        <topMessage id="topMessage"></topMessage>
        <logo id="logo"></logo>
        <search id="search"></search>
        <div id="q_head_right">
            <div class="left_custom">
                <img src="../../assets/earphone.png" class="q_head_earIcon">
                <br>
                <span class="q_head_font">24小时</span>
            </div>
            <ul class="right_custom">
                <li class="right_custom_li">
                    <span class="right_custom_words">国内客服</span>
                    <span class="right_custom_num">95117</span>
                </li>
                <li class="right_custom_li">
                    <span class="right_custom_words">国际客服</span>
                    <span class="right_custom_num">(+8610)59606999</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import topMessage from '../sub/topMessage'
import logo from '../sub/logo'
import search from '../sub/search'
export default {
    name: 'Header',
    components: {
        topMessage,
        logo,
        search,
    }

}
</script>

<style>
    .q_header #topMessage{
        float: right;
        margin-right: 8px;
    }
    .q_header #logo{
        float: left;
        display: inline;
        margin: 15px 0 0 0;
        position: absolute;
        top: 35px;
    }
    .q_header #search{
        position: absolute;
        left: 300px;;
        top: 50px;
        width: 568px;
    }

    .q_header #q_head_right{
        position: absolute;
        left: 960px;
        top: 50px;
        width: 211px;
        height: 50px;
    }

    #q_head_right .left_custom{
        position: inline-block;
        float: left;
        width: 46px;
        height: 44px;
        color: #ff8300;
        font-size: 12px;
        background-color: #fdf5ec;
    }

    .q_head_earIcon{
        padding-left: 12px;
        margin: 2px;
    }

    .q_head_font{
        margin-left: 2px;
    }

    #q_head_right .right_custom{
        width: 166px;
        height: 44px;
        margin: -2px 0px 0px 5px;
    }


    #q_head_right .right_custom li{
        display: inline-block;
    }

    .right_custom_li{
        margin-left: 7px;
        height: 22px;
        width: 156px;
    }

    .right_custom_words{
        font-size: 12px;
        color: #757575;
        line-height: 22px;
    }
    .right_custom_num{
        font-size: 12px;
        float: right;
        color: #00d0d4;
        line-height: 22px;
    }
</style>