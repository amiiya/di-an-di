<template>
  <div class="q-pa-md row justify-center">
    <q-card class="bg-grey-9" style="max-width: 800px;">
      <q-card-section>
        <img src="statics/svg/SchreibUns.svg" style="max-width: 300px" />
      </q-card-section>

      <q-card-section>
        <p>
          Bei Fragen oder Anregungen könnt uns gerne eine kleine Mail schreiben oder uns über die sozialen Medien kontaktieren.
          Oder ganz altmodisch über das Telefon <q-icon name="far fa-grin-wink" color="yellow-2" />
        </p>
        <p>
          Natürlich nehmen wir auch <span class="text-weight-bold text-primary">Reservierungen</span> und <span class="text-weight-bold text-primary">Außer-Haus-Bestellungen</span> auf diesem Weg an.
          Bitte denkt daran früh genug Bescheid zu geben.
          Sollte alles passen, dann bekommt ihr von uns so schnell wie möglich eine Bestätigung!</p>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-btn flat
          icon="fab fa-instagram"
          label="@diandi.hh"
          type="a" href="https://www.instagram.com/diandi.hh/" target="_blank"
        />
        <q-btn flat
          icon="fab fa-facebook"
          label="@diandi.hh"
          type="a" href="https://www.facebook.com/diandi.hh/" target="_blank"
        />
        <q-btn flat
          icon="fas fa-envelope" no-wrap
          label="contact@di-an-di.de"
          type="a" href="mailto:contact@di-an-di.de"
        />
        <q-btn flat
          icon="fas fa-phone" no-wrap
          label="(040) 756 84451"
          type="a" href="tel:04075684451"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
}
</script>
