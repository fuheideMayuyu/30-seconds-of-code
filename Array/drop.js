// 数组分割

const drop = (arr, n = 1) => arr.slice(n);
// 例:
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []


// 从后往前分割

const dropRight = (arr, n = 1) => arr.slice(0, -n);

//例:
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []