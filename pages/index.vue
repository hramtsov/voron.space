<template>
  <!-- CONTENT -->
  <main class="pageContent" itemprop="mainContentOfPage">
    <!-- BAR: MAIN SECTION -->

    <div class="mainSection mainSection-IndexPage">
      <div class="mainSection-background">
        <video
          playsinline
          loop
          muted
          autoplay
          poster="/images/bgvideo.jpg_"
          class="mainSection-video"
        >
          <source src="~static/video/techno.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="mainSection-content">
        <div class="pageSection-content">
          <h1 class="mainSection-title">
            Личный автомобиль
            <div class="mainSection-subTitle">
              с доступом со смартфона по технологии каршеринга
            </div>
          </h1>

          <h2 class="mainSection-subTitle">
            Бесконтактная аренда автомобилей бизнес-класса без надписей<br />
            <b>Срочная бесплатная доставка в указанное место</b>
          </h2>

          <div class="mainSection-subTitle-NoMobile"></div>

          <div class="advantages-link-container">
            <a
              :href="`https://app.voron.io/${$store.state.source}`"
              class="toScroll_ advantages-link"
              >Установить приложение</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- /BAR: MAIN SECTION -->
    <!-- BAR: ADVANTAGES -->
    <div id="advantages" class="advantages">
      <div class="pageSection-content">
        <div class="advantages-title">Преимущества</div>

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

          <div
            class="advantages-items advantages-items-Mobile fotorama"
            data-width="100%"
            data-minwidth="100%"
            data-height="350px"
            data-auto_="false"
          >
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
          </div>
        </div>
      </div>
    </div>
    <!-- /BAR: ADVANTAGES -->
    <!-- BAR: CARS PRESENTATION -->
    <div class="carsPresent">
      <div class="pageSection-content">
        <h2 id="chooseCar" class="carsPresent-title">На дорогах Москвы</h2>
      </div>

      <div class="pageSection-content">
        <div class="brand-list">
          <BrandItem
            v-for="(brand, key) in brands"
            :key="key"
            :image="`https://img.voron.io/catalog/${brand.icon}.png`"
            :name="brand.title"
            :link="`/${brand.slug}/`"
            :slug="brand.slug"
          />
          <!-- <BrandItem image="" name="Все" link="/" slug="" /> -->
        </div>

        <!-- CARS LIST BAR -->
        <div class="carsList">
          <CarModel v-for="(car, key) in cars" :key="key" :car="car" />
        </div>
        <div class="carsList">
          <div class="carsList-itemSubCaption">
            <em
              ><small
                >*Для отмены депозита засчитываются поездки на любых
                автомобилях, при условии, что вы находились в движении минимум
                30 минут, не нарушали правила ПДД, не нанесли ущерб автомобилю и
                оплата за аренду производилась списанием с привязанной
                банковской карты, а не из страхового депозита.</small
              ></em
            >
          </div>
        </div>
        <!-- /CARS LIST BAR -->
      </div>
    </div>
    <!-- /BAR: CARS PRESENTATION -->
    <!-- BAR: HOT IT WORKS -->
    <div id="howItWorks" class="howItWorks">
      <div class="pageSection-content">
        <div class="howItWorks-title">Схема работы сервиса</div>
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
        <div
          class="howItWorks-items howItWorks-items-Mobile fotorama"
          data-width="100%"
          data-minwidth="100%"
          data-height="360px"
          data-auto_="false"
        >
          <div class="howItWorks-item">
            <div class="howItWorks-numberItem">1</div>
            <div class="icon-adv">
              <i class="fal fa-address-card"></i>
            </div>
            <div class="howItWorks-itemTitle">Регистрация</div>
            <div class="howItWorks-itemText">
              Вы устанавливаете мобильное приложение и проходите в нем
              регистрацию
            </div>
          </div>

          <div class="howItWorks-item">
            <div class="howItWorks-numberItem">2</div>
            <div class="icon-adv">
              <i class="fal fa-user-check"></i>
            </div>

            <div class="howItWorks-itemTitle">Подтверждение</div>
            <div class="howItWorks-itemText">
              Служба безопасности проверит ваши документы и активирует ваш
              аккаунт
            </div>
          </div>

          <div class="howItWorks-item">
            <div class="howItWorks-numberItem">3</div>
            <div class="icon-adv">
              <i class="fal fa-route"></i>
            </div>
            <div class="howItWorks-itemTitle">Доставка / Бронь</div>
            <div class="howItWorks-itemText">
              Вы выбираете авто, вносите страховой депозит с банковской карты и
              заказываете доставку. Или бронируете и забираете самостоятельно
            </div>
          </div>
          <div class="howItWorks-item">
            <div class="howItWorks-numberItem">4</div>
            <div class="icon-adv">
              <i class="fal fa-car-alt"></i>
            </div>
            <div class="howItWorks-itemTitle">Аренда</div>
            <div class="howItWorks-itemText">
              На время аренды у вас включен таймер в мобильном приложении и вы
              можете контролировать расходы
            </div>
          </div>
          <div class="howItWorks-item">
            <div class="howItWorks-numberItem">5</div>
            <div class="icon-adv">
              <i class="fal fa-flag-checkered"></i>
            </div>
            <div class="howItWorks-itemTitle">Завершение</div>
            <div class="howItWorks-itemText">
              Зона завершения аренды подсвечена в приложении зеленым цветом.
              Нажмите "Вернуть депозит", и в течение от 4 до 48 часов депозит
              будет возвращен
            </div>
          </div>
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

export default {
  head: {
    title: "VORON – Личный автомобиль бизнес-класса по технологии каршеринга",
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
  },
  data() {
    return {
      cars: [],
      brands: [],
    };
  },
  components: {
    CarModel,
    AdvantageItem,
    SchemeItem,
    BrandItem,
  },
  async asyncData({ context, $axios }) {
    let response = await $axios.get(`https://i2.voron.io/api/getauto`);
    // console.log(response.data);

    return { cars: response.data["cars"], brands: response.data["brands"] };
  },
};
</script>