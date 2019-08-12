// 执行从左到右的函数组合。
const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

// 示例:
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);
multiplyAndAdd5(5, 2); // 15