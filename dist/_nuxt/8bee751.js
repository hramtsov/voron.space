(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,4,6,8,10],{279:function(t,e,n){"use strict";n.r(e);var r={props:{icon:{required:!1},title:{required:!0},text:{required:!0},decsription:{required:!1},number:{required:!1}}},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"howItWorks-item"},[t.number?n("div",{staticClass:"howItWorks-numberItem"},[t._v(t._s(t.number))]):t._e(),t._v(" "),t.icon?n("div",{staticClass:"icon-adv"},[n("i",{class:t.icon})]):t._e(),t._v(" "),n("div",{staticClass:"howItWorks-itemTitle"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"howItWorks-itemText"},[n("span",{domProps:{innerHTML:t._s(t.text)}}),t._v(" "),t.decsription?n("p",{staticStyle:{"font-size":"11px",color:"#ffffff",opacity:"0.4"},domProps:{innerHTML:t._s(t.decsription)}}):t._e()])])}),[],!1,null,null,null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);var r=n(281),o=n.n(r);for(var c in r)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},281:function(t,e){},282:function(t,e,n){var content=n(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("06cf1d26",content,!0,{sourceMap:!1})},283:function(t,e,n){"use strict";n.r(e);var r={props:{car:{required:!0},link:{required:!1,default:!0}},data:function(){return{}}},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carsList-item carsList-ite"},[n("nuxt-link",{staticClass:"carsList-itemContent",attrs:{to:"/"+t.car.brand.slug+"/"+t.car.slug}},[n("div",{staticClass:"carsList-itemImage",style:"background-image: url('https://img.voron.io/"+t.car.side_img+"')"}),t._v(" "),n("div",{staticClass:"carsList-itemIcons"},[0!=t.car.seats?n("div",{staticClass:"block-icon-auto"},[n("div",{staticClass:"icon-auto"},[n("i",{staticClass:"fal fa-users"}),t._v(" "),t._e()]),t._v(" "),n("span",[t._v(t._s(t._f("declOfNum")(t.car.seats,["место","места","мест"],!0)))])]):t._e(),t._v(" "),0!=t.car.horsepower?n("div",{staticClass:"block-icon-auto"},[n("div",{staticClass:"icon-auto"},[n("i",{staticClass:"fal fa-tachometer-alt-fastest"})]),t._v(" "),n("span",[t._v(t._s(t.car.horsepower)+" л.с.")])]):t._e(),t._v(" "),n("div",{staticClass:"block-icon-auto"},[n("div",{staticClass:"icon-auto"},[n("i",{staticClass:"fal fa-gas-pump"})]),t._v(" "),n("span",[t._v(t._s(t.car.fuelType))])]),t._v(" "),n("div",{staticClass:"block-icon-auto"},[n("div",{staticClass:"icon-auto"},[t._v("\n          "+t._s(t._f("number")(t.car.minAgeDriver))+"\n        ")]),t._v(" "),n("span",[t._v("Возраст")])]),t._v(" "),n("div",{staticClass:"block-icon-auto"},[n("div",{staticClass:"icon-auto"},[t._v("\n          "+t._s(t._f("number")(t.car.minAgeDriversLicence))+"\n        ")]),t._v(" "),n("span",[t._v("Стаж")])])]),t._v(" "),n("div",{staticClass:"carsList-itemDetails"},[t._v("\n      "+t._s(t.car.body.title)+" / 5 мест / 170 л.с.\n    ")]),t._v(" "),n("div",{staticClass:"carsList-itemName"},[n("div",{staticClass:"carsList-itemPreCaption"}),t._v(" "),n("div",{staticClass:"carsList-itemCaption"},[t._v(t._s(t.car.title))]),t._v(" "),n("div",{staticClass:"carsList-itemSubCaption"},[t._v("\n        "+t._s(t.car.model.title)),n("br"),n("em",[n("small",[t._v("Депозит для новых клиентов "+t._s(t._f("number")(t.car.depositMax))+"\n            "),n("span",{staticClass:"rouble"},[t._v("₽")]),t._v(" *")])])])]),t._v(" "),n("div",{staticClass:"carsList-itemPrice"},[n("div",{staticClass:"carsList-itemPreCaption"},[t._v("стоимость")]),t._v(" "),n("div",{staticClass:"carsList-itemCaption"},[n("span",{staticClass:"carsList-item-ColorBlue"},[t._v(t._s(t._f("number")(t.car.costPerHour))+"\n          "),n("span",{staticClass:"icon icon-rouble-semibold"},[t._v("/мин")])])]),t._v(" "),n("div",{staticClass:"carsList-itemSubCaption"},[t._v("\n        от "+t._s(t._f("number")(t.car.max_daily_cost))+"\n        "),n("span",{staticClass:"rouble"},[t._v("₽")]),t._v("/сутки\n      ")])]),t._v(" "),t.link?n("div",{staticClass:"carsList-itemHover"},[n("div",{staticClass:"carsList-itemButtonContainer"},[n("div",{staticClass:"carsList-itemButton"},[t._v("Смотреть")])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,n){"use strict";n.r(e);var r={props:{text:{required:!0},img:{required:!0}}},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"advantages-item"},[n("div",{staticClass:"adv-image"},[n("img",{attrs:{src:t.img}})]),t._v(" "),n("div",{staticClass:"advantages-itemText",domProps:{innerHTML:t._s(t.text)}})])}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("7396a0ce",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n.r(e);var r={props:{name:{required:!0},image:{required:!1},icon:{required:!1},link:{required:!1},slug:{required:!0}}},o=(n(288),n(29)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["advantages-item",[t.slug==t.$route.params.slug||"underfined"==typeof t.$route.params.slug?"advantages-item-active":""]]},[n("nuxt-link",{attrs:{to:t.link+"#chooseCar"}},[n("div",{staticClass:"icon-adv"},[t.image?n("img",{attrs:{src:t.image}}):t._e(),t._v(" "),t.icon?n("i",{class:t.icon,staticStyle:{"font-size":"35px",color:"rgba(255, 255, 255, 0.9)"}}):t._e()]),t._v(" "),n("div",{staticClass:"advantages-itemText"},[t._v("\n      "+t._s(t.name)+"\n    ")])])],1)}),[],!1,null,"34284324",null);e.default=component.exports},288:function(t,e,n){"use strict";n(282)},289:function(t,e,n){var r=n(50)(!1);r.push([t.i,".icon-adv[data-v-34284324]{margin-bottom:12px}.advantages-item[data-v-34284324]{margin-bottom:30px}.advantages-item a .advantages-itemText[data-v-34284324]{font-weight:600;color:hsla(0,0%,100%,.7);transition:all .3s ease}.advantages-item.advantages-item-active a .advantages-itemText[data-v-34284324],.advantages-item a:hover .advantages-itemText[data-v-34284324]{color:#ffab00}.advantages-item a .icon-adv[data-v-34284324]:before{transition:all .3s ease}.advantages-item.advantages-item-active a .icon-adv[data-v-34284324]:before,.advantages-item a:hover .icon-adv[data-v-34284324]:before{opacity:.9}",""]),t.exports=r},290:function(t,e,n){"use strict";n.r(e);var r=n(294),o=n(280);for(var c in o)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n(292);var l=n(29),component=Object(l.a)(o.default,r.a,r.b,!1,null,"47722886",null);e.default=component.exports},291:function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){"use strict";function r(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var a=n(2),o=n(0),i=n.n(o);e.a=function(t,e){var o=e.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var u=t.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);t=u[0]}t.oninput=function(e){if(e.isTrusted){var i=t.selectionEnd,u=t.value[i-1];for(t.value=n.i(a.a)(t.value,o.mask,!0,o.tokens);i<t.value.length&&t.value.charAt(i-1)!==u;)i++;t===document.activeElement&&(t.setSelectionRange(i,i),setTimeout((function(){t.setSelectionRange(i,i)}),0)),t.dispatchEvent(r("input"))}};var s=n.i(a.a)(t.value,o.mask,!0,o.tokens);s!==t.value&&(t.value=s,t.dispatchEvent(r("input")))}},function(t,e,n){"use strict";var r=n(6),a=n(5);e.a=function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(e)?n.i(a.a)(r.a,e,i)(t,e,o,i):n.i(r.a)(t,e,o,i)}},function(t,e,n){"use strict";function r(t){t.component(s.a.name,s.a),t.directive("mask",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),o=n.n(a),i=n(1),u=n(7),s=n.n(u);n.d(e,"TheMask",(function(){return s.a})),n.d(e,"mask",(function(){return i.a})),n.d(e,"tokens",(function(){return o.a})),n.d(e,"version",(function(){return c}));var c="0.11.1";e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(0),o=n.n(a),i=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t,(t=n.i(i.a)(t,this.mask,this.masked,this.tokens))!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){"use strict";function r(t,e,n){return e=e.sort((function(t,e){return t.length-e.length})),function(r,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<e.length;){var u=e[i];i++;var s=e[i];if(!(s&&t(r,s,!0,n).length>u.length))return t(r,u,o,n)}return""}}e.a=r},function(t,e,n){"use strict";function r(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];t=t||"",e=e||"";for(var a=0,o=0,i="";a<e.length&&o<t.length;){var s=r[u=e[a]],c=t[o];s&&!s.escape?(s.pattern.test(c)&&(i+=s.transform?s.transform(c):c,a++),o++):(s&&s.escape&&(u=e[++a]),n&&(i+=u),c===u&&o++,a++)}for(var l="";a<e.length&&n;){var u;if(r[u=e[a]]){l="";break}l+=u,a++}return i+l}e.a=r},function(t,e,n){var r=n(8)(n(4),n(9),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var a,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,o=t.default);var u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach((function(t){var e=r[t];s[t]=function(){return e}}))}return{esModule:a,exports:o,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])},292:function(t,e,n){"use strict";n(285)},293:function(t,e,n){var r=n(50)(!1);r.push([t.i,".modal-mask[data-v-47722886]{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.6);display:table;transition:opacity .3s ease}.modal-wrapper[data-v-47722886]{display:table-cell;vertical-align:middle}.modal-container[data-v-47722886]{width:100%;max-width:450px;margin:0 auto;background-color:#fff;border-radius:2px;box-sizing:border-box;transition:all .3s ease;font-family:Helvetica,Arial,sans-serif}.modal-header[data-v-47722886]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:15px 40px;background:#f4f4f4}.modal-header h3[data-v-47722886]{margin-top:0;color:#000;padding-top:0}.modal-body[data-v-47722886]{padding:30px 40px}.modal-body label[data-v-47722886]{font-size:14px;margin-bottom:7px}.modal-enter[data-v-47722886],.modal-leave-active[data-v-47722886]{opacity:0}.modal-enter .modal-container[data-v-47722886],.modal-leave-active .modal-container[data-v-47722886]{transform:scale(1.1)}.closeIcon[data-v-47722886]{font-size:24px}",""]),t.exports=r},294:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[t._t("header",[t._v("default header")]),t._v(" "),n("a",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[n("i",{staticClass:"fal fa-times closeIcon"})])],2),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("body",[t._v(" default body ")])],2),t._v(" "),n("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])},o=[]},298:function(t,e,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("736ab232",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";n(298)},302:function(t,e,n){var r=n(50)(!1);r.push([t.i,".mainSection-title[data-v-875979da]{font-weight:700;color:#fff}.mainSection-subTitle[data-v-875979da]{color:#fff;font-size:17px;line-height:34x}.carsList-item[data-v-875979da]{width:100%}",""]),t.exports=r},316:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(49),n(52),n(53),n(283)),c=n(284),l=n(279),d=n(286),v=n(290),m=n(291),f={head:function(){return{title:this.auto.title.includes(this.auto.brand.title)?this.auto.title+". VORON – Личный автомобиль бизнес-класса по технологии каршеринга":this.auto.brand.title+" "+this.auto.title+". VORON – Личный автомобиль бизнес-класса по технологии каршеринга",meta:[{hid:"keywords",name:"keywords",content:"каршеринг, каршеринг бизнес-класса, каршеринг без надписей, каршеринг ворон, аренда авто, прокат авто, аренда авто представительского класса, прокат авто москва, аренда авто в россии"},{hid:"description",name:"description",content:"VORON – Личный автомобиль бизнес-класса по технологии каршеринга"}]}},components:{CarModel:o.default,AdvantageItem:c.default,SchemeItem:l.default,BrandItem:d.default,Modal:v.default,TheMask:m.TheMask},data:function(){return{cars:[],brands:[],auto:{},showModal:!1,form:{firstname:"",lastname:"",phone:"",success:!1,errors:!1}}},directives:{mask:m.mask},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.context,n=t.$axios,r=t.params,e.next=3,n.get("https://i2.voron.io/api/getauto?slug=".concat(r.auto));case 3:return o=e.sent,e.abrupt("return",{cars:o.data.cars,brands:o.data.brands,auto:o.data.auto});case 5:case"end":return e.stop()}}),e)})))()},created:function(){},methods:{SendMessage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t.form.lastname||""==t.form.firstname||""==t.form.phone){e.next=7;break}return e.next=3,t.$axios.$post("https://i2.voron.io/api/voron_black_booking/",{token:"Voron.black_45dffaj5",auto_slug:t.$route.params.auto,lastname:t.form.lastname,firstname:t.form.firstname,phone:t.form.phone,source:t.$store.state.source});case 3:e.sent.result?(t.form.success=!0,t.form.errors=!1,t.form.lastname="",t.form.firstname="",t.form.phone="",t.form.email="",t.form.auto="",t.form.year=""):(t.form.success=!1,t.form.errors=!0),e.next=9;break;case 7:t.form.success=!1,t.form.errors=!0;case 9:case"end":return e.stop()}}),e)})))()}}},_=(n(301),n(29)),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"pageContent",attrs:{itemprop:"mainContentOfPage"}},[t.showModal?n("Modal",{on:{close:function(e){t.showModal=!1}}},[n("form",{staticClass:"callback-form",attrs:{slot:"body"},on:{submit:function(e){return e.preventDefault(),t.SendMessage()}},slot:"body"},[t.form.success?n("div",{staticClass:"thanks-form alert-form"},[n("div",{staticClass:"thanks-form-title"},[t._v("Спасибо!")]),t._v(" "),n("div",{staticClass:"thanks-form-text"},[t._v("\n          Мы свяжемся с вами в ближайшее время!\n        ")])]):t._e(),t._v(" "),t.form.errors?n("div",{staticClass:"error-form alert-form"},[n("div",{staticClass:"thanks-form-title"},[t._v("Ошибка!")]),t._v(" "),n("div",{staticClass:"thanks-form-text"},[t._v("\n          Попробуйте заполнить форму еще раз!\n        ")])]):t._e(),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Имя")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.firstname,expression:"form.firstname",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"firstname",required:""},domProps:{value:t.form.firstname},on:{input:function(e){e.target.composing||t.$set(t.form,"firstname",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Фамилия")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.lastname,expression:"form.lastname",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"lastname",required:""},domProps:{value:t.form.lastname},on:{input:function(e){e.target.composing||t.$set(t.form,"lastname",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Телефон")]),t._v(" "),n("the-mask",{staticClass:"phone_number form-control",attrs:{name:"phone",mask:["+7 (###) ###-##-##"],placeholder:"+7 (999) 999-99-99",required:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Забронировать")])]),t._v(" "),n("h3",{attrs:{slot:"header"},slot:"header"},[t._v("Забронировать "+t._s(t.auto.title))])]):t._e(),t._v(" "),n("div",{staticClass:"mainSection mainSection-IndexPage"},[n("div",{staticClass:"mainSection-background"},[n("video",{staticClass:"mainSection-video",attrs:{playsinline:"",loop:"",muted:"",autoplay:"",poster:[t.auto.video?"":"https://img.voron.io/gallery/"+t.auto.tid+"/"+t.auto.first_photo+"@3x.jpg"]},domProps:{muted:!0}},[n("source",{attrs:{src:"https://img.voron.io/videos/"+t.auto.video,type:"video/mp4"}})])]),t._v(" "),n("div",{staticClass:"mainSection-content"},[n("div",{staticClass:"pageSection-content"},[n("h1",{staticClass:"mainSection-title"},[t.auto.title.includes(t.auto.brand.title)?[t._v(t._s(t.auto.title))]:[t._v(t._s(t.auto.brand.title)+" "+t._s(t.auto.title))],t._v(" "),n("div",{staticClass:"mainSection-subTitle"},[t._v("\n            с доступом со смартфона по технологии каршеринга\n          ")])],2),t._v(" "),n("h2",{staticClass:"mainSection-subTitle"},[t._v("\n          "+t._s(t.auto.description)+"\n        ")]),t._v(" "),n("div",{staticClass:"mainSection-subTitle-NoMobile"}),t._v(" "),n("div",{staticClass:"advantages-link-container"},[n("a",{staticClass:"advantages-link",on:{click:function(e){t.showModal=!0}}},[t._v("Забронировать")])])])])]),t._v(" "),n("div",{staticClass:"carsPresent"},[n("div",{staticClass:"pageSection-content"},[n("div",{staticClass:"carsList"},[n("CarModel",{attrs:{car:t.auto,link:!1}})],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"advantages",attrs:{id:"advantages"}},[n("div",{staticClass:"pageSection-content"},[n("div",{staticClass:"advantages-title"},[t._v("Суть сервиса")]),t._v(" "),n("div",{staticClass:"advantages-items-container advantages-items-container-Active"},[n("div",{staticClass:"advantages-items"},[n("AdvantageItem",{attrs:{text:"Разнообразный ассортимент бизнес и премиум класса",img:"/images/app/phone01.png"}}),t._v(" "),n("AdvantageItem",{attrs:{text:"Комфортные и статусные авто на улицах города с доступом со смартфона",img:"/images/app/phone02.png"}}),t._v(" "),n("AdvantageItem",{attrs:{text:"Авто без надписей. Поминутные, часовые и суточные тарифы",img:"/images/app/phone03.png"}}),t._v(" "),n("AdvantageItem",{attrs:{text:"Бесплатная доставка прямо к вам для часовой поездки",img:"/images/app/phone04.png"}}),t._v(" "),n("AdvantageItem",{attrs:{text:"Выбираете место на карте, и автомобиль через час ждет вас на парковке",img:"/images/app/phone05.png"}}),t._v(" "),n("div",{staticClass:"advantages-clear"})],1),t._v(" "),n("div",{staticClass:"advantages-items-Mobile"},[n("splide",{attrs:{options:{arrows:!1,height:380}}},[n("splide-slide",[n("AdvantageItem",{attrs:{text:"Разнообразный ассортимент бизнес и премиум класса",img:"/images/app/phone01.png"}})],1),t._v(" "),n("splide-slide",[n("AdvantageItem",{attrs:{text:"Комфортные и статусные авто на улицах города с доступом со смартфона",img:"/images/app/phone02.png"}})],1),t._v(" "),n("splide-slide",[n("AdvantageItem",{attrs:{text:"Авто без надписей. Поминутные, часовые и суточные тарифы",img:"/images/app/phone03.png"}})],1),t._v(" "),n("splide-slide",[n("AdvantageItem",{attrs:{text:"Бесплатная доставка прямо к вам для часовой поездки",img:"/images/app/phone04.png"}})],1),t._v(" "),n("splide-slide",[n("AdvantageItem",{attrs:{text:"Выбираете место на карте, и автомобиль через час ждет вас на парковке",img:"/images/app/phone05.png"}})],1)],1)],1)])])]),t._v(" "),n("div",{staticClass:"howItWorks",attrs:{id:"howItWorks"}},[n("div",{staticClass:"pageSection-content"},[n("div",{staticClass:"howItWorks-title"},[t._v("Схема работы сервиса")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"howItWorks-items"},[n("SchemeItem",{attrs:{title:"Регистрация",icon:"fal fa-address-card",text:"Вы устанавливаете мобильное приложение и проходите в нем регистрацию"}}),t._v(" "),n("SchemeItem",{attrs:{title:"Подтверждение",icon:"fal fa-user-check",text:"Служба безопасности проверит ваши документы и активирует ваш аккаунт"}}),t._v(" "),n("SchemeItem",{attrs:{title:"Доставка / Бронь",icon:"fal fa-route",text:"Вы выбираете авто, вносите страховой депозит с банковской карты и заказываете доставку. Через короткое время автомобиль будет ждать вас на парковке. Или бронируете и забираете самостоятельно"}}),t._v(" "),n("SchemeItem",{attrs:{title:"Аренда",icon:"fal fa-car-alt",text:"На время аренды у вас включен таймер в мобильном приложении и вы можете контролировать расходы"}}),t._v(" "),n("SchemeItem",{attrs:{title:"Завершение",icon:"fal fa-car-alt",text:"Зона завершения аренды подсвечена в приложении зеленым цветом. После завершения можете нажать «Вернуть депозит», и в течение от 4 до 48 часов депозит будет автоматически возвращен",decsription:"При желании вы можете сразу не возвращать депозит, а использовать для следующих поездок"}})],1),t._v(" "),n("div",{staticClass:"advantages-items-Mobile howItWorks-items-Mobile_"},[n("splide",{attrs:{options:{arrows:!1,height:380}}},[n("splide-slide",[n("SchemeItem",{attrs:{title:"Регистрация",icon:"fal fa-address-card",number:"1",text:"Вы устанавливаете мобильное приложение и проходите в нем регистрацию"}})],1),t._v(" "),n("splide-slide",[n("SchemeItem",{attrs:{title:"Подтверждение",icon:"fal fa-user-check",number:"2",text:"Служба безопасности проверит ваши документы и активирует ваш аккаунт"}})],1),t._v(" "),n("splide-slide",[n("SchemeItem",{attrs:{title:"Доставка / Бронь",icon:"fal fa-route",number:"3",text:"Вы выбираете авто, вносите страховой депозит с банковской карты и заказываете доставку. Через короткое время автомобиль будет ждать вас на парковке. Или бронируете и забираете самостоятельно"}})],1),t._v(" "),n("splide-slide",[n("SchemeItem",{attrs:{title:"Аренда",icon:"fal fa-car-alt",number:"4",text:"На время аренды у вас включен таймер в мобильном приложении и вы можете контролировать расходы"}})],1),t._v(" "),n("splide-slide",[n("SchemeItem",{attrs:{title:"Завершение",icon:"fal fa-car-alt",number:"5",text:"Зона завершения аренды подсвечена в приложении зеленым цветом. После завершения можете нажать «Вернуть депозит», и в течение от 4 до 48 часов депозит будет автоматически возвращен",decsription:"При желании вы можете сразу не возвращать депозит, а использовать для следующих поездок"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"howItWorks-buttonContainer",staticStyle:{position:"static","margin-top":"50px"}},[n("nuxt-link",{staticClass:"howItWorks-button",attrs:{to:"/delivery/",exact:"","exact-active-class":"active"}},[n("i",{staticClass:"fal fa-route",staticStyle:{"margin-right":"10px"}}),t._v("Как работает\n          доставка")])],1)])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carsList"},[n("div",{staticClass:"carsList-itemSubCaption"},[n("em",[n("small",[t._v("* Для отмены депозита необходимо совершить минимум 10 успешных\n              поездок в сервисе. Поездка зачитывается, при условии, что вы\n              находились в движении минимум 30 минут, не нарушали правила ПДД,\n              не нанесли ущерб автомобилю и оплата за аренду производилась\n              успешным списанием с привязанной банковской карты, а не\n              погашением задолженности или из страхового депозита.")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"howItWorks-numbers"},[n("div",{staticClass:"howItWorks-numberItem"},[t._v("1")]),t._v(" "),n("div",{staticClass:"howItWorks-numberItem"},[t._v("2")]),t._v(" "),n("div",{staticClass:"howItWorks-numberItem"},[t._v("3")]),t._v(" "),n("div",{staticClass:"howItWorks-numberItem"},[t._v("4")]),t._v(" "),n("div",{staticClass:"howItWorks-numberItem"},[t._v("5")])])}],!1,null,"875979da",null);e.default=component.exports;installComponents(component,{Modal:n(290).default,CarModel:n(283).default,AdvantageItem:n(284).default,SchemeItem:n(279).default})}}]);