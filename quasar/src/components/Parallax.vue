<template>
 <q-parallax :height="$q.screen.height <  850 ? 850 : $q.screen.height" :speed="0.6">
      <template v-slot:media>
        <img src="statics/map_hq.jpg" class="darken">
      </template>
      <template v-slot:content="scope">
        <div class="column items-center text-center text-h7 text-grey q-gutter-xs q-pa-md"
          :style="{
            opacity: 0.80 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >

          <router-link to ="/" style="all: unset">
            <img src="statics/logo_nodeco.png" :width="$q.screen.lt.sm ? '200px' : '250px'">
          </router-link>
          <div class="text-h6 text-grey q-py-md">
            Bachstraße 145, 22083 Hamburg
          </div>
          <div class="openingtimes">
            <div class="vacation-title">
              <span class="vacation-icon">🎄</span> Betriebsferien <span class="vacation-icon">🎆</span>
            </div>
            <div>
              Wir haben vom 20.12.21 bis zum 03.01.22 geschlossen und wünschen euch schöne erholsame Feiertage und einen guten Rutsch ins neue Jahr!
            </div>
            <div><br></div>
            <div>Mo: GESCHLOSSEN</div>
            <div>Di - Fr: 12 - 14:30 Uhr, 17 - 22 Uhr</div>
            <div>Sa: 13 - 22 Uhr</div>
            <div>So: 13 - 21 Uhr</div>
          </div>
          <!-- <div class="q-pt-md max-width">
            Aufgrund der Maßnahmen zur Eindämmung der Corona-Infektion, werden wir ab Dienstag den 03.11.2020 nur noch außer Haus verkaufen.
            Abends werden wir einen Lieferservice einrichten. Bestellungen nehmen wir unter 040 / 75 68 44 51 entgegen.
          </div>
          <div class="q-py-md">
            Hinweise:<br>
            - Die letzte Bestellung wird um 20:45 entgegengenommen.<br>
            - Lieferservice Mindestbestellwert 20€.<br>
            - Wir liefern im Umkreis von 3 km.<br>
          </div> -->
          <div class="q-py-md">
            Reservierungen können über <a href="tel:04075684451" class="text-primary">040 75684451</a> gemacht werden
          </div>
          <div class="q-gutter-md q-py-md">
            <q-btn color="primary" icon="far fa-file-pdf" label="Speisekarte" href="statics/Speisekarte.pdf" type="a" target="_blank" :dense="$q.screen.lt.sm" />
            <q-btn color="grey-14" icon="fas fa-phone-alt" label="Anrufen" href="tel:04075684451" type="a" target="_blank" :dense="$q.screen.lt.sm" />
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
.vacation-icon {
  font-size: 2rem;
}

.vacation-title {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  text-transform: uppercase;
  color: $primary;
}

.openingtimes {
  color: white;
  letter-spacing: -1px;
  max-width: 500px;
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
