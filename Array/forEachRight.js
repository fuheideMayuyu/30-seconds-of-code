// 数组的每个元素都执行一次
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);

// 例:
forEachRight([1, 2, 3, 4], val => console.log('每个都执行一次'))