(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2,4,7,8,10],{294:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("8d8f06c0",content,!0,{sourceMap:!1})},295:function(t,e,n){"use strict";n.r(e);var r={props:{icon:{required:!1},title:{required:!0},text:{required:!0},decsription:{required:!1},number:{required:!1}}},o=n(32),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"howItWorks-item"},[t.number?n("div",{staticClass:"howItWorks-numberItem"},[t._v(t._s(t.number))]):t._e(),t._v(" "),t.icon?n("div",{staticClass:"icon-adv"},[n("i",{class:t.icon})]):t._e(),t._v(" "),n("div",{staticClass:"howItWorks-itemTitle"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"howItWorks-itemText"},[n("span",{domProps:{innerHTML:t._s(t.text)}}),t._v(" "),t.decsription?n("p",{staticStyle:{"font-size":"11px",color:"#ffffff",opacity:"0.4"},domProps:{innerHTML:t._s(t.decsription)}}):t._e()])])}),[],!1,null,null,null);e.default=component.exports},296:function(t,e,n){"use strict";n.r(e);var r={props:{car:{required:!0,type:Object},carousel:{type:Boolean,default:!1}},data:function(){return{}}},o=(n(299),n(32)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel-agile"},[n("div",{class:["carsList-itemImage",[t.carousel&&t.car.photos.length>1?"opacity-0":""]],style:"background-image: url('https://img.voron.io/"+t.car.side_img+"')"}),t._v(" "),t.carousel&&t.car.photos.length>1?n("client-only",{attrs:{placeholder:"Loading..."}},[n("agile",{attrs:{options:{autoplay:!0,dots:!1,navButtons:!0,slidesToShow:1,responsive:[{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:1e3,settings:{slidesToShow:5}}]}}},[t._l(t.car.photos,(function(e,r){return n("div",{key:r,staticClass:"slide"},[n("img",{attrs:{src:"https://img.voron.io/gallery/"+t.car.tid+"/"+e+"@3x.jpg",alt:""}})])})),t._v(" "),n("template",{slot:"prevButton"},[n("i",{staticClass:"fal fa-angle-left"})]),t._v(" "),n("template",{slot:"nextButton"},[n("i",{staticClass:"fal fa-angle-right"})])],2)],1):t._e(),t._v(" "),n("div",{staticClass:"carsList-itemIcons"},[0!=t.car.seats?n("div",{staticClass:"block-icon-auto"},[n("div",{staticClass:"icon-auto"},[2!=t.car.seats?n("i",{staticClass:"fal fa-users"}):t._e(),t._v(" "),2==t.car.seats?n("i",{staticClass:"fal fa-user-friends"}):t._e()]),t._v(" "),n("span",[t._v(t._s(t._f("declOfNum")(t.car.seats,["место","места","мест"],!0)))])]):t._e(),t._v(" "),0!=t.car.horsepower?n("div",{staticClass:"block-icon-auto"},[t._m(0),t._v(" "),n("span",[t._v(t._s(t.car.horsepower)+" л.с.")])]):t._e(),t._v(" "),n("div",{staticClass:"block-icon-auto"},[t._m(1),t._v(" "),n("span",[t._v(t._s(t.car.fuelType))])]),t._v(" "),n("div",{staticClass:"block-icon-auto"},[n("div",{staticClass:"icon-auto"},[t._v("\n        "+t._s(t._f("number")(t.car.minAgeDriver))+"\n      ")]),t._v(" "),n("span",[t._v("Возраст")])]),t._v(" "),n("div",{staticClass:"block-icon-auto"},[n("div",{staticClass:"icon-auto"},[t._v("\n        "+t._s(t._f("number")(t.car.minAgeDriversLicence))+"\n      ")]),t._v(" "),n("span",[t._v("Стаж")])])]),t._v(" "),n("div",{staticClass:"carsList-itemName"},[n("div",{staticClass:"carsList-itemPreCaption"}),t._v(" "),n("div",{staticClass:"carsList-itemCaption"},[t._v(t._s(t.car.title))]),t._v(" "),n("div",{staticClass:"carsList-itemSubCaption"},[t._v("\n      "+t._s(t.car.body.title)+"\n      "+t._s(t.car.model.title)),n("br"),n("em",[n("small",[t._v("Депозит для новых клиентов "+t._s(t._f("number")(t.car.depositMax))+"\n          "),n("span",{staticClass:"rouble"},[t._v("₽")]),t._v(" *")])])])]),t._v(" "),n("div",{staticClass:"carsList-itemPrice"},[n("div",{staticClass:"carsList-itemPreCaption"},[t._v("стоимость")]),t._v(" "),n("div",{staticClass:"carsList-itemCaption"},[n("span",{staticClass:"carsList-item-ColorBlue"},[t._v(t._s(t._f("number")(t.car.costPerHour))+"\n        "),n("span",{staticClass:"icon icon-rouble-semibold"},[t._v("/мин")])])]),t._v(" "),n("div",{staticClass:"carsList-itemSubCaption"},[t._v("\n      от "+t._s(t._f("number")(t.car.max_daily_cost))+" "),n("span",{staticClass:"rouble"},[t._v("₽")]),t._v("/сутки\n    ")])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon-auto"},[e("i",{staticClass:"fal fa-tachometer-alt-fastest"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon-auto"},[e("i",{staticClass:"fal fa-gas-pump"})])}],!1,null,null,null);e.default=component.exports},297:function(t,e,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("5b7e7909",content,!0,{sourceMap:!1})},298:function(t,e,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("06cf1d26",content,!0,{sourceMap:!1})},299:function(t,e,n){"use strict";n(294)},300:function(t,e,n){var r=n(39)(!1);r.push([t.i,".carousel-agile .agile{margin-top:90px;margin-left:-10px;margin-right:-10px;position:relative}.carousel-agile .carsList-itemContent{height:560px!important}.carousel-agile .agile__actions{z-index:1000;position:absolute!important;left:auto;right:auto;top:50%;width:100%;margin-top:-16px;padding:0 15px!important}.carousel-agile .agile__actions button{-webkit-appearance:button;background:rgba(0,0,0,.5);color:#fff;width:32px!important;height:32px!important;line-height:28px;text-align:center;border-radius:50%;border:none;transition:all .3s ease-in-out;font-size:1.3rem;left:auto;right:auto}.carousel-agile .agile__actions button:hover{background:rgba(0,0,0,.7)}.carousel-agile .slide img{width:100%;height:auto;border-radius:15px}.carousel-agile .slide{padding:0 5px}.opacity-05{opacity:.5}.opacity-0{opacity:0}",""]),t.exports=r},301:function(t,e,n){"use strict";n.r(e);var r={components:{CarModelInfo:n(296).default},props:{car:{required:!0,type:Object},link:{required:!1,default:!0},carousel:{type:Boolean,default:!1}},data:function(){return{}}},o=(n(305),n(32)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carsList-item carsList-ite"},[t.link?n("nuxt-link",{class:["carsList-itemContent",[t.carousel?"carsList-itemContent-agile":""]],attrs:{to:"/"+t.car.brand.slug+"/"+t.car.slug}},[n("CarModelInfo",{attrs:{car:t.car,carousel:t.carousel}}),t._v(" "),t.link?n("div",{staticClass:"carsList-itemHover"},[n("div",{staticClass:"carsList-itemButtonContainer"},[n("div",{staticClass:"carsList-itemButton"},[t._v("Смотреть")])])]):t._e()],1):t._e(),t._v(" "),t.link?t._e():n("div",{class:["carsList-itemContent",[t.carousel?"carsList-itemContent-agile":""]]},[n("CarModelInfo",{attrs:{car:t.car,carousel:t.carousel}})],1)],1)}),[],!1,null,"8d220a72",null);e.default=component.exports;installComponents(component,{CarModelInfo:n(296).default})},302:function(t,e,n){"use strict";n.r(e);var r={props:{text:{required:!0},img:{required:!0}}},o=n(32),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"advantages-item"},[n("div",{staticClass:"adv-image"},[n("img",{attrs:{src:t.img}})]),t._v(" "),n("div",{staticClass:"advantages-itemText",domProps:{innerHTML:t._s(t.text)}})])}),[],!1,null,null,null);e.default=component.exports},303:function(t,e,n){"use strict";n.r(e);var r={props:{name:{required:!0},image:{required:!1},icon:{required:!1},link:{required:!1},slug:{required:!0}}},o=(n(307),n(32)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["advantages-item",[t.slug==t.$route.params.slug||"underfined"==typeof t.$route.params.slug?"advantages-item-active":""]]},[n("nuxt-link",{attrs:{to:t.link+"#chooseCar"}},[n("div",{staticClass:"icon-adv"},[t.image?n("img",{attrs:{src:t.image}}):t._e(),t._v(" "),t.icon?n("i",{class:t.icon,staticStyle:{"font-size":"35px",color:"rgba(255, 255, 255, 0.9)"}}):t._e()]),t._v(" "),n("div",{staticClass:"advantages-itemText"},[t._v("\n      "+t._s(t.name)+"\n    ")])])],1)}),[],!1,null,"34284324",null);e.default=component.exports},305:function(t,e,n){"use strict";n(297)},306:function(t,e,n){var r=n(39)(!1);r.push([t.i,".carousel-slide[data-v-8d220a72]{background-repeat:no-repeat;background-size:cover;background-position:50%;width:auto;height:260px}",""]),t.exports=r},307:function(t,e,n){"use strict";n(298)},308:function(t,e,n){var r=n(39)(!1);r.push([t.i,".icon-adv[data-v-34284324]{margin-bottom:12px}.advantages-item[data-v-34284324]{margin-bottom:30px}.advantages-item a .advantages-itemText[data-v-34284324]{font-weight:600;color:hsla(0,0%,100%,.7);transition:all .3s ease}.advantages-item.advantages-item-active a .advantages-itemText[data-v-34284324],.advantages-item a:hover .advantages-itemText[data-v-34284324]{color:#ffab00}.advantages-item a .icon-adv[data-v-34284324]:before{transition:all .3s ease}.advantages-item.advantages-item-active a .icon-adv[data-v-34284324]:before,.advantages-item a:hover .icon-adv[data-v-34284324]:before{opacity:.9}",""]),t.exports=r},309:function(t,e,n){t.exports=n.p+"videos/techno.de7b9b8.mp4"},332:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(47),n(301)),c=n(302),l=n(295),d=n(303),v={head:{title:"VORON – Личный автомобиль бизнес-класса по технологии каршеринга",meta:[{hid:"keywords",name:"keywords",content:"каршеринг, каршеринг бизнес-класса, каршеринг без надписей, каршеринг ворон, аренда авто, прокат авто, аренда авто представительского класса, прокат авто москва, аренда авто в россии"},{hid:"description",name:"description",content:"VORON – Личный автомобиль бизнес-класса по технологии каршеринга"}]},components:{CarModel:o.default,AdvantageItem:c.default,SchemeItem:l.default,BrandItem:d.default},data:function(){return{cars:[],brands:[],brand_data:[]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.context,n=t.$axios,r=t.params,e.next=3,n.get("/api/getauto?brand=".concat(r.slug));case 3:return o=e.sent,e.abrupt("return",{cars:o.data.cars,brands:o.data.brands,brand_data:o.data.brand});case 5:case"end":return e.stop()}}),e)})))()},methods:{}},m=n(32),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"pageContent",attrs:{itemprop:"mainContentOfPage"}},[r("div",{staticClass:"mainSection mainSection-IndexPage"},[r("div",{staticClass:"mainSection-background"},[r("video",{staticClass:"mainSection-video",attrs:{playsinline:"",loop:"",muted:"",autoplay:"",poster_:""},domProps:{muted:!0}},[r("source",{attrs:{src:n(309),type:"video/mp4"}})])]),t._v(" "),r("div",{staticClass:"mainSection-content"},[r("div",{staticClass:"pageSection-content"},[r("h1",{staticClass:"mainSection-title"},[t._v("\n          Автомобиль "+t._s(t.brand_data.title)+"\n          "),r("div",{staticClass:"mainSection-subTitle"},[t._v("\n            с доступом со смартфона по технологии каршеринга\n          ")])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"mainSection-subTitle-NoMobile"}),t._v(" "),r("div",{staticClass:"advantages-link-container"},[r("a",{staticClass:"toScroll_ advantages-link",attrs:{href:"https://app.voron.io/"+t.$store.state.source}},[t._v("Установить приложение")])])])])]),t._v(" "),r("div",{staticClass:"advantages",attrs:{id:"advantages"}},[r("div",{staticClass:"pageSection-content"},[r("div",{staticClass:"advantages-title"},[t._v("Сервис")]),t._v(" "),r("div",{staticClass:"advantages-items-container advantages-items-container-Active"},[r("div",{staticClass:"advantages-items"},[r("AdvantageItem",{attrs:{text:"Разнообразный ассортимент бизнес и премиум класса",img:"/images/app/phone01.png"}}),t._v(" "),r("AdvantageItem",{attrs:{text:"Комфортные и статусные авто на улицах города с доступом со смартфона",img:"/images/app/phone02.png"}}),t._v(" "),r("AdvantageItem",{attrs:{text:"Авто без надписей. Поминутные, часовые и суточные тарифы",img:"/images/app/phone03.png"}}),t._v(" "),r("AdvantageItem",{attrs:{text:"Бесплатная доставка прямо к вам для часовой поездки",img:"/images/app/phone04.png"}}),t._v(" "),r("AdvantageItem",{attrs:{text:"Выбираете место на карте, и автомобиль через час ждет вас на парковке",img:"/images/app/phone05.png"}}),t._v(" "),r("div",{staticClass:"advantages-clear"})],1),t._v(" "),r("div",{staticClass:"advantages-items-Mobile"},[r("client-only",{attrs:{placeholder:"Loading..."}},[r("agile",{attrs:{options:{infinite:!1,navButtons:!1}}},[r("div",{staticClass:"slide"},[r("AdvantageItem",{attrs:{text:"Разнообразный ассортимент бизнес и премиум класса",img:"/images/app/phone01.png"}})],1),t._v(" "),r("div",{staticClass:"slide"},[r("AdvantageItem",{attrs:{text:"Комфортные и статусные авто на улицах города с доступом со смартфона",img:"/images/app/phone02.png"}})],1),t._v(" "),r("div",{staticClass:"slide"},[r("AdvantageItem",{attrs:{text:"Авто без надписей. Поминутные, часовые и суточные тарифы",img:"/images/app/phone03.png"}})],1),t._v(" "),r("div",{staticClass:"slide"},[r("AdvantageItem",{attrs:{text:"Бесплатная доставка прямо к вам для часовой поездки",img:"/images/app/phone04.png"}})],1),t._v(" "),r("div",{staticClass:"slide"},[r("AdvantageItem",{attrs:{text:"Выбираете место на карте, и автомобиль через час ждет вас на парковке",img:"/images/app/phone05.png"}})],1)])],1)],1)])])]),t._v(" "),r("div",{staticClass:"carsPresent"},[t._m(1),t._v(" "),r("div",{staticClass:"pageSection-content"},[r("div",{staticClass:"brand-list"},[t._l(t.brands,(function(t,e){return r("BrandItem",{key:e,attrs:{image:"https://img.voron.io/catalog/"+t.icon+".png",name:t.title,link:"/"+t.slug+"/",slug:t.slug}})})),t._v(" "),r("BrandItem",{attrs:{icon:"far fa-ellipsis-h",name:"Все",link:"/",slug:""}})],2),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"carsList"},t._l(t.cars,(function(t,e){return r("CarModel",{key:e,attrs:{car:t}})})),1),t._v(" "),t._m(3)])]),t._v(" "),r("div",{staticClass:"howItWorks",attrs:{id:"howItWorks"}},[r("div",{staticClass:"pageSection-content"},[r("div",{staticClass:"howItWorks-title"},[t._v("Схема работы")]),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"howItWorks-items"},[r("SchemeItem",{attrs:{title:"Регистрация",icon:"fal fa-address-card",text:"Вы устанавливаете мобильное приложение и проходите в нем регистрацию"}}),t._v(" "),r("SchemeItem",{attrs:{title:"Подтверждение",icon:"fal fa-user-check",text:"Служба безопасности проверит ваши документы и активирует ваш аккаунт"}}),t._v(" "),r("SchemeItem",{attrs:{title:"Доставка / Бронь",icon:"fal fa-route",text:"Вы выбираете авто, вносите страховой депозит с банковской карты и заказываете доставку. Через короткое время автомобиль будет ждать вас на парковке. Или бронируете и забираете самостоятельно"}}),t._v(" "),r("SchemeItem",{attrs:{title:"Аренда",icon:"fal fa-car-alt",text:"На время аренды у вас включен таймер в мобильном приложении и вы можете контролировать расходы"}}),t._v(" "),r("SchemeItem",{attrs:{title:"Завершение",icon:"fal fa-car-alt",text:"Зона завершения аренды подсвечена в приложении зеленым цветом. После завершения можете нажать «Вернуть депозит», и в течение от 4 до 48 часов депозит будет автоматически возвращен",decsription:"При желании вы можете сразу не возвращать депозит, а использовать для следующих поездок"}})],1),t._v(" "),r("div",{staticClass:"advantages-items-Mobile howItWorks-items-Mobile_"},[r("client-only",{attrs:{placeholder:"Loading..."}},[r("agile",{attrs:{options:{infinite:!1,navButtons:!1}}},[r("div",{staticClass:"slide"},[r("SchemeItem",{attrs:{title:"Регистрация",icon:"fal fa-address-card",number:"1",text:"Вы устанавливаете мобильное приложение и проходите в нем регистрацию"}})],1),t._v(" "),r("div",{staticClass:"slide"},[r("SchemeItem",{attrs:{title:"Подтверждение",icon:"fal fa-user-check",number:"2",text:"Служба безопасности проверит ваши документы и активирует ваш аккаунт"}})],1),t._v(" "),r("div",{staticClass:"slide"},[r("SchemeItem",{attrs:{title:"Доставка / Бронь",icon:"fal fa-route",number:"3",text:"Вы выбираете авто, вносите страховой депозит с банковской карты и заказываете доставку. Через короткое время автомобиль будет ждать вас на парковке. Или бронируете и забираете самостоятельно"}})],1),t._v(" "),r("div",{staticClass:"slide"},[r("SchemeItem",{attrs:{title:"Аренда",icon:"fal fa-car-alt",number:"4",text:"На время аренды у вас включен таймер в мобильном приложении и вы можете контролировать расходы"}})],1),t._v(" "),r("div",{staticClass:"slide"},[r("SchemeItem",{attrs:{title:"Завершение",icon:"fal fa-car-alt",number:"5",text:"Зона завершения аренды подсвечена в приложении зеленым цветом. После завершения можете нажать «Вернуть депозит», и в течение от 4 до 48 часов депозит будет автоматически возвращен",decsription:"При желании вы можете сразу не возвращать депозит, а использовать для следующих поездок"}})],1)])],1)],1),t._v(" "),r("div",{staticClass:"howItWorks-buttonContainer",staticStyle:{position:"static","margin-top":"50px"}},[r("nuxt-link",{staticClass:"howItWorks-button",attrs:{to:"/delivery/",exact:"","exact-active-class":"active"}},[r("i",{staticClass:"fal fa-route",staticStyle:{"margin-right":"10px"}}),t._v("Как работает\n          доставка")])],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"mainSection-subTitle"},[t._v("\n          Бесконтактная аренда автомобилей бизнес-класса без надписей"),n("br"),t._v(" "),n("b",[t._v("Срочная бесплатная доставка в указанное место")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageSection-content"},[n("h2",{staticClass:"carsPresent-title-brands",attrs:{id:"chooseBrand"}},[t._v("БРЕНДЫ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageSection-content"},[n("h2",{staticClass:"carsPresent-title-models",attrs:{id:"chooseCar"}},[t._v("МОДЕЛИ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carsList"},[n("div",{staticClass:"carsList-itemSubCaption"},[n("em",[n("small",[t._v("* Для отмены депозита необходимо совершить минимум 10 успешных\n              поездок в сервисе. Поездка зачитывается, при условии, что вы\n              находились в движении минимум 30 минут, не нарушали правила ПДД,\n              не нанесли ущерб автомобилю и оплата за аренду производилась\n              успешным списанием с привязанной банковской карты, а не\n              погашением задолженности или из страхового депозита.")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"howItWorks-numbers"},[n("div",{staticClass:"howItWorks-numberItem"},[t._v("1")]),t._v(" "),n("div",{staticClass:"howItWorks-numberItem"},[t._v("2")]),t._v(" "),n("div",{staticClass:"howItWorks-numberItem"},[t._v("3")]),t._v(" "),n("div",{staticClass:"howItWorks-numberItem"},[t._v("4")]),t._v(" "),n("div",{staticClass:"howItWorks-numberItem"},[t._v("5")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdvantageItem:n(302).default,BrandItem:n(303).default,CarModel:n(301).default,SchemeItem:n(295).default})}}]);