(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cms/order/detail/detail"],{"0b2c":function(t,e,o){"use strict";o.r(e);var n=o("53e0"),r=o("6f60");for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);o("dd6a");var d=o("2877"),i=Object(d["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"11a2":function(t,e,o){},"53e0":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,n=(t._self._c,o("24a8")),r=o("b813");t.$mp.data=Object.assign({},{$root:{m0:n,m1:r}})},r=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r})},"6f60":function(t,e,o){"use strict";o.r(e);var n=o("95b1"),r=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=r.a},7115:function(t,e,o){"use strict";(function(t){o("c96d"),o("921b");n(o("66fd"));var e=n(o("0b2c"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"95b1":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{getimg:this.$getimg,order_detail:"",order_pro:"",oid:"",total_price:""}},onLoad:function(t){this.oid=t.id,this._load()},methods:{send:function(e){t.navigateTo({url:"../send/send?id="+e})},_load:function(){var t=this;this.$api.http.post("order/mcms/get_order_one",{id:this.oid}).then(function(e){t.order_detail=e.data.order;for(var o=0,n=0;n<e.data.order.ordergoods.length;n++)o+=e.data.order.ordergoods[n].price*e.data.order.ordergoods[n].num;t.total_price=o.toFixed(2)})}},onPullDownRefresh:function(){this._load(),setTimeout(function(){t.stopPullDownRefresh()},2e3)}};e.default=o}).call(this,o("543d")["default"])},dd6a:function(t,e,o){"use strict";var n=o("11a2"),r=o.n(n);r.a}},[["7115","common/runtime","common/vendor"]]]);