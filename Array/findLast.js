// 找出数组特定值

const findLast = (arr, fn) => arr.filter(fn).pop()

// 例:
findLast([1, 2, 3, 4], n => n % 2 === 1)

const findLastIndex = (arr, fn) =>
  arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop()[0];

    findLastIndex([1, 2, 3, 4], n => n % 2 === 1)
    console.log(findLastIndex([1, 2, 3, 4,5], n => n % 2 === 1))