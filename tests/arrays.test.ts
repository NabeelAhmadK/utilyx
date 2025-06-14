import { uniqueArray } from '../src/arrays';

test('uniqueArray should remove duplicates', () => {
  expect(uniqueArray([1, 2, 2, 3])).toEqual([1, 2, 3]);
});
