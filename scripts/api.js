
const API_KEY = 'a73eee505cc01f0c22d6d11f9a6c0876'


async function cityWeather(city) {


  try {
    const coords = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`)
    if (!coords.ok) {
      throw new Error(`HTTP: ${coords.status}`)
    }
    const coordsObj = await coords.json()
    if(!coordsObj || coordsObj.length === 0) {
      return null
    }
    const coordsData =  coordsObj[0]
    const lat = coordsData.lat
    const lon = coordsData.lon
    const name = coordsData.name

    const weatherCity = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`)
    if(!weatherCity.ok) {
      throw new Error(`HTTP: ${weatherCity.status}`)
    }
    const weatherCityData = await weatherCity.json()
    return weatherCityData
  } catch(error) {
    console.error(`HTTP: ${error}`)
    return null
  }
}

export {cityWeather}