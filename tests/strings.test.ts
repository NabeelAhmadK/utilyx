import { camelToSnake, capitalize } from '../src/strings';

test('camelToSnake should convert camelCase to snake_case', () => {
  expect(camelToSnake('helloWorld')).toBe('hello_world');
});

test('capitalize should capitalize the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});
