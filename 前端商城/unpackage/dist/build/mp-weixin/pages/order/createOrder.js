(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/createOrder"],{"028d":function(t,e,n){"use strict";var o=n("a71b"),i=n.n(o);i.a},"2b37":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},9929:function(t,e,n){"use strict";n.r(e);var o=n("dc96"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},a6c5:function(t,e,n){"use strict";n.r(e);var o=n("2b37"),i=n("9929");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("028d");var r=n("2877"),s=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},a71b:function(t,e,n){},dc96:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,o,i,a,r){try{var s=t[a](r),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(o,i)}function r(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var r=t.apply(e,n);function s(t){a(r,o,i,s,u,"next",t)}function u(t){a(r,o,i,s,u,"throw",t)}s(void 0)})}}var s={data:function(){return{coupon_id:0,save_cache:{},order_id:0,getimg:this.$getimg,maskState:0,desc:"",payType:1,yunfei_money:0,couponList:[],addressData:{},state:"",buy_data:"",address:"",paying:"",coupon_text:"选择优惠券",coupon_money:0,obj:{msg:"",order_from:"xcx",payment_type:"wx",total_price:"",shoping_price:"",coupon_price:"",coupon_id:0,discount:""}}},onLoad:function(e){if(this.state=e.state,"buy"==e.state){var n=t.getStorageSync("buy");this.buy_data=n}if("car"==e.state){var o=t.getStorageSync("cart"),i=[],a={},r=0;for(var s in o){var u=o[s];console.log(s,u),u.radio?(i[r]=u,r++):a[s]=u}this.buy_data=i,this.save_cache=a}console.log("onLoad",this.buy_data),this._load()},onShow:function(){var t=this;this.$api.http.get("address/get_default_address").then(function(e){t.address=e.data})},computed:{goods_money:function(){var t=this.buy_data,e=0;for(var n in t){var o=t[n];e+=o.price*o.num}return e},pay_money:function(){return this.goods_money+this.yunfei_money-this.coupon_money}},methods:{_load:function(){var t=this;console.log("load"),this.$api.http.get("coupon/user/get_coupon").then(function(e){t.couponList=e.data}),this.get_yunfei()},get_yunfei:function(){var t=this;console.log("get_yunfei",this.buy_data);var e=this.buy_data,n=[];for(var o in e){var i=e[o];n[o]={},n[o]["goods_id"]=i.goods_id,n[o]["num"]=i.num,console.log("v:",n)}console.log("get_obj",n),this.$api.http.post("product/get_shipment_price",n).then(function(e){t.yunfei_money=e.data})},toggleMask:function(t){var e=this,n="show"===t?10:300,o="show"===t?1:0;this.maskState=2,setTimeout(function(){e.maskState=o},n)},to_use:function(t){this.maskState=0,this.coupon_id=this.couponList[t].id?this.couponList[t].id:0;var e=this.couponList[t].reduce;this.coupon_money=e,this.coupon_text="已优惠"+e+"元"},cancel_use:function(){this.maskState=0,this.coupon_id=0,this.coupon_money=0,this.coupon_text="选择优惠券"},numberChange:function(t){this.number=t.number},changePayType:function(t){this.payType=t},set_order_data:function(){var t=this.obj;t.total_price=this.pay_money,t.shoping_price=this.yunfei_money,t.coupon_price=this.coupon_money,t.coupon_id=this.coupon_id;var e=this.buy_data,n={};for(var o in e){var i=e[o],a=i.goods_id;i.sku&&(a=i.goods_id+"-"+i.sku.id),n[a]=i,n[a].sku_id=0,i.sku&&(n[a].sku_id=i.sku.id),delete n[a].radio,delete n[a].sku,delete n[a].sku_name,delete n[a].goods_name}return t.json=n,console.log("obj",t),t},check_sub_data:function(){if(this.address){if(!this.paying){var t="";return t="order/create",console.log("url:",t),t}}else this.$api.msg("未填写地址")},submit:function(){var e=r(o.default.mark(function e(){var n,i,a,r;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this.check_sub_data(),n){e.next=3;break}return e.abrupt("return");case 3:return i=this.set_order_data(),this.paying=!0,e.next=7,this.$api.http.post(n,i).then(function(t){return t.data});case 7:return a=e.sent,this.order_id=a,"buy"==this.state?t.removeStorageSync("buy"):(t.removeStorageSync("cart"),t.setStorageSync("cart",this.save_cache)),e.next=12,this.$api.http.post("order/pay/pre_order",{id:a}).then(function(t){return console.log("pay:",t),t});case 12:return r=e.sent,e.next=15,this.pay(r);case 15:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),pay:function(e){var n=this.order_id;t.requestPayment({provider:"wxpay",timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign,success:function(e){console.log("success:"+JSON.stringify(e)),t.redirectTo({url:"/pages/user/myorder/myorder?id="+n})},fail:function(e){console.log("fail:"+JSON.stringify(e)),t.redirectTo({url:"/pages/user/myorder/myorder?id="+n})}})}},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},2e3)}};e.default=s}).call(this,n("543d")["default"])},fba8:function(t,e,n){"use strict";(function(t){n("c96d"),n("921b");o(n("66fd"));var e=o(n("a6c5"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["fba8","common/runtime","common/vendor"]]]);