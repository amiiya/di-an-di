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
var untilDate = new Date(2020, 8, 2)
if (new Date(untilDate.toDateString()) > new Date(new Date().toDateString())) {
  Notify.create(`Wir sind ab Mittwoch, dem 13. Mai, wieder für Euch da und freuen uns Euch wieder unser leckeres vietnamesisches Essen anbieten zu können. Auch der Verzehr vor Ort ist nun wieder erlaubt!`)
}
