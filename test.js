const compare = require('./index.js');

test('returns empty array, if both arrays are the same', () => {
  expect(compare([1, 2, 3], [1, 2, 3])).toEqual([]);
});

test('Returns array of indexes of the differing values', () => {
  expect(compare([1, 2, 3], [1, 2, 4])).toEqual([2]);
});
