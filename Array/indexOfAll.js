// 找出数组元素所在位置

const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []

console.log('index', indexOfAll([1, 2, 3, 1, 2, 3], 3))