(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0656ae1b"],{"0003":function(e,t,r){"use strict";r.d(t,"e",function(){return o}),r.d(t,"d",function(){return u}),r.d(t,"c",function(){return c}),r.d(t,"f",function(){return d}),r.d(t,"h",function(){return l}),r.d(t,"g",function(){return h}),r.d(t,"a",function(){return p}),r.d(t,"b",function(){return m});r("6b54");var s=r("901e"),i=r.n(s),a=function(e){return new i.a(e)},n=function(e,t,r){return a(e).times(a(t)).div(a(r))};function o(e){return i.a.isBigNumber(e)||(e=new i.a(e)),e.times(100).toString()}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return i.a.isBigNumber(e)||(e=new i.a(e)),!isFinite(e)||isNaN(e)?"--":r?e.toFixed(t,i.a.ROUND_DOWN).toString():e.toFixed(t).toString()}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=u(o(e),t,r);return isFinite(s)&&new i.a(s).gt(0)?s:"--"}function d(e,t,r,s){return n(a(e),a(t),a(r)).minus(a(s))}function l(e,t,r,s){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return a(e).minus(n(a(t).plus(.001),a(r),a(s))).minus(a(i).times(1))}function h(e,t,r,s){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return a(e).minus(n(a(t),a(r),a(s))).minus(a(i).times(1))}function p(e,t,r){return n(a(r),e,t)}function m(e,t,r,s){for(var i=parseInt(r),o=i;o>0;o--){var u=n(o,e,t).lte(a(s));if(u)return o}for(var c=100;c>0;c--){var d=n(c/100,e,t).lte(a(s));if(d)return c/100}return 0}},"06a0":function(e,t,r){},"0ef2":function(e,t,r){"use strict";var s=r("ee5d"),i=r.n(s);i.a},"2cbc":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-container"},[r("b-modal",{ref:"modal",staticClass:"bootstrap-modal nopadding",attrs:{title:e.$t("dappsMaker.moveTitle"),"hide-footer":"",centered:""}},[r("div",{staticClass:"modal-content"},[r("p",{staticClass:"top-text"},[e._v("\n        "+e._s(e.$t("dappsMaker.moveNotice"))+"\n      ")]),r("check-box",{on:{changeStatus:e.checkBoxClicked},scopedSlots:e._u([{key:"terms",fn:function(){return[r("p",{staticClass:"checkbox-label"},[e._v("\n            "+e._s(e.$t("dappsMaker.understandAndAgree"))+"\n          ")])]},proxy:!0}])}),r("div",{staticClass:"input-container"},[r("label",[e._v(e._s(e.$t("dappsMaker.moveQuestion")))]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})])]),r("div",{staticClass:"buttons"},[r("standard-button",{attrs:{options:e.cancelButton},nativeOn:{click:function(t){return e.closeModal(t)}}}),r("standard-button",{attrs:{options:e.submitButton,"button-disabled":!e.btnActive,"click-function":e.moveCdp}})],1),r("help-center-button")],1)])],1)},i=[],a=(r("96cf"),r("3b8d")),n=(r("6b54"),r("cebc")),o=r("2f62"),u=r("a8f0"),c=r("76ed"),d=r("e8aa"),l=r("901e"),h=r.n(l),p=r("ce96"),m={components:{"check-box":d["a"],"help-center-button":c["a"],"standard-button":u["a"]},props:{tokensWithBalance:{type:Array,default:function(){return[]}},action:{type:String,default:""},values:{type:Object,default:function(){return{maxPethDraw:"",maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",pethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:""}}}},data:function(){return{address:"",amountEth:0,amountDai:0,govFee:0,modalDetailInformation:!1,checkBoxChecked:!1,textValues:{},mkrToken:{},cancelButton:{title:"Cancel",buttonStyle:"green-border",noMinWidth:!0},submitButton:{title:"Submit",buttonStyle:"green",noMinWidth:!0,fullWidth:!0}}},computed:Object(n["a"])({},Object(o["b"])(["account","gasPrice","web3","network","ens"]),{btnActive:function(){return p["c"].isValidETHAddress(this.address)&&this.checkBoxChecked}}),watch:{},mounted:function(){var e=this;this.$refs.modal.$on("shown",function(){e.address=""})},methods:{closeCdp:function(){this.activeCdp.closeCdp()},checkBoxClicked:function(){this.checkBoxChecked=!this.checkBoxChecked},displayPercentValue:function(e){return h.a.isBigNumber(e)||(e=new h.a(e)),e.times(100).toString()},displayFixedValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return h.a.isBigNumber(e)||(e=new h.a(e)),e.toFixed(t,h.a.ROUND_DOWN).toString()},moveCdp:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:p["c"].isValidETHAddress(this.address)&&(this.$emit("moveCdp",this.address),this.closeModal());case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),closeModal:function(){this.$refs.modal.hide()}}},f=m,v=(r("e01a"),r("2877")),b=Object(v["a"])(f,s,i,!1,null,"bb206026",null),w=b.exports;r.d(t,"a",function(){return w})},"42ea":function(e,t,r){"use strict";var s,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-container"},[r("b-modal",{ref:"modal",staticClass:"bootstrap-modal bootstrap-modal-wide padding-40-20",attrs:{title:"Swap Widget",centered:"","hide-footer":""}},[r("div",{staticClass:"swap-container"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.bityExitToFiat,expression:"!bityExitToFiat"}]},[r("swap-confirmation-modal",{ref:"swapConfirmation",attrs:{"selected-provider":e.selectedProvider,"swap-details":e.swapDetails,"current-address":e.currentAddress},on:{swapStarted:e.resetSwapState}}),r("swap-send-to-modal",{ref:"swapSendTo",attrs:{"selected-provider":e.selectedProvider,"swap-details":e.swapDetails,"current-address":e.currentAddress},on:{swapStarted:e.resetSwapState}}),r("div",{staticClass:"form-content-container"},[r("div",{staticClass:"send-form"},[r("div",{staticClass:"form-block amount-to-address"},[r("div",{staticClass:"amount"},[r("div",{staticClass:"title title-and-copy"},[r("h4",[e._v(e._s(e.$t("common.from")))]),e.tokenBalances[e.fromCurrency]>0?r("p",{staticClass:"all-button prevent-user-select",on:{click:e.swapAll}},[e._v("\n                    "+e._s(e.$t("common.totalBalance"))+"\n                  ")]):e._e()]),r("swap-currency-picker",{attrs:{currencies:e.fromArray,"override-currency":e.overrideFrom,"from-source":!0,selectable:!e.isWidget,page:"SwapContainerFrom"},on:{selectedCurrency:e.setFromCurrency}}),r("div",{staticClass:"the-form amount-number"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fromValue,expression:"fromValue"}],attrs:{type:"number",name:"",value:"",step:"any",placeholder:"Deposit Amount"},domProps:{value:e.fromValue},on:{input:[function(t){t.target.composing||(e.fromValue=t.target.value)},function(t){return e.amountChanged("from")}]}})]),r("div",{staticClass:"error-message-container"},[e.fromBelowMinAllowed?r("p",[e._v(e._s(e.fromBelowMinAllowed))]):e._e(),e.hasEnough||e.fromBelowMinAllowed?e._e():r("p",[e._v("\n                    "+e._s(e.$t("common.dontHaveEnough"))+"\n                  ")]),e.fromAboveMaxAllowed?r("p",[e._v(e._s(e.fromAboveMaxAllowed))]):e._e()])],1),r("div",{staticClass:"exchange-icon",on:{click:e.flipCurrencies}},[r("img",{attrs:{src:e.images.swap}})]),r("div",{staticClass:"amount"},[r("div",{staticClass:"title"},[r("h4",[e._v(e._s(e.$t("common.to")))])]),r("swap-currency-picker",{attrs:{currencies:e.toArray,"override-currency":e.overrideTo,"from-source":!1,selectable:!e.isWidget,page:"SwapContainerTo"},on:{selectedCurrency:e.setToCurrency}}),r("div",{staticClass:"the-form amount-number"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.toValue,expression:"toValue"}],attrs:{type:"number",name:"",value:"",step:"any",placeholder:"Received Amount"},domProps:{value:e.toValue},on:{input:[function(t){t.target.composing||(e.toValue=t.target.value)},function(t){return e.amountChanged("to")}]}})]),r("div",{staticClass:"error-message-container"},[e.toBelowMinAllowed?r("p",[e._v(e._s(e.toBelowMinAllowed))]):e._e(),e.toAboveMaxAllowed?r("p",[e._v(e._s(e.toAboveMaxAllowed))]):e._e()])],1)])]),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isExitToFiat,expression:"!isExitToFiat"}],staticClass:"send-form"},[r("div",{staticClass:"the-form gas-amount"},[r("drop-down-address-selector",{attrs:{currency:e.toCurrency,"current-address":e.currentAddress,copybutton:!0,title:e.$t("common.toAddress"),"pre-fill":!0,"pre-fill-address":e.destAddress},on:{toAddress:e.setToAddress,validAddress:function(t){e.validAddress=t}}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.validAddress,expression:"!validAddress"}],staticClass:"error-message-container"},[r("p",[e._v("\n                "+e._s(e.$t("interface.notValidAddr",{currency:e.toCurrency}))+"\n              ")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isExitToFiat&&e.fromCurrency!==e.baseCurrency,expression:"isExitToFiat && fromCurrency !== baseCurrency"}],staticClass:"send-form"},[r("div",{staticClass:"the-form gas-amount"},[r("drop-down-address-selector",{attrs:{currency:e.fromCurrency,"current-address":e.currentAddress,copybutton:!0,title:e.$t("interface.fromAddr")},on:{toAddress:e.setExitFromAddress,validAddress:function(t){e.validExitAddress=t}}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.validExitAddress,expression:"!validExitAddress"}],staticClass:"error-message-container"},[r("p",[e._v("\n                "+e._s(e.$t("interface.notValidAddrSrc",{currency:e.fromCurrency}))+"\n              ")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showRefundAddress,expression:"showRefundAddress"}],staticClass:"send-form"},[r("div",{staticClass:"the-form gas-amount"},[r("drop-down-address-selector",{attrs:{currency:e.fromCurrency,"current-address":e.currentAddress,copybutton:!0,title:e.$t("interface.refund",{currency:e.fromCurrency})},on:{toAddress:e.setRefundAddress,validAddress:function(t){e.validRefundAddress=t}}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.validRefundAddress,expression:"!validRefundAddress"}],staticClass:"error-message-container"},[r("p",[e._v("\n                "+e._s(e.$t("interface.notValidAddr",{currency:e.fromCurrency}))+"\n              ")])])]),r("div",{staticClass:"send-form"},[r("div",{staticClass:"title-container"},[r("div",{staticClass:"title title-and-copy"},[r("h4",[e._v(e._s(e.$t("interface.providers")))])])]),r("providers-radio-selector",{attrs:{"loading-provider-error":e.loadingError,"loading-provider-rates":!e.haveProviderRates,"provider-data":e.providerList,"from-value":+e.fromValue,"to-value":+e.toValue,"no-providers-pair":e.noProvidersPair,"loading-data":e.loadingData,"providers-found":e.providersFound,"provider-selected":e.selectedProvider,"switch-currency-order":e.switchCurrencyOrder,"all-supported-providers":e.supportedProviders},on:{selectedProvider:e.setSelectedProvider}})],1),r("div",{staticClass:"submit-button-container"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.finalizingSwap,expression:"finalizingSwap"}],staticClass:"disabled submit-button large-round-button-green-filled clickable"},[r("i",{staticClass:"fa fa-spinner fa-spin"}),e._v("\n              "+e._s(e.$t("interface.swapButtonLoading"))+"\n            ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.finalizingSwap,expression:"!finalizingSwap"}],class:[e.validSwap?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:e.swapConfirmationModalOpen}},[e._v("\n              "+e._s(e.$t("common.continue"))+"\n              "),r("i",{staticClass:"fa fa-long-arrow-right",attrs:{"aria-hidden":"true"}})]),r("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1),e.bityExitToFiat?r("swap-exit-to-fiat",{attrs:{"swap-details":e.swapDetails,"exit-from-address":e.exitSourceAddress,"exit-to-fiat-callback":e.exitToFiatCallback},on:{backButtonClick:e.exitToFiatAbort}}):e._e()],1)])],1)},a=[],n=(r("ac6a"),r("5df3"),r("6b54"),r("96cf"),r("3b8d")),o=r("bd86"),u=(r("6762"),r("2fdb"),r("75fc")),c=(r("7514"),r("cebc")),d=(r("7f7f"),r("c5f6"),r("901e")),l=r.n(d),h=r("34eb"),p=r.n(h),m=r("2f62"),f=r("ce96"),v=r("16c6"),b=r("12fd"),w=r("539d"),y=r("55c1"),C=r("979e"),g=r.n(C),k=r("6822"),x=r.n(k),A=r("458a"),V=r.n(A),T=r("b8b3"),M=r.n(T),_=r("ba84"),R=r("3d8e"),D=r("5766"),F=r("aeba"),B=r("b643"),E=p()("v5:swapContainer"),$=function(e){return new l.a(e)},O={components:{"interface-bottom-text":w["a"],"interface-container-title":y["a"],"swap-currency-picker":_["a"],"drop-down-address-selector":b["a"],"providers-radio-selector":v["a"],"swap-confirmation-modal":R["a"],"swap-exit-to-fiat":D["a"],"swap-send-form":D["a"],"swap-send-to-modal":F["a"]},props:{tokensWithBalance:{type:Array,default:function(){return[]}},suppliedFrom:{type:Object,default:function(){return{symbol:"ETH",name:"Ethereum"}}},suppliedTo:{type:Object,default:function(){return{symbol:"BTC",name:"Bitcoin"}}},suppliedToAmount:{type:Number,default:0},destAddress:{type:String,default:""},isWidget:{type:Boolean,default:!0}},data:function(){return{baseCurrency:B["a"],toAddress:"",currentAddress:"",refundAddress:"",exitFromAddress:"",fromCurrency:"ETH",toCurrency:"ETH",displayToValue:1,displayFromValue:1,fromValue:1,toValue:1,invalidFrom:"none",lastBestRate:0,selectedProvider:{},swapDetails:{},currencyDetails:{},swap:new B["e"](B["m"],{network:this.$store.state.network.type.name,web3:this.$store.state.web3,getRateForUnit:!1},{tokensWithBalance:this.tokensWithBalance,overrideDecimals:!0}),images:{kybernetowrk:x.a,bity:V.a,visaMaster:M.a,swap:g.a},toArray:[],fromArray:[],providerData:[],tokenBalances:{},providerRatesRecieved:[],noProvidersPair:{},providersFound:[],tempStatuses:[],overrideFrom:{},overrideTo:{},providerNames:B["l"],supportedProviders:B["o"],fiatCurrenciesArray:B["h"].map(function(e){return e.symbol}),finalizingSwap:!1,validAddress:!0,validRefundAddress:!0,validExitAddress:!0,ratesRetrived:!1,issueRecievingRates:!1,loadingData:!0,haveProviderRates:!1,loadingError:!1,switchCurrencyOrder:!1,bityExitToFiat:!1,exitToFiatCallback:function(){},debounceUpdateEstimate:{},debounceDoThing:{},widgetOpen:!1}},computed:Object(c["a"])({},Object(m["b"])(["account","ens","gasPrice","web3","network"]),{bestRate:function(){var e=this;try{return this.providerData.length>0?this.selectedProvider.provider?this.providerList.find(function(t){return t.provider===e.selectedProvider.provider}).rate:Object(B["g"])(Object(u["a"])(this.providerList),this.fromValue):this.lastBestRate}catch(t){E(t)}},fromBelowMinAllowed:function(){return new l.a(B["d"]).gt(new l.a(this.fromValue))?"".concat(this.$t("interface.belowMin")," ").concat(B["d"]):!!new l.a(this.selectedProvider.minValue).gt(new l.a(this.fromValue))&&this.$t("interface.belowMin",{value:this.selectedProvider.maxValue,currency:this.fromCurrency})},fromAboveMaxAllowed:function(){return this.selectedProvider.provider===this.providerNames.bity?!!this.checkBityMax&&this.$t("interface.aboveMax",{value:this.selectedProvider.maxValue,currency:this.fromCurrency}):!(!$(this.fromValue).gt($(this.selectedProvider.maxValue))||!$(this.selectedProvider.maxValue).gt($(0)))&&this.$t("interface.aboveMaxSwap",{value:this.selectedProvider.maxValue,currency:this.fromCurrency})},toBelowMinAllowed:function(){return this.checkBityMin?this.$t("interface.belowMinGeneral"):!!$(0).gte($(this.toValue))&&this.$t("interface.belowMinGeneral")},toAboveMaxAllowed:function(){return!!this.checkBityMax&&this.$t("interface.aboveMaxGeneral")},providerList:function(){return this.providerData.length>0?Object(B["f"])(Object(u["a"])(this.providerData),this.fromValue):[]},isExitToFiat:function(){return this.fiatCurrenciesArray.includes(this.toCurrency)},validSwap:function(){var e=!this.isExitToFiat||this.fromCurrency===this.baseCurrency||""!==this.exitFromAddress;return this.hasEnough&&(""!==this.toAddress||e)&&this.allAddressesValid&&$(this.selectedProvider.minValue).lte($(this.fromValue))&&($(this.fromValue).lte($(this.selectedProvider.maxValue))||0===this.selectedProvider.maxValue)},checkBityMin:function(){return!!this.swap.isProvider(this.providerNames.bity)&&(!this.swap.getProvider(this.providerNames.bity).minCheck(this.fromCurrency,this.fromValue,this.toCurrency,this.toValue)&&this.selectedProvider.provider===this.providerNames.bity)},checkBityMax:function(){return!!this.swap.isProvider(this.providerNames.bity)&&(!this.swap.getProvider(this.providerNames.bity).maxCheck(this.fromCurrency,this.fromValue,this.toCurrency,this.toValue)&&this.selectedProvider.provider===this.providerNames.bity)},showRefundAddress:function(){return!B["e"].isToken(this.fromCurrency)&&this.selectedProvider.provider===this.providerNames.changelly},allAddressesValid:function(){var e=""!==this.toAddress&&this.validAddress;if(this.isExitToFiat)return this.fromCurrency===this.baseCurrency||""!==this.exitFromAddress&&this.validExitAddress;if(this.showRefundAddress){if(this.fromCurrency===this.baseCurrency||B["e"].isToken(this.fromCurrency)){var t=""===this.refundAddress&&this.validRefundAddress;return e&&t}return B["e"].checkAddress(this.refundAddress,this.fromCurrency)}return e},hasEnough:function(){if(B["e"].isToken(this.fromCurrency)&&this.fromCurrency!==this.baseCurrency){var e=this.swap.convertToTokenWei(this.fromCurrency,this.fromValue);return new l.a(this.tokenBalances[this.fromCurrency]).gte(new l.a(e))}if(this.fromCurrency===this.baseCurrency){var t=this.swap.convertToTokenWei(this.fromCurrency,this.fromValue);return new l.a(this.account.balance).gt(new l.a(t))}return!0},exitSourceAddress:function(){return this.isExitToFiat&&this.fromCurrency===this.baseCurrency?this.currentAddress:this.exitFromAddress}}),watch:(s={},Object(o["a"])(s,"this.network.type.name",function(){this.swap.updateNetwork(this.network.type.name)}),Object(o["a"])(s,"swap.updateProviderRates",function(){var e=this.swap.initialCurrencyLists,t=e.toArray,r=e.fromArray;this.toArray=t,this.fromArray=r}),Object(o["a"])(s,"swap.haveProviderRates",function(){var e=this;this.haveProviderRates=this.swap.haveProviderRates;var t=this.swap.buildInitialCurrencyArrays(),r=t.toArray,s=t.fromArray;this.toArray=r,this.fromArray=s,this.lastBestRate=Object(B["g"])(Object(u["a"])(this.providerList),this.fromValue),this.updateRateEstimate(this.fromCurrency,this.toCurrency,this.fromValue,"from"),this.isWidget&&this.widgetOpen&&this.$once("swapRatesUpdated",function(){e.suppliedToAmount>0&&(e.toValue=e.suppliedToAmount,e.fromValue=e.swap.calculateFromValue(e.toValue,e.bestRate,e.fromCurrency))})}),Object(o["a"])(s,"network",function(e){this.providerData=[],this.haveProviderRates=!1,this.loadingData=!1,this.swap=new B["e"](B["m"],{network:e.type.name,web3:this.web3})}),s),mounted:function(){var e=this,t=this.swap.initialCurrencyLists,r=t.toArray,s=t.fromArray;this.toArray=r,this.fromArray=s,this.currentAddress=this.account.address,this.debounceUpdateEstimate=this.web3.utils._.debounce(this.updateEstimate,300),this.debounceReviseRateEstimate=this.web3.utils._.debounce(this.updateRateEstimate,2e3),this.$refs.modal.$on("shown",function(){e.widgetOpen=!0,e.isWidget&&(e.toAddress=""!==e.destAddress?e.destAddress:"",e.fromCurrency=e.suppliedFrom.symbol,e.toCurrency=e.suppliedTo.symbol,e.overrideFrom=e.suppliedFrom,e.overrideTo=e.suppliedTo,$(e.suppliedToAmount).gt(0)?(e.toValue=e.suppliedToAmount,e.amountChanged("to")):e.toValue=0)}),this.$refs.modal.$on("hide",function(){e.widgetOpen=!1})},methods:{reset:function(){this.updateRateEstimate(this.fromCurrency,this.toCurrency,this.fromValue,"from"),this.finalizingSwap=!1,this.validAddress=!0,this.issueRecievingRates=!1,this.loadingError=!1,this.switchCurrencyOrder=!1,this.bityExitToFiat=!1},flipCurrencies:function(){if(!this.isWidget){this.switchCurrencyOrder=!0;var e=this.toValue;this.fromCurrency=this.currencyDetails.to.symbol,this.toCurrency=this.currencyDetails.from.symbol,this.overrideFrom=this.currencyDetails.to,this.overrideTo=this.currencyDetails.from,this.updateRateEstimate(this.fromCurrency,this.toCurrency,e,"from"),this.switchCurrencyOrder=!1}},setSelectedProvider:function(e){this.selectedProvider=this.providerList.find(function(t){return t.provider===e}),this.updateEstimate("from")},setToAddress:function(e){this.toAddress=e},setRefundAddress:function(e){this.refundAddress=e},setExitFromAddress:function(e){this.exitFromAddress=e},swapAll:function(){this.fromValue=this.swap.convertToTokenBase(this.fromCurrency,this.tokenBalances[this.fromCurrency]),this.amountChanged("from")},setFromCurrency:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"from";this.currencyDetails.from=e,this.fromCurrency=e.symbol,this.getBalance(this.fromCurrency),this.toArray=this.swap.setToCurrencyBuilder(e),this.updateRateEstimate(this.fromCurrency,this.toCurrency,this.fromValue,t)},setToCurrency:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"to";this.currencyDetails.to=e,this.toCurrency=e.symbol,this.fromArray=this.swap.setFromCurrencyBuilder(e),this.updateRateEstimate(this.fromCurrency,this.toCurrency,this.fromValue,t)},getBalance:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!B["e"].isToken(t)||t===this.baseCurrency){e.next=5;break}return e.next=3,new this.web3.eth.Contract(B["b"],this.swap.getTokenAddress(t)).methods.balanceOf(this.currentAddress).call();case 3:r=e.sent,this.$set(this.tokenBalances,t,r);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),amountChanged:function(e){if(Object(B["j"])(this.fromValue)&&"from"===e||Object(B["j"])(this.toValue)&&"to"===e)if(this.swap.getProvider(this.providerNames.simplex).currencies.fiat[this.fromCurrency])this.web3.utils._.debounce(this.updateEstimate(this.providerNames.simplex+e),200);else{this.debounceUpdateEstimate(e);var t=this.fromCurrency,r=this.toCurrency,s=this.fromValue;this.debounceReviseRateEstimate(t,r,s,e)}},updateEstimate:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,s,i,a,n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:e.t0=t,e.next="to"===e.t0?3:"from"===e.t0?5:e.t0==="".concat(this.providerNames.simplex,"to")?7:e.t0==="".concat(this.providerNames.simplex,"from")?22:37;break;case 3:return this.fromValue=this.swap.calculateFromValue(this.toValue,this.bestRate,this.fromCurrency),e.abrupt("break",42);case 5:return this.toValue=this.swap.calculateToValue(this.fromValue,this.bestRate,this.toCurrency),e.abrupt("break",42);case 7:if(i=this.swap.getProvider(this.providerNames.simplex),!i.canQuote(this.fromValue,this.toValue)){e.next=16;break}return e.next=11,i.updateDigital(this.fromCurrency,this.toCurrency,this.toValue);case 11:a=e.sent,this.fromValue=a.fromValue,this.toValue=a.toValue,e.next=21;break;case 16:return e.next=18,i.updateFiat(this.fromCurrency,this.toCurrency,51);case 18:a=e.sent,n=new l.a(a.toValue).div(a.fromValue).toString(10),this.fromValue=this.swap.calculateFromValue(this.toValue,n,this.fromCurrency);case 21:return e.abrupt("break",42);case 22:if(i=this.swap.getProvider(this.providerNames.simplex),!i.canQuote(this.fromValue,this.toValue)){e.next=31;break}return e.next=26,i.updateFiat(this.fromCurrency,this.toCurrency,this.fromValue);case 26:a=e.sent,this.fromValue=a.fromValue,this.toValue=a.toValue,e.next=36;break;case 31:return e.next=33,i.updateFiat(this.fromCurrency,this.toCurrency,51);case 33:a=e.sent,o=new l.a(a.toValue).div(a.fromValue).toString(10),this.toValue=this.swap.calculateToValue(this.fromValue,o);case 36:return e.abrupt("break",42);case 37:return s=this.swap.calculateToValue(this.fromValue,this.bestRate),r=this.swap.calculateFromValue(this.toValue,this.bestRate),this.toValue=s,this.fromValue=r,e.abrupt("break",42);case 42:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),updateRateEstimate:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,s,i){var a,n,o,u,c=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.haveProviderRates){e.next=16;break}return this.loadingData=!0,this.noProvidersPair={fromCurrency:t,toCurrency:r},this.selectedProvider={},this.providerData=[],e.next=7,this.swap.updateRateEstimate(t,r,s,this.toValue);case 7:return a=e.sent,n=a.providersFound,o=a.callsToMake,this.providersFound=n,e.next=13,Promise.all(o.map(function(e){return e(t,r,s,c.toValue)}));case 13:u=e.sent,this.loadingData=!1,u.every(function(e){return e.fromCurrency===c.fromCurrency&&e.toCurrency===c.toCurrency})&&(this.providerData=Object(B["f"])(u.map(function(e){if(+e.rate>0)return{provider:e.provider,fromCurrency:t,fromValue:c.fromValue,toCurrency:r,rate:+e.rate,minValue:e.minValue||0,maxValue:e.maxValue||0,computeConversion:function(e){return new l.a(e).times(this.rate).toFixed(6).toString(10)}}}),s),this.$emit("swapRatesUpdated"),this.updateEstimate(i));case 16:case"end":return e.stop()}},e,this)}));function t(t,r,s,i){return e.apply(this,arguments)}return t}(),swapConfirmationModalOpen:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!this.validSwap){e.next=10;break}return this.finalizingSwap=!0,t=this.providerList.find(function(e){return e.provider===s.selectedProvider.provider}),r={providerDetails:t,fromValue:this.fromValue,toValue:this.toValue,toAddress:this.toAddress||this.currentAddress,fromAddress:this.currentAddress,refundAddress:B["e"].isToken(t.fromCurrency)?this.currentAddress:this.refundAddress,exitFromAddress:this.isExitToFiat&&this.fromCurrency===this.baseCurrency?this.currentAddress:this.exitFromAddress},e.next=7,this.swap.startSwap(r);case 7:this.swapDetails=e.sent,this.finalizingSwap=!1,this.swapDetails.isExitToFiat?(this.bityExitToFiat=!0,this.exitToFiatCallback=function(e){s.bityExitToFiat=!1,s.swapDetails=e,s.openConfirmModal(s.swapDetails)}):this.openConfirmModal(this.swapDetails);case 10:e.next=22;break;case 12:if(e.prev=12,e.t0=e["catch"](0),"abort"!==e.t0.message){e.next=17;break}return this.finalizingSwap=!1,e.abrupt("return");case 17:this.$refs.swapConfirmation.$refs.swapconfirmation.hide(),this.$refs.swapSendTo.$refs.swapconfirmation.hide(),this.finalizingSwap=!1,E(e.t0),f["d"].responseHandler(e.t0,!1);case 22:case"end":return e.stop()}},e,this,[[0,12]])}));function t(){return e.apply(this,arguments)}return t}(),openConfirmModal:function(e){if(e.dataForInitialization&&e.maybeToken)this.$refs.swapConfirmation.$refs.swapconfirmation.show();else{if(!e.dataForInitialization||e.maybeToken)throw Error("Error while requesting finalized details from provider");this.$refs.swapSendTo.$refs.swapconfirmation.show()}},exitToFiatAbort:function(){this.bityExitToFiat=!this.bityExitToFiat},resetSwapState:function(){this.$refs.modal.hide(),this.reset()}}},P=O,S=(r("0ef2"),r("2877")),N=Object(S["a"])(P,i,a,!1,null,"bf59c146",null),j=N.exports;r.d(t,"a",function(){return j})},"6a38":function(e,t,r){},"793f":function(e,t,r){"use strict";var s=r("6a38"),i=r.n(s);i.a},a249:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-container"},[r("b-modal",{ref:"modal",staticClass:"bootstrap-modal nopadding",attrs:{title:e.$t("dappsMaker.closeTitle"),centered:"","hide-footer":""}},[r("swap-widget",{ref:"swapWidget",attrs:{"supplied-from":e.suppliedFrom,"supplied-to":e.suppliedTo,"supplied-to-amount":e.suppliedToAmount,"dest-address":e.account.address}}),r("div",{staticClass:"contents"},[e.enoughMkr?e._e():r("div",{staticClass:"message-container"},[e._v("\n        "+e._s(e.$t("dappsMaker.notEnoughMkrClose"))+"\n      ")]),e.enoughDai?e._e():r("div",{staticClass:"message-container"},[e._v("\n        "+e._s(e.$t("dappsMaker.notEnoughDaiClose"))+"\n      ")]),r("p",{staticClass:"top-text"},[e._v("\n        "+e._s(e.$t("dappsMaker.closingNotice"))+"\n      ")]),r("div",{staticClass:"value-table-container"},[r("div",{staticClass:"value-table mkr-balance"},[r("div",{staticClass:"value-block"},[r("p",[r("b",[e._v(e._s(e.$t("dappsMaker.mkrBalance")))])]),r("p",[r("b",[e._v(e._s(e.mkrBalance)+" MKR")])])]),r("p",{directives:[{name:"show",rawName:"v-show",value:!e.enoughMkr,expression:"!enoughMkr"}],staticClass:"get-mkr",on:{click:function(t){return e.getMkr()}}},[e._v("\n            "+e._s(e.$t("dappsMaker.getMkr"))+"\n          ")])]),r("div",{staticClass:"value-table mkr-balance"},[r("div",{staticClass:"value-block"},[r("p",[r("b",[e._v(e._s(e.$t("dappsMaker.daiBalance")))])]),r("p",[r("b",[e._v(e._s(e.daiBalance)+" DAI")])])]),r("p",{directives:[{name:"show",rawName:"v-show",value:!e.enoughDai,expression:"!enoughDai"}],staticClass:"get-mkr",on:{click:function(t){return e.getDai()}}},[e._v("\n            "+e._s(e.$t("dappsMaker.getDai"))+"\n          ")])]),r("div",{staticClass:"value-table other-values"},[r("div",{staticClass:"value-block"},[r("p",[e._v(e._s(e.$t("dappsMaker.outstandingDai")))]),r("p",[r("b",[e._v(e._s(e.values.debtValue)+" DAI")])])]),r("div",{staticClass:"value-block"},[r("p",[e._v("\n              "+e._s(e.$t("dappsMaker.stabilityFeeInMkr",{value:e.displayFixedValue(e.displayPercentValue(e.values.stabilityFee))}))+"\n            ")]),r("p",[r("b",[e._v(e._s(e.getfeeOwed)+" MKR")])])])])]),r("div",{staticClass:"buttons"},[e.needsDaiApprove?r("div",[r("standard-button",{attrs:{options:e.approveDaiButton},nativeOn:{click:function(t){return e.approveDai(t)}}})],1):e._e(),e.needsMkrApprove?r("div",[r("standard-button",{attrs:{options:e.approveMkrButton},nativeOn:{click:function(t){return e.approveMkr(t)}}})],1):e._e()]),r("div",{staticClass:"buttons"},[r("standard-button",{attrs:{options:e.cancelButton},nativeOn:{click:function(t){return e.closeModal(t)}}}),r("standard-button",{attrs:{options:e.closeButton,"button-disabled":!e.canClose,"click-function":e.closeCdp}})],1),r("help-center-button")],1)],1)],1)},i=[],a=(r("7514"),r("6b54"),r("96cf"),r("3b8d")),n=(r("ac6a"),r("cebc")),o=r("2f62"),u=r("a8f0"),c=r("76ed"),d=r("42ea"),l=r("901e"),h=r.n(l),p=function(e){return new h.a(e)},m={components:{"swap-widget":d["a"],"help-center-button":c["a"],"standard-button":u["a"]},props:{tokensWithBalance:{type:Array,default:function(){return[]}},action:{type:String,default:""},values:{type:Object,default:function(){return{maxPethDraw:"",maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",pethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:""}}},makerManager:{type:Object,default:function(){return{}}}},data:function(){return{amount:0,amountEth:0,amountDai:0,govFee:0,closable:!1,modalDetailInformation:!1,textValues:{},mkrToken:{},daiToken:{},approveMkrButton:{title:"Approve Maker",buttonStyle:"green-border",fullWidth:!0,noMinWidth:!0},approveDaiButton:{title:"Approve Dai",buttonStyle:"green-border",fullWidth:!0,noMinWidth:!0},cancelButton:{title:"Cancel",buttonStyle:"green-border",fullWidth:!0,noMinWidth:!0},closeButton:{title:"Close",buttonStyle:"green",fullWidth:!0,noMinWidth:!0},suppliedFrom:{symbol:"ETH",name:"Ethereum"},suppliedTo:{symbol:"MKR",name:"Maker"},suppliedToAmount:0,destAddress:""}},computed:Object(n["a"])({},Object(o["b"])(["account","gasPrice","web3","network","ens"]),{getfeeOwed:function(){var e=this.values.governanceFeeOwed;return this.displayFixedValue(e,8)},newCollateralRatio:function(){return this.values?this.values.collatRatio:0},newCollateralRatioSafe:function(){return!this.values||p(this.values.collatRatio).gte(2)},newLiquidationPrice:function(){return this.values?this.values.liquidationPrice:0},mkrBalance:function(){return this.mkrToken?this.mkrToken.balance:0},daiBalance:function(){return this.daiToken?this.daiToken.balance:0},enoughMkr:function(){var e=this.values.governanceFeeOwed;return!!e&&p(this.mkrBalance).minus(e).gte(0)},enoughDai:function(){if(this.values.zeroDebt)return!0;var e=this.values.debtValue;return!!e&&p(this.daiBalance).minus(e).gte(0)},needsDaiApprove:function(){return!(!p(this.values.proxyAllowanceDai).gt(0)||!p(this.values.proxyAllowanceDai).lte(this.values.debtValue))||p(this.values.proxyAllowanceDai).eq(0)},needsMkrApprove:function(){return!(!p(this.values.proxyAllowanceMkr).gt(0)||!p(this.values.proxyAllowanceMkr).lt(this.values.governanceFeeOwed))||p(this.values.proxyAllowanceMkr).eq(0)},canClose:function(){return this.enoughMkr&&this.enoughDai&&!this.needsDaiApprove&&!this.needsMkrApprove}}),watch:{tokensWithBalance:function(){this.getBalances()}},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.destAddress=this.account.address,this.getBalances(),this.$refs.modal.$on("shown",Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.getBalances();case 1:case"end":return e.stop()}},e)})));case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{closeModal:function(){this.$refs.modal.hide()},delayCloseModal:function(){var e=this;setTimeout(function(){e.closeModal()},200)},closeCdp:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.delayCloseModal(),this.$emit("closeCdp");case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),displayPercentValue:function(e){return h.a.isBigNumber(e)||(e=new h.a(e)),e.times(100).toString()},displayFixedValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return h.a.isBigNumber(e)||(e=new h.a(e)),e.toFixed(t,h.a.ROUND_DOWN).toString()},maxDai:function(){this.amount=this.values.maxDai},currentDai:function(){this.amount=this.values.debtValue},getBalances:function(){this.mkrToken=this.tokensWithBalance.find(function(e){return"MKR"===e.symbol}),this.daiToken=this.tokensWithBalance.find(function(e){return"DAI"===e.symbol})},getMkr:function(){var e=this,t=this.getfeeOwed;p(this.mkrBalance).lt(t)&&(this.suppliedToAmount=p(t).minus(p(this.mkrBalance)).plus(p(t).times(.01)).toNumber(),p(this.suppliedToAmount).lt(1e-6)&&(this.suppliedToAmount=1e-6),this.suppliedFrom={symbol:"ETH",name:"Ethereum"},this.suppliedTo={symbol:"MKR",name:"Maker"},this.$nextTick(function(){e.$refs.swapWidget.$refs.modal.show()}))},getDai:function(){var e=this,t=this.values.debtValue;p(this.daiBalance).lt(t)&&(this.suppliedToAmount=p(t).minus(p(this.daiBalance)).toNumber(),p(this.suppliedToAmount).lt(1e-6)&&(this.suppliedToAmount=1e-6),this.suppliedFrom={symbol:"ETH",name:"Ethereum"},this.suppliedTo={symbol:"DAI",name:"Dai"},this.$nextTick(function(){e.$refs.swapWidget.$refs.modal.show()}))},approveDai:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("approveDai");case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),approveMkr:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("approveMkr");case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},f=m,v=(r("793f"),r("2877")),b=Object(v["a"])(f,s,i,!1,null,"691aca22",null),w=b.exports;r.d(t,"a",function(){return w})},b18c:function(e,t,r){"use strict";var s=r("06a0"),i=r.n(s);i.a},e01a:function(e,t,r){"use strict";var s=r("edc8"),i=r.n(s);i.a},e8aa:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"check-box"},[r("label",{staticClass:"check-box-container"},[r("input",{attrs:{type:"checkbox"},on:{click:e.checkBoxClicked}}),r("span",{staticClass:"checkmark"}),e._t("terms")],2)])},i=[],a={data:function(){return{checkboxChecked:!1}},methods:{checkBoxClicked:function(){this.checkboxChecked=!this.checkboxChecked,this.$emit("changeStatus",this.checkboxChecked)}}},n=a,o=(r("b18c"),r("2877")),u=Object(o["a"])(n,s,i,!1,null,"3e6e47df",null),c=u.exports;r.d(t,"a",function(){return c})},edc8:function(e,t,r){},ee5d:function(e,t,r){}}]);
//# sourceMappingURL=chunk-0656ae1b.97c558b3.js.map