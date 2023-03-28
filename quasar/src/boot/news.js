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
var untilDate = new Date(2023, 5, 16)
if (new Date(untilDate.toDateString()) > new Date(new Date().toDateString())) {
  Notify.create(`Wir sind über Ostern vom 04.-12. April im Urlaub und sind wieder ab dem 13. April wieder wie gewohnt für euch da! ✨`)
}
