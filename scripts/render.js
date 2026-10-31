import { readHistory } from "./readStorage.js"
import { formatTime } from "./formatTime.js"

export function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}


function renderWeather(w) {
  const result = document.getElementById('result')
  const iconURL = `https://openweathermap.org/img/wn/${w.weatherIcon}@2x.png`

  result.innerHTML = `
    <div class="weather__info">
      <div class="weather__header">
        <h2 class="weather-city">${escapeHtml(w.nameCity)}</h2>
        <p class="weather-temp">${w.weatherT}°C</p>
      </div>
      <div class="weather__main">
        <p class="weather-desc">${escapeHtml(w.weatherDesc)}</p>
      </div>
      <div class="weather__footer">
        <img class="weather-img" src="${escapeHtml(iconURL)}" alt="weather">
        <span class="weather-emoj">
          <span class="weather-emoj__icon">💨</span>
          <span class="weather-emoj__text">${w.windSpeed} м/с</span>
        </span>
      </div>
    </div>
  `
}



function renderHistory(items) {
  const list = document.getElementById('history-list')
  const res = items.map(x => `<li class='history__li'
  <span>${x.info.nameCity}</span>
  <span>${x.info.weatherT} °C</span>
  <span>${x.info.weatherDesc}</span>
  <span>${x.info.windSpeed} м/с</span>
  <span>Дата: ${formatTime(x.time)}</span>
</li>`).join('')

list.innerHTML = res
}

function renderStatus(text) {
 const el = document.getElementById('result')
 el.textContent = text
}

export {renderWeather, renderStatus, renderHistory}
