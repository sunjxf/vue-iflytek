<template>
  <div id="user">
    <div class="profile">

    </div>
    <div class="tabbar">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="/绩效信息">
          <i slot="icon" class="iconfont icon-jixiaokaohe"> </i>绩效信息
        </mt-tab-item>
        <mt-tab-item id="/培训信息">
          <i slot="icon" class="iconfont icon-peixun"> </i>培训信息
        </mt-tab-item>
        <mt-tab-item id="/员工福利">
          <i slot="icon" class="iconfont icon-fuliquan"> </i>员工福利
        </mt-tab-item>
        <mt-tab-item id="/工资奖金">
          <i slot="icon" class="iconfont icon-gongzi"></i> 工资奖金
        </mt-tab-item>
      </mt-tabbar>
    </div>

    <div class="cell">
      <div id="bar"> </div>
      <mt-cell>
         <div slot="title" class="tipTitle">考勤采集</div>
        <span class="rightTitle">重新采集人脸和声纹</span></mt-cell>
      <div id="bar"> </div>
      <mt-cell>
         <div slot="title" class="tipTitle">打卡提醒</div>
        <mt-switch v-model="daka"></mt-switch>
      </mt-cell>
      <div id="line"> </div>
      <mt-cell>
        <div slot="title" class="title"> 上班打卡提醒时间</div>
      <span class="rightTitle"> 08:20</span></mt-cell>
       <div id="line"> </div>
      <mt-cell>
        <div slot="title" class="title"> 下班打卡提醒时间</div>
        <span class="rightTitle"> 17:30</span> </mt-cell>
      <div id="bar"> </div>
      <mt-cell>
           <div slot="title" class="tipTitle">考勤维护提醒</div>
        <mt-switch v-model="weihu"></mt-switch>
      </mt-cell>
      <div id="line"> </div>
      <mt-cell>
          <div slot="title" class="title">考勤维护提醒时间</div>
        <span class="rightTitle">每月22号</span></mt-cell>
      <div id="bar"> </div>
      <mt-cell is-link>
          <div slot="title" class="title">各分子公司开票信息</div>
      </mt-cell>
       <div id="line"> </div>
      <mt-cell is-link>
         <div slot="title" class="title">设置</div>
      </mt-cell>
    </div>
    <div id="bar"> </div>
    <div class="exit">
      <mt-button type="danger" size="large">退出账号</mt-button>
    </div>

  </div>
</template>

<script>
  import {
    Toast
  } from 'mint-ui';
  export default {
    data() {
      return {
        selected: '',
        weihu: '',
        daka: ''
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
    created () {
      console.log(this);
      
    }
  }

</script>
<style scoped>
  .iconfont {
    font-size: 22px;
  }

  #user {
    margin-bottom: 50px
  }

  .profile {
    background-color: blue;
    height: 250px;
  }

  .tabbar {
    position: relative;
  }

  .tabbar>.mint-tabbar {
    background-color: #fff;
  }

  #line {
    width: 90%;
    margin: 0 auto;
    border-bottom: rgb(222, 222, 222) solid 1px;
  }

  #bar {
    width: 100%;
    height: 8px;
    background-color: rgb(236, 240, 243);
    border-top: rgb(195, 197, 196) solid 1px;
    border-bottom: rgb(246, 250, 253) solid 1px
  }

  .exit {
    margin: 10px 20px;
  }
  .title{
    font-size: 14px;
    padding-left: 10px;
  }
  .tipTitle{
    padding-left: 0px;
    font-size: 14px;
  }
  .rightTitle{
     font-size: 14px;
  }
</style>

<style>
/*去除wrapper顶部的1px横线 */
.mint-cell-wrapper{
  background-image:none;
}
</style>
