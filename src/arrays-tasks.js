/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */

function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function sumArrays(arr1, arr2) {
  const len = Math.max(arr1.length, arr2.length);
  return Array.from({ length: len }, (_, i) => (arr1[i] || 0) + (arr2[i] || 0));
}

function findElement(arr, value) {
  return arr.indexOf(value);
}

function findAllOccurrences(arr, item) {
  return arr.filter((el) => el === item).length;
}

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

function getStringsLength(arr) {
  return arr.map((s) => s.length);
}

function getAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, n) => acc + n, 0);
  return Math.round((sum / arr.length) * 100) / 100;
}

function isSameLength(arr) {
  return arr.every((s) => s.length === arr[0].length);
}

function isValueEqualsIndex(arr) {
  return arr.some((el, i) => el === i);
}

function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return n === 0 ? [] : arr.slice(-n);
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function toStringList(arr) {
  return arr.join(',');
}

function distinct(arr) {
  return [...new Set(arr)];
}

function createNDimensionalArray(n, size) {
  if (n === 1) return Array(size).fill(0);
  return Array.from({ length: size }, () =>
    createNDimensionalArray(n - 1, size)
  );
}

function flattenArray(nestedArray) {
  return nestedArray.flat(Infinity);
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function calculateBalance(arr) {
  return arr.reduce((acc, [income, expense]) => acc + income - expense, 0);
}

function createChunks(arr, chunkSize) {
  return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, i) =>
    arr.slice(i * chunkSize, (i + 1) * chunkSize)
  );
}

function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => i * 2 + 1);
}

function getElementByIndices(arr, indices) {
  return indices.reduce((acc, idx) => acc[idx], arr);
}

function getFalsyValuesCount(arr) {
  return arr.filter((el) => !el).length;
}

function getIdentityMatrix(n) {
  return Array.from({ length: n }, (emptyRow, row) =>
    Array.from({ length: n }, (emptyCol, col) => (row === col ? 1 : 0))
  );
}

function getIndicesOfOddNumbers(numbers) {
  return numbers
    .map((n, i) => (n % 2 !== 0 ? i : -1))
    .filter((idx) => idx !== -1);
}

function getHexRGBValues(arr) {
  return arr.map((n) => `#${n.toString(16).toUpperCase().padStart(6, '0')}`);
}

function getMaxItems(arr, n) {
  return [...arr].sort((a, b) => b - a).slice(0, n);
}

function findCommonElements(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1)].filter((el) => set2.has(el));
}

function findLongestIncreasingSubsequence(nums) {
  if (nums.length === 0) return 0;
  return nums.slice(1).reduce(
    (acc, num, i) => {
      const cur = num > nums[i] ? acc.cur + 1 : 1;
      return { best: Math.max(acc.best, cur), cur };
    },
    { best: 1, cur: 1 }
  ).best;
}

function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, i) => Array(i + 1).fill(item));
}

function shiftArray(arr, n) {
  const len = arr.length;
  if (len === 0) return [];
  const shift = ((n % len) + len) % len;
  return [...arr.slice(len - shift), ...arr.slice(0, len - shift)];
}

const DIGIT_NAMES = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

function sortDigitNamesByNumericOrder(arr) {
  return [...arr].sort(
    (a, b) => DIGIT_NAMES.indexOf(a) - DIGIT_NAMES.indexOf(b)
  );
}

function swapHeadAndTail(arr) {
  if (arr.length <= 1) return [...arr];
  const mid = Math.floor(arr.length / 2);
  const head = arr.slice(0, mid);
  const middle = arr.length % 2 !== 0 ? [arr[mid]] : [];
  const tail = arr.slice(arr.length - mid);
  return [...tail, ...middle, ...head];
}

module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
  findCommonElements,
  findLongestIncreasingSubsequence,
  propagateItemsByPositionIndex,
  shiftArray,
  sortDigitNamesByNumericOrder,
  swapHeadAndTail,
};
