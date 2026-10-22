// ПРОМИСЫ. Создание промиса.




// const promise = new Promise((resolve, reject) => {
//     const success = true
//     if (success) {
//         resolve('Data received') // fulfilled
//     } else {
//         reject(new Error('Error')) // rejected
//     }
// })
// console.log(Promise.resolve())
// console.log(Promise.reject(new Error('x')))

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function loadImage(src) {
//     return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.onload = () => resolve(img);
//         img.onerror = reject;
//         img.src = src;
//     }) 
// }


// Promise.then(
//     value => { /* success */},
//     error => { /* error */ }
// )

// Promise.resolve(1)
// .then(v => v + 1)
// .then(v => v * 10)
// .then(v => {
//     throw new Error('boom');
// })
// .then(v => console.log('Not be completed'))
// .then(e => console.error('We catch it', e.message) )

// fetch('/user')
// .then(res => res.json())
// .then(user => fetch(`/posts/${user.id}`))
// .then(res => res.json())
// .then(posts => console.log(posts))
// .catch(err => console.error(err))

// Promise.reject(new Error('fail'))
// .then(() => console.log('lost'))
// .catch(e => console.error(e.message)); 'fail'

// Promise.reject('err')
// .catch(() => 'Default value')
// .then(v => console.log(v)) // "default value".

// Promise.resolve()
// .then(() => {throw new Error('sync'); })
// .catch(e => console.log(e.message)) // 'sync'

// Promise.resolve()
// .then(() => {
//     setTimeout(() => { throw new Error('will not be caught'); }, 0);
// })
// .catch(e => console.log('Not be completed'))

// step1()
// .catch(err => fallback())
// .then(step2)
// .catch(err => console.error('Final error'), err)

// showLoader();

// fetch('/data')
// .then(res => res.json())
// .then(data => render(data))
// .catch(err => showError(err))
// .finally(() => hideLoader())

// Promise.all([
//     fetch('/a').then(r => r.json()),
//     fetch('/b').then(r => r.json()),
//     fetch('/c').then(r => r.json()),
// ]).then(([abc]) => console.log(a, b, c))

// console.log('1');

// Promise.resolve('hello').then(v => console.log(v)) // микротасок

// console.log('2')

// setTimeout(() => console.log('3'), 0); // макротасок
// setTimeout(() => console.log('6'), 0); 

// Promise.resolve().then(() => console.log('4')) // микротасок

// console.log('5')

// Promise.resolve('hello').then( function takeValue(v) {
//     return console.log(v)
// })


// 1. Повторение вчерашнего (15-30 мин)
//    - по памяти: что было?
//    - проверил по комментариям
//    - решил 1 задачу с нуля

// 2. Новое (30-60 мин)
//    - теория максимум 15 мин
//    - сразу код, эксперименты

// 3. Практика (60-90 мин)
//    - задачи на новое
//    - гуглю только ошибки

// 4. Заметки (5-10 мин)
//    - 3-5 строк: что делал, что понял, что непонятно

// Ключевые два элемента, которые ты скорее всего пропускаешь:

//     Повторение в начале (без него теряешь прошлое)

//     Заметки в конце (без них завтра нечего повторять)

// Если эти два элемента войдут в привычку — качество обучения удвоится без добавления часов.

// --------------------------------------------------ДЕНЬ 2. ПРОМИСЫ. 10.10.2026 
// ПАРАМЕТРЫ - ЭТО ИМЕНА В ОБЬЯВЛЕНИИ ФУНКЦИИ (resolve, reject) => {}
// АРГУМЕНТЫ - ЭТО КОНКРЕТНЫЕ ЗНАЧЕНИЯ, КОТОРЫЕ ПЕРЕДАЮТСЯ ПРИ ВЫЗОВЕ ФУНКЦИИ 



// const p = new Promise((resolve, reject) => {
//     resolve("Well done")
//     reject(console.error("Errorss"))
// })

// p.then(v => console.log('then: ', v))
// .catch(e => console.log('catch: ', e))



// Promise.resolve(5)
// Promise.reject(new Error('Error fauc'))

// const checkPromise = new Promise((resolve, reject) => {
//     let info = true
//     if(info) {
//         resolve(5)
//     } else {
//         reject(console.error('Error'))
//     }
// }) 

// checkPromise.then(v => v * 5) // 25
// .then(v => v + 5) // 30
// .then(v => console.log(v)) // 30

// ИЛИ СТИЛИСТИЧЕСКИ ЛУЧШЕ НАПИСАТЬ ВОТ ТАКИМ ОБРАЗОМ;
//   checkPromise
//   .then(v => v * 6) // 30
//   .then(v => v - 51) // -21
//   .then(v => console.log(v))
// checkPromise.catch(er = console.log('Catch: ', er))



// const checkPromise = Promise.resolve(5)

// checkPromise
// .then(v => {
//     setTimeout(() => console.log('A: Timer inside callback'), 0);
//     console.log("B: callback");
//     return v * 5;
// })

// .then(v => console.log("C: next then is ready", v))

// console.log('D: synchronous code ')

// РЕЗУЛЬТАТ: СНАЧАЛА D: так-как синхронный код, потом B C A.


// Promise.resolve(5) 
// .then(v => v + 1) // 6
// .finally(() => console.log('clear'))
// .catch(e => console.error("Catch: ", e))
// .finally(() => ) НЕ ПРИНИМАЕТ АРГУМЕНТОВ!!!



// console.log('A');

// Promise.resolve('B').then(v => console.log(v));

// setTimeout(() => console.log('C'), 0);

// console.log('D');

// Promise.resolve().then(() => {
//   console.log('E');
//   Promise.resolve().then(() => console.log('F'));
// });

// setTimeout(() => console.log('G'), 0);

// console.log('H');




// function delay(ms) {
//     const pr = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
//     return pr 
// }


// console.log('Position 1; Start')
// const myNewPromise = delay(2000)
// myNewPromise.then(() => console.log('Прошло 2 секунды'))
// console.log('Position 3; End')


// ПЕРЕПИСЫВАЕМ Resolve со значением.

// function delay(ms, value) {
//     const pr = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value)
//         }, ms)
//     })
//     return pr
// }
// console.log('start')
// const myNewPromise = delay(2000)
// myNewPromise.then(v => console.log('Прошло 2 секунды: '))
// console.log('End')

// Promise.resolve(2)
// .then(v => v * 3) // 6
// .then(v => v + 4) // 10
// .then(v => v ** 2) // 100
// .then(v => console.log(v))
// .then((v) => {
//      v * 3
// })
// .then(v => console.log(v))

// БЕЗ return следующий then не получит никакого значения => undefined.

// Promise.resolve(2)
// .then(v => v ** 3) // 8
// .then(v => {
//     throw new Error("Basic Error")
// })
// .then(v => v ** 5) // will not be completed
// .catch(e => console.error('Catch: ', e))
// .finally(() => console.log('Everything is okay'))


// function loadUser(id) {
//     console.log("Downloading...")
//     const pr = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.random()
//             if(random < 0.5) {
//                 resolve({
//                     id,
//                     name: "user" + id,
//                 })
//             } else {
//                 reject(new Error("User not found"))
//             }
//         }, 1000)
//     })

//     pr
//     .then(v => console.log(v))
//     .catch(e => console.error('Catch: ', e))
//     .finally(() => console.log('Well done'))
// }

// loadUser(5)
// -------- Правило: в setTimeout/setInterval/событиях — только reject. throw там пропадёт.


// function delay(ms, value) {
//     const pr = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value)
//         }, ms)
//     })
//     return pr
// }

// console.log('start')
// const myNewPromise = delay(2000, "Saveliy")
// .then((v) => {
//     console.log('Прошло 2 секунды: ', v)
// })

// console.log('end')

// ------------------- ПРОМИСЫ, 2 ДЕНЬ. КОМБИНАТОРЫ.

// Promise.all([
//     Promise.resolve(2),
//     Promise.resolve(6),
//     Promise.resolve(52),
//     Promise.reject(new Error('User not found'))
// ]).then(arr => console.log(arr)).catch(e => console.error(e))

// Promise.allSettled([
//     Promise.resolve('Privet'),
//     Promise.resolve(true),
//     Promise.resolve(5),
//     Promise.reject(new Error('Basic error EE'))
// ]).then(v => console.log(v))

// Promise.race([
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('slow')
//         }, 1002)
//     }),

//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Run')
//         }, 100)
//     })
//  ]).then(v => console.log(v))
// ANSWER: Run


// Promise.any([
//     Promise.reject('a'),
//     Promise.reject('B'),
//     Promise.reject('c')
// ]).then(v => console.log(v))

function delay(ms, value) {
    const pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, ms)
    })
    
    return pr
}

// const myPromiseNew = delay(2000, 'da').then((v) => {
//     console.log("Прошло 2 секунды: ", v)
// })

// const loadFirst = () => delay(1000, 'First')
// const LoadSecond = () => delay(500, 'Second')
// const LoadThird = () => delay(800, 'Third')


// console.time('parallel');
// Promise.all([
//     loadFirst(), LoadSecond(), LoadThird()
// ])
// .then(result => {
//     console.log(result)
//     console.timeEnd('parallel')
// })
// // +- 1000ms

// console.time('sequential')
// loadFirst()
// .then(() => LoadSecond())
// .then(() => LoadThird())
// .then(result => {
//     console.log('sequential done: ')
//     console.timeEnd('sequential')
// }


// Promise.all([
//     delay(500, 'ok1'),
//     delay(300, 'ok2').then(() => Promise.reject('bad')),
//     delay(1000, 'ok3'),
// ]).then(v => console.log("Success: ", v)).catch(e => console.error(e)
// весь промис будет rejected, но отдельные промисы не меняются.
// const requests = [
//     delay(300, 'ok1'),
//     Promise.reject('fail1'),
//     delay(500, 'ok2'),
//     Promise.reject('fail2'),
//     delay(100, 'ok3'),
// ]
// Promise.allSettled(requests).then((resultArray) => {
//     const successful = resultArray.filter(v => v.status === "fulfilled").map(v => v.value)
//     const failed = resultArray.filter(v => v.status === 'rejected').map(v => v.reason)
//     return {successful, failed}; // ключевое
// })
// .then(({ successful, failed })  => {
//     console.log("Successful: ", successful);
//     console.log("failed: ", failed)
// })
// const failed = myArray1.filter(v => v.status === "rejected").map(v => v.reason)

// console.log('Успешные: ', successful)
// console.log('Ошибки и их причины: ', failed)


// FILTER - КОГДА НУЖНО ВЫКИНУТЬ ЛИШНЕЕЕ
// MAP - КОГДА НУЖНО ИЗМЕНИТЬ КАЖДЫЙ ЭЛЕМЕНТ


// ПРОМИСЫ. День 3. повторить JSON

// Promises
// function load() {
//     return fetch('/api') // позволяет отправлять сетевые запросы и получать данные с сервера
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

// }

// async, функция всегда возвращает промис. внутри можно использовать await, ошибка => return rejected promise
// async function load() {
//     try {
//         const res = await fetch('/api')
//         const data = await res.json()
//         console.log(data)
//     } catch(err) {
//         console.error(err)
//     }
// }

// async function as() {
//     return 5
// }

// console.log(as()) 
// promise -answer

// async function er() {
//     throw new Error('Boom')
// }

// console.log(er())


// await, приостанавлвиает функцию, пока промис не завершится, возвращает значение, 
// if promise is rejected - throw error inside func

// const value = await promise - is not correct. because await need to stay in async func

// async function load() {
//     const data = await fetch('/api').then(r => r.json())
//     // This const data is just a ordinart object, not promise
//     console.log(data)
// }


// function greet(name, callback) {
//     const message = "Hello, " + name;
//     callback(message)
// }

// console.log(greet('Gleb', (msg) => console.log(msg)))

// последовательно versus параллельно.


// последовательно.
// async function sequential() {
//     const a = await delay(1000, 'A')
//     const b = await delay(500, 'B')
//     const c = await delay(500, "C")
//     return [a, b, c]
// }

// console.log(sequential())

// параллельно.

// async function  parallel() {
//     const [a, b, c] = await Promise.all([
//         delay(1000, 'a'),
//         delay(500, 'B'),
//         delay(100, 'C'),
//     ])
//     // result: 1000 ms
//     return [a, b, c]
// }

// console.log(parallel())


// for (const url of urls) {
//     const data = await fetch(url).then(r => r.json())
//     console.log(data)
// }
// slowly: Each request awaits the previous one


// const res = await Promise.all(
//     urls.map(url => fetch(url).then(r => r.json())
// )
// quickly. All of the requests at the same time || all requests are sent at the same time


// forEach + await dont working.

// Обработка ошибок. 3 паттерна. ------------------------

// first pattern. Around everything

// async function load() {
//     try {
//         const user = await fetchUser()
//         const posts = await fetchPosts(user.id);
//         return {user, posts};
//     } catch(err) {
//         console.error(err)
//         return null
//     }
// }

// // second pattern. Around a specific step
// async function load() {
//     const user = await fetchUser()
//     let posts;
//     try {
//         posts = await fetchPosts(user.id);
//     } catch(err) {
//         posts = [] // fallback
//     }
//     return {user, posts}
// }

// // third pattern. Without try/catch. Let him fly out

// async function loads() {
//     const user = await fetchUser();
//     const posts = await fetchPosts(user.id)
//     return {user, posts}
// }

// loads().catch(err => console.error(err))

// function loadUser() {
//   return fetch('/api/user')
//     .then(res => res.json())
//     .then(user => {
//       console.log('User:', user);
//       return user;
//     })
//     .catch(err => console.error('Ошибка:', err.message))
//     .finally(() => console.log('Готово'));
// }

// async function loadUser() {
//     try {
//        const response = await fetch('/api/user') // response - object. внутри него тело (string JSON)
//        const data = await response.json() // data - object
//        const result = console.log("User: ", data)
//        return data
//     } catch(err) {
//         console.error("Error: ", err.message)
//     } finally {
//         console.log('Done')
//     }
// }


// async function sequential() {
//     console.time('seq')
//     const a = await delay(1000, 'a')
//      const b = await delay(2000, 'b')
//       const c = await delay(1500, 'c')
//        const d = await delay(900, 'd')
//        console.timeEnd('seq')
//        return [a, b, c, d]
// }

// sequential()

// async function parallel() {
//     console.time('parlls')
//     const [a, b, c] = await Promise.all([
//         delay(1000, 'a'),
//         delay(500, 'b'),
//         delay(200, 'C'),
//     ])
//     console.timeEnd('parlls')
//     return [a, b, c]
// }
// parallel()


// async function loadProfiled(id) {
//     try {
//         const user = await delay(500, {id: id, name: 'User' + id})

//     if(user.id < 0) {
//         throw new Error('Bad id')
//     }

//         console.log(user)
//     } catch(err) {
//         console.error(err)
//     }
// }

// loadProfiled(-1+2)


// async function a()  {       
//    throw new Error('es')
// }

// async function b() {
//     throw new Error('e')
// }    

// // throw new Error('esta')
   
// const result = a()
// console.log(result)

// function delay(ms, value) {
//   return new Promise(resolve => setTimeout(() => resolve(value), ms));
// }

// function pingServer(url) {
//   const ms = Math.floor(Math.random() * 500) + 100;
//   const success = Math.random() < 0.7; // 70% успеха

//   if (success) {
//     return delay(ms, { url, ping: ms });
//   } else {
//     return delay(ms).then(() => {
//       throw new Error(`Server ${url} is down`);
//     });
//   }
// }

// const servers = ['api.google.com', 'api.github.com', 'api.aws.com', 'api.meta.com', 'api.apple.com'];


// async function checkServers() {
//     try {
//     const results = await Promise.allSettled(
//         servers.map(server => pingServer(server))
//     )
//     const result = {}
//     result.online = results.filter(v => v.status === 'fulfilled').map(v => ({url: v.value.url, ping: v.value.ping})) // ПОЧЕМУ ДЕЛАЕТ ОБЬЕКТОВ () ))
//     result.offline = results.filter(v => v.status === "rejected").map(v => v.reason.message)
//     result.total = results.length
//     const rate = Math.round((result.online.length / result.total) * 100)
//     result.successRate = rate + "%"
//     return result
// } catch(err) {
//   console.error("Critical error: ", err)
//   return null
// }

// }

// checkServers().then(result => {
//   console.log(result)
// })

// ---------------------- fetch. API. WEATHER API

// const promise = fetch('https://example.com')
// console.log(promise)

// fetch не возвращает данные. Он возвращает обьект Response.

// const response = await fetch(url)
// const data = await response.json()

// !!!!!!!!!!!!!!!!!!!!!!!!!!! 
// HTTPS status: 200-299 - успех. 404 - не найдено. 500 - ошибка сервера.
// fetch не бросает ошибку на 404 или 500. Он rejected только при сетевой ошибке(нет интернетa, DNS не resolved)
// надо проверять руками:
// if (!Response.ok) {
//   throw new Error(`HTTP ${response.status0}`)

// }

// async function load(params) {
//   try {
//     const response = await fetch(url)
//     if (!response.ok) {
//       throw new Error(`httlp ${response.status}`)
//     }
//     const data = await response.json()
//     return data
//   } catch(err) {
//     console.error(err.message)
//   }
// }


// JSON

// its just a text with a certain structure

// {
//   "name": "Moscow",
//   "temperature": -3.5,
//   "wind": 4.2
// }

// transform into:

// { name: "Moscow", temperature: -3.5, wind: 4.2 }
// Access data.name data.temperature

// async function getUser(id) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//   if(!res.ok) {
//     throw new Error(`HTTP ${res.status}`) 
//   }
//   return res.json()
// }
// getUser(3).then(v => console.log(v.name))

// async function userInfo(id) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//   if (!res.ok) {
//     throw new Error(`HTTP: ${res.status}`)
//   }
//   return res.json()
// }

// userInfo(5).then(v => console.log(v.name, v.email, v.address.city))

// название города - координаты(Geocoding)
// async function geoCode(city) {
//   const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=ru&format=json`
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw new Error(`HTTP ${res.status}`) 
//   }
//   const data = await res.json()
//   if(!data.results || data.results.length === 0) {
//     throw new Error('City is not found')
//   }

//   return data.results[0]
// }

// geoCode('Moscow').then(v => console.log(v))

// async function getWeatherByCoords(lat, lon) {
//   const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
//   const res = await fetch(url)
//   if(!res.ok) {
//     throw new Error(`http ${res.status}`)
//   }
//   const data = await res.json()
//   return data.current_weather
// }


// async function getWeather(city) {
//   const place = await geoCode(city)
//   const weather = await getWeatherByCoords(place.latitude, place.longitude)
//   return {
//     city: place.name,
//     country: place.country,
//     temperature: weather.temperature,
//     wind: weather.windspeed,
//     time: weather.time
//   }
// }

// async function  results(params) {
// try {
//   const w = await getWeather('Cherepovets')
//   console.log(`${w.city}, ${w.country}, ${w.temperature} градусов Цельсия, ветер ${w.wind} км/ч`)
// } catch(err) {
//   console.error(err.message)
// }

// }

// results()
async function cityWeather(city) {

const API_KEY = 'a73eee505cc01f0c22d6d11f9a6c0876'

  try {
    const coords = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
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

function renderWeather(data) {
  const result = document.getElementById('result')
  const weatherT = Math.round(data.main.temp)
  const tempFeels = Math.round(data.main.feels_like)
  const windSpeed = Math.round(data.wind.speed)
  const nameCity = data.name
  const weatherDesc = data.weather[0].description
  const weatherIcon = data.weather[0].icon
  const iconURL = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
  result.innerHTML = `
   <div class="weather__info">
          <div class="weather__header">
            <h2 class="weather-city">${nameCity}</h2>
            <p class="weather-temp">${weatherT}°C</p>
          </div>
          <div class="weather__main">
            <p class="weather-desc">${weatherDesc}</p>
          </div>
          <div class="weather__footer">
            <img class="weather-img" src="${iconURL}" alt='weather'>
            <span class="weather-emoj">
            <span class="weather-emoj__icon">💨</span>
            <span class="weather-emoj__text">${windSpeed} м/с</span>
            </span>
          </div>
        </div>
  `

}


const form = document.getElementById('app__form')
const input = document.getElementById('app__input')
const submit = document.getElementById('app__submit')
const result = document.getElementById('result')
// центр. вызов отправки запроса и вызов рендера.
form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const city = input.value.trim()
  if(!city) {
    result.innerHTML = 'Введите корректное название города'
    return
  }

  if (city.length < 2) {
    result.innerHTML = 'Слишком короткое название города'
  }

  if (/\d/.test(city)) {
  result.innerHTML = 'Название города не должно содержать цифры!'
  return
}

  result.innerHTML = 'Загрузка...'
   const data = await cityWeather(city)

   if(!data) {
    result.innerHTML = 'Не удалось получить погоду. Проверьте ввод города'
    return
   }
  renderWeather(data)
})



// !x 
// false
// 0
// -0
// 0n          // BigInt ноль
// ''          // пустая строка
// null
// undefined
// NaN


// x 
// 'true'      // непустая строка
// 'false'     // тоже truthy! (это строка, не boolean)
// '0'         // тоже truthy! (строка)
// ' '         // пробел — truthy
// []          // пустой массив — TRUTHY
// {}          // пустой объект — TRUTHY
// -1          // любое ненулевое число


// const pr = new Promise((resolve, reject) => {
//   const success = false

//   if(success) {
//     resolve('fullfiled')
//   } else {
//     reject('rejectedkjm,')
//   }
// })

// console.log(pr)

// const prs = new Promise((resolve, reject) => {
//   const success = false

//   if(success) {
//     resolve('fullfiled')
//   } else {
//     reject(new Error(console.log(`${}`)))
//   }
// })

// console.log(prs.)


// function havefun() {
//   form.addEventListener('submit', async(e) => {
//     const city = 3213
//   })
//   console.log(city)
// }

// havefun()

// замыкание. из внешней функции может быть перемнная обьявлена, она видна внутренней. но если во внутренней функции обьявлена премеенная, она не видна внешней
// outer inner

function createCounter() {
  let count = 0                    // ← переменная во внешней функции
  
  return function() {              // ← внутренняя функция (замыкание)
    count++                        // ← меняет count из внешней
    return count
  }
}

const counter = createCounter()    // createCounter() завершилась
console.log(counter())             // 1
console.log(counter())             // 2
console.log(counter())             // 3