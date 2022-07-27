<template>
  <!-- CONTENT -->
  <main class="pageContent" itemprop="mainContentOfPage">
    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="showModal = false">
      <div slot="body">
        <div class="thanks-form alert-form" v-if="form.success">
          <div class="thanks-form-title">Спасибо!</div>
          <div class="thanks-form-text">
            Мы направили вам SMS-сообщение с ссылкой на завершение регистрации.
          </div>
        </div>

        <div class="error-form alert-form" v-if="form.errors">
          <div class="thanks-form-title">Ошибка!</div>
          <div class="thanks-form-text">
            Попробуйте заполнить форму еще раз!
          </div>
        </div>

        <div class="main_photo_div" v-if="!form.success">
          <img
            class="main_photo"
            :src="`https://img.voron.io/${auto.img}`"
            alt=""
          />
        </div>

        <form
          v-if="!form.success"
          class="callback-form"
          v-on:submit.prevent="SendMessage()"
        >
          <div class="form-group">
            <label>Имя</label>
            <input
              type="text"
              name="firstname"
              class="form-control"
              required
              v-model.trim="form.firstname"
            />
          </div>

          <div class="form-group">
            <label>Фамилия</label>
            <input
              type="text"
              name="lastname"
              class="form-control"
              required
              v-model.trim="form.lastname"
            />
          </div>

          <div class="form-group">
            <label>Телефон</label>
            <the-mask
              name="phone"
              :mask="['+7 (###) ###-##-##']"
              placeholder="+7 (999) 999-99-99"
              class="phone_number form-control"
              required
              v-model="form.phone"
            />
          </div>

          <button type="submit" class="btn btn-primary">Забронировать</button>
        </form>
      </div>

      <h3 slot="header">Забронировать {{ auto.title }}</h3>
    </Modal>

    <!-- BAR: MAIN SECTION -->
    <div class="mainSection mainSection-IndexPage">
      <div class="mainSection-background">
        <video
          playsinline
          loop
          muted
          autoplay
          :poster="[
            auto.video
              ? ''
              : `https://img.voron.io/gallery/${auto.tid}/${auto.photos[0]}@3x.jpg`,
          ]"
          class="mainSection-video"
        >
          <source
            v-if="auto.video"
            :src="`https://img.voron.io/videos/${auto.video}`"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="mainSection-content">
        <div class="pageSection-content">
          <h1 class="mainSection-title">
            <template v-if="auto && typeof auto.title === 'string'">
              <template v-if="auto.title.includes(auto.brand.title)">{{
                auto.title
              }}</template>
              <template v-else
                >{{ auto.brand.title }} {{ auto.title }}</template
              >
            </template>
            <div class="mainSection-subTitle">
              с доступом со смартфона по технологии каршеринга
            </div>
          </h1>

          <h2 class="mainSection-subTitle" v-html="auto.description">
            <!-- {{ auto.description }}` -->
          </h2>

          <div class="mainSection-subTitle-NoMobile"></div>

          <div class="advantages-link-container">
            <a @click="showModal = true" class="advantages-link"
              >Забронировать</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- /BAR: MAIN SECTION -->

    <!-- BAR: CARS PRESENTATION -->
    <div class="carsPresent">
      <!-- <div class="pageSection-content">
        <h2 id="chooseCar" class="carsPresent-title">На дорогах Москвы</h2>
      </div> -->

      <div class="pageSection-content">
        <!-- CARS LIST BAR -->
        <div class="carsList">
          <CarModel :car="auto" :link="false" :carousel="true" />
        </div>
        <div class="carsList2">
          <div class="carsList-itemSubCaption">
            <em>
              <small v-if="auto.depositMin > 0"
                >* При наличии положительной истории поездок в серисе депозит
                может быть снижен до {{ auto.depositMin | number }}
                <span class="rouble">₽</span></small
              >

              <small v-else
                >* Для отмены депозита необходимо совершить минимум 10 успешных
                поездок в сервисе. Поездка зачитывается, при условии, что вы
                находились в движении минимум 30 минут, не нарушали правила ПДД,
                не нанесли ущерб автомобилю и оплата за аренду производилась
                успешным списанием с привязанной банковской карты, а не
                погашением задолженности или из страхового депозита.</small
              ></em
            >
          </div>
        </div>
        <!-- /CARS LIST BAR -->
      </div>
    </div>
    <!-- /BAR: CARS PRESENTATION -->

    <!-- BAR: ADVANTAGES -->
    <div id="advantages" class="advantages">
      <div class="pageSection-content">
        <div class="advantages-title">Сервис</div>

        <div
          class="advantages-items-container advantages-items-container-Active"
        >
          <div class="advantages-items">
            <AdvantageItem
              text="Разнообразный ассортимент бизнес и премиум класса"
              img="/images/app/phone01.png"
            />
            <AdvantageItem
              text="Комфортные и статусные авто на улицах города с доступом со смартфона"
              img="/images/app/phone02.png"
            />
            <AdvantageItem
              text="Авто без надписей. Поминутные, часовые и суточные тарифы"
              img="/images/app/phone03.png"
            />
            <AdvantageItem
              text="Бесплатная доставка прямо к вам для часовой поездки"
              img="/images/app/phone04.png"
            />
            <AdvantageItem
              text="Выбираете место на карте, и автомобиль через час ждет вас на парковке"
              img="/images/app/phone05.png"
            />

            <div class="advantages-clear"></div>
          </div>

          <div class="advantages-items-Mobile">
            <client-only placeholder="Loading...">
              <agile
                :options="{
                  infinite: false,
                  navButtons: false,
                }"
              >
                <div class="slide">
                  <AdvantageItem
                    text="Разнообразный ассортимент бизнес и премиум класса"
                    img="/images/app/phone01.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Комфортные и статусные авто на улицах города с доступом со смартфона"
                    img="/images/app/phone02.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Авто без надписей. Поминутные, часовые и суточные тарифы"
                    img="/images/app/phone03.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Бесплатная доставка прямо к вам для часовой поездки"
                    img="/images/app/phone04.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Выбираете место на карте, и автомобиль через час ждет вас на парковке"
                    img="/images/app/phone05.png"
                  />
                </div>
              </agile>
            </client-only>
          </div>
        </div>
      </div>
    </div>
    <!-- /BAR: ADVANTAGES -->

    <!-- BAR: HOT IT WORKS -->
    <div id="howItWorks" class="howItWorks">
      <div class="pageSection-content">
        <div class="howItWorks-title">Схема работы</div>
        <div class="howItWorks-numbers">
          <div class="howItWorks-numberItem">1</div>
          <div class="howItWorks-numberItem">2</div>
          <div class="howItWorks-numberItem">3</div>
          <div class="howItWorks-numberItem">4</div>
          <div class="howItWorks-numberItem">5</div>
        </div>
        <div class="howItWorks-items">
          <SchemeItem
            title="Регистрация"
            icon="fal fa-address-card"
            text="Вы устанавливаете мобильное приложение и проходите в нем регистрацию"
          />

          <SchemeItem
            title="Подтверждение"
            icon="fal fa-user-check"
            text="Служба безопасности проверит ваши документы и активирует ваш аккаунт"
          />

          <SchemeItem
            title="Доставка / Бронь"
            icon="fal fa-route"
            text="Вы выбираете авто, вносите страховой депозит с банковской карты и заказываете доставку. Через короткое время автомобиль будет ждать вас на парковке. Или бронируете и забираете самостоятельно"
          />

          <SchemeItem
            title="Аренда"
            icon="fal fa-car-alt"
            text="На время аренды у вас включен таймер в мобильном приложении и вы можете контролировать расходы"
          />

          <SchemeItem
            title="Завершение"
            icon="fal fa-car-alt"
            text="Зона завершения аренды подсвечена в приложении зеленым цветом. После завершения можете нажать «Вернуть депозит», и в течение от 4 до 48 часов депозит будет автоматически возвращен"
            decsription="При желании вы можете сразу не возвращать депозит, а использовать для следующих поездок"
          />
        </div>
        <div class="advantages-items-Mobile howItWorks-items-Mobile_">
          <client-only placeholder="Loading...">
            <agile
              :options="{
                infinite: false,
                navButtons: false,
              }"
            >
              <div class="slide">
                <SchemeItem
                  title="Регистрация"
                  icon="fal fa-address-card"
                  number="1"
                  text="Вы устанавливаете мобильное приложение и проходите в нем регистрацию"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Подтверждение"
                  icon="fal fa-user-check"
                  number="2"
                  text="Служба безопасности проверит ваши документы и активирует ваш аккаунт"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Доставка / Бронь"
                  icon="fal fa-route"
                  number="3"
                  text="Вы выбираете авто, вносите страховой депозит с банковской карты и заказываете доставку. Через короткое время автомобиль будет ждать вас на парковке. Или бронируете и забираете самостоятельно"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Аренда"
                  icon="fal fa-car-alt"
                  number="4"
                  text="На время аренды у вас включен таймер в мобильном приложении и вы можете контролировать расходы"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Завершение"
                  icon="fal fa-car-alt"
                  number="5"
                  text="Зона завершения аренды подсвечена в приложении зеленым цветом. После завершения можете нажать «Вернуть депозит», и в течение от 4 до 48 часов депозит будет автоматически возвращен"
                  decsription="При желании вы можете сразу не возвращать депозит, а использовать для следующих поездок"
                />
              </div>
            </agile>
          </client-only>
        </div>
        <div
          class="howItWorks-buttonContainer"
          style="position: static; margin-top: 50px"
        >
          <nuxt-link
            to="/delivery/"
            exact
            exact-active-class="active"
            class="howItWorks-button"
            ><i style="margin-right: 10px" class="fal fa-route"></i>Как работает
            доставка</nuxt-link
          >
        </div>
      </div>
    </div>

    <!-- /BAR: HOT IT WORKS -->
  </main>
  <!-- /CONTENT -->
</template>


<script>
import CarModel from "/components/CarModel.vue";
import AdvantageItem from "/components/AdvantageItem.vue";
import SchemeItem from "/components/SchemeItem.vue";
import BrandItem from "/components/BrandItem.vue";

import Modal from "/components/Modal.vue";
import { TheMask, mask } from "vue-the-mask";

export default {
  // head: {
  //   title: this.auto,
  //   meta: [
  //     {
  //       hid: "keywords",
  //       name: "keywords",
  //       content:
  //         "каршеринг, каршеринг бизнес-класса, каршеринг без надписей, каршеринг ворон, аренда авто, прокат авто, аренда авто представительского класса, прокат авто москва, аренда авто в россии",
  //     },
  //     {
  //       hid: "description",
  //       name: "description",
  //       content:
  //         "VORON – Личный автомобиль бизнес-класса по технологии каршеринга",
  //     },
  //   ],
  // },

  head() {
    return {
      title: this.auto.title.includes(this.auto.brand.title)
        ? this.auto.title +
          ". VORON – Личный автомобиль бизнес-класса по технологии каршеринга"
        : this.auto.brand.title +
          " " +
          this.auto.title +
          ". VORON – Личный автомобиль бизнес-класса по технологии каршеринга",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "каршеринг, каршеринг бизнес-класса, каршеринг без надписей, каршеринг ворон, аренда авто, прокат авто, аренда авто представительского класса, прокат авто москва, аренда авто в россии",
        },
        {
          hid: "description",
          name: "description",
          content:
            "VORON – Личный автомобиль бизнес-класса по технологии каршеринга",
        },
      ],
    };
  },

  // head: {

  // },
  components: {
    CarModel,
    AdvantageItem,
    SchemeItem,
    BrandItem,
    Modal,
    TheMask,
  },
  data() {
    return {
      cars: [],
      brands: [],
      auto: {},
      showModal: false,
      form: {
        firstname: "",
        lastname: "",
        phone: "",
        success: false,
        errors: false,
      },
    };
  },
  directives: { mask },
  //   async validate({ params, $axios }) {
  // try {
  //   let response = await $axios.get(
  //     "http://127.0.0.1:8000/api/v1/person/" + params.slug
  //   );
  //   return true;
  // } catch (error) {
  //   return false;
  // }
  //   },
  async asyncData({ context, $axios, params }) {
    let response = await $axios.get(`/api/getauto?slug=${params.auto}`);
    return {
      cars: response.data["cars"],
      brands: response.data["brands"],
      auto: response.data["auto"],
    };
  },
  created() {
    // console.log("тест");
    // console.log(this.$route.params.slug);
  },
  methods: {
    async SendMessage() {
      if (
        this.form.lastname != "" &&
        this.form.firstname != "" &&
        this.form.phone != ""
      ) {
        // console.log("отправим");

        var response = await this.$axios.$post("/api/voron_black_booking/", {
          token: "Voron.black_45dffaj5",
          auto_slug: this.$route.params.auto,
          lastname: this.form.lastname,
          firstname: this.form.firstname,
          phone: this.form.phone,
          source: this.$utm(),
        });

        // console.log(this.form);
        console.log(response);

        if (response.result) {
          this.form.success = true;
          this.form.errors = false;
          this.form.lastname = "";
          this.form.firstname = "";
          this.form.phone = "";
          this.form.email = "";
          this.form.auto = "";
          this.form.year = "";
        } else {
          this.form.success = false;
          this.form.errors = true;
        }
      } else {
        this.form.success = false;
        this.form.errors = true;
      }
    },
  },
};
</script>  

<style scoped>
.mainSection-title {
  font-weight: 700;
  color: #fff;
}
.mainSection-subTitle {
  color: #fff;
  font-size: 17px;
  line-height: 34x;
}

.carsList-item {
  width: 100%;
}

.main_photo_div {
  text-align: center;
  margin-top: -30px;
}

.main_photo {
  max-height: 150px;
  margin: 0 auto;
}
</style>