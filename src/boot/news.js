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
var untilDate1 = new Date(2023, 10, 14)
if (new Date(untilDate1.toDateString()) > new Date(new Date().toDateString())) {
  Notify.create(`Wir haben am Freitag dem 3. November ausnahmsweise geschlossen! Tut uns Leid für die Unannehmlichkeiten.`)
}

var untilDate2 = new Date(2024, 0, 13)
if (new Date(untilDate2.toDateString()) > new Date(new Date().toDateString())) {
  Notify.create(`Wir nehmen eine Winterpause vom 4. Dezember bis zum 12. Januar. Wir freuen uns auf euren Besuch im neuen Jahr. Wir wünschen guten Rutsch! ✨`)
}
