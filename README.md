# Utilaide

A comprehensive collection of utility functions for common JavaScript/TypeScript operations.

## Installation

```bash
npm install utilaide
```

## Usage

```typescript
import { 
  timeAgo,
  getTimeDiff,
  formatDate,
  isLeapYear,
  msToTime,
  hexToRgb,
  rgbToHex,
  toTitleCase,
  degToRad,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  uuid,
  generateSlug,
  truncateText,
  isEmail,
  isURL,
  randomHexColor,
  debounce,
  throttle,
  deepClone,
  deepEqual,
  shuffleArray,
  uniqueArray,
  copyToClipboard,
  capitalize,
  localStorageUtils
} from 'utilaide';
```

## Available Functions

### Date Utilities

#### `timeAgo(date: string): string`
Converts a date to a human-readable "time ago" format.

```typescript
timeAgo('2024-03-20T10:00:00Z') // Returns: "2 days ago"
timeAgo(new Date()) // Returns: "just now"
```

#### `getTimeDiff(start: Date | string, end: Date | string)`
Calculates the time difference between two dates.

```typescript
getTimeDiff('2024-03-20', '2024-03-22') 
// Returns: { days: 2, hours: 0, mins: 0, secs: 0 }
```

#### `formatDate(date: Date | string, format: string): string`
Formats a date according to the specified format string.

```typescript
formatDate(new Date(), 'YYYY-MM-DD') // Returns: "2024-03-22"
```

#### `isLeapYear(year: number): boolean`
Checks if a given year is a leap year.

```typescript
isLeapYear(2024) // Returns: true
isLeapYear(2023) // Returns: false
```

### Conversion Utilities

#### `msToTime(ms: number): string`
Converts milliseconds to a human-readable time format.

```typescript
msToTime(90061) // Returns: "1m 30s"
```

#### `hexToRgb(hex: string): { r: number, g: number, b: number }`
Converts a hex color code to RGB values.

```typescript
hexToRgb('#FF0000') // Returns: { r: 255, g: 0, b: 0 }
```

#### `rgbToHex(r: number, g: number, b: number): string`
Converts RGB values to a hex color code.

```typescript
rgbToHex(255, 0, 0) // Returns: "#ff0000"
```

#### `toTitleCase(str: string): string`
Converts a string to title case.

```typescript
toTitleCase('hello world') // Returns: "Hello World"
```

#### `degToRad(deg: number): number`
Converts degrees to radians.

```typescript
degToRad(180) // Returns: π
```

#### `celsiusToFahrenheit(c: number): number`
Converts Celsius to Fahrenheit.

```typescript
celsiusToFahrenheit(0) // Returns: 32
```

#### `fahrenheitToCelsius(f: number): number`
Converts Fahrenheit to Celsius.

```typescript
fahrenheitToCelsius(32) // Returns: 0
```

### String Utilities

#### `uuid(): string`
Generates a random UUID (v4 style).

```typescript
uuid() // Returns: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
```

#### `generateSlug(str: string): string`
Generates a URL-friendly slug from a string.

```typescript
generateSlug('Hello World!') // Returns: "hello-world"
```

#### `truncateText(str: string, len: number): string`
Truncates text to a specified length and adds ellipsis.

```typescript
truncateText('Hello World', 5) // Returns: "Hello..."
```

#### `capitalize(str: string): string`
Capitalizes the first letter of a string.

```typescript
capitalize('hello') // Returns: "Hello"
```

### Validation Utilities

#### `isEmail(str: string): boolean`
Validates if a string is a valid email address.

```typescript
isEmail('user@example.com') // Returns: true
isEmail('invalid-email') // Returns: false
```

#### `isURL(str: string): boolean`
Validates if a string is a valid URL.

```typescript
isURL('https://example.com') // Returns: true
isURL('not-a-url') // Returns: false
```

### Color Utilities

#### `randomHexColor(): string`
Generates a random hex color code.

```typescript
randomHexColor() // Returns: "#1a2b3c"
```

### Array Utilities

#### `shuffleArray<T>(arr: T[]): T[]`
Randomly shuffles the elements of an array.

```typescript
const numbers = [1, 2, 3, 4, 5];
shuffleArray(numbers) // Returns: [3, 1, 5, 2, 4] (random order)
```

#### `uniqueArray<T>(arr: T[]): T[]`
Removes duplicate elements from an array.

```typescript
const numbers = [1, 2, 2, 3, 3, 4];
uniqueArray(numbers) // Returns: [1, 2, 3, 4]
```

### Function Utilities

#### `debounce<T extends (...args: any[]) => void>(fn: T, delay: number)`
Creates a debounced function that delays invoking the provided function until after the specified delay has elapsed.

```typescript
const debouncedFn = debounce(() => console.log('debounced'), 1000);
```

#### `throttle<T extends (...args: any[]) => void>(fn: T, delay: number)`
Creates a throttled function that only invokes the provided function at most once per specified delay.

```typescript
const throttledFn = throttle(() => console.log('throttled'), 1000);
```

### Object Utilities

#### `deepClone<T>(obj: T): T`
Creates a deep clone of an object.

```typescript
const original = { a: { b: 1 } };
const cloned = deepClone(original);
```

#### `deepEqual(a: any, b: any): boolean`
Performs a deep equality check between two values.

```typescript
deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }) // Returns: true
```

### Browser Utilities

#### `copyToClipboard(str: string): Promise<void>`
Copies a string to the clipboard.

```typescript
await copyToClipboard('Hello World!') // Copies to clipboard
```

#### `localStorageUtils`
A collection of utilities for working with localStorage.

```typescript
// Get value
localStorageUtils.get('key') // Returns: value or null

// Set value
localStorageUtils.set('key', { data: 'value' })

// Remove value
localStorageUtils.remove('key')
```

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT


