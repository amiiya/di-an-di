<template>
 <q-parallax :height="$q.screen.height <  850 ? 850 : $q.screen.height" :speed="0.6">
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
            Vorübergehende Öffnungszeiten (COVID-19):
          <div class="openingtimes">
            <div>Mo: GESCHLOSSEN</div>
            <div>Di - Do: 12 - 21 Uhr</div>
            <div>Fr: 12 - 22 Uhr</div>
            <div>Sa: 13 - 22 Uhr</div>
            <div>So & Feiertage: 13 - 21 Uhr</div>
          </div>
          <div class="q-pt-md max-width ">
            Wir sind wieder da! Dabei müssen wir die Abstandsregelung von 1,5m zwischen Tischen, Maskenpflicht und weitere Hygienemaßnahmen einhalten. Wir bitten daher um Reservierungen, um lange Wartezeiten zu vermeiden.
          </div>
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
.openingtimes {
  color: white;
  font-weight: 1000;
  letter-spacing: -1px;
}
.darken {
  opacity: 0.3;
}

.text-h7 {
  font-size: 1.00rem;
  font-weight: 500;
  line-height: 2rem;
}

.max-width {
  max-width: 900px;
}
</style>
