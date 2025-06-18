# Utilyx

A comprehensive collection of utility functions for common JavaScript/TypeScript operations.

## Installation

```bash
npm install utilyx
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
  camelToSnake,
  snakeToCamel,
  reverseString,
  countWords,
  isPalindrome,
  trimExtraSpaces,
  maskEmail,
  generateRandomString,
  generateTokenBase64,
  debounce,
  throttle,
  deepClone,
  deepEqual,
  shuffleArray,
  uniqueArray,
  copyToClipboard,
  localStorageUtils
 
} from 'utilyx';
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

### String Utilities

#### `toTitleCase(str: string, lowercaseRest?: boolean): string`
Converts a string to title case (capitalizes first letter of each word).

```typescript
toTitleCase('hello world') // Returns: "Hello World"
toTitleCase('hElLo wOrLd', false) // Returns: "HElLo WOrLd"
```

#### `camelToSnake(str: string, uppercase?: boolean): string`
Converts camelCase to snake_case.

```typescript
camelToSnake('myVarName') // Returns: "my_var_name"
camelToSnake('myVarName', true) // Returns: "MY_VAR_NAME"
```

#### `snakeToCamel(str: string, pascal?: boolean): string`
Converts snake_case to camelCase.

```typescript
snakeToCamel('my_var_name') // Returns: "myVarName"
snakeToCamel('my_var_name', true) // Returns: "MyVarName"
```

#### `slugify(str: string, separator?: string, preserveCase?: boolean): string`
Generates a URL-friendly slug from a string.

```typescript
slugify('Hello World!') // Returns: "hello-world"
slugify('Hello World!', '_', true) // Returns: "Hello_World"
```

#### `truncateText(str: string, maxLength: number, ellipsis?: string, preserveWords?: boolean): string`
Truncates text to a specified length and adds ellipsis.

```typescript
truncateText('Hello World', 8) // Returns: "Hello..."
truncateText('Hello World', 8, '..', false) // Returns: "Hello wo.."
```

#### `reverseString(str: string): string`
Reverses a string.

```typescript
reverseString('hello') // Returns: "olleh"
```

#### `countWords(str: string): number`
Counts words in a string (split by spaces).

```typescript
countWords('Hello world') // Returns: 2
countWords('') // Returns: 0
```

#### `isPalindrome(str: string, caseSensitive?: boolean, ignoreSpaces?: boolean): boolean`
Checks if a string is a palindrome.

```typescript
isPalindrome('Madam') // Returns: true
isPalindrome('A man a plan a canal Panama') // Returns: true
isPalindrome('Racecar', true) // Returns: false
```

#### `trimExtraSpaces(str: string): string`
Trims extra spaces between words.

```typescript
trimExtraSpaces('Hello   world') // Returns: "Hello world"
```

#### `maskEmail(email: string): string`
Masks the local part of an email address.

```typescript
maskEmail('user@domain.com') // Returns: "us**@domain.com"
```

#### `generateRandomString(length?: number, options?: object): string`
Generates a random string with customizable options.

```typescript
generateRandomString(8) // Returns: "A3b7GhK9"
generateRandomString(6, { includeNumbers: false }) // Returns: "aBcDef"
```

#### `randomUUID(): string`
Generates a random UUID (v4 style).

```typescript
randomUUID() // Returns: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
```

#### `generateTokenBase64(length?: number): string`
Generates a cryptographically secure random token encoded in base64.

```typescript
generateTokenBase64(16) // Returns: 'QkVmX1ZydXNvYkZBS3pWag==' (base64 string of 16 random bytes)
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

---

## 💬 Why utilyx?

> A modern utility toolkit that doesn't try to be lodash — just the stuff you actually use, written clean, typed tight.

Built for creators, side-projects, frameworks, and startups who don't want to waste time reinventing functions again.

---

## 🔮 Coming Soon

- 📦 Native ESM build
- 💅 React UI utils (buttons, modals, etc.)
- 🌐 CDN-friendly version

---

## 🤝 Contribute

Want to add your favorite utility?\
Open an [issue](https://github.com/NabeelAhmadK/utilyx/issues) or [pull request](https://github.com/NabeelAhmadK/utilyx/pulls) — let's build this together 💪

---


## License

MIT


