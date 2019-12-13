<template>
  <div class="row justify-around items-center q-gutter-sm q-pa-lg">
    <q-intersection >
      <div class="row justify-center q-pb-md">
        <img src="statics/svg/Anfahrt.svg" style="width: 300px" />
      </div>
      <div class="row justify-center q-pt-md text-center">
        Bachstraße 145<br>
        22083 Hamburg
      </div>
    </q-intersection>
    <q-intersection>
    <div class="text-left">
      <q-icon name="fas fa-angle-right" /> Ab Hauptbahnhof: <span class="text-primary text-uppercase">Bus 17 (U Berne)</span> oder <span class="text-primary text-uppercase">Bus 6 (U Borgweg)</span> bis Mühlenkamp/ Hofweg, <q-icon name="fas fa-walking"/> 8 Min. Fußweg<br>
      <q-icon name="fas fa-angle-right" /> Ab Barmbek: <span class="text-primary text-uppercase">Bus 172 & 173 (Mundsburger Brücke)</span> bis Herderstraße, <q-icon name="fas fa-walking"/> 2 Min. Fußweg<br>
      <q-icon name="fas fa-angle-right" /> Ab U Mundsburg: <span class="text-primary text-uppercase">Bus 172 & 173 (Richtung Bramfelder Dorfplatz)</span> bis Herderstraße, <q-icon name="fas fa-walking"/> 2 Min. Fußweg<br>
      <q-icon name="fas fa-angle-right" /> Ab U Mundsburg: <span class="text-primary text-uppercase">Bus 25 (Richtung Bf. Altona)</span> bis Hebbelstraße, <q-icon name="fas fa-walking"/> 8 Min. Fußweg
    </div>
    </q-intersection>
    <div class="full-width q-pt-lg" style="height: 400px;">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4737.564417403448!2d10.018529353445082!3d53.579503440934104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ef09fc8fe4e4c83!2sDi%20An%20Di!5e0!3m2!1sde!2sde!4v1570782051149!5m2!1sde!2sde"
        width="100%" height="100%"
        style="border:0; opacity: 0.8;"
        frameborder="0" allowfullscreen=""
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
