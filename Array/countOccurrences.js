// 计算数组中值出现的次数
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

// 例：
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3

console.log('aaa', countOccurrences([1, 1, 2, 1, 2, 3], 4))