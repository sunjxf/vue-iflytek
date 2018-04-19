# vue-iflytek

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install / yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---
## 资料
* 阿里巴巴矢量图标库 http://www.iconfont.cn/
* Mint UI 使用文档 http://mint-ui.github.io/docs/#/zh-cn2
* Vue.js 官方文档 https://cn.vuejs.org/v2/guide/

---


* mint-ui中除了button组件外，为自定义组件绑定原生事件必须使用 .native 修饰符 
```javascript
    @click.native="SearchItem(item)"
```

* 路由跳转，query不会缓存参数type,params会缓存参数type,并且必须指定name。
 ```javascript
    this.$router.push({
            path: '/news',
            query: {
                type: 'tz'
            }
```

* 根据获取跳转过来的路由路径，通过计算属性，选择mt-navbar所显示的内容
```html
    <mt-navbar v-model="selected" fixed>
      <mt-tab-item id="/资讯">资讯</mt-tab-item>
      <mt-tab-item id="/通知">通知</mt-tab-item>
    </mt-navbar>
      <mt-tab-container v-model="selected">
      <mt-tab-container-item id="/资讯">
        <div class="topnew">
            <a href="#" v-for="n in 10" :key="n">...
          </a>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="/通知">
        <div class="tongzhi" v-for="n in 10" :key="n">...
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
```
```javascript
    computed: {
      selected: {
        get() {
          let t = this.$route.query.type
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
```

* mt-search组件取消按钮的事件
```html
    <mt-search v-if="search" v-model="value" v-blur="search" autofocus placeholder="搜索" @keyup.enter.native="Search" @click.native="Cancel">
```
```javascript
    //绑定取消按钮的事件
    Cancel(event) {
    // 找到取消按钮的事件源，当点击取消按钮时隐藏搜索框
    if (event.target.innerText == '取消') {
        this.search = false
        this.value = ''
    }
```

* mt-search组件中文本框失去焦点时自动隐藏，使用自定义指令的虚拟节点。mt-search组件为文本框设定了ref为input
```javascript
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
```

* 根据路由判断自身应该显示那个组件
```html
    <mt-header title="首页" fixed v-if="head && !search">
      <i class="iconfont icon-sousuo" slot="left" @click="showSearch"></i>
      <i class="iconfont icon-icon--" slot="right" @click="showTonzhi"></i>
    </mt-header>
        <mt-search v-if="search" v-model="value" v-blur="search" autofocus placeholder="搜索" @keyup.enter.native="Search" @click.native="Cancel">
      <mt-cell :title="item" v-for="(item, index) in filterResult" :key="index" @click.native="SearchItem(item)">
      </mt-cell>
    </mt-search>
```
```javascript
    watch: {
      $route() {
        let path = this.$route.path
        if (path == '/user' || path == '/news') {
          this.head = false
        }else{
          this.head = true
        }
      }
    }
```

* Vue文件中可以放置两个style标签，一个是局部的，一个是全局的
```css
    <style scoped>
        ...
    </style>
    <style>
        /*去除mint-cell-wrapper顶部的1px横线 */
        .mint-cell-wrapper {
            background-image: none;
        }
    </style>
```

* router-view中的组件访问父组件中子组件的变量
```html
    <template>
    <div id="app">
        <Header></Header> <!--$children[0]-->
        <router-view/>
        <Tabbar></Tabbar>
    </div>
    </template>
```
```javascript
    // <router-view/>组件中的内容
    mounted() {
      //获得父组件中第一个组件Header的属性，隐藏Header
      this.$parent.$children[0].head = false;
    }
```

* mt-popup组件配合mt-picker使用
```html
    <template>
      <mt-popup v-model="popupVisible" popup-transition="popup-fade" position="bottom">
        <mt-picker showToolbar :slots="daySlot" @change="onDayChange" :visible-item-count="5">
          <span class="mint-datetime-action mint-datetime-cancel" @click="popupVisible = false;recoverDay()">取消</span>
          <span class="mint-datetime-action mint-datetime-confirm" @click="popupVisible = false">确认</span>
        </mt-picker>
      </mt-popup>
    </template>
```
```javascript
  export default {
    data() {
      return {
        oldValue: '',
        popupVisible: false,
        day: '22',
        daySlot: [{
          flex: 1,
          defaultIndex: 21, //默认值
          values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16','17', '18', '19', '20', '21', '22', '23', '24', '25', '26'
          ],
          className: 'slot1'
        }],
      }
    },
    methods: {
      onDayChange(picker, values) {
        this.day = values[0];
      },
      recoverDay() {
        this.day = this.oldValue
      }
    }
  }
```

* mt-datetime-picker组件中的取消按钮的事件
```html
    <template>
      <mt-datetime-picker ref="offWorkTimeRef" @cancel='offWorkTimeCancel' type="time" v-model="offWorkTime">
      </mt-datetime-picker>
    </template>
```
```javascript
    //调用mt-datetime-picker组件
    offWorkTimeFn() {
        this.$refs.offWorkTimeRef.open()
        this.oldValue = this.offWorkTime
    },
    //mt-datetime-picker组件中的取消按钮的事件
    offWorkTimeCancel() {
        this.offWorkTime = this.oldValue
    },
```