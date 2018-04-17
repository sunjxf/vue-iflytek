<template>
  <div>
    <mt-header title="首页" fixed v-if="!search">
      <i class="iconfont icon-sousuo" slot="left" @click="showSearch"></i>
      <i class="iconfont icon-icon--" slot="right" @click="showTonzhi"></i>
    </mt-header>
    <mt-search v-if="search" v-model="value" v-blur="search" autofocus placeholder="搜索" @keyup.enter.native="Search" @click.native="Cancel">
      <!-- mint-ui中除了button组件外，为自定义组件绑定原生事件必须使用 .native 修饰符 -->
      <!-- 或者使用div包裹组件，在div中使用原生事件 -->
      <!-- <div v-for="(item, index) in filterResult" :key="index" @click="SearchItem(item)">
        <mt-cell :title="item"></mt-cell>
      </div> -->
      <mt-cell :title="item" v-for="(item, index) in filterResult" :key="index" @click.native="SearchItem(item)">
      </mt-cell>
    </mt-search>
  </div>
</template>

<script>
  import {
    Toast,
    Search,
    Cell,
  } from 'mint-ui';
  export default {
    data() {
      return {
        search: false,
        value: '',
        defaultResult: [
          'Apple',
          'Banana',
          'Orange',
          'Durian',
          'Lemon',
          'Peach',
          'Cherry',
          'Berry',
          'Core',
          'Fig',
          'Haw',
          'Melon',
          'Plum',
          'Pear',
          'Peanut',
          'Other'
        ]
      }
    },
    methods: {
      showTonzhi() {   
        //跳转到通知页面，query不会缓存type,params会缓存参数type
        this.$router.push({
          path: '/news',
          query: {
            type: 'tz'
          }
        })
      },
      showSearch(event) {
        this.search = true
      },
      Search() {
        this.SearchItem(this.value)
      },
      SearchItem(item) {
        Toast({
          message: item,
          position: 'bottom',
          duration: 1000
        });
        this.search = false
        this.value = ''
      },
      Cancel(event) {
        // 找到取消按钮的事件源，当点击取消按钮时隐藏搜索框
        if (event.target.innerText == '取消') {
          this.search = false
          this.value = ''
        }
      }
    },
    computed: {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    },
    directives: {
      // 自定义指令，当搜索框失去焦点并且为空时隐藏搜索框
      // vnode：Vue 编译生成的虚拟节点, context相当于this
      blur(el, binding, vnode) {
        //componentInstance表示当前实例，即mt-search. 
        //.$refs.input.onblur表示mt-search组件中，文本框失去焦点的事件
        vnode.componentInstance.$refs.input.onblur = function () {
          if (vnode.context.value == '') {
            vnode.context.search = false
            vnode.context.value = ''
          }
        }
      }
    }
  }

</script>

<style>
  .mint-header {
    background-color: #fff;
    color: #000000;
    font-size: 18px;
  }

  .iconfont {
    font-size: 22px;
  }

  .mint-search {
    margin-bottom: -45px;
    height: 45px;
    display: flex;

  }

  .mint-searchbar {
    padding: 4px;
    width: 100%;
    z-index: 3;
  }

  .mint-searchbar-inner {
    padding: 5px;
  }

  .mint-search-list-warp {
    position: absolute;
    z-index: 2;
    opacity: 0.89;
    margin-top: 1px;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

</style>
