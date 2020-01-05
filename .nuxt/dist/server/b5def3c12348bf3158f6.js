exports.ids=[14],exports.modules={120:function(t,e){},123:function(t,e,r){"use strict";var n={name:"product-item",props:{productData:Object,simple:{type:Boolean,default:!1},label:{type:Boolean,default:!0},width:{type:String}}},c=r(3);var component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item-wrap"},[t._ssrNode('<div class="img hover-class" data-v-1a9b8e29>',"</div>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[r("img",{attrs:{src:t.productData.main_img_url[0],alt:"",srcset:""}})])],1),t._ssrNode(" "),t._ssrNode('<div class="tit-price" data-v-1a9b8e29>',"</div>",[t._ssrNode('<p class="tit" data-v-1a9b8e29>',"</p>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v(t._s(t.productData.name))])],1),t._ssrNode(" "+(t.label?'<p class="label" data-v-1a9b8e29>'+t._ssrEscape(t._s(t.productData.name_desc))+"</p>":"\x3c!----\x3e")+' <p class="price" data-v-1a9b8e29>'+t._ssrEscape("￥"+t._s(t.productData.price)+" 蚊")+"</p>")],2),t._ssrNode(" "),t.simple?t._e():r("m-button",{attrs:{name:"查看详情",type:"hellow-primary",size:"size",to:"/product/"+t.productData.id}})],2)}),[],!1,(function(t){var e=r(124);e.__inject__&&e.__inject__(t)}),"1a9b8e29","ea3fd132");e.a=component.exports},124:function(t,e,r){"use strict";r.r(e);var n=r(120),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},131:function(t,e){},132:function(t,e){e.gridGroup=function(t,e=4){let r=[],n=[];if(t&&t.forEach((t,c)=>{n.push(t),c%e==e-1&&(r.push(n),n=[])}),n.length>0){if(e>n.length)for(let i=0,t=n.length;i<e-t;i++)n.push({seize:!0});r.push(n)}return n=null,r}},138:function(t,e,r){"use strict";r.r(e);var n=r(131),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},140:function(t,e,r){"use strict";let n=null;var c={name:"multiple-banner",props:{size:Number,height:{type:String,default:"300px"},dotShow:{type:Boolean,default:!0}},data:()=>({width:100,curIndex:0}),created(){this.aniateWidth()},methods:{bannerChange(t){this.curIndex=t,this.aniateWidth()},aniateWidth(){this.width=100,clearInterval(n);let t=100;n=setInterval(()=>{(t-=2)<=0&&(t=0,clearInterval(n)),this.width=t},20)}}},o=r(3);var component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mul-banner"},[r("el-carousel",{attrs:{interval:4e3,height:t.height,autoplay:!0,arrow:t.size>1?"always":"never","indicator-position":"none"},on:{change:t.bannerChange}},t._l(t.size,(function(e,n){return r("el-carousel-item",{key:n},[t._t(n)],2)})),1),t._ssrNode(" "+(t.dotShow?'<div class="dot-wrap" data-v-3900aa5c><ul class="dots" data-v-3900aa5c>'+t._ssrList(t.size,(function(e){return"<li data-v-3900aa5c>"+(t.curIndex==e-1?"<i"+t._ssrStyle(null,{transform:"translate3d(-"+t.width+"%,0,0)"},null)+" data-v-3900aa5c></i>":"\x3c!----\x3e")+"</li>"}))+"</ul></div>":"\x3c!----\x3e"))],2)}),[],!1,(function(t){var e=r(138);e.__inject__&&e.__inject__(t)}),"3900aa5c","86a23a7a");e.a=component.exports},164:function(t,e){},165:function(t,e){},194:function(t,e,r){t.exports=r.p+"img/8f568c9.png"},195:function(t,e,r){t.exports=r.p+"img/a3e9b8c.png"},196:function(t,e,r){t.exports=r.p+"img/d3e133d.png"},197:function(t,e,r){"use strict";r.r(e);var n=r(164),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},198:function(t,e,r){"use strict";r.r(e);var n=r(165),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},210:function(t,e,r){"use strict";r.r(e);var n=r(140),c=r(123),o=r(132),l={name:"product-list",props:{options:Array},data:()=>({productData:[]}),watch:{options:{immediate:!0,handler(t){this.productData=Object(o.gridGroup)(t,5),console.log(this.productData)}}},components:{MultipleBanner:n.a,ProductItem:c.a}},d=r(3);var v=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-list-container"},[r("multiple-banner",{attrs:{size:t.productData.length,height:"340px","dot-show":!1}},t._l(t.productData,(function(e,n){return r("div",{key:n,staticClass:"product-list",attrs:{slot:n},slot:n},t._l(e,(function(e,n){return e.seize?t._e():r("product-item",{key:n,attrs:{productData:e}})})),1)})),0)],1)}),[],!1,(function(t){var e=r(197);e.__inject__&&e.__inject__(t)}),"2261df14","d634e11c").exports,_=r(38),m={data:()=>({activeName:"first",productData:null,rescProduct:[],currentIndex:0,propVal:[],centerDialogVisible:!1,shareShow:!1,scroll:{isFixed:!1,offsetTop:0,cateOffsetTop:0}}),components:{ProductList:v},created(){},mounted(){},async asyncData({params:t,error:e}){const r=Number(t.id);let[n,c]=await Promise.all([_.a.getProductDetail(r),_.a.getRescProduct(5,5,r)]);return n||e({statusCode:404,message:"页面加载失败，请重新加载"}),{productData:n,rescProduct:c}},head(){return this.$seo(`${this.productData.name} - 唔该`,"正处于萌芽阶段")},validate:({params:t})=>/^\d+$/.test(t.id),methods:{buyBtnTap(t){this.centerDialogVisible=!this.centerDialogVisible},shareBtnTap(){this.shareShow=!this.shareShow},dotTap(t){const e=t.currentTarget.dataset.index;this.currentIndex=Number(e),this.$refs.banner.setActiveItem(this.currentIndex)},bannerChange(t){this.currentIndex=Number(t)},handleClick(t,e){console.log(t,e)}}};var f=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-fade",appear:"",duration:2e3}},[t.productData?n("div",{staticClass:"container content product-detail-container"},[n("div",{staticClass:"main-section product-main-section"},[n("div",{staticClass:"product-left"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),n("el-breadcrumb-item",{attrs:{to:{path:"/product"}}},[t._v("产品列表")]),t._v(" "),n("el-breadcrumb-item",[t._v(t._s(t.productData.name))])],1),t._v(" "),n("div",{staticClass:"detail-banner"},[n("div",{staticClass:"banner-wrap"},[n("el-carousel",{ref:"banner",attrs:{interval:5e3,height:"640px",setActiveItem:t.currentIndex,"indicator-position":"none",arrow:"always"},on:{change:t.bannerChange}},t._l(t.productData.imgs_url,(function(t,e){return n("el-carousel-item",{key:e},[n("img",{attrs:{src:t,alt:"",srcset:""}})])})),1)],1),t._v(" "),n("ul",{staticClass:"banner-indicator"},t._l(t.productData.imgs_url,(function(e,r){return n("li",{key:r,class:{active:r==t.currentIndex},attrs:{"data-index":r},on:{click:t.dotTap}},[n("img",{attrs:{src:e,alt:"",srcset:""}})])})),0)]),t._v(" "),n("div",{staticClass:"product-detail-section"},[n("div",{staticClass:"detail-wrap"},[n("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"商品的基本信息",name:"first"}},[n("h2",{staticClass:"h2-tit"},[t._v("商品说明")]),t._v(" "),n("div",{staticClass:"product-detail-info",domProps:{innerHTML:t._s(t.productData.content)}})]),t._v(" "),n("el-tab-pane",{attrs:{label:"产品的规格",name:"second"}},[n("div",{staticClass:"product-spec",domProps:{innerHTML:t._s(t.productData.spec)}})]),t._v(" "),n("el-tab-pane",{attrs:{label:"注意事项",name:"third"}},[n("div",{staticClass:"product-notice",domProps:{innerHTML:t._s(t.productData.notice)}})])],1)],1)]),t._v(" "),n("div",{staticClass:"comment-section"},[n("h2",[t._v("用户评论")]),t._v(" "),n("div",{staticClass:"comment-con"},[t.productData.comment?n("div",{staticClass:"comment-detail",domProps:{innerHTML:t._s(t.productData.comment)}}):n("div",{staticClass:"no-comment"},[n("p",[t._v("此产品暂无评论")])])])])],1),t._v(" "),n("div",{staticClass:"product-right product-info product_info_fixed",attrs:{id:"product-fixed"}},[n("h1",{staticClass:"title"},[t._v(t._s(t.productData.name)+"刺绣吊牌刺绣吊牌")]),t._v(" "),n("p",{staticClass:"price"},[t._v("￥"+t._s(t.productData.price)+" 蚊")]),t._v(" "),n("div",{staticClass:"info"},[n("p",[n("span",[t._v("介绍：")]),t._v(t._s(t.productData.introduce))]),t._v(" "),n("p",[n("span",[t._v("商品编号：")]),t._v("999999999")]),t._v(" "),n("p",[n("span",[t._v("在库情况：")]),t._v(t._s(t.productData.stock>0?"有货":"缺货"))])]),t._v(" "),n("div",{staticClass:"btn-wrap"},[n("m-button",{attrs:{name:"点击购买",type:"primary",size:"size"},on:{btnClick:t.buyBtnTap}},[n("i",{staticClass:"iconfont font20",attrs:{slot:"icon"},slot:"icon"},[t._v("")])]),t._v(" "),n("m-button",{directives:[{name:"anchor",rawName:"v-anchor",value:1,expression:"1"}],attrs:{name:"礼品服务",size:"size"}},[n("i",{staticClass:"iconfont font18",attrs:{slot:"icon"},slot:"icon"},[t._v("")])]),t._v(" "),n("m-button",{attrs:{name:"回到首页",size:"size",to:"/"}},[n("i",{staticClass:"iconfont font18",attrs:{slot:"icon"},slot:"icon"},[t._v("")])]),t._v(" "),n("m-button",{attrs:{name:"分享页面",size:"size"},on:{btnClick:t.shareBtnTap}},[n("i",{staticClass:"iconfont font18",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])],1)])]),t._v(" "),n("div",{staticClass:"gift-wrap",attrs:{id:"anchor-1"}},[n("img",{attrs:{src:"/images/gift_wrapping.jpg"}})]),t._v(" "),n("div",{staticClass:"resc-wrap"},[n("div",{staticClass:"tit"},[t._v("推荐产品")]),t._v(" "),t.rescProduct.length>0?n("product-list",{attrs:{options:t.rescProduct}}):t._e()],1),t._v(" "),n("el-dialog",{attrs:{visible:t.centerDialogVisible,width:"28%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[n("ul",{staticClass:"buy-type"},[n("li",[n("a",{attrs:{href:t.productData.link_url,target:"_blank"}},[n("img",{attrs:{src:r(194)}}),t._v("端跳转至淘宝")])]),t._v(" "),n("li",{staticClass:"wx-buy-btn"},[n("el-button",{directives:[{name:"popover",rawName:"v-popover:wx",arg:"wx"}]},[n("img",{attrs:{src:r(195)}}),t._v("小程序购买")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:volid(0);",target:"_blank"}},[n("img",{attrs:{src:r(196)}}),t._v("小红书购买")])])]),t._v(" "),n("el-popover",{ref:"wx",attrs:{placement:"left",title:"",width:"200",trigger:"hover",content:""}},[n("div",{staticClass:"code-wrap"},[n("img",{attrs:{src:t.productData.code_img,alt:"",srcset:""}}),t._v(" "),n("p",[t._v("（微信扫一扫 进行支付）")])])])],1),t._v(" "),n("el-dialog",{attrs:{visible:t.shareShow,width:"28%",center:""},on:{"update:visible":function(e){t.shareShow=e}}},[n("ul",{staticClass:"share-info-list"},[n("li",[t._v("微博")]),t._v(" "),n("li",[t._v("小红书")]),t._v(" "),n("li",[t._v("头条")])])])],1):t._e()])}),[],!1,(function(t){var e=r(198);e.__inject__&&e.__inject__(t)}),null,"dec0c136");e.default=f.exports}};