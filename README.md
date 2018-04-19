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
##资料
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
        // console.log(this.$route.path)
        let path = this.$route.path
        if (path == '/user' || path == '/news') {
          this.head = false
        }else{
          this.head = true
        }

      }
    }
```