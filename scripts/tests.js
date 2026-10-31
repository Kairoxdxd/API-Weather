// async function cityWeather(city) {

// const API_KEY = 'a73eee505cc01f0c22d6d11f9a6c0876'

//   try {
//     const coords = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`)
//     if (!coords.ok) {
//       throw new Error(`HTTP: ${coords.status}`)
//     }
//     const coordsObj = await coords.json()
//     if(!coordsObj || coordsObj.length === 0) {
//       return null
//     }
//     const coordsData =  coordsObj[0]
//     const lat = coordsData.lat
//     const lon = coordsData.lon
//     const name = coordsData.name

//     const weatherCity = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`)
//     if(!weatherCity.ok) {
//       throw new Error(`HTTP: ${weatherCity.status}`)
//     }
//     const weatherCityData = await weatherCity.json()
//     return weatherCityData
//   } catch(error) {
//     console.error(`HTTP: ${error}`)
//     return null
//   }
// }

// function renderWeather(data) {
//   const result = document.getElementById('result')
//   const weatherT = Math.round(data.main.temp)
//   const tempFeels = Math.round(data.main.feels_like)
//   const windSpeed = Math.round(data.wind.speed)
//   const nameCity = data.name
//   const weatherDesc = data.weather[0].description
//   const weatherIcon = data.weather[0].icon
//   const iconURL = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
//   result.innerHTML = `
//    <div class="weather__info">
//           <div class="weather__header">
//             <h2 class="weather-city">${nameCity}</h2>
//             <p class="weather-temp">${weatherT}°C</p>
//           </div>
//           <div class="weather__main">
//             <p class="weather-desc">${weatherDesc}</p>
//           </div>
//           <div class="weather__footer">
//             <img class="weather-img" src="${iconURL}" alt='weather'>
//             <span class="weather-emoj">
//             <span class="weather-emoj__icon">💨</span>
//             <span class="weather-emoj__text">${windSpeed} м/с</span>
//             </span>
//           </div>
//         </div>
//   `

// }


// const form = document.getElementById('app__form')
// const input = document.getElementById('app__input')
// const submit = document.getElementById('app__submit')
// const result = document.getElementById('result')
// // центр. вызов отправки запроса и вызов рендера.
// form.addEventListener('submit', async (e) => {
//   e.preventDefault()

//   const city = input.value.trim()
//   if(!city) {
//     result.innerHTML = 'Введите корректное название города'
//     return
//   }

//   if (city.length < 2) {
//     result.innerHTML = 'Слишком короткое название города'
//   }

//   if (/\d/.test(city)) {
//   result.innerHTML = 'Название города не должно содержать цифры!'
//   return
// }

//   result.innerHTML = 'Загрузка...'
//    const data = await cityWeather(city)

//    if(!data) {
//     result.innerHTML = 'Не удалось получить погоду. Проверьте ввод города'
//     return
//    }
//   renderWeather(data)
// })



// // !x 
// // false
// // 0
// // -0
// // 0n          // BigInt ноль
// // ''          // пустая строка
// // null
// // undefined
// // NaN


// // x 
// // 'true'      // непустая строка
// // 'false'     // тоже truthy! (это строка, не boolean)
// // '0'         // тоже truthy! (строка)
// // ' '         // пробел — truthy
// // []          // пустой массив — TRUTHY
// // {}          // пустой объект — TRUTHY
// // -1          // любое ненулевое число


