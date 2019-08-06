// 从数组末尾删除元素，直到传递的函数返回true。 返回数组中的其余元素。

const dropRightWhile = (arr, func) => {
  let rightIndex = arr.length;
  while (rightIndex-- && !func(arr[rightIndex]));
  return arr.slice(0, rightIndex + 1);
};
// 例:

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
dropRightWhile([3, 1, 5, 2], n => n < 3) // [ 3, 1, 5, 2 ]
console.log(dropRightWhile([3, 1, 5, 2], n => n < 3)) // [ 3, 1, 5, 2 ]
