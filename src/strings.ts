/**
 * Converts a string to title case (capitalizes first letter of each word)
 * @param str - Input string
 * @param lowercaseRest - Whether to lowercase the rest of each word (default: true)
 * @returns String in title case
 * @example
 * toTitleCase("hello world") → "Hello World"
 * toTitleCase("hElLo wOrLd", false) → "HElLo WOrLd"
 */
export function toTitleCase(str: string, lowercaseRest: boolean = true): string {
  return str.replace(/\w\S*/g, word =>
    word.charAt(0).toUpperCase() +
    (lowercaseRest ? word.slice(1).toLowerCase() : word.slice(1))
  );
}

/**
 * Converts camelCase to snake_case
 * @param str - Input string in camelCase
 * @param uppercase - Whether to convert to UPPER_SNAKE_CASE (default: false)
 * @returns String in snake_case
 * @example
 * camelToSnake("myVarName") → "my_var_name"
 * camelToSnake("myVarName", true) → "MY_VAR_NAME"
 */
export function camelToSnake(str: string, uppercase: boolean = false): string {
  const result = str.replace(/([a-z])([A-Z])/g, '$1_$2');
  return uppercase ? result.toUpperCase() : result.toLowerCase();
}

/**
 * Converts snake_case to camelCase
 * @param str - Input string in snake_case
 * @param pascal - Whether to convert to PascalCase (default: false)
 * @returns String in camelCase or PascalCase
 * @example
 * snakeToCamel("my_var_name") → "myVarName"
 * snakeToCamel("my_var_name", true) → "MyVarName"
 */
export function snakeToCamel(str: string, pascal: boolean = false): string {
  const camel = str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  return pascal ? camel.charAt(0).toUpperCase() + camel.slice(1) : camel;
}

/**
 * Converts a string to a URL-friendly slug
 * @param str - Input string
 * @param separator - Character to use as separator (default: '-')
 * @param preserveCase - Whether to preserve original case (default: false)
 * @returns URL-friendly slug
 * @example
 * slugify("Hello World!") → "hello-world"
 * slugify("Hello World!", '_', true) → "Hello_World"
 */
export function slugify(
  str: string,
  separator: string = '-',
  preserveCase: boolean = false
): string {
  let result = str.trim();
  if (!preserveCase) result = result.toLowerCase();
  return result
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .replace(/\s+/g, separator);
}


/**
 * Truncates text with ellipsis
 * @param str - Input string
 * @param maxLength - Maximum length before truncation
 * @param ellipsis - Custom ellipsis string (default: '...')
 * @param preserveWords - Whether to preserve whole words (default: true)
 * @returns Truncated string
 * @example
 * truncateText("Hello world", 8) → "Hello..."
 * truncateText("Hello world", 8, '..', false) → "Hello wo.."
 */
export function truncateText(
  str: string,
  maxLength: number,
  ellipsis: string = '...',
  preserveWords: boolean = true
): string {
  if (str.length <= maxLength) return str;

  if (preserveWords) {
    const truncated = str.substr(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return (lastSpace > 0 ? truncated.substr(0, lastSpace) : truncated) + ellipsis;
  }

  return str.slice(0, maxLength).trimEnd() + ellipsis;
}

/**
 * Reverses a string.
 * @param str - Input string.
 * @returns Reversed string.
 */
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * Counts words in a string (split by spaces).
 * @param str - Input string.
 * @returns Number of words.
 */
export function countWords(str: string): number {
  if (!str.trim()) return 0;
  return str.split(/\s+/).length;
}

/**
 * Checks if a string is a palindrome
 * @param str - Input string
 * @param caseSensitive - Whether comparison should be case-sensitive (default: false)
 * @param ignoreSpaces - Whether to ignore spaces (default: true)
 * @returns true if the string is a palindrome
 * @example
 * isPalindrome("Madam") → true
 * isPalindrome("A man a plan a canal Panama") → true
 * isPalindrome("Racecar", true) → false
 */
export function isPalindrome(
  str: string,
  caseSensitive: boolean = false,
  ignoreSpaces: boolean = true
): boolean {
  let cleanStr = str;
  if (!caseSensitive) cleanStr = cleanStr.toLowerCase();
  if (ignoreSpaces) cleanStr = cleanStr.replace(/\s+/g, '');
  cleanStr = cleanStr.replace(/[^a-z0-9]/gi, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}

export function isEmail(str: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
}

export function isURL(str: string): boolean {
  return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(str)
}

/**
 * Trims extra spaces between words (e.g., "Hello   world" → "Hello world").
 * @param str - Input string.
 * @returns String with normalized spaces.
 */
export function trimExtraSpaces(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}

/**
 * Masks the local part of an email (e.g., "user@domain.com" → "us**@domain.com").
 * @param email - Email address.
 * @returns Masked email.
 * @throws Error if input is not a valid email.
 */
export function maskEmail(email: string): string {
  if (!isEmail(email)) throw new Error('Invalid email');
  const [local, domain] = email.split('@');
  const maskedLocal = local.slice(0, 2) + '**';
  return `${maskedLocal}@${domain}`;
}

/**
 * Generates a random string
 * @param length - Length of the string (default: 10)
 * @param options - Configuration options
 * @param options.includeNumbers - Whether to include numbers (default: true)
 * @param options.includeUppercase - Whether to include uppercase letters (default: true)
 * @param options.includeLowercase - Whether to include lowercase letters (default: true)
 * @param options.customChars - Custom character set to use
 * @returns Random string
 * @example
 * generateRandomString(8) → "A3b7GhK9"
 * generateRandomString(6, { includeNumbers: false }) → "aBcDef"
 */
export function generateRandomString(
  length: number = 10,
  options: {
    includeNumbers?: boolean;
    includeUppercase?: boolean;
    includeLowercase?: boolean;
    customChars?: string;
  } = {}
): string {
  const {
    includeNumbers = true,
    includeUppercase = true,
    includeLowercase = true,
    customChars = ''
  } = options;

  let chars = customChars;
  if (!chars) {
    chars += includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    chars += includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '';
    chars += includeNumbers ? '0123456789' : '';
  }

  if (!chars.length) {
    throw new Error('No character set available for string generation');
  }

  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
