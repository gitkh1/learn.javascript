const n1 = 2;
const m1 = 3;
const ar1 = [
  [10, 8, 5],
  [10, 5, 4]
]

const n2 = 5;
const m2 = 4;
const ar2 = [
  [1, 62, 134, 65],
  [23, 7, 77, 5],
  [2, 9, 12, 4],
  [456, 89, 9, 6],
  [5, 6, 1, 34]
]

const n3 = 2;
const m3 = 2;
const ar3 = [
  [1, 1],
  [1, 1],
]

const n4 = 2;
const m4 = 2;
const ar4 = [
  [10, 9],
  [9, 11]
]

const ar5 = [[100]]


function longWay(arr) {
  let n = matrix.length;
  let m = matrix[0].length;

  let result = 1;
  let i, j;
  let dict = [];
  for (i = 0; i < n; i++) {
    dict[i] = Array(m).fill(0);
  }

  function findLongest(i, j) {
    if (dict[i][j]) return dict[i][j];
    let max = 1
    let val = matrix[i][j]
    if (i > 0 && val < matrix[i - 1][j]) {
      max = Math.max(max, findLongest(i - 1, j) + 1);
    }
    if (i + 1 < n && val < matrix[i + 1][j]) {
      max = Math.max(max, findLongest(i + 1, j) + 1);
    }
    if (j > 0 && val < matrix[i][j - 1]) {
      max = Math.max(max, findLongest(i, j - 1) + 1);
    }
    if (j < m && val < matrix[i][j + 1]) {
      max = Math.max(max, findLongest(i, j + 1) + 1);
    }
    dict[i][j] = Math.max(dict[i][j], max)
    return max;
  }

  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      result = Math.max(result, findLongest(i, j));
    }
  }
  return result

}

console.log(longWay(ar2));
