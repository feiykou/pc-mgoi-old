(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{358:function(t,e,r){},389:function(t,e,r){"use strict";var n=r(358);r.n(n).a},416:function(t,e,r){"use strict";r.r(e);r(59),r(25);var menu=r(342);function n(t,e){var r=[],n={};return t.forEach((function(c,o){t.length-1===o&&e&&e(c),n.name=c.name,n.id=c.id,r.push(n),n={}})),[].concat([{name:"产品分类",id:0}],r)}var c=r(376),o=r(329),d=r(131),main=r(187),l={watchQuery:["id"],data:function(){return{cateData:null,productsData:null,crumbArr:[{name:"产品分类",id:0}],curName:"产品分类",curCateId:0,prevCateId:0,totalNum:0,curPage:0}},components:{Menu:menu.default,CateLoading:c.a,pageProductList:o.a},asyncData:function(t){var e,r,c,o,l,m,h,v,C,f;return regeneratorRuntime.async((function(_){for(;;)switch(_.prev=_.next){case 0:return t.app,e=t.query,r=t.store,c=t.error,o=e.id,l=null,m=null,h="产品分类",v=0,_.next=5,regeneratorRuntime.awrap(d.a.getProductsByCate(o));case 5:return l=_.sent,_.next=8,regeneratorRuntime.awrap(d.a.getSonCate(o));case 8:return m=_.sent,C=r.state.cate.crumbCate,f=n(C,(function(t){v=t.pid,h=t.name})),m||c({statusCode:404,message:"页面加载失败，请重新加载"}),_.abrupt("return",{cateData:m,productsData:l.collection,totalNum:l.total_nums,crumbArr:f,curName:h,curCateId:o,prevCateId:v});case 13:case"end":return _.stop()}}))},fetch:function(t){var e=t.store,r=t.query.id||0;e.dispatch("cate/getCategoryCate"),e.dispatch("cate/getParentCate",r)},head:function(){return this.$seo("产品列表 - 唔该","正处于萌芽阶段")},methods:{priceSort:function(t){var e=t;this.getProductsByCate(this.curCateId,e)},pageChange:function(t){var e=t-1;this.curPage=e,this.getProductsByCate(this.curCateId,0,e)},cateTap:function(t){var e=t.currentTarget.dataset.id,r=t.currentTarget.dataset.name,n=t.currentTarget.dataset.pid;this.curName=r,this.prevCateId=n,this.crumbArr.push({id:e,name:r}),this._loadData(e)},backTap:function(t){var e,r,c=this;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return this.prevCateId||(this.curName="产品分类"),this.getSonCate(this.prevCateId),this.getProductsByCate(this.prevCateId),t.next=5,regeneratorRuntime.awrap(this.getParentCate(this.prevCateId));case 5:e=t.sent,r=n(e,(function(t){c.prevCateId=t.pid,c.curName=t.name})),this.crumbArr=r;case 8:case"end":return t.stop()}}),null,this)},crumbTap:function(t){var e=t.currentTarget.dataset.index,r=this.crumbArr;r=r.slice(0,1*e+1),this.curName=r[e].name,this.crumbArr=r,this._loadData(r[e].id)},_loadData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.curCateId=t,this.getSonCate(t),this.getProductsByCate(t)},getSonCate:function(t){var e=this;this.cateData=null,d.a.getSonCate(t).then((function(t){Object(main.setTimeout)((function(){e.cateData=t}),300)}))},getProductsByCate:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.curPage;this.productsData=null,d.a.getProductsByCate(e,r,n).then((function(e){t.productsData=e.collection,t.totalNum=e.total_nums}))},getParentCate:function(t){var e;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(d.a.getParentCate(t));case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}))}}},m=(r(389),r(10)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"content main-section product-list-section"},[r("div",{staticClass:"cate-wrap menu-left-wrap"},[r("Menu")],1),t._v(" "),r("transition",{attrs:{name:"slide-fade",appear:"",duration:2e3}},[r("div",{staticClass:"product-section"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),t._l(t.crumbArr,(function(e,n){return r("el-breadcrumb-item",{key:n,class:{"crumb-item":n<t.crumbArr.length-1},attrs:{"data-index":n},nativeOn:{click:function(e){return t.crumbTap(e)}}},[t._v(t._s(e.name))])}))],2),t._v(" "),r("div",{staticClass:"cate-container"},[r("div",{staticClass:"current-name"},[t._v("\n\t\t\t\t\t\t"+t._s(t.curName)+"\n\t\t\t\t\t\t"),r("div",{staticClass:"line"},[r("a",{attrs:{href:"javascript:void(0);"},on:{click:t.backTap}},[t._v("返回上一级")])])]),t._v(" "),r("div",{staticClass:"cate-sec"},[t.cateData?r("ul",{staticClass:"cate-list"},t._l(t.cateData,(function(e,n){return r("li",{key:n,attrs:{"data-id":e.id,"data-pid":e.pid,"data-name":e.name},on:{click:t.cateTap}},[r("div",{staticClass:"wrap"},[r("span",[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"img"},[r("img",{attrs:{src:e.main_img_url[0],alt:""}})])])])})),0):r("CateLoading")],1)]),t._v(" "),r("page-product-list",{attrs:{options:t.productsData,totalNum:t.totalNum},on:{sortTap:t.priceSort,change:t.pageChange}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);