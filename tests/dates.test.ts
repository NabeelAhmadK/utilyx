import { timeAgo } from '../src/dates';

test('timeAgo should return a string', () => {
  const now = new Date();
  expect(typeof timeAgo(now)).toBe('string');
});
