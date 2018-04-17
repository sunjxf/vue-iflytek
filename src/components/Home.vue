<template>
  <div id="home">
    <Swipe></Swipe>
    <div id="grid">
      <br>
      <mt-tabbar v-model="selected">
        <mt-tab-item id="/考勤">
          <i slot="icon" class="iconfont icon-kaoqin"> </i>考勤
        </mt-tab-item>
        <mt-tab-item id="/学习平台">
          <i slot="icon" class="iconfont icon-tubiaozhizuomoban"> </i>学习平台
        </mt-tab-item>
        <mt-tab-item id="/会议室">
          <i slot="icon" class="iconfont icon-huiyishi"> </i>会议室
        </mt-tab-item>
        <mt-tab-item id="/订餐">
          <i slot="icon" class="iconfont icon-dingcan"></i> 订餐
        </mt-tab-item>
      </mt-tabbar>
      <mt-tabbar v-model="selected">
        <mt-tab-item id="/移动HR">
          <i slot="icon" class="iconfont icon-hrrenshirenshiguanli380"> </i>移动HR
        </mt-tab-item>
        <mt-tab-item id="/报修系统">
          <i slot="icon" class="iconfont icon-repair"> </i>报修系统
        </mt-tab-item>
        <mt-tab-item id="/AI拼">
          <i slot="icon" class="iconfont icon-che"> </i>AI拼
        </mt-tab-item>
        <mt-tab-item id="/应用中心">
          <i slot="icon" class="iconfont icon-yingyongzhongxin"></i> 应用中心
        </mt-tab-item>
      </mt-tabbar>
      <div id="bar"> </div>
    </div>
    <div class="topNew">
      <mt-header class="topbar">
        <div slot="left">
          <span> </span>讯飞头条</div>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <div class="topnew">
        <a href="#" v-for="n in 5" :key="n">
          <div class="newsBox">
            <div class="left">
              <div class="leftTop">讯飞直播间 | 助力全民健康&mdash;&mdash;&ldquo;AI赋能智慧医疗新生态&rdquo;主题直播明天开始啦！</div>
              <div class="leftBottom">
                置顶
                <i class="iconfont icon-liulan">1176</i>
                <i class="iconfont icon-icon_good">4</i>
                <span>3-28</span>
              </div>
            </div>
            <div class="right">
              <img src="http://qxbfile.iflytek.com:8000/group1/M00/00/E2/rBBkIFqiHiGAPKk5AAbcBv6mOdI369.jpg">
            </div>
          </div>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
  import Swipe from '@/components/base/Swipe'
  import {
    Toast
  } from 'mint-ui';
  export default {
    data() {
      return {
        selected: ""
      }
    },
    watch: {
      selected() {
        Toast({
          message: this.selected,
          position: 'bottom',
          duration: 1000
        });
      }
    },
    components: {
      Swipe
    }
  }

</script>


<style scoped>
  #home {
    margin-top: 45px;
  }

  .mint-tabbar {
    margin: 0 auto;
    padding: 0;
    display: flex;
    right: 0;
    left: 0;
    position: relative;
    text-align: center;
    background-color: #ffffff;

  }

  .mint-tab-item {
    border-top: #fff solid 1px;

  }

  #bar {
    width: 100%;
    height: 8px;
    background-color: rgb(236, 240, 243);
    border-top: rgb(195, 197, 196) solid 1px;
    border-bottom: rgb(246, 250, 253) solid 1px
  }

  .iconfont {
    font-size: 22px;
  }

  .topbar {
    background-color: #fff;
    color: black;
    height: 40px;
    font-size: 16px;
    border-bottom: rgb(248, 248, 248) solid 2px;
  }

  .topbar span {
    border: black solid 2px;
    margin-right: 10px;
    border-color: rgb(54, 139, 232)
  }

  .topnew {
    margin: 10px;
    margin-bottom: 43px;
  }

  .newsBox {
    position: relative;
    margin-bottom: 10px;
    display: flex;
    height: 80px;
    border-bottom: rgb(241, 241, 241) solid 2px;
    padding-bottom: 10px;
  }

  .newsBox .left {
    float: left;
    width: 60%;
  }

  .newsBox .left .leftTop {
    font-size: 14px;
    color: black;
    padding: 2px;
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 20px;
  }

  .newsBox .left .leftBottom {
    position: absolute;
    font-size: 8px;
    color: rgb(33, 114, 170);
    bottom: 10px;
  }

  .newsBox .left .leftBottom i {
    font-size: 8px;
    margin: auto 5px;
    color: gray;
  }

  .newsBox .left .leftBottom span {
    color: gray;
  }

  .newsBox .right {
    float: right;
    width: 40%;
  }

  .newsBox .right img {
    width: 100%;
    height: 100%;

  }

  a {
    text-decoration: none
  }

</style>
