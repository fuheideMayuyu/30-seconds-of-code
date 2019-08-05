const all = (arr, fn = Boolean) => arr.every(fn);

// 例：
all([1,2,3,4], x => x > 0 ) // true
all([5,5,5], x => x === 6 ) // false

// 扩展

const some = (arr, fn = Boolean) => arr.some(fn);

some([1,2,3,4], x => x > 3 ) // true
some([5,5,5], x => x === 6 ) // false

console.log('some', all([5,5,5], x => x === 6 ))