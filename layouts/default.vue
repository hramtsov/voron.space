<template>
  <!-- PAGE -->
  <div class="page">
    <!-- MAIN WRAPPER -->
    <div class="pageWrapper">
      <!-- HEADER -->
      <div
        :class="[
          'pageHeader',
          [
            $route.name == 'index' ||
            $route.name == 'partner' ||
            $route.name == 'slug' ||
            $route.name == 'slug-auto'
              ? 'pageHeader-Transparent'
              : '',
          ],
        ]"
        itemscope
        itemtype="http://schema.org/WPHeader"
      >
        <div class="pageHeader-content">
          <div
            :class="[
              'pageHeader-menuBtn',
              [menuOpen ? 'pageHeader-menuBtn-Active' : ''],
            ]"
            @click="menuOpen = !menuOpen"
          >
            <span class="pageHeader-menuBtnLine"></span>
          </div>

          <div :class="['sidebarMenu', [menuOpen ? 'sidebarMenu-Active' : '']]">
            <div class="sidebarMenu-side"></div>
            <div class="sidebarMenu-side sidebarMenu-side-Right"></div>
            <div class="sidebarMenu-wrapper">
              <div
                class="sidebarMenu-scroller"
                @click.self="menuOpen = !menuOpen"
              >
                <div class="sidebarMenu-content">
                  <nav class="sidebarMenu-main">
                    <ul>
                      <li>
                        <nuxt-link to="/" exact exact-active-class="active"
                          >Каршеринг</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link to="/delivery/" exact-active-class="active"
                          >Срочная доставка</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          to="/partner/"
                          exact
                          exact-active-class="active"
                          >Подключить автомобиль</nuxt-link
                        >
                      </li>
                    </ul>
                  </nav>
                  <nav class="sidebarMenu-other">
                    <ul>
                      <li>
                        <a href="https://voron.help">База знаний и правил</a>
                      </li>
                      <li>
                        <nuxt-link
                          to="/deposit/"
                          exact
                          exact-active-class="active"
                          >Страховой депозит</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          to="/about/"
                          exact
                          exact-active-class="active"
                          >О сервисе</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          to="/legal/agreement/"
                          exact
                          exact-active-class="active"
                          >Договор-оферта</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          to="/contact/"
                          exact
                          exact-active-class="active"
                          >Контакты</nuxt-link
                        >
                      </li>
                    </ul>
                  </nav>
                  <div class="sidebarMenu-phones">
                    <a
                      href="tel:+7 800 555 06 79"
                      class="sidebarMenu-phonesLink sidebarMenu-phonesLink-RU"
                      >8 800 555 06 79</a
                    >
                  </div>
                </div>
                <div class="sidebarMenu-scrollerBar-wrapper">
                  <div
                    class="sidebarMenu-scrollerBar"
                    style="height: 0px"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <a href="/" class="pageHeader-logo"></a>
          <div class="pageHeader-phones">
            <a class="pageHeader-phonesLink" href="tel:+7 800 555 06 79"
              >8 800 555 06 79</a
            >
            <!--   -->
            <div class="pageHeader-phonesListContainer">
              <nav class="pageHeader-phonesList">
                <ul>
                  <li data-tel="8 800 555 06 79">Россия</li>
                </ul>
              </nav>
            </div>
          </div>
          <nav class="pageHeader-menu">
            <ul>
              <li>
                <nuxt-link to="/" exact exact-active-class="active"
                  ><span>Каршеринг</span></nuxt-link
                >
              </li>

              <li>
                <nuxt-link to="/delivery/" exact exact-active-class="active"
                  ><span>Доставка</span></nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/partner/" exact exact-active-class="active"
                  ><span>Подключить авто</span></nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- /HEADER -->

      <!-- <transition name="home"> -->
      <Nuxt />
      <!-- </transition> -->

      <div class="pageFooter-Protector"></div>
    </div>
    <!-- /MAIN WRAPPER -->
    <!-- FOOTER -->
    <footer class="pageFooter" itemscope itemtype="http://schema.org/WPFooter">
      <div class="pageFooter-content">
        <div class="pageFooter-navi">
          <div class="pageFooter-naviCol">
            <div class="pageFooter-title">Меню</div>
            <nav class="pageFooter-menu">
              <ul>
                <li>
                  <nuxt-link to="/" exact exact-active-class="active"
                    >Каршеринг</nuxt-link
                  >
                </li>

                <li>
                  <nuxt-link to="/delivery/" exact exact-active-class="active"
                    >Срочная доставка</nuxt-link
                  >
                </li>

                <li>
                  <nuxt-link to="/partner/" exact exact-active-class="active"
                    >Подключить автомобиль</nuxt-link
                  >
                </li>

                <li>
                  <a href="https://voron.help">База знаний и правил</a>
                </li>
                <li>
                  <nuxt-link to="/deposit/" exact exact-active-class="active"
                    >Страховой депозит</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/about/" exact exact-active-class="active"
                    >О сервисе</nuxt-link
                  >
                </li>
                <li>
                  <a href="https://i.voron.io" target="_blank">Партнёрам</a>
                </li>
                <li>
                  <nuxt-link to="/contact/" exact exact-active-class="active"
                    >Контакты</nuxt-link
                  >
                </li>
              </ul>
            </nav>
          </div>
          <div class="pageFooter-naviCol">
            <div class="pageFooter-title">Поддержка</div>
            <div class="pageFooter-support">
              <a
                href="tel:+7 800 555 06 79"
                class="
                  pageFooter-supportLink
                  pageFooter-supportLinkFlag
                  pageFooter-supportLinkFlag-RU
                "
                >8 800 555 06 79</a
              >
              <a
                class="pageFooter-supportLink pageFooter-supportLink-Email"
                href="mailto:i@voron.io"
                >i@voron.io</a
              >
            </div>
          </div>
          <div id="appstore" class="pageFooter-naviCol">
            <div class="pageFooter-title">Приложение</div>

            <div class="pageFooter-appsLinks">
              <a
                v-if="os == 'iOS' || os == 'unknown'"
                style="color: #fff"
                target="_blank"
                :href="`https://app.voron.io/${$store.state.source}`"
                class="pageFooter-appsLink pageFooter-appsLink-Apple"
                ><span class="pageFooter-appsLinkText"></span
              ></a>
              <a
                v-if="os == 'Android' || os == 'unknown'"
                style="color: #fff"
                target="_blank"
                :href="`https://app.voron.io/${$store.state.source}`"
                class="
                  pageFooter-appsLink
                  pageFooter-appsLink-Google
                  pageFooter-appsLink-Current
                "
                onclick2="Everentcar.Service.goGoogleMarketPage();"
                ><span class="pageFooter-appsLinkText"></span
              ></a>
            </div>
            <div class="pageFooter-publicLinks">
              <a
                class="pageFooter-publicLink pageFooter-publicLink-FB"
                target="_blank"
                href="https://ru-ru.facebook.com/voron.io"
              ></a>
              <a
                class="pageFooter-publicLink pageFooter-publicLink-Instagram"
                target="_blank"
                href="https://www.instagram.com/voronblack_official"
              ></a>
            </div>
          </div>
        </div>

        <div class="pageFooter-infoLinks">
          <nuxt-link to="/legal/agreement/" exact exact-active-class="active"
            >Договор-оферта сервиса VORON</nuxt-link
          >
          <nuxt-link
            to="/legal/personal-data/"
            exact
            exact-active-class="active"
            >Обработка персональных данных</nuxt-link
          >
          <nuxt-link
            to="/legal/privacy-policy/"
            exact
            exact-active-class="active"
            >Политика конфиденциальности</nuxt-link
          >
          <nuxt-link to="/legal/sign-act/" exact exact-active-class="active"
            >Акт приема-передачи</nuxt-link
          >
        </div>
      </div>
    </footer>
    <!-- /FOOTER -->
  </div>
  <!-- /PAGE -->

  <!-- </div>
  </div> -->
</template>

<script>
export default {
  data: () => ({
    // width: 0,
    os: "",
    classes: "",
    menuOpen: false,
  }),
  mounted() {
    this.os = this.getMobileOperatingSystem();
    console.log(this.os);
  },
  created() {
    var source = this.$route.query.source;
    if (typeof source !== "undefined" && source != null) {
      this.$store.commit("set_source", source);
    }
    this.$router.beforeEach((to, from, next) => {
      this.menuOpen = false;
      next((vm) => {
        // console.log("prev rout is: " + vm.prevRoute);
      });
    });
  },
  methods: {
    menu() {
      this.menuOpen = !this.menuOpen;
    },

    getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
      }

      if (/android/i.test(userAgent)) {
        return "Android";
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
      }

      return "unknown";
    },
  },
};
</script>
