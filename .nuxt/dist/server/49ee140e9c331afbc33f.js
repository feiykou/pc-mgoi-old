exports.ids=[15],exports.modules={115:function(t,e){},118:function(t,e,r){"use strict";r.r(e);var c=r(115),n=r.n(c);for(var d in c)"default"!==d&&function(t){r.d(e,t,function(){return c[t]})}(d);e.default=n.a},121:function(t,e,r){"use strict";var c=r(8),n={data:()=>({cateData:[]}),created(){console.log(2)},computed:{...Object(c.mapState)("cate",["productCate"])},methods:{handleOpen(t,e){this.$emit("menuTap"),console.log(t,e)},handleClose(t,e){this.$emit("menuTap"),console.log(t,e)}}},d=r(2);var component=Object(d.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"menu-box"},[t._ssrNode('<ul class="list-item">',"</ul>",[t._ssrNode("<li>","</li>",[r("router-link",{attrs:{to:"/theme"}},[t._v("猫的场景")])],1),t._ssrNode(" "),t._ssrNode("<li>","</li>",[r("router-link",{attrs:{to:"/theme"}},[t._v("狗的场景")])],1)],2),t._ssrNode(" "),r("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2"},on:{open:t.handleOpen,close:t.handleClose}},t._l(t.productCate,function(e,c){return r("div",{key:c},[r("div",{staticClass:"nav-name"},[t._v(t._s(e.name)),r("span")]),t._v(" "),t._l(e.son,function(e,n){return r("div",{key:n,staticClass:"group-wrap"},[r("div",{staticClass:"cate-name"},[r("span",[t._v(t._s(e.name))])]),t._v(" "),t._l(e.son,function(e,d){return r("el-submenu",{key:d,staticClass:"cate-list-wrap",attrs:{index:c+"-"+n+"-"+d}},[r("template",{slot:"title"},[r("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])]),t._v(" "),r("el-menu-item",{attrs:{index:c+"-"+n+"-"+d+"-100"}},[r("nuxt-link",{attrs:{to:{name:"product",query:{id:e.id,name:e.name}}}},[t._v("情感的全部产品")])],1),t._v(" "),t._l(e.son,function(e,o){return r("el-menu-item",{key:o,attrs:{index:c+"-"+n+"-"+d+"-"+o}},[r("nuxt-link",{attrs:{to:{name:"product",query:{id:e.id,name:e.name}}}},[t._v("- "+t._s(e.name))])],1)})],2)})],2)})],2)}),0)],2)},[],!1,function(t){var e=r(118);e.__inject__&&e.__inject__(t)},null,"d843db44");e.a=component.exports},136:function(t,e,r){"use strict";var c=r(1);e.a={getThemeDetail(t){if(!(t<=0))return c.a.fetchGet(`theme/${t}/detail`)},getThemeList:t=>c.a.fetchGet(`theme/list/${t}`)}},137:function(t,e){},160:function(t,e,r){"use strict";r.r(e);var c=r(137),n=r.n(c);for(var d in c)"default"!==d&&function(t){r.d(e,t,function(){return c[t]})}(d);e.default=n.a},175:function(t,e,r){"use strict";r.r(e);var c=r(121),n=r(136),d={data:()=>({catData:[],dogData:[],crumbArr:[{name:"产品分类",id:0}],curName:"产品分类"}),components:{Menu:c.a},created(){},async asyncData({isDev:t,route:e,store:r,env:c,params:d,query:o,req:l,res:_,redirect:m,error:v}){let[f,h]=await Promise.all([n.a.getThemeList(3),n.a.getThemeList(4)]);return f||v({statusCode:404,message:"页面加载失败，请重新加载"}),{catData:f,dogData:h}},fetch:({store:t})=>t.dispatch("cate/getProductCate"),methods:{}},o=r(2);var component=Object(o.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._ssrNode('<div class="content main-section" data-v-10aac65c>',"</div>",[t._ssrNode('<div class="cate-wrap menu-left-wrap" data-v-10aac65c>',"</div>",[r("Menu")],1),t._ssrNode(" "),t._ssrNode('<div class="product-section" data-v-10aac65c>',"</div>",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),t._l(t.crumbArr,function(e,c){return r("el-breadcrumb-item",{key:c,staticClass:"crumb-item",attrs:{"data-index":c},nativeOn:{click:function(e){return t.crumbTap(e)}}},[t._v(t._s(e.name))])})],2),t._ssrNode(" "),t._ssrNode('<div class="product-wrap" data-v-10aac65c>',"</div>",[t._ssrNode('<div class="theme-wrap" data-v-10aac65c>',"</div>",[t._ssrNode('<div class="title" data-v-10aac65c>猫的场景</div> '),t._ssrNode('<ul class="theme-list" data-v-10aac65c>',"</ul>",t._l(t.dogData,function(e,c){return t._ssrNode("<li data-v-10aac65c>","</li>",[t._ssrNode('<div class="img" data-v-10aac65c>',"</div>",[r("nuxt-link",{attrs:{to:"/theme/"+e.id}},[r("img",{attrs:{src:e.main_img_url[0],alt:""}})])],1),t._ssrNode(" "),t._ssrNode('<p class="tit" data-v-10aac65c>',"</p>",[r("nuxt-link",{attrs:{to:"/theme/"+e.id}},[t._v(t._s(e.name))])],1),t._ssrNode(' <p class="desc" data-v-10aac65c>'+t._ssrEscape(t._s(e.description))+"</p>")],2)}),0)],2),t._ssrNode(" "),t._ssrNode('<div class="theme-wrap" data-v-10aac65c>',"</div>",[t._ssrNode('<div class="title" data-v-10aac65c>狗的场景</div> '),t._ssrNode('<ul class="theme-list" data-v-10aac65c>',"</ul>",t._l(t.catData,function(e,c){return t._ssrNode("<li data-v-10aac65c>","</li>",[t._ssrNode('<div class="img" data-v-10aac65c>',"</div>",[r("nuxt-link",{attrs:{to:"/theme/"+e.id}},[r("img",{attrs:{src:e.main_img_url[0],alt:""}})])],1),t._ssrNode(" "),t._ssrNode('<p class="tit" data-v-10aac65c>',"</p>",[r("nuxt-link",{attrs:{to:"/theme/"+e.id}},[t._v(t._s(e.name))])],1),t._ssrNode(' <p class="desc" data-v-10aac65c>'+t._ssrEscape(t._s(e.description))+"</p>")],2)}),0)],2)],2)],2)],2)])},[],!1,function(t){var e=r(160);e.__inject__&&e.__inject__(t)},"10aac65c","4835ca1a");e.default=component.exports}};
//# sourceMappingURL=49ee140e9c331afbc33f.js.map