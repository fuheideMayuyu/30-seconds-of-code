// 接受一个可变参数函数并返回一个闭包，该闭包接受一个参数数组映射到该函数的输入。
// 使用闭包和展开运算符 (...) 将参数数组映射到函数的输入。

const spreadOver = fn => argsArr => fn(...argsArr);

// 查看示例：
const arrayMax = spreadOver(Math.max);
arrayMax([1, 2, 3]); // 3