<template>
  <div class="carsList-item carsList-ite">
    <nuxt-link
      :to="`/${car.brand.slug}/${car.slug}`"
      class="carsList-itemContent"
    >
      <div
        class="carsList-itemImage"
        :style="`background-image: url('https://img.voron.io/${car.side_img}')`"
      ></div>
      <div class="carsList-itemIcons">
        <!-- <div class="block-icon-auto">
          <div class="icon-auto">
            <i class="fal fa-car-alt"></i>
          </div>
          <span>{{ car.body.title }}</span>
        </div> -->

        <div v-if="car.seats != 0" class="block-icon-auto">
          <div class="icon-auto">
            <i v-if="car.seats != 2" class="fal fa-users"></i>
            <i v-if="car.seats == 2" class="fal fa-user-friends"></i>
          </div>
          <span>{{
            car.seats | declOfNum(["место", "места", "мест"], true)
          }}</span>
        </div>

        <div v-if="car.horsepower != 0" class="block-icon-auto">
          <div class="icon-auto">
            <i class="fal fa-tachometer-alt-fastest"></i>
          </div>
          <span>{{ car.horsepower }} л.с.</span>
        </div>

        <div class="block-icon-auto">
          <div class="icon-auto">
            <i class="fal fa-gas-pump"></i>
          </div>
          <span>{{ car.fuelType }}</span>
        </div>

        <div class="block-icon-auto">
          <div class="icon-auto">
            {{ car.minAgeDriver | number }}
          </div>
          <span>Возраст</span>
        </div>

        <div class="block-icon-auto">
          <div class="icon-auto">
            {{ car.minAgeDriversLicence | number }}
          </div>
          <span>Стаж</span>
        </div>
      </div>
      <!-- <div class="carsList-itemDetails">
        {{ car.body.title }}
      </div> -->
      <div class="carsList-itemName">
        <div class="carsList-itemPreCaption"></div>
        <div class="carsList-itemCaption">{{ car.title }}</div>
        <div class="carsList-itemSubCaption">
          {{ car.body.title }} {{ car.model.title }}<br /><em
            ><small
              >Депозит для новых клиентов {{ car.depositMax | number }}
              <span class="rouble">₽</span> *</small
            ></em
          >
        </div>
      </div>
      <div class="carsList-itemPrice">
        <div class="carsList-itemPreCaption">стоимость</div>
        <div class="carsList-itemCaption">
          <span class="carsList-item-ColorBlue"
            >{{ car.costPerHour | number }}
            <span class="icon icon-rouble-semibold">/мин</span></span
          >
        </div>
        <div class="carsList-itemSubCaption">
          от {{ car.max_daily_cost | number }}
          <span class="rouble">₽</span>/сутки
        </div>
      </div>

      <div class="carsList-itemHover" v-if="link">
        <div class="carsList-itemButtonContainer">
          <div class="carsList-itemButton">Смотреть</div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>


<script>
export default {
  props: {
    car: {
      required: true,
      type: Object,
    },
    link: {
      required: false,
      default: true,
    },
  },
  data() {
    return {};
  },
};
</script>