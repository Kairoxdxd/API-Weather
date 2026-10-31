const key = 'weather:history'

export function readHistory() {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : []
}
