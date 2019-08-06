// 返回数组的第n个元素
// e当前值， i 索引
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
// 例：
everyNth([1, 3, 3, 8, 5, 9], 2); // [ 3, 8, 9 ]

console.log('aaa', everyNth([1, 3, 3, 8, 5, 9], 2))
