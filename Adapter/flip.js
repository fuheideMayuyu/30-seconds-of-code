// flip 接受一个函数参数，然后将该函数第一个参数作为最后一个参数。（注：翻转参数）
// 返回一个接受可变参数输入的闭包，并且在应用其余参数之前将最后一个参数作为第一个参数

const flip = fn => (...args) => fn(args.pop(), ...args)

// 示例：
let a = { name: 'John Smith' };
let b = {};
const mergeFrom = flip(Object.assign);
let mergePerson = mergeFrom.bind(null, a);
mergePerson(b); // == b
b = {};
Object.assign(b, a); // == b
