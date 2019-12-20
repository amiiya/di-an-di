import { Notify } from 'quasar'

Notify.setDefaults({
  position: 'bottom',
  timeout: 1000000,
  color: 'red-10',
  icon: 'fas fa-holly-berry',
  multiLine: true,
  actions: [{ icon: 'close', color: 'white' }]
})

var untilDate = new Date(2020, 1, 2)
if (new Date(untilDate.toDateString()) > new Date(new Date().toDateString())) {
  Notify.create(`Wir wünschen euch frohe Weihnachten und einen guten Rutsch ins neue Jahr! 
  An folgenden Tagen haben wir abweichende Öffnungszeiten: 
  24.12. GESCHLOSSEN | 
  25.12. 13 - 21 Uhr | 
  26.12. 13 - 21 Uhr | 
  31.12. 13 - 20.30 Uhr | 
  01.01. 14 - 21 Uhr`)
}
