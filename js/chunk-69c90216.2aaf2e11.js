(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69c90216"],{"0003":function(t,i,e){"use strict";e.d(i,"e",function(){return o}),e.d(i,"d",function(){return c}),e.d(i,"c",function(){return l}),e.d(i,"f",function(){return d}),e.d(i,"h",function(){return u}),e.d(i,"g",function(){return p}),e.d(i,"a",function(){return h}),e.d(i,"b",function(){return f});e("6b54");var n=e("901e"),a=e.n(n),r=function(t){return new a.a(t)},s=function(t,i,e){return r(t).times(r(i)).div(r(e))};function o(t){return a.a.isBigNumber(t)||(t=new a.a(t)),t.times(100).toString()}function c(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a.a.isBigNumber(t)||(t=new a.a(t)),!isFinite(t)||isNaN(t)?"--":e?t.toFixed(i,a.a.ROUND_DOWN).toString():t.toFixed(i).toString()}function l(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=c(o(t),i,e);return isFinite(n)&&new a.a(n).gt(0)?n:"--"}function d(t,i,e,n){return s(r(t),r(i),r(e)).minus(r(n))}function u(t,i,e,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return r(t).minus(s(r(i).plus(.001),r(e),r(n))).minus(r(a).times(1))}function p(t,i,e,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return r(t).minus(s(r(i),r(e),r(n))).minus(r(a).times(1))}function h(t,i,e){return s(r(e),t,i)}function f(t,i,e,n){for(var a=parseInt(e),o=a;o>0;o--){var c=s(o,t,i).lte(r(n));if(c)return o}for(var l=100;l>0;l--){var d=s(l/100,t,i).lte(r(n));if(d)return l/100}return 0}},"0849":function(t,i,e){},"14fb":function(t,i,e){"use strict";var n=e("d49b"),a=e.n(n);a.a},3478:function(t,i,e){"use strict";var n=e("7798"),a=e.n(n);a.a},"358c":function(t,i,e){"use strict";var n=e("e450"),a=e.n(n);a.a},"6f04":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container-maker"},[e("dai-confirmation-modal",{ref:"daiconfirmation",attrs:{opencdp:t.openCdp,txinfo:t.txInfo,"liquidation-price":t.liquidationPrice,"collat-ratio":t.displayFixedPercent(t.collatRatio),"liquidation-penalty":t.displayPercentValue(t.liquidationPenalty),"min-ratio":t.displayPercentValue(t.liquidationRatio),"current-price":t.displayFixedValue(t.ethPrice,2),collateral:t.ethQty.toString(),generate:t.daiQty.toString()}}),t.loading?e("loading-overlay",{attrs:{loadingmessage:t.$t("dappsMaker.creatingMessage")}}):t._e(),e("div",{staticClass:"manage-container"},[e("p",{staticClass:"top-title"},[t._v("\n      "+t._s(t.$t("dappsMaker.maker_title"))+"\n    ")]),e("p",{staticClass:"top-title-sub"},[t._v("\n      "+t._s(t.$t("dappsMaker.createInstruct"))+"\n    ")]),e("div",{staticClass:"currency-ops-new"},[e("div",{staticClass:"currency-picker-container"},[e("div",{staticClass:"interface__block-title"},[t._v("\n          "+t._s(t.$t("dappsMaker.collateral"))+"\n        ")]),t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.ethQty,expression:"ethQty"}],class:[t.hasEnoughEth?"":"red-border","currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:t.ethQty},on:{input:function(i){i.target.composing||(t.ethQty=i.target.value)}}}),e("div",{staticClass:"input-block-message"},[t.hasEnoughEth?t._e():e("p",{staticClass:"red-text"},[t._v("Not enough ETH")]),e("p",[t._v("\n            "+t._s(t.$t("dappsMaker.minCollat"))+"\n            "),e("b",[t._v(t._s(t.displayFixedValue(t.minEth,6)))]),t._v(" ETH\n          ")]),e("p",[t._v(t._s(t.displayFixedValue(t.depositInPeth,6))+" PETH")])])]),e("div",{staticClass:"arrow"},[e("img",{attrs:{src:t.arrowImage}})]),e("div",[e("div",{staticClass:"interface__block-title"},[t._v("\n          "+t._s(t.$t("dappsMaker.generate"))+"\n        ")]),t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.daiQty,expression:"daiQty"}],class:[t.veryRisky?"red-border":"",t.risky&&!t.veryRisky?"orange-border":"","currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:t.daiQty},on:{input:function(i){i.target.composing||(t.daiQty=i.target.value)}}}),e("div",{staticClass:"input-block-message"},[e("p",[t._v("\n            "+t._s(t.$t("dappsMaker.maxGenerate"))+"\n            "),e("b",[t._v(t._s(t.displayFixedValue(t.maxDaiDraw,6)))]),t._v(" DAI\n          ")])])])]),e("div",{staticClass:"cdp-info-block cdp-info-entry"},[e("ul",[e("li",[e("p",[t._v(t._s(t.$t("dappsMaker.minEthReq")))]),e("p",[t._v(t._s(t.displayFixedValue(t.minEth,6))+" ETH")])]),e("li",[e("p",[t._v(t._s(t.$t("dappsMaker.liquidPrice")))]),e("p",[e("b",[t._v(t._s(t.liquidationPrice))]),t._v(" USD\n          ")])]),e("li",[e("p",[t._v(t._s(t.$t("dappsMaker.currentPriceInfo")))]),e("p",[t._v(t._s(t.displayFixedValue(t.ethPrice,2))+" USD")])]),e("li",[e("p",[t._v(t._s(t.$t("dappsMaker.liquidationPenalty")))]),e("p",[t._v(t._s(t.displayPercentValue(t.liquidationPenalty))+"%")])]),e("li",[e("p",[t._v(t._s(t.$t("dappsMaker.collateralRatio")))]),e("p",{class:[t.veryRisky?"red-text":"",t.risky&&!t.veryRisky?"orange-text":""]},[e("b",[t._v(t._s(t.displayFixedPercent(t.collatRatio))+"%")])])]),e("li",[e("p",[t._v(t._s(t.$t("dappsMaker.minimumRatio")))]),e("p",[t._v(t._s(t.displayPercentValue(t.liquidationRatio))+"%")])])])]),e("div",{staticClass:"cdp-info-block cdp-info-entry"},[e("ul",[e("li",[e("p",[t._v("\n            "+t._s(t.$t("dappsMaker.stabilityFeeInMkr",{value:t.displayFixedPercent(t.stabilityFee).toString()}))+"\n          ")])])])]),e("div",{staticClass:"buttons-container"},[e("div",{class:[t.validInputs?"":"disabled","submit-button large-round-button-green-filled"],on:{click:t.openDaiConfirmation}},[t._v("\n        "+t._s(t.$t("dappsMaker.collatAndGenerate"))+"\n      ")])])])],1)},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"dropdown-text-container dropdown-container"},[e("p",[e("span",{staticClass:"cc ETH cc-icon currency-symbol"}),t._v("\n            ETH\n            "),e("span",{staticClass:"subname"},[t._v("- Ethereum ")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"dropdown-text-container dropdown-container"},[e("p",[e("span",{staticClass:"cc DAI cc-icon cc-icon-dai currency-symbol"}),t._v("\n            DAI\n            "),e("span",{staticClass:"subname"},[t._v("- Maker DAI ")])])])}],r=(e("96cf"),e("3b8d")),s=(e("6b54"),e("ac6a"),e("cebc")),o=e("2f62"),c=e("70c1"),l=e.n(c),d=e("55c1"),u=e("539d"),p=e("c8e5"),h=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"modal-container"},[n("b-modal",{ref:"modal",staticClass:"bootstrap-modal bootstrap-modal-wide padding-40-20",attrs:{title:t.$t("dappsMaker.DAIConfirmation"),centered:"","hide-footer":""}},[n("div",{staticClass:"modal-content-container"},[n("div",{staticClass:"tx-amount"},[n("div",[n("div",{staticClass:"interface__block-title"},[t._v("\n            "+t._s(t.$t("dappsMaker.collateral"))+"\n          ")]),n("div",{staticClass:"amount-block"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:e("9165")}})]),n("div",{staticClass:"amount"},[t._v(t._s(t.collateral)),n("span",[t._v("ETH")])])])]),n("div",{staticClass:"arrow"},[n("img",{attrs:{src:e("432e")}})]),n("div",[n("div",{staticClass:"interface__block-title"},[t._v("\n            "+t._s(t.$t("dappsMaker.generate"))+"\n          ")]),n("div",{staticClass:"amount-block"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:e("9b76")}})]),n("div",{staticClass:"amount"},[t._v(t._s(t.generate)),n("span",[t._v("DAI")])])])])]),n("div",{staticClass:"detail-info"},[n("expending-option",{attrs:{title:t.$t("dappsMaker.details")}},[n("ul",[n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.liquidPrice"))+" (ETH/USD)")]),n("p",{staticClass:"bold"},[t._v(t._s(t.liquidationPrice)+" USD")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.currentPrice"))+" (ETH/USD)")]),n("p",[t._v(t._s(t.currentPrice)+" USD")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.liquidationPenalty")))]),n("p",[t._v(t._s(t.liquidationPenalty)+"%")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.collateralRatio")))]),n("p",{staticClass:"bold"},[t._v(t._s(t.collatRatio)+" %")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.minimumRatio")))]),n("p",[t._v(t._s(t.minRatio)+"%")])])])])],1),n("div",{staticClass:"button-container"},[n("standard-button",{attrs:{options:t.confirmButton},nativeOn:{click:function(i){return t.confirmClicked(i)}}})],1)])])],1)},f=[],v=(e("c5f6"),e("75fb")),m=e("a8f0"),y={components:{"expending-option":v["a"],"standard-button":m["a"]},props:{opencdp:{type:Function,default:function(){}},liquidationPrice:{type:Number,default:0},collatRatio:{type:String,default:"Error"},liquidationPenalty:{type:String,default:"Error"},minRatio:{type:String,default:"Error"},currentPrice:{type:String,default:"Error"},collateral:{type:String,default:"Error"},generate:{type:String,default:"Error"}},data:function(){return{confirmButton:{title:this.$t("dappsMaker.confirmAndCreate"),buttonStyle:"green",helpCenter:!0}}},computed:{},watch:{},mounted:function(){},methods:{confirmClicked:function(){this.opencdp()}}},g=y,_=(e("3478"),e("2877")),b=Object(_["a"])(g,h,f,!1,null,"5eeb4b2c",null),k=b.exports,C=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"loading-overlay"},[e("div",{staticClass:"loading-sign"},[e("loading-sign",{attrs:{loadingmessage1:t.loadingmessage,color:"white"}})],1)])},P=[],w=e("c1be"),x={components:{"loading-sign":w["a"]},props:{loadingmessage:{type:String,default:""}},data:function(){return{}}},R=x,E=(e("358c"),Object(_["a"])(R,C,P,!1,null,"2bfe5986",null)),$=E.exports,D=e("0003"),Q=e("901e"),M=e.n(Q),S=e("cc82"),q=e.n(S),F=function(t){return new M.a(t)},I=function(t,i,e){return F(t).times(F(i)).div(F(e))},O={components:{"interface-container-title":d["a"],"interface-bottom-text":u["a"],blockie:p["a"],"dai-confirmation-modal":k,"loading-overlay":$},props:{tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},highestGas:{type:String,default:"0"},ethPrice:{type:M.a,default:F(0)},pethPrice:{type:M.a,default:F(0)},liquidationPenalty:{type:M.a,default:F(0)},stabilityFee:{type:M.a,default:F(0)},liquidationRatio:{type:M.a,default:F(0)},wethToPethRatio:{type:M.a,default:F(0)},pethMin:{type:M.a,default:F(0)},priceService:{type:Object,default:function(){return{}}},cdpService:{type:Object,default:function(){return{}}},proxyService:{type:Object,default:function(){return{}}},buildEmpty:{type:Function,default:function(){}},values:{type:Object,default:function(){return{maxPethDraw:"",maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",pethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:"",stabilityFee:"",minEth:"",liquidationRatio:"",wethToPethRatio:"",liquidationPenalty:"",targetPrice:"",pethPrice:""}}}},data:function(){return{arrowImage:q.a,daiPrice:0,priceFloor:0,ethQty:0,daiQty:0,txInfo:{},loading:!1}},computed:Object(s["a"])({},Object(o["b"])(["account","gasPrice","web3","network","ens"]),{validInputs:function(){return!F(this.ethQty).isNaN()&&!F(this.daiQty).isNaN()&&(!!F(this.ethQty).gt(0)&&(!F(this.ethQty).lte(this.values.minEth)&&(!F(this.maxDaiDraw).lte(F(this.daiQty))&&(!F(this.collatRatio).lte(1.501)&&F(l.a.toWei(this.ethQty,"ether").toString()).lte(this.account.balance)))))},hasEnoughEth:function(){return!F(this.ethQty).isNaN()&&F(l.a.toWei(this.ethQty,"ether").toString()).lte(this.account.balance)},atSetFloor:function(){return this.priceFloor<=0?0:I(this.ethPrice,this.liquidationRatio,this.priceFloor)},collatRatio:function(){return this.daiQty<=0||this.ethQty<=0?0:this.calcCollatRatio(this.ethQty,this.daiQty)},liquidationPrice:function(){return this.daiQty<=0||this.ethQty<=0?0:this.calcLiquidationPrice(this.ethQty,this.daiQty)},maxDaiDraw:function(){if(this.ethQty<=0)return 0;var t=this.calcDaiDraw(this.ethQty).times(.01);return F(this.calcDaiDraw(this.ethQty)).minus(t)},minEthDeposit:function(){return this.daiQty<=0?0:this.calcMinEthDeposit(this.daiQty)},risky:function(){var t=this.collatRatio;return!!F(t).gt(0)&&F(t).lte(2)},veryRisky:function(){var t=this.collatRatio;return!!F(t).gt(0)&&F(t).lte(1.75)},depositInPeth:function(){return this.ethQty<=0?0:this.toPeth(this.ethQty)},minEth:function(){return this.wethToPethRatio?F(this.pethMin).times(this.wethToPethRatio):"--"}}),mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.buildEmptyInstance();case 1:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}(),methods:{buildEmptyInstance:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.buildEmpty();case 2:this.makerCDP=t.sent,this.$forceUpdate();case 4:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}(),displayPercentValue:D["e"],displayFixedValue:D["d"],displayFixedPercent:D["c"],openCdp:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,!(this.ethQty<=0)){t.next=3;break}return t.abrupt("return",0);case 3:return setTimeout(function(){i.loading=!1},5e3),this.$eventHub.$on("showTxConfirmModal",function(){i.$emit("cdpOpened"),i.loading&&(i.$refs.daiconfirmation.$refs.modal.hide(),i.loading=!1)}),t.next=7,this.makerCDP.openCdp(this.ethQty,this.daiQty);case 7:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}(),openDaiConfirmation:function(){this.$refs.daiconfirmation.$refs.modal.show()},toUSD:function(t){if(void 0===t||null===t)return F(0);var i=this.ethPrice.times(F(t));return i.lt(0)?F(0):i},toPeth:function(t){return F(t).eq(0)?F(0):F(t).div(this.wethToPethRatio)},fromPeth:function(t){return F(t).eq(0)?F(0):F(t).times(this.wethToPethRatio)},calcMinCollatRatio:function(t){return I(this.ethPrice,this.liquidationRatio,t)},calcDaiDraw:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ethPrice,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.liquidationRatio;return t<=0?0:I(i,F(t),e)},calcMinEthDeposit:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ethPrice,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.liquidationRatio;return t<=0?0:I(e,t,i)},calcCollatRatio:function(t,i){return t<=0||i<=0?0:I(this.ethPrice,t,i)},calcLiquidationPrice:function(t,i){if(t<=0||i<=0)return 0;for(var e=parseInt(this.ethPrice),n=e;n>0;n--){var a=I(n,t,i).lte(this.liquidationRatio);if(a)return n}for(var r=100;r>0;r--){var s=I(r/100,t,i).lte(this.liquidationRatio);if(s)return r/100}return 0}}},T=O,N=(e("b5ed"),Object(_["a"])(T,n,a,!1,null,"b36da01c",null)),j=N.exports;i["default"]=j},7798:function(t,i,e){},b5ed:function(t,i,e){"use strict";var n=e("0849"),a=e.n(n);a.a},c1be:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"loading-sign"},[e("div",{staticClass:"loading-container",class:t.color},[t._m(0),""!=t.loadingmessage1?e("p",{staticClass:"loading-message1"},[t._v("\n      "+t._s(t.loadingmessage1)+"\n    ")]):t._e(),""!=t.loadingmessage2?e("p",{staticClass:"loading-message2"},[t._v("\n      "+t._s(t.loadingmessage2)+"\n    ")]):t._e()])])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"lds-spinner"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])}],r={name:"LoadingSign",components:{},props:{type:{type:String,default:""},loadingmessage1:{type:String,default:""},loadingmessage2:{type:String,default:""},color:{type:String,default:"black"}},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}},s=r,o=(e("14fb"),e("2877")),c=Object(o["a"])(s,n,a,!1,null,"48638ccc",null),l=c.exports;e.d(i,"a",function(){return l})},d49b:function(t,i,e){},e450:function(t,i,e){}}]);
//# sourceMappingURL=chunk-69c90216.2aaf2e11.js.map