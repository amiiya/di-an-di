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
// var untilDate = new Date(2023, 0, 2)
// if (new Date(untilDate.toDateString()) > new Date(new Date().toDateString())) {
//   Notify.create(`Aufgrund der jetzigen Lage bieten wir zusätzlich wieder einen Lieferservice zwischen 17 - 22 Uhr an!`)
// }
