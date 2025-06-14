// 1. uuid: Generate a random UUID (v4 style)
export function randomUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0
        const v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

// 2. slugify: "Hello World" → "hello-world"
export function slugify(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
}

// 3. truncateText: cut it off + add ellipsis
export function truncateText(str: string, len: number): string {
    return str.length <= len ? str : str.slice(0, len).trimEnd() + '...'
}

// 4. isEmail: legit email or nah
export function isEmail(str: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
}

// 5. isURL: safe basic URL checker
export function isURL(str: string): boolean {
    try {
        new URL(str)
        return true
    } catch {
        return false
    }
}

// 6. randomHexColor: 🎨 magic
export function randomHexColor(): string {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`
}

// 7. debounce: stop spamming, chill
export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
    let timer: ReturnType<typeof setTimeout>
    return (...args: Parameters<T>) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}

// 8. throttle: cool down function calls
export function throttle<T extends (...args: any[]) => void>(fn: T, delay: number) {
    let last = 0
    return (...args: Parameters<T>) => {
        const now = Date.now()
        if (now - last >= delay) {
            last = now
            fn(...args)
        }
    }
}

// 9. deepClone: like cloning yourself in a sci-fi flick
export function deepClone<T>(obj: T): T {
    return structuredClone(obj) // modern, fast 🔥
    // For older environments: return JSON.parse(JSON.stringify(obj))
}

// 10. deepEqual: check if two things are actually twins
export function deepEqual(a: any, b: any): boolean {
    if (a === b) return true

    if (typeof a !== typeof b || a === null || b === null) return false

    if (typeof a === 'object') {
        const aKeys = Object.keys(a)
        const bKeys = Object.keys(b)
        if (aKeys.length !== bKeys.length) return false

        return aKeys.every(key => deepEqual(a[key], b[key]))
    }

    return false
}

export function generateTokenBase64(length: number = 32): string {
    const cryptoObj =
        typeof window !== 'undefined' && window.crypto
            ? window.crypto
            : typeof globalThis !== 'undefined' && (globalThis as any).crypto
                ? (globalThis as any).crypto
                : null;

    if (!cryptoObj?.getRandomValues) {
        throw new Error('Secure crypto not available in this environment.');
    }

    const bytes = new Uint8Array(length);
    cryptoObj.getRandomValues(bytes);

    // Convert bytes to base64 string
    if (typeof window !== 'undefined' && typeof btoa === 'function') {
        // Browser-safe
        const binary = String.fromCharCode(...bytes);
        return btoa(binary);
    } else if (typeof Buffer !== 'undefined') {
        // Node.js
        return Buffer.from(bytes).toString('base64');
    } else {
        throw new Error('No base64 encoding method available.');
    }
}

