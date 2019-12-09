<template>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide v-for="(image, index) in images" :name="index" :img-src="image" :key="index" />
    </q-carousel>
  </div>
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
