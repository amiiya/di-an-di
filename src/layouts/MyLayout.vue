<template>
  <q-layout view="hHh lpR fff">
    <q-header class="bg-black text-white title-text">
      <q-toolbar>
        <q-toolbar-title>
          <router-link to ="/" style="all: unset; color: white;">ĐI ĂN ĐI</router-link>
        </q-toolbar-title>
        <q-btn color="blue-3" flat icon="fab fa-facebook-f" href="https://www.facebook.com/diandi.hh/" type="a" target="_blank" />
        <q-btn color="pink-3" flat icon="fab fa-instagram" href="https://www.instagram.com/diandi.hh/" type="a" target="_blank" />
        <!-- <q-btn dense flat round icon="menu" @click="right = !right" /> -->
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="right" side="right" bordered overlay>
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item clickable tag="a" target="_self" href="#galery">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer> -->

    <Parallax />
    <q-separator color="primary" style="height:5px"/>

    <img src="statics/deco_top.png" width="300px">
    <q-page-container>
      <router-view style="margin-top: -100px;"/>
      <div class="row justify-end">
        <img src="statics/deco_bottom.png" width="300px" height="85.2px">
      </div>
    </q-page-container>

    <q-footer elevated class="text-white title-text justify-between">
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="copyright" /> Di An Di {{ new Date().getFullYear() }}
          - Alle Rechte vorbehalten
        </q-toolbar-title>
        <q-tabs v-model="tab" shrink stretch>
          <q-route-tab name="startseite" to="/" exact label="Hauptseite" />
          <q-route-tab name="impressum" to="/impressum" exact label="Impressum" />
        </q-tabs>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import Parallax from '../components/Parallax'

export default {
  data () {
    return {
      right: false,
      tab: null
    }
  },
  components: {
    Parallax
  },
  mounted () {
    this.$q.dark.set(true)
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Raleway', sans-serif !important;
}

.title-text {
  font-family: 'Stint Ultra Condensed';
}
</style>
