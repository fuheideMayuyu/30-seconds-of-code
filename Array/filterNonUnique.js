// 找出没有重复出现的数组元素
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))

// 例:
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
