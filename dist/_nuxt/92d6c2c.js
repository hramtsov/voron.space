(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{313:function(t,e,c){var content=c(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(40).default)("666a3376",content,!0,{sourceMap:!1})},318:function(t,e,c){"use strict";c(313)},319:function(t,e,c){var o=c(39)(!1);o.push([t.i,".contactsPage-h2[data-v-8737eb8c]{margin-bottom:8px}.pageSection-block .contactsPage-tableCell[data-v-8737eb8c]{padding-bottom:30px}.city-item[data-v-8737eb8c]{display:inline-block;margin-right:15px;font-size:14px;line-height:20px}",""]),t.exports=o},324:function(t,e,c){"use strict";c.r(e);var o=c(7),n=(c(47),c(33),c(123)),l={head:{title:"VORON – Срочная и бесплатная доставка автомобилей бизнес-класса",meta:[{hid:"keywords",name:"keywords",content:"каршеринг, каршеринг бизнес-класса, каршеринг без надписей, каршеринг ворон, аренда авто, прокат авто, аренда авто представительского класса, прокат авто москва, аренда авто в россии"},{hid:"description",name:"description",content:"VORON – Личный автомобиль бизнес-класса по технологии каршеринга"}]},data:function(){return{form:{name:"",message:"",phone:"",email:"",success:!1,errors:!1}}},components:{TheMask:n.TheMask},directives:{mask:n.mask},methods:{SendMessage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t.form.name||""==t.form.message||""==t.form.phone||""==t.form.email){e.next=9;break}return e.next=3,t.$axios.$post("/api/voron_black_contact_mail/",{name:t.form.name,message:t.form.message,phone:t.form.phone,email:t.form.email});case 3:c=e.sent,console.log(t.form),console.log(c),c.result?(t.form.success=!0,t.form.errors=!1,t.form.name="",t.form.message="",t.form.phone="",t.form.email=""):(t.form.success=!1,t.form.errors=!0),e.next=11;break;case 9:t.form.success=!1,t.form.errors=!0;case 11:case"end":return e.stop()}}),e)})))()}}},r=(c(318),c(32)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("main",{staticClass:"pageContent"},[c("div",{staticClass:"pageSection"},[c("div",{staticClass:"pageSection-content"},[c("h1",{staticClass:"pageSection-title"},[t._v("Контакты")]),t._v(" "),c("div",{staticClass:"contactsPage"},[c("div",{staticClass:"contactsPage-table"},[t._m(0),t._v(" "),c("div",{staticClass:"contactsPage-tableCell"},[c("div",{staticClass:"pageSection-block"},[c("h2",{staticClass:"contactsPage-h2"},[t._v("Обратная связь")]),t._v(" "),t._m(1),t._v(" "),c("form",{staticClass:"contactsPage-form",on:{submit:function(e){return e.preventDefault(),t.SendMessage()}}},[c("div",{staticClass:"customTextInput"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"customTextInput-input",attrs:{name:"contact_name",autocomplete:"off",value:"",type:"text",placeholder:"Имя"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),c("div",{staticClass:"contactsPage-table"},[c("div",{staticClass:"contactsPage-tableCell"},[c("div",{staticClass:"customTextInput"},[c("the-mask",{staticClass:"customTextInput-input",attrs:{name:"contact_phone",mask:["+7 (###) ###-##-##"],placeholder_:"+7 (999) 999-99-99",placeholder:"Телефон",required:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)]),t._v(" "),c("div",{staticClass:"contactsPage-tableCell"},[c("div",{staticClass:"customTextInput"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"customTextInput-input",attrs:{name:"contact_mail",autocomplete:"off",value:"",type:"email",placeholder:"E-mail"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])])]),t._v(" "),c("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"customTextarea",attrs:{name:"contact_text",autocomplete:"off",placeholder:"Ваше сообщение"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}}),t._v(" "),c("input",{staticClass:"contactsPage-formBtn",attrs:{type:"submit",value:"Отправить",name:"submit"}}),t._v(" "),t.form.success?c("div",{staticClass:"thanks-form alert-form",staticStyle:{"margin-top":"20px"}},[c("div",{staticClass:"thanks-form-title"},[t._v("\n                    E-mail успешно отправлен!\n                  ")]),t._v(" "),c("div",{staticClass:"thanks-form-text"},[t._v("\n                    Спасибо за использование формы обратной связи! При\n                    необходимости мы с Вами свяжемся.\n                  ")])]):t._e(),t._v(" "),t.form.errors?c("div",{staticClass:"contactsPage-formError",staticStyle:{"margin-top":"20px"}},[c("div",{staticClass:"thanks-form-title"},[t._v("Ошибка!")]),t._v(" "),c("div",{staticClass:"thanks-form-text"},[t._v("\n                    Проверьте, пожалуйста, правильность заполения всех полей.\n                  ")])]):t._e()])])])])])])])])}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"contactsPage-tableCell"},[c("div",{staticClass:"pageSection-block"},[c("h2",{staticClass:"contactsPage-h2"},[t._v("Поддержка")]),t._v(" "),c("div",{staticClass:"contactsPage-table"},[c("div",{staticClass:"contactsPage-tableCell",staticStyle:{"padding-left":"0"}},[c("a",{staticClass:"contactsPage-link",attrs:{href:"tel:+88005550679"}},[t._v("\n                    8 800 555 06 79\n                  ")]),t._v(" "),c("div",{staticClass:"contactsPage-text"},[t._v("Круглосуточно")])])]),t._v(" "),c("h2",{staticClass:"contactsPage-h2"},[t._v("ЦЕНТРАЛЬНЫЙ ОФИС")]),t._v(" "),c("div",{staticClass:"contactsPage-table"},[c("div",{staticClass:"contactsPage-tableCell contactsPage-tableCell-NPB",staticStyle:{"padding-left":"0"}},[c("address",{staticClass:"contactsPage-address",staticStyle:{"margin-top":"0"}},[t._v("\n                    г. Москва, ул. Ленинская Слобода, д.19\n                    "),c("br"),t._v('\n                    БЦ "Омега Плаза"\n                  ')])])]),t._v(" "),c("h2",{staticClass:"contactsPage-h2"},[t._v("ГОРОДА")]),t._v(" "),c("div",{staticClass:"contactsPage-table"},[c("div",{staticClass:"contactsPage-tableCell contactsPage-tableCell-NPB",staticStyle:{"padding-left":"0"}},[c("span",{staticClass:"city-item"},[t._v("Москва")]),t._v(" "),c("span",{staticClass:"city-item"},[t._v("Санкт-Петербург")]),t._v(" "),c("span",{staticClass:"city-item"},[t._v("Сочи")]),t._v(" "),c("span",{staticClass:"city-item"},[t._v("Краснодар")]),t._v(" "),c("span",{staticClass:"city-item"},[t._v("Казань")])])])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"contactsPage-table"},[c("div",{staticClass:"contactsPage-tableCell"},[c("div",{staticClass:"contactsPage-text"},[t._v("Напишите на почту")]),t._v(" "),c("a",{staticClass:"contactsPage-link",attrs:{href:"mailto:i@voron.io"}},[t._v("\n                    i@voron.io\n                  ")]),t._v(" "),c("div",{staticClass:"contactsPage-text"},[t._v("\n                    или заполните форму, и мы вам обязательно ответим\n                  ")])]),t._v(" "),c("div",{staticClass:"contactsPage-tableCell"})])}],!1,null,"8737eb8c",null);e.default=component.exports}}]);