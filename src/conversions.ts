// 1. bytesToHumanReadable: 1337420 → "1.27 MB"
export function bytesToHumanReadable(bytes: number): string {
  if (bytes === 0) return "0 B"
  const units = ["B", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  const size = bytes / Math.pow(1024, i)
  return `${size.toFixed(2)} ${units[i]}`
}

// 2. humanReadableToBytes: "1.27 MB" → 1337420
export function humanReadableToBytes(str: string): number {
  const [num, unit] = str.trim().split(/[\s]+/)
  const units = { B: 0, KB: 1, MB: 2, GB: 3, TB: 4 }
  const exponent = units[unit.toUpperCase() as keyof typeof units] ?? 0
  return Math.round(parseFloat(num) * Math.pow(1024, exponent))
}

// 3. camelToSnake: "myVarName" → "my_var_name"
export function camelToSnake(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()
}

// 4. snakeToCamel: "my_var_name" → "myVarName"
export function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
}

// 5. msToTime: 90061 → "1m 30s"
export function msToTime(ms: number): string {
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  return `${minutes > 0 ? `${minutes}m ` : ''}${seconds}s`.trim()
}

// 6. hexToRgb: "#ffffff" → { r: 255, g: 255, b: 255 }
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const cleanHex = hex.replace('#', '')
  const bigint = parseInt(cleanHex, 16)
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  }
}

// 7. rgbToHex: (255, 255, 255) → "#ffffff"
export function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`
}

// 8. toTitleCase: "hello world" → "Hello World"
export function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
}

// 9. degToRad: 180 → π
export function degToRad(deg: number): number {
  return deg * (Math.PI / 180)
}

// 10. radToDeg: π → 180
export function radToDeg(rad: number): number {
  return rad * (180 / Math.PI)
}

// 11. celsiusToFahrenheit: 0 → 32
export function celsiusToFahrenheit(c: number): number {
  return (c * 9) / 5 + 32
}

// 12. fahrenheitToCelsius: 32 → 0
export function fahrenheitToCelsius(f: number): number {
  return ((f - 32) * 5) / 9
}
