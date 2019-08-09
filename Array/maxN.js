// 找出最大的数
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n)


maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]

// 找出最小的数
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n)

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
