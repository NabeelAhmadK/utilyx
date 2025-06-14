export const camelToSnake = (str: string): string =>
  str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);
