/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let arr = [];
  for (let i = 0; i < mat.length; i++) {
    arr[i] = {
      power: mat[i].reduce((acc, cur) => acc + cur),
      index: i,
    };
  };
  arr.sort((a, b) => {
    if (a.power < b.power) return -1;
    if (a.power === b.power) {
      if (a.index < b.index) return -1;
    };
    return 1;
  });
  return arr.filter((element, index) => index < k).map(element => element.index);
};

kWeakestRows = function (mat, k) {
  let arr = [];
  for (let i = 0; i < mat.length; i++) {
    arr.push([mat[i].reduce((acc, cur) => acc + cur), i]);
  };
  arr.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] === b[0]) {
      if (a[1] < b[1]) return -1;
    };
    return 1;
  });
  return arr.slice(0,k).map(element => element[1]);
};

const mat = [[1, 1, 0, 0, 0],
[1, 1, 1, 1, 0],
[1, 0, 0, 0, 0],
[1, 1, 0, 0, 0],
[1, 1, 1, 1, 1]];
let answer = kWeakestRows(mat, 3);
console.log(answer);