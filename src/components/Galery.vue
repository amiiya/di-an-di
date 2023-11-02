<template>
  <q-card class="q-px-md q-my-xl">
    <q-card-section>
      <!-- <img src="statics/svg/Fotogalerie.svg" style="max-width: 200px" /> -->
      <div :class="{ 'carousel-width': $q.screen.gt.sm }">
        <q-carousel
          swipeable
          animated
          v-model="slide"
          autoplay
          thumbnails
          infinite
        >
          <q-carousel-slide v-for="(image, index) in images" :name="index" :img-src="image" :key="index" />
        </q-carousel>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'Galery',
  data () {
    return {
      slide: 0,
      images: [
        'statics/galery/gericht_phocari.jpg',
        'statics/galery/gericht_banhxeo.jpg',
        'statics/galery/gericht_bunbohue.jpg',
        'statics/galery/gericht_bunchagio.jpg',
        'statics/galery/gericht_bunxaoxa.jpg',
        'statics/galery/gericht_drinks.jpg',
        'statics/galery/gericht_fruehlingsrollen.jpg',
        'statics/galery/gericht_goidudu.jpg',
        'statics/galery/gericht_goixoai.jpg',
        'statics/galery/gericht_phobo.jpg',
        'statics/galery/gericht_sommerrollen.jpg'
      ]
    }
  }
}
</script>

<style scoped>
.carousel-width {
  padding-left: 20%;
  padding-right: 20%;
}
</style>
