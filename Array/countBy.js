const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
// 例:
countBy([6.1, 4.2, 6.3, 6.4, 6.5], Math.floor); // { '4': 1, '6': 4 }
countBy(['one', 'two','aaa','bb','ccc', 'three'], 'length'); // { '2': 1, '3': 4, '5': 1 }
console.log('aaa', countBy(['one', 'two','aaa','bb','ccc', 'three'], 'length'))