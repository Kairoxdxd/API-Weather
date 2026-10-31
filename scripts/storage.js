

const key = 'weather:history'

function storageS(weather) {
    const data = localStorage.getItem(key) // null, 1 init
    const items = data ? JSON.parse(data) : [] // условие ? значениеЕслиИстина : значениеЕслиЛожь

    items.push({info: weather, time: Date.now()})

    localStorage.setItem(key, JSON.stringify(items))
}
export {storageS}
