const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (
  acc[filter[i] ? 0 : 1].push(val), acc),[[], []]
  )
  console.log(bifurcate)

// Reduce: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// acc: 累计器， val:当前值， i:当前索引
// console.log(bifurcate(['beep', 'boop', 'boo', 'bar'], [true, true, false, true]))
