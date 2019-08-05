const arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    .join('\n');


    // 二维数组展开为一维数组
console.log('aaa',arrayToCSV([['a', '"b" great'], ['c', 3.1415, 7]]))