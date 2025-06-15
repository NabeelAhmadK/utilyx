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
  msToTime,
  toTitleCase,
  truncateText,
  randomUUID,
  slugify,  
  isEmail,
  isURL,
  generateTokenBase64,
  debounce,
  throttle,
  deepClone,
  deepEqual,
  shuffleArray,
  uniqueArray,
  copyToClipboard,
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

### Conversion Utilities

#### `msToTime(ms: number): string`
Converts milliseconds to a human-readable time format.

```typescript
msToTime(90061) // Returns: "1m 30s"
```

#### `toTitleCase(str: string): string`
Converts a string to title case.

```typescript
toTitleCase('hello world') // Returns: "Hello World"
```

### String Utilities

#### `randomUUID(): string`
Generates a random UUID (v4 style).

```typescript
randomUUID() // Returns: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
```

#### `slugify(str: string): string`
Generates a URL-friendly slug from a string.

```typescript
slugify('Hello World!') // Returns: "hello-world"
```

#### `truncateText(str: string, len: number): string`
Truncates text to a specified length and adds ellipsis.

```typescript
truncateText('Hello World', 5) // Returns: "Hello..."
```

#### `toTitleCase(str: string): string`
capitalize the first letter of a string.

```typescript
toTitleCase('hello') // Returns: "Hello"
```

#### `generateTokenBase64(length?: number): string`
Generates a cryptographically secure random token encoded in base64.

```typescript
generateTokenBase64(16); // 'QkVmX1ZydXNvYkZBS3pWag==' (base64 string of 16 random bytes)
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


