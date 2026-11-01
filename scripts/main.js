// import тут надо брать: function cityWeather + render weather

import { cityWeather} from "./api.js"
import { renderHistory, renderStatus, renderWeather } from "./render.js"
import { clearInfo2 } from "./cleardata.js"
import { storageS } from "./storage.js"
import { readHistory } from "./readStorage.js"

const form = document.getElementById('app__form')
const input = document.getElementById('app__input')
// центр. вызов отправки запроса и вызов рендера.
form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const city = input.value.trim()
  if(!city) {
    renderStatus('Введите корректное название города')
    return
  }

  if (city.length < 2) {
    renderStatus('Слишком короткое название города')
    return
  }

  if (/\d/.test(city)) {
  renderStatus('Название города не должно содержать цифры!')
  return
}

  renderStatus('Загрузка...')
   const data = await cityWeather(city)
   if(!data) {
    renderStatus('Не удалось получить погоду. Проверьте ввод города')
    return
   }

   const weather = clearInfo2(data)
   storageS(weather)
   console.log(localStorage)
  renderWeather(weather)
})

const history = document.getElementById('history') // dialog
const historyOpen = document.getElementById('historyOpen') // btn open
const historyClose = document.getElementById('historyClose')

historyOpen.addEventListener('click', () => {
  const items = readHistory()
  history.showModal()
  console.log('test branches1')
   renderHistory(items)
})

historyClose.addEventListener('click', () => {
  console.log('test branches2')
  history.close()
})

// const dialog = document.getElementById('history')

// dialog.showModal()
