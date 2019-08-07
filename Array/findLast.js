// 找出数组特定值

const findLast = (arr, fn) => arr.filter(fn).pop()

// 例:
findLast([1, 2, 3, 4], n => n % 2 === 1)