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
var untilDate1 = new Date(2024, 3, 2)
if (new Date(untilDate1.toDateString()) > new Date(new Date().toDateString())) {
  Notify.create(`Wir haben vom 29. März bis zum 01. April Osterferien. Wir wünschen frohe Ostern und erholsame Feiertage! 🐣🐰`)
}
