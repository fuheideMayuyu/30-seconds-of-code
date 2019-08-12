// 给定一个 key 和一个 set 作为参数，给定上下文时调用它们。主要用于函数组合。

// 使用闭包以存储的参数调用存储的 key 。

const call = (key, ...args) => context => context[key](...args);

// 示例：
Promise.resolve([1, 2, 3])
  .then(call('map', x => 2 * x))
  .then(console.log); //[ 2, 4, 6 ]

// 该函数等同于如下函数：

const map = call.bind(null, 'map');
Promise.resolve([1, 2, 3])
  .then(map(x => 2 * x))
  .then(console.log); //[ 2, 4, 6 ]