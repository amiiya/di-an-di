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
var untilDate = new Date(2022, 9, 1)
if (new Date(untilDate.toDateString()) > new Date(new Date().toDateString())) {
  Notify.create(`Unser Sommer Special ist da! 🎉 Reserviert euch einen Tischgrill im Freien und genießt das wundervolle Wetter. Reservierungen für Tischgrills müssen mindestens einen Tag im Voraus gemacht werden. Wir freuen uns auf Euch! ✨`)
}
