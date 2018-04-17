<template>
  <div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="/home" :class="{'is-selected':flag.indexOf('/home')!=-1?true:false}">
        <i class="iconfont icon-shouye" slot="icon"></i>
      </mt-tab-item>
      <mt-tab-item id="/news" :class="{'is-selected':flag.indexOf('/news')!=-1?true:false}">
        <i class="iconfont icon-xinwen" slot="icon"></i>
      </mt-tab-item>
      <mt-tab-item id="/user" :class="{'is-selected':flag.indexOf('/user')!=-1?true:false}">
        <i class="iconfont icon-gerenzhongxin1" slot="icon"></i>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'name',
    data() {
      return {
        selected: ''
      }
    },
    computed: {
      flag() {
        return this.$route.path
      }
    },
    watch: {
      selected() {
        this.$router.push({
          path: this.selected
        })
      },
      $route() {
        let path = this.$route.path
        if (path) {
          this.selected = path
        }
      }
    }
  }

</script>

<style scoped>
  .iconfont {
    font-size: 22px;
  }

</style>
