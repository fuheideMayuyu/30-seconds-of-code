const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (
  acc[filter[i] ? 0 : 1].push(val), acc),[[], []]
  )
  console.log(bifurcate)

// Reduce: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// acc: 累计器， val:当前值， i:当前索引

// 例：
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
console.log(bifurcate(['beep', 'boop', 'boo', 'bar'], [true, false, false, true]))


const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
// 例：

bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]
  
