<template>
  <div class="q-pa-md text-center">
    <About />
    <q-separator inset spaced />
    <Galery />
    <q-separator inset spaced />
    <Location />
    <Contact />
  </div>
</template>

<script>
import About from '../components/About'
import Galery from '../components/Galery'
import Location from '../components/Location'
import Contact from '../components/Contact'

export default {
  name: 'PageIndex',
  components: {
    Galery,
    About,
    Location,
    Contact
  }
}
</script>
