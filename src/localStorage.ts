export const localStorageUtils = {
    get<T = unknown>(key: string): T | null {
        try {
            const value = localStorage.getItem(key)
            return value ? JSON.parse(value) : null
        } catch (err) {
            console.error("localStorage.get error:", err)
            return null
        }
    },

    set(key: string, value: unknown): void {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (err) {
            console.error("localStorage.set error:", err)
        }
    },

    remove(key: string): void {
        localStorage.removeItem(key)
    },
}
