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
      <mt-cell @click.native="toast('考勤采集')" is-link>
        <div slot="title" class="tipTitle">考勤采集</div>
        <span class="rightTitle">重新采集人脸和声纹</span>
      </mt-cell>
      <div id="bar"> </div>
      <mt-cell>
        <div slot="title" class="tipTitle">打卡提醒</div>
        <!-- 不懂为啥是反的。o(╥﹏╥)o -->
        <mt-switch v-model="daka" @click.native="toast(daka?'关':'开')"></mt-switch>
      </mt-cell>
      <div id="line"> </div>
      <mt-cell @click.native="workTimeFn">
        <div slot="title" class="title"> 上班打卡提醒时间</div>
        <span class="rightTitle"> {{workTime}}</span>
      </mt-cell>
      <div id="line"> </div>
      <mt-cell @click.native="offWorkTimeFn">
        <div slot="title" class="title"> 下班打卡提醒时间</div>
        <span class="rightTitle"> {{offWorkTime}}</span>
      </mt-cell>
      <div id="bar"> </div>
      <mt-cell>
        <div slot="title" class="tipTitle">考勤维护提醒</div>
        <mt-switch v-model="weihu" @click.native="toast(weihu?'关':'开')"></mt-switch>
      </mt-cell>
      <div id="line"> </div>
      <mt-cell @click.native="tipTimeFn">
        <div slot="title" class="title">考勤维护提醒时间</div>
        <span class="rightTitle">每月{{day}}号</span>
      </mt-cell>
      <div id="bar"> </div>
      <mt-cell is-link @click.native="toast('各分子公司开票信息')">
        <div slot="title" class="title">各分子公司开票信息</div>
      </mt-cell>
      <div id="line"> </div>
      <mt-cell is-link @click.native="toast('设置')">
        <div slot="title" class="title">设置</div>
      </mt-cell>
    </div>
    <div id="bar"> </div>
    <div class="exit">
      <mt-button type="danger" size="large" @click="toast('退出')">退出账号</mt-button>
    </div>
    <template>
      <mt-datetime-picker ref="workTimeRef" @cancel='workTimeCancel' type="time" v-model="workTime">
      </mt-datetime-picker>
    </template>
    <template>
      <mt-datetime-picker ref="offWorkTimeRef" @cancel='offWorkTimeCancel' type="time" v-model="offWorkTime">
      </mt-datetime-picker>
    </template>
    <template>
      <mt-popup v-model="popupVisible" popup-transition="popup-fade" position="bottom">
        <mt-picker showToolbar :slots="daySlot" @change="onDayChange" :visible-item-count="5">
          <span class="mint-datetime-action mint-datetime-cancel" @click="popupVisible = false;recoverDay()">取消</span>
          <span class="mint-datetime-action mint-datetime-confirm" @click="popupVisible = false">确认</span>
        </mt-picker>
      </mt-popup>
    </template>
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
        weihu: true,
        daka: true,
        workTime: '08:30',
        oldValue: '',
        offWorkTime: '17:30',
        popupVisible: false,
        day: '22',
        daySlot: [{
          flex: 1,
          defaultIndex: 21, //默认值
          values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16',
            '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'
          ],
          className: 'slot1'
        }],
      }
    },
    methods: {
      toast(ev) {
        Toast({
          message: ev,
          position: 'bottom',
          duration: 1000
        });
      },
      workTimeFn() {
        this.$refs.workTimeRef.open()
        this.oldValue = this.workTime
      },
      offWorkTimeFn() {
        this.$refs.offWorkTimeRef.open()
        this.oldValue = this.offWorkTime
      },
      tipTimeFn() {
        this.popupVisible = true
        this.oldValue = this.day
      },
      onDayChange(picker, values) {
        this.day = values[0];
      },
      workTimeCancel() {
        this.workTime = this.oldValue
      },
      offWorkTimeCancel() {
        this.offWorkTime = this.oldValue
      },
      recoverDay() {
        this.day = this.oldValue
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
    mounted() {
      //获得父组件中第一个组件header的属性，隐藏header
      this.$parent.$children[0].head = false;
      // console.log(this.$parent.$children[0]);   
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

  .title {
    font-size: 14px;
    padding-left: 10px;
  }

  .tipTitle {
    padding-left: 0px;
    font-size: 14px;
  }

  .rightTitle {
    font-size: 14px;
  }

  .mint-popup-bottom {
    width: 100%
  }

</style>

<style>
  /*去除wrapper顶部的1px横线 */
  .mint-cell-wrapper {
    background-image: none;
  }
</style>
