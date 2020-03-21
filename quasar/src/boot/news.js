import { Notify } from 'quasar'

Notify.setDefaults({
  position: 'bottom',
  timeout: 1000000,
  color: 'red-10',
  icon: 'fas fa-notes-medical',
  multiLine: true,
  actions: [{ icon: 'close', color: 'white' }]
})

// set date month -1 (january = 0)
var untilDate = new Date(2020, 7, 2)
if (new Date(untilDate.toDateString()) > new Date(new Date().toDateString())) {
  Notify.create(`Aufgrund der Maßnahmen zur Eindämmung der Corona-Infektionen müssen alle Restaurants für eine unbekannte Zeit lang schließen. Es fällt uns schwer, aber diese Maßnahme ist berechtigt und nötig. Bleibt gesund und bis bald!`)
}
