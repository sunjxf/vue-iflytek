webpackJsonp([0],{"2bHb":function(t,i){},"34+y":function(t,i){},DhOd:function(t,i){},IYtq:function(t,i){},"KYR/":function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});e("d8/S");var s=e("clQT"),n=e.n(s),a=e("7+uW"),o=(e("34+y"),e("X+yh")),c=e.n(o),l={name:"headerComponent",data:function(){return{search:!1,head:!0,value:"",defaultResult:["Apple","Banana","Orange","Durian","Lemon","Peach","Cherry","Berry","Core","Fig","Haw","Melon","Plum","Pear","Peanut","Other"]}},methods:{showTonzhi:function(){this.$router.push({path:"/news",query:{type:"tz"}})},showSearch:function(t){this.search=!0},Search:function(){this.SearchItem(this.value)},SearchItem:function(t){c()({message:t,position:"bottom",duration:1e3}),this.search=!1,this.value=""},Cancel:function(t){"取消"==t.target.innerText&&(this.search=!1,this.value="")}},computed:{filterResult:function(){var t=this;return this.defaultResult.filter(function(i){return new RegExp(t.value,"i").test(i)})}},watch:{$route:function(){var t=this.$route.path;this.head="/user"!=t&&"/news"!=t}},directives:{blur:function(t,i,e){e.componentInstance.$refs.input.onblur=function(){""==e.context.value&&(e.context.search=!1,e.context.value="")}}}},r={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t.head&&!t.search?e("mt-header",{attrs:{title:"首页",fixed:""}},[e("i",{staticClass:"iconfont icon-sousuo",attrs:{slot:"left"},on:{click:t.showSearch},slot:"left"}),t._v(" "),e("i",{staticClass:"iconfont icon-icon--",attrs:{slot:"right"},on:{click:t.showTonzhi},slot:"right"})]):t._e(),t._v(" "),t.search?e("mt-search",{directives:[{name:"blur",rawName:"v-blur",value:t.search,expression:"search"}],attrs:{autofocus:"",placeholder:"搜索"},nativeOn:{keyup:function(i){return"button"in i||!t._k(i.keyCode,"enter",13,i.key,"Enter")?t.Search(i):null},click:function(i){return t.Cancel(i)}},model:{value:t.value,callback:function(i){t.value=i},expression:"value"}},t._l(t.filterResult,function(i,s){return e("mt-cell",{key:s,attrs:{title:i},nativeOn:{click:function(e){t.SearchItem(i)}}})})):t._e()],1)},staticRenderFns:[]};var u={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("mt-tabbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(i){t.selected=i},expression:"selected"}},[e("mt-tab-item",{class:{"is-selected":-1!=t.flag.indexOf("/home")},attrs:{id:"/home"}},[e("i",{staticClass:"iconfont icon-shouye",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),e("mt-tab-item",{class:{"is-selected":-1!=t.flag.indexOf("/news")},attrs:{id:"/news"}},[e("i",{staticClass:"iconfont icon-xinwen",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),e("mt-tab-item",{class:{"is-selected":-1!=t.flag.indexOf("/user")},attrs:{id:"/user"}},[e("i",{staticClass:"iconfont icon-gerenzhongxin1",attrs:{slot:"icon"},slot:"icon"})])],1)],1)},staticRenderFns:[]};var d={name:"App",components:{Header:e("VU/8")(l,r,!1,function(t){e("KYR/")},null,null).exports,Tabbar:e("VU/8")({name:"name",data:function(){return{selected:""}},computed:{flag:function(){return this.$route.path}},watch:{selected:function(){this.$router.push({path:this.selected})},$route:function(){var t=this.$route.path;t&&(this.selected=t)}}},u,!1,function(t){e("RFmQ")},"data-v-6a30b88c",null).exports}},v={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("Header"),this._v(" "),i("router-view"),this._v(" "),i("Tabbar")],1)},staticRenderFns:[]};var f=e("VU/8")(d,v,!1,function(t){e("z3YD")},null,null).exports,m=e("/ocq"),p={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("mt-swipe",{attrs:{auto:4e3}},[i("mt-swipe-item",[i("img",{attrs:{src:"http://qxbfile.iflytek.com:8000/group1/M00/01/4D/rBBkIFrO-YaAPaceAAGfU7H9_90545.png"}})]),this._v(" "),i("mt-swipe-item",[i("img",{attrs:{src:"http://qxbfile.iflytek.com:8000/group1/M00/00/F8/rBBkIFqzJmaATCyfAAD1JvCL03U642.jpg"}})]),this._v(" "),i("mt-swipe-item",[i("img",{attrs:{src:"http://qxbfile.iflytek.com:8000/group1/M00/00/E2/rBBkIFqiHiGAPKk5AAbcBv6mOdI369.jpg"}})])],1)],1)},staticRenderFns:[]};var h={data:function(){return{selected:""}},watch:{selected:function(){c()({message:this.selected,position:"bottom",duration:1e3})}},components:{Swipe:e("VU/8")({name:"name"},p,!1,function(t){e("IYtq")},"data-v-38f43ade",null).exports}},_={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"home"}},[e("Swipe"),t._v(" "),e("div",{attrs:{id:"grid"}},[e("br"),t._v(" "),e("mt-tabbar",{model:{value:t.selected,callback:function(i){t.selected=i},expression:"selected"}},[e("mt-tab-item",{attrs:{id:"/考勤"}},[e("i",{staticClass:"iconfont icon-kaoqin",attrs:{slot:"icon"},slot:"icon"}),t._v("考勤\n      ")]),t._v(" "),e("mt-tab-item",{attrs:{id:"/学习平台"}},[e("i",{staticClass:"iconfont icon-tubiaozhizuomoban",attrs:{slot:"icon"},slot:"icon"}),t._v("学习平台\n      ")]),t._v(" "),e("mt-tab-item",{attrs:{id:"/会议室"}},[e("i",{staticClass:"iconfont icon-huiyishi",attrs:{slot:"icon"},slot:"icon"}),t._v("会议室\n      ")]),t._v(" "),e("mt-tab-item",{attrs:{id:"/订餐"}},[e("i",{staticClass:"iconfont icon-dingcan",attrs:{slot:"icon"},slot:"icon"}),t._v(" 订餐\n      ")])],1),t._v(" "),e("mt-tabbar",{model:{value:t.selected,callback:function(i){t.selected=i},expression:"selected"}},[e("mt-tab-item",{attrs:{id:"/移动HR"}},[e("i",{staticClass:"iconfont icon-hrrenshirenshiguanli380",attrs:{slot:"icon"},slot:"icon"}),t._v("移动HR\n      ")]),t._v(" "),e("mt-tab-item",{attrs:{id:"/报修系统"}},[e("i",{staticClass:"iconfont icon-repair",attrs:{slot:"icon"},slot:"icon"}),t._v("报修系统\n      ")]),t._v(" "),e("mt-tab-item",{attrs:{id:"/AI拼"}},[e("i",{staticClass:"iconfont icon-che",attrs:{slot:"icon"},slot:"icon"}),t._v("AI拼\n      ")]),t._v(" "),e("mt-tab-item",{attrs:{id:"/应用中心"}},[e("i",{staticClass:"iconfont icon-yingyongzhongxin",attrs:{slot:"icon"},slot:"icon"}),t._v(" 应用中心\n      ")])],1),t._v(" "),e("div",{attrs:{id:"bar"}})],1),t._v(" "),e("div",{staticClass:"topNew"},[e("mt-header",{staticClass:"topbar"},[e("div",{attrs:{slot:"left"},slot:"left"},[e("span"),t._v("讯飞头条")]),t._v(" "),e("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1),t._v(" "),e("div",{staticClass:"topnew"},t._l(5,function(i){return e("a",{key:i,attrs:{href:"#"}},[t._m(0,!0)])}))],1)],1)},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"newsBox"},[e("div",{staticClass:"left"},[e("div",{staticClass:"leftTop"},[t._v("讯飞直播间 | 助力全民健康——“AI赋能智慧医疗新生态”主题直播明天开始啦！")]),t._v(" "),e("div",{staticClass:"leftBottom"},[t._v("\n              置顶\n              "),e("i",{staticClass:"iconfont icon-liulan"},[t._v("1176")]),t._v(" "),e("i",{staticClass:"iconfont icon-icon_good"},[t._v("4")]),t._v(" "),e("span",[t._v("3-28")])])]),t._v(" "),e("div",{staticClass:"right"},[e("img",{attrs:{src:"http://qxbfile.iflytek.com:8000/group1/M00/00/E2/rBBkIFqiHiGAPKk5AAbcBv6mOdI369.jpg"}})])])}]};var b=e("VU/8")(h,_,!1,function(t){e("p7sd")},"data-v-445b631e",null).exports,k={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"news"}},[e("mt-navbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(i){t.selected=i},expression:"selected"}},[e("mt-tab-item",{attrs:{id:"/资讯"}},[t._v("资讯")]),t._v(" "),e("mt-tab-item",{attrs:{id:"/通知"}},[t._v("通知")])],1),t._v(" "),e("mt-tab-container",{model:{value:t.selected,callback:function(i){t.selected=i},expression:"selected"}},[e("mt-tab-container-item",{attrs:{id:"/资讯"}},[e("div",{staticClass:"topnew"},t._l(10,function(i){return e("a",{key:i,attrs:{href:"#"}},[e("div",{staticClass:"newsBox"},[e("div",{staticClass:"left"},[e("div",{staticClass:"leftTop"},[t._v("讯飞直播间 | 助力全民健康——“AI赋能智慧医疗新生态”主题直播明天开始啦！")]),t._v(" "),e("div",{staticClass:"leftBottom"},[t._v("\n                置顶\n                "),e("i",{staticClass:"iconfont icon-liulan"},[t._v("1176")]),t._v(" "),e("i",{staticClass:"iconfont icon-icon_good"},[t._v("4")]),t._v(" "),e("span",[t._v("3-28")])])]),t._v(" "),e("div",{staticClass:"right"},[e("img",{attrs:{src:"http://qxbfile.iflytek.com:8000/group1/M00/00/E2/rBBkIFqiHiGAPKk5AAbcBv6mOdI369.jpg"}})])])])}))]),t._v(" "),e("mt-tab-container-item",{attrs:{id:"/通知"}},t._l(10,function(i){return e("div",{key:i,staticClass:"tongzhi"},[e("div",{staticClass:"tongzhititle"},[t._v("\n          关于工作餐的通知11.20~11.24 关于工作餐的通知11.20~11.24\n        ")]),t._v(" "),e("div",{staticClass:"tongzhiliulan"},[e("i",{staticClass:"iconfont icon-liulan"},[t._v("1176")]),t._v(" "),e("span",[t._v("3-28")])])])}))],1)],1)},staticRenderFns:[]};var C=e("VU/8")({data:function(){return{type:"/资讯"}},computed:{selected:{get:function(){var t=this.$route.query.type;return t?(this.type="tz"==t?"/通知":"/资讯",this.type):this.type},set:function(t){this.type=t}}}},k,!1,function(t){e("VFEP")},"data-v-35937a4c",null).exports,g={data:function(){return{selected:"",weihu:!0,daka:!0,workTime:"08:30",oldValue:"",offWorkTime:"17:30",popupVisible:!1,day:"22",daySlot:[{flex:1,defaultIndex:21,values:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26"],className:"slot1"}]}},methods:{toast:function(t){c()({message:t,position:"bottom",duration:1e3})},workTimeFn:function(){this.$refs.workTimeRef.open(),this.oldValue=this.workTime},offWorkTimeFn:function(){this.$refs.offWorkTimeRef.open(),this.oldValue=this.offWorkTime},tipTimeFn:function(){this.popupVisible=!0,this.oldValue=this.day},onDayChange:function(t,i){this.day=i[0]},workTimeCancel:function(){this.workTime=this.oldValue},offWorkTimeCancel:function(){this.offWorkTime=this.oldValue},recoverDay:function(){this.day=this.oldValue}},watch:{selected:function(){c()({message:this.selected,position:"bottom",duration:1e3})}},mounted:function(){this.$parent.$children[0].head=!1}},w={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"user"}},[e("div",{staticClass:"profile"}),t._v(" "),e("div",{staticClass:"tabbar"},[e("mt-tabbar",{model:{value:t.selected,callback:function(i){t.selected=i},expression:"selected"}},[e("mt-tab-item",{attrs:{id:"/绩效信息"}},[e("i",{staticClass:"iconfont icon-jixiaokaohe",attrs:{slot:"icon"},slot:"icon"}),t._v("绩效信息\n      ")]),t._v(" "),e("mt-tab-item",{attrs:{id:"/培训信息"}},[e("i",{staticClass:"iconfont icon-peixun",attrs:{slot:"icon"},slot:"icon"}),t._v("培训信息\n      ")]),t._v(" "),e("mt-tab-item",{attrs:{id:"/员工福利"}},[e("i",{staticClass:"iconfont icon-fuliquan",attrs:{slot:"icon"},slot:"icon"}),t._v("员工福利\n      ")]),t._v(" "),e("mt-tab-item",{attrs:{id:"/工资奖金"}},[e("i",{staticClass:"iconfont icon-gongzi",attrs:{slot:"icon"},slot:"icon"}),t._v(" 工资奖金\n      ")])],1)],1),t._v(" "),e("div",{staticClass:"cell"},[e("div",{attrs:{id:"bar"}}),t._v(" "),e("mt-cell",{attrs:{"is-link":""},nativeOn:{click:function(i){t.toast("考勤采集")}}},[e("div",{staticClass:"tipTitle",attrs:{slot:"title"},slot:"title"},[t._v("考勤采集")]),t._v(" "),e("span",{staticClass:"rightTitle"},[t._v("重新采集人脸和声纹")])]),t._v(" "),e("div",{attrs:{id:"bar"}}),t._v(" "),e("mt-cell",[e("div",{staticClass:"tipTitle",attrs:{slot:"title"},slot:"title"},[t._v("打卡提醒")]),t._v(" "),e("mt-switch",{nativeOn:{click:function(i){t.toast(t.daka?"关":"开")}},model:{value:t.daka,callback:function(i){t.daka=i},expression:"daka"}})],1),t._v(" "),e("div",{attrs:{id:"line"}}),t._v(" "),e("mt-cell",{nativeOn:{click:function(i){return t.workTimeFn(i)}}},[e("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(" 上班打卡提醒时间")]),t._v(" "),e("span",{staticClass:"rightTitle"},[t._v(" "+t._s(t.workTime))])]),t._v(" "),e("div",{attrs:{id:"line"}}),t._v(" "),e("mt-cell",{nativeOn:{click:function(i){return t.offWorkTimeFn(i)}}},[e("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(" 下班打卡提醒时间")]),t._v(" "),e("span",{staticClass:"rightTitle"},[t._v(" "+t._s(t.offWorkTime))])]),t._v(" "),e("div",{attrs:{id:"bar"}}),t._v(" "),e("mt-cell",[e("div",{staticClass:"tipTitle",attrs:{slot:"title"},slot:"title"},[t._v("考勤维护提醒")]),t._v(" "),e("mt-switch",{nativeOn:{click:function(i){t.toast(t.weihu?"关":"开")}},model:{value:t.weihu,callback:function(i){t.weihu=i},expression:"weihu"}})],1),t._v(" "),e("div",{attrs:{id:"line"}}),t._v(" "),e("mt-cell",{nativeOn:{click:function(i){return t.tipTimeFn(i)}}},[e("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("考勤维护提醒时间")]),t._v(" "),e("span",{staticClass:"rightTitle"},[t._v("每月"+t._s(t.day)+"号")])]),t._v(" "),e("div",{attrs:{id:"bar"}}),t._v(" "),e("mt-cell",{attrs:{"is-link":""},nativeOn:{click:function(i){t.toast("各分子公司开票信息")}}},[e("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("各分子公司开票信息")])]),t._v(" "),e("div",{attrs:{id:"line"}}),t._v(" "),e("mt-cell",{attrs:{"is-link":""},nativeOn:{click:function(i){t.toast("设置")}}},[e("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("设置")])])],1),t._v(" "),e("div",{attrs:{id:"bar"}}),t._v(" "),e("div",{staticClass:"exit"},[e("mt-button",{attrs:{type:"danger",size:"large"},on:{click:function(i){t.toast("退出")}}},[t._v("退出账号")])],1),t._v(" "),[e("mt-datetime-picker",{ref:"workTimeRef",attrs:{type:"time"},on:{cancel:t.workTimeCancel},model:{value:t.workTime,callback:function(i){t.workTime=i},expression:"workTime"}})],t._v(" "),[e("mt-datetime-picker",{ref:"offWorkTimeRef",attrs:{type:"time"},on:{cancel:t.offWorkTimeCancel},model:{value:t.offWorkTime,callback:function(i){t.offWorkTime=i},expression:"offWorkTime"}})],t._v(" "),[e("mt-popup",{attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:t.popupVisible,callback:function(i){t.popupVisible=i},expression:"popupVisible"}},[e("mt-picker",{attrs:{showToolbar:"",slots:t.daySlot,"visible-item-count":5},on:{change:t.onDayChange}},[e("span",{staticClass:"mint-datetime-action mint-datetime-cancel",on:{click:function(i){t.popupVisible=!1,t.recoverDay()}}},[t._v("取消")]),t._v(" "),e("span",{staticClass:"mint-datetime-action mint-datetime-confirm",on:{click:function(i){t.popupVisible=!1}}},[t._v("确认")])])],1)]],2)},staticRenderFns:[]};var x=e("VU/8")(g,w,!1,function(t){e("ZpJm"),e("DhOd")},"data-v-5c5e7a2c",null).exports;a.default.use(m.a);var y=new m.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:b},{path:"/user",component:x},{path:"/news",component:C},{path:"*",redirect:"/home"}]});e("2bHb");a.default.config.productionTip=!0,a.default.use(n.a),new a.default({el:"#app",router:y,components:{App:f},template:"<App/>"})},RFmQ:function(t,i){},VFEP:function(t,i){},ZpJm:function(t,i){},"d8/S":function(t,i){},p7sd:function(t,i){},z3YD:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.6218f7086cc0de6336f0.js.map