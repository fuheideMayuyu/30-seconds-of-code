// 找出最大的数
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n)


maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
