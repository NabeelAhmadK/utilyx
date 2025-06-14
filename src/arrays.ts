export const shuffleArray = <T>(arr: T[]): T[] =>
  [...arr].sort(() => Math.random() - 0.5);

export const uniqueArray = <T>(arr: T[]): T[] =>
  [...new Set(arr)];
