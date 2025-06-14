import { bytesToHumanReadable, hexToRgb } from '../src/conversions';

test('bytesToHumanReadable should convert bytes correctly', () => {
  expect(bytesToHumanReadable(1024)).toBe('1.00 KB');
});

test('hexToRgb should convert hex to RGB', () => {
  expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
});
