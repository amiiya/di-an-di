import { Notify } from 'quasar'

// color: 'red-10',
Notify.setDefaults({
  position: 'bottom',
  timeout: 1000000,
  color: 'primary',
  icon: 'fas fa-exclamation',
  multiLine: true,
  actions: [{ icon: 'close', color: 'white' }]
})

// set date month -1 (january = 0)
var untilDate = new Date(2022, 0, 2)
if (new Date(untilDate.toDateString()) > new Date(new Date().toDateString())) {
  Notify.create(`Wir haben ab dem 03.11.2020 wieder abweichende Öffnungszeiten! Bitte entnehmt die genauen Uhrzeiten zur Abholung oder Lieferung von dieser Website. Wir halten durch! Bleibt gesund! Euer Di An Di Team <3`)
}
