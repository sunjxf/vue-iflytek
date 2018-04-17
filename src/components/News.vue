<template>
  <div id="news">
    <mt-navbar v-model="selected" fixed>
      <mt-tab-item id="/资讯">资讯</mt-tab-item>
      <mt-tab-item id="/通知">通知</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="/资讯">
        <div class="topnew">
          <a href="#" v-for="n in 10" :key="n">
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
      </mt-tab-container-item>
      <mt-tab-container-item id="/通知">
        <div class="tongzhi" v-for="n in 10" :key="n">
          <div class="tongzhititle">
            关于工作餐的通知11.20~11.24 关于工作餐的通知11.20~11.24
          </div>
          <div class="tongzhiliulan">
            <i class="iconfont icon-liulan">1176</i>
            <span>3-28</span>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        type: '/资讯'
      }
    },
    computed: {
      selected: {
        get() {
          let t = this.$route.query.type
          //console.log(this.$route);
          //检查是否有参数传递过来，默认显示资讯，
          if (!t) {
            return this.type
          } else if (t == 'tz') {
            this.type = '/通知'
          } else {
            this.type = '/资讯'
          }
          return this.type
        },
        set(value) {
          this.type = value
        }
      }
    }
  }

</script>

<style scoped>
  #news {
    margin-top: 45px;

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

  .tongzhi {
    font-size: 14px;
    height: 50px;
    line-height: 20px;
    margin: 10px;
    border-bottom: rgb(246, 246, 246) solid 1px;
  }

  .tongzhititle {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .tongzhiliulan {
    margin-top: 5px;
  }

  .tongzhiliulan i,
  span {
    font-size: 8px;
  }

  .tongzhiliulan i {
    float: left;
  }

  .tongzhiliulan span {
    float: right;
  }

</style>
