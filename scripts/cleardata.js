function clearInfo(data) {
  const result = document.getElementById('result')
  const weatherT = Math.round(data.main.temp)
  const windSpeed = Math.round(data.wind.speed)
  const nameCity = data.name
  const weatherDesc = data.weather[0].description
  const weatherIcon = data.weather[0].icon

  return {result, weatherT, windSpeed, nameCity, weatherDesc, weatherIcon}
}
export {clearInfo}

function clearInfo2(data) {
  const result = document.getElementById('result')
  const weatherT = Math.round(data.main.temp)
  const windSpeed = Math.round(data.wind.speed)
  const nameCity = data.name
  const weatherDesc = data.weather[0].description
  const weatherIcon = data.weather[0].icon

  return {weatherT, windSpeed, nameCity, weatherDesc, weatherIcon}
}

export {clearInfo2}