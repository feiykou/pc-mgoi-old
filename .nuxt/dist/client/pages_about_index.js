(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{329:function(t,e,n){},356:function(t,e,n){"use strict";var c=n(329);n.n(c).a},380:function(t,e,n){"use strict";n.r(e);n(60);var c={data:function(){return{activeName:"about"}},created:function(){this.setTab(this.$route.hash)},watch:{$route:function(t){var e=t.hash;this.setTab(e)}},methods:{handleClick:function(t,e){this.activeName=t.name},setTab:function(t){if(t){var e="";switch(t){case"#news":e="news";break;case"#recruit":e="recruit";break;case"#contact":e="contact";break;default:e="about"}this.activeName=e}}},components:{Header:n(177).a}},r=(n(356),n(13)),component=Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"content news-content"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),n("el-breadcrumb-item",[t._v("关于唔该")])],1),t._v(" "),n("h1",{staticClass:"title"},[t._v("关于唔该")]),t._v(" "),n("div",{staticClass:"about-wrap"},[n("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"唔该理念",name:"about"}},[n("div",{staticClass:"about-item"},[n("nuxt-child")],1)]),t._v(" "),n("el-tab-pane",{attrs:{label:"唔该新闻",name:"news"}},[n("nuxt-child",{attrs:{name:"news"}})],1),t._v(" "),n("el-tab-pane",{attrs:{label:"唔该招聘",name:"recruit"}},[n("nuxt-child",{attrs:{name:"recruit"}})],1),t._v(" "),n("el-tab-pane",{attrs:{label:"联系唔该",name:"contact"}},[n("nuxt-child",{attrs:{name:"contact"}})],1)],1)],1)],1)])},[],!1,null,null,null);e.default=component.exports}}]);