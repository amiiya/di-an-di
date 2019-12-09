<template>
 <q-parallax :height="parallaxHeight" :speed="0.6">
      <template v-slot:media>
        <img src="statics/map_hq.jpg" class="darken">
      </template>
      <template v-slot:content="scope">
        <div
          class="column items-center text-center text-h6 text-grey q-pa-md"
          :style="{
            opacity: 0.80 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
          <img src="statics/logo_nodeco.png" width="300px" class="q-pb-lg">
          <div class="text-h5 text-grey q-pb-lg">
            Bachstraße 145, 22083 Hamburg
          </div>
          <div>Mo: GESCHLOSSEN</div>
          <div>Di - Fr: 11.30 - 15.00 Uhr & 18.00 - 22.00 Uhr</div>
          <div>Sa: 13.00 - 22.00 Uhr</div>
          <div>So & Feiertage: 13.00 - 21.00 Uhr</div>
          <div class="q-pt-sm">
            Reservierungen können über <a href="tel:04075684451" class="text-primary">040 75684451</a> gemacht werden
          </div>
        </div>
      </template>
      <h3 class="text-white">Video</h3>
    </q-parallax>
</template>

<script>
export default {
  data () {
    return {
      right: false,
      parallaxHeight: null
    }
  },
  mounted () {
    this.$q.dark.set(true)
    this.parallaxHeight = window.innerHeight
  },
  update () {
    this.parallaxHeight = window.innerHeight
  }
}
</script>

<style lang="scss">
.darken {
  opacity: 0.3;
}
</style>
