const compact = arr => arr.filter(Boolean);
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
console.log('过滤', compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]))