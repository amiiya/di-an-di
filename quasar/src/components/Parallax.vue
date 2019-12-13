<template>
 <q-parallax :height="$q.screen.height <  600 ? 600 : $q.screen.height" :speed="0.6">
      <template v-slot:media>
        <img src="statics/map_hq.jpg" class="darken">
      </template>
      <template v-slot:content="scope">
        <div
          class="column items-center text-center text-h7 text-grey q-gutter-xs q-pa-md"
          :style="{
            opacity: 0.80 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >

          <router-link to ="/" style="all: unset">
            <img src="statics/logo_nodeco.png" :width="$q.screen.lt.sm ? '200px' : '300px'">
          </router-link>
          <div class="text-h6 text-grey q-py-md">
            Bachstraße 145, 22083 Hamburg
          </div>
          <div>Mo: GESCHLOSSEN</div>
          <div>Di - Fr: 11.30 - 15.00 Uhr & 18.00 - 22.00 Uhr</div>
          <div>Sa: 13.00 - 22.00 Uhr</div>
          <div>So & Feiertage: 13.00 - 21.00 Uhr</div>
          <!-- <div class="q-py-md">
            Reservierungen können über <a href="tel:04075684451" class="text-primary">040 75684451</a> gemacht werden
          </div> -->
          <div class="q-gutter-md q-py-md">
            <q-btn color="primary" icon="far fa-file-pdf" label="Speisekarte" href="statics/Speisekarte.pdf" type="a" target="_blank" :dense="$q.screen.lt.sm" />
            <q-btn color="grey-14" icon="fas fa-phone-alt" label="Reservieren" href="tel:04075684451" type="a" target="_blank" :dense="$q.screen.lt.sm" />
          </div>
        </div>
      </template>
    </q-parallax>
</template>

<script>
export default {
  data () {
    return {
      right: false
    }
  }
}
</script>

<style lang="scss">
.darken {
  opacity: 0.3;
}

.text-h7 {
  font-size: 1.00rem;
  font-weight: 500;
  line-height: 2rem;
}
</style>
