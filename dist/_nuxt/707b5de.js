(window.webpackJsonp=window.webpackJsonp||[]).push([[19,9],{287:function(t,e,n){"use strict";n.r(e);var c=n(29),component=Object(c.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"pageSection-menu"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/legal/agreement/",exact:"","exact-active-class":"active"}},[t._v("Договор-оферта")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/legal/personal-data/",exact:"","exact-active-class":"active"}},[t._v("Обработка персональных данных")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/legal/privacy-policy/",exact:"","exact-active-class":"active"}},[t._v("Политика конфиденциальности")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/legal/sign-act/",exact:"","exact-active-class":"active"}},[t._v("Акт приема-передачи")])],1)])])}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var c=n(6),r=(n(49),{head:{title:"VORON – Срочная и бесплатная доставка автомобилей бизнес-класса",meta:[{hid:"keywords",name:"keywords",content:"каршеринг, каршеринг бизнес-класса, каршеринг без надписей, каршеринг ворон, аренда авто, прокат авто, аренда авто представительского класса, прокат авто москва, аренда авто в россии"},{hid:"description",name:"description",content:"VORON – Личный автомобиль бизнес-класса по технологии каршеринга"}]},data:function(){return{content:""}},components:{Nav:n(287).default},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.context,n=t.$axios,e.next=3,n.get("https://i2.voron.io/api/getpage?alias=personal-data");case 3:return c=e.sent,e.abrupt("return",{content:c.data});case 5:case"end":return e.stop()}}),e)})))()}}),l=n(29),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"pageContent"},[n("div",{staticClass:"pageSection"},[n("div",{staticClass:"pageSection-content"},[n("Nav"),t._v(" "),n("h1",{staticClass:"pageSection-title"},[t._v("Обработка персональных данных")]),t._v(" "),n("div",{staticClass:"pageSection-block"},[n("div",{staticClass:"agreementPage",domProps:{innerHTML:t._s(t.content)}})])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);