webpackJsonp([0],{"2bHb":function(t,e){},"34+y":function(t,e){},"6Mbl":function(t,e){},"7YHY":function(t,e){},IYtq:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("d8/S");var i=n("clQT"),s=n.n(i),a=n("7+uW"),o=(n("34+y"),n("X+yh")),c=n.n(o),r={data:function(){return{search:!1,value:"",defaultResult:["Apple","Banana","Orange","Durian","Lemon","Peach","Cherry","Berry","Core","Fig","Haw","Melon","Plum","Pear","Peanut","Other"]}},methods:{showTonzhi:function(){this.$router.push({path:"/news",query:{type:"tz"}})},showSearch:function(t){this.search=!0},Search:function(){this.SearchItem(this.value)},SearchItem:function(t){c()({message:t,position:"bottom",duration:1e3}),this.search=!1,this.value=""},Cancel:function(t){"取消"==t.target.innerText&&(this.search=!1,this.value="")}},computed:{filterResult:function(){var t=this;return this.defaultResult.filter(function(e){return new RegExp(t.value,"i").test(e)})}},directives:{blur:function(t,e,n){n.componentInstance.$refs.input.onblur=function(){""==n.context.value&&(n.context.search=!1,n.context.value="")}}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.search?t._e():n("mt-header",{attrs:{title:"首页",fixed:""}},[n("i",{staticClass:"iconfont icon-sousuo",attrs:{slot:"left"},on:{click:t.showSearch},slot:"left"}),t._v(" "),n("i",{staticClass:"iconfont icon-icon--",attrs:{slot:"right"},on:{click:t.showTonzhi},slot:"right"})]),t._v(" "),t.search?n("mt-search",{directives:[{name:"blur",rawName:"v-blur",value:t.search,expression:"search"}],attrs:{autofocus:"",placeholder:"搜索"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.Search(e):null},click:function(e){return t.Cancel(e)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.filterResult,function(e,i){return n("mt-cell",{key:i,attrs:{title:e},nativeOn:{click:function(n){t.SearchItem(e)}}})})):t._e()],1)},staticRenderFns:[]};var u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-tabbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{class:{"is-selected":-1!=t.flag.indexOf("/home")},attrs:{id:"/home"}},[n("i",{staticClass:"iconfont icon-shouye",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),n("mt-tab-item",{class:{"is-selected":-1!=t.flag.indexOf("/news")},attrs:{id:"/news"}},[n("i",{staticClass:"iconfont icon-xinwen",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),n("mt-tab-item",{class:{"is-selected":-1!=t.flag.indexOf("/user")},attrs:{id:"/user"}},[n("i",{staticClass:"iconfont icon-gerenzhongxin1",attrs:{slot:"icon"},slot:"icon"})])],1)],1)},staticRenderFns:[]};var d={name:"App",components:{Header:n("VU/8")(r,l,!1,function(t){n("6Mbl")},null,null).exports,Tabbar:n("VU/8")({name:"name",data:function(){return{selected:""}},computed:{flag:function(){return this.$route.path}},watch:{selected:function(){this.$router.push({path:this.selected})},$route:function(){var t=this.$route.path;t&&(this.selected=t)}}},u,!1,function(t){n("RFmQ")},"data-v-6a30b88c",null).exports}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view"),this._v(" "),e("Tabbar")],1)},staticRenderFns:[]};var f=n("VU/8")(d,v,!1,function(t){n("z3YD")},null,null).exports,m=n("/ocq"),h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("mt-swipe",{attrs:{auto:4e3}},[e("mt-swipe-item",[e("img",{attrs:{src:"http://qxbfile.iflytek.com:8000/group1/M00/01/4D/rBBkIFrO-YaAPaceAAGfU7H9_90545.png"}})]),this._v(" "),e("mt-swipe-item",[e("img",{attrs:{src:"http://qxbfile.iflytek.com:8000/group1/M00/00/F8/rBBkIFqzJmaATCyfAAD1JvCL03U642.jpg"}})]),this._v(" "),e("mt-swipe-item",[e("img",{attrs:{src:"http://qxbfile.iflytek.com:8000/group1/M00/00/E2/rBBkIFqiHiGAPKk5AAbcBv6mOdI369.jpg"}})])],1)],1)},staticRenderFns:[]};var p={data:function(){return{selected:""}},watch:{selected:function(){c()({message:this.selected,position:"bottom",duration:1e3})}},components:{Swipe:n("VU/8")({name:"name"},h,!1,function(t){n("IYtq")},"data-v-38f43ade",null).exports}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Swipe"),t._v(" "),n("div",{attrs:{id:"grid"}},[n("br"),t._v(" "),n("mt-tabbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"/考勤"}},[n("i",{staticClass:"iconfont icon-kaoqin",attrs:{slot:"icon"},slot:"icon"}),t._v("考勤\n      ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"/学习平台"}},[n("i",{staticClass:"iconfont icon-tubiaozhizuomoban",attrs:{slot:"icon"},slot:"icon"}),t._v("学习平台\n      ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"/会议室"}},[n("i",{staticClass:"iconfont icon-huiyishi",attrs:{slot:"icon"},slot:"icon"}),t._v("会议室\n      ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"/订餐"}},[n("i",{staticClass:"iconfont icon-dingcan",attrs:{slot:"icon"},slot:"icon"}),t._v(" 订餐\n      ")])],1),t._v(" "),n("mt-tabbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"/移动HR"}},[n("i",{staticClass:"iconfont icon-hrrenshirenshiguanli380",attrs:{slot:"icon"},slot:"icon"}),t._v("移动HR\n      ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"/报修系统"}},[n("i",{staticClass:"iconfont icon-repair",attrs:{slot:"icon"},slot:"icon"}),t._v("报修系统\n      ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"/AI拼"}},[n("i",{staticClass:"iconfont icon-che",attrs:{slot:"icon"},slot:"icon"}),t._v("AI拼\n      ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"/应用中心"}},[n("i",{staticClass:"iconfont icon-yingyongzhongxin",attrs:{slot:"icon"},slot:"icon"}),t._v(" 应用中心\n      ")])],1),t._v(" "),n("div",{attrs:{id:"bar"}})],1),t._v(" "),n("div",{staticClass:"topNew"},[n("mt-header",{staticClass:"topbar"},[n("div",{attrs:{slot:"left"},slot:"left"},[n("span"),t._v("讯飞头条")]),t._v(" "),n("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1),t._v(" "),n("div",{staticClass:"topnew"},t._l(5,function(e){return n("a",{key:e,attrs:{href:"#"}},[t._m(0,!0)])}))],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"newsBox"},[n("div",{staticClass:"left"},[n("div",{staticClass:"leftTop"},[t._v("讯飞直播间 | 助力全民健康——“AI赋能智慧医疗新生态”主题直播明天开始啦！")]),t._v(" "),n("div",{staticClass:"leftBottom"},[t._v("\n              置顶\n              "),n("i",{staticClass:"iconfont icon-liulan"},[t._v("1176")]),t._v(" "),n("i",{staticClass:"iconfont icon-icon_good"},[t._v("4")]),t._v(" "),n("span",[t._v("3-28")])])]),t._v(" "),n("div",{staticClass:"right"},[n("img",{attrs:{src:"http://qxbfile.iflytek.com:8000/group1/M00/00/E2/rBBkIFqiHiGAPKk5AAbcBv6mOdI369.jpg"}})])])}]};var b=n("VU/8")(p,_,!1,function(t){n("p7sd")},"data-v-445b631e",null).exports,g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"news"}},[n("mt-navbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"/资讯"}},[t._v("资讯")]),t._v(" "),n("mt-tab-item",{attrs:{id:"/通知"}},[t._v("通知")])],1),t._v(" "),n("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-container-item",{attrs:{id:"/资讯"}},[n("div",{staticClass:"topnew"},t._l(10,function(e){return n("a",{key:e,attrs:{href:"#"}},[n("div",{staticClass:"newsBox"},[n("div",{staticClass:"left"},[n("div",{staticClass:"leftTop"},[t._v("讯飞直播间 | 助力全民健康——“AI赋能智慧医疗新生态”主题直播明天开始啦！")]),t._v(" "),n("div",{staticClass:"leftBottom"},[t._v("\n                置顶\n                "),n("i",{staticClass:"iconfont icon-liulan"},[t._v("1176")]),t._v(" "),n("i",{staticClass:"iconfont icon-icon_good"},[t._v("4")]),t._v(" "),n("span",[t._v("3-28")])])]),t._v(" "),n("div",{staticClass:"right"},[n("img",{attrs:{src:"http://qxbfile.iflytek.com:8000/group1/M00/00/E2/rBBkIFqiHiGAPKk5AAbcBv6mOdI369.jpg"}})])])])}))]),t._v(" "),n("mt-tab-container-item",{attrs:{id:"/通知"}},t._l(10,function(e){return n("div",{key:e,staticClass:"tongzhi"},[n("div",{staticClass:"tongzhititle"},[t._v("\n          关于工作餐的通知11.20~11.24 关于工作餐的通知11.20~11.24\n        ")]),t._v(" "),n("div",{staticClass:"tongzhiliulan"},[n("i",{staticClass:"iconfont icon-liulan"},[t._v("1176")]),t._v(" "),n("span",[t._v("3-28")])])])}))],1)],1)},staticRenderFns:[]};var C=n("VU/8")({data:function(){return{type:"/资讯"}},computed:{selected:{get:function(){var t=this.$route.query.type;return t?(this.type="tz"==t?"/通知":"/资讯",this.type):this.type},set:function(t){this.type=t}}}},g,!1,function(t){n("VFEP")},"data-v-35937a4c",null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"user"}},[this._v("\n    User\n\n\n")])},staticRenderFns:[]};var k=n("VU/8")({name:"name"},x,!1,function(t){n("7YHY")},"data-v-337270c4",null).exports;a.default.use(m.a);var y=new m.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:b},{path:"/user",component:k},{path:"/news",component:C},{path:"*",redirect:"/home"}]});n("2bHb");a.default.config.productionTip=!0,a.default.use(s.a),new a.default({el:"#app",router:y,components:{App:f},template:"<App/>"})},RFmQ:function(t,e){},VFEP:function(t,e){},"d8/S":function(t,e){},p7sd:function(t,e){},z3YD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.70989a3c4802eb1686b9.js.map