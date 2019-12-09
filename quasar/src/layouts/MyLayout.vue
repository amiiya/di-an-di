<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-black text-white title-text">
      <q-toolbar>
        <q-toolbar-title>
          ĐI ĂN ĐI
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="right" side="right" bordered>
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
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
    </q-drawer>

    <Parallax />
    <q-separator color="primary" style="height:5px"/>

    <img src="statics/deco_top.png" width="300px">
    <q-page-container style="margin-top: -100px;">
      <router-view />
    </q-page-container>

    <img src="statics/deco_bottom.png" class="float-right" width="300px">
    <!-- <q-footer elevated class="bg-grey-8 text-white title-text justify-between">
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="copyright" /> Di An Di {{ new Date().getFullYear() }}
        </q-toolbar-title>
        <q-toolbar-title>
          All rights reserved
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

  </q-layout>
</template>

<script>
import Parallax from '../components/Parallax'

export default {
  data () {
    return {
      right: false
    }
  },
  components: {
    Parallax
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
