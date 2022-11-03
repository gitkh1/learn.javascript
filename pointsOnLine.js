function isOnOneLine(points) {
  let prePoints = {};
  let arr = [];
  points.forEach(point => {
    const x = point[0];
    const y = point[1];
    if (x in prePoints) {
      prePoints[x].add(y);
    } else {
      prePoints[x] = new Set([y]);
    }
  });
  for (let x in prePoints) {
    for (let y of prePoints[x]) {
      arr.push([+x, y]);
    }
  }
  if (arr.length < 3) {
    return true;
  }

  const length = arr.length;
  const x1 = arr[0][0];
  const y1 = arr[0][1];
  const x2 = arr[1][0];
  const y2 = arr[1][1];
  if (x1 === x2) {
    let i = 2;
    while (i < length) {
      if (arr[i][0] !== x2) {
        return false;
      }
      i++;
    }
    return true;
  }

  const k = (y2 - y1) / (x2 - x1);
  const b = (y1 * x2 - y2 * x1) / (x2 - x1);

  let i = 2
  while (i < length) {
    if (Math.abs(arr[i][1] - (k * arr[i][0] + b)) >= 0.1) {
      return false;
    }
    i++;
  }
  return true;
}

let points = [
  [32, 6],
  [29, 2],
  [32, 6],
  [29, 2],
  [35, 10],
]
points = [
  [-22, -75],
  [-30, -70]
]
points = [
  [86, -93],
  [88, -91],
  [70, -81],
  [86, -93]
]
points = [
  [1, 15],
  [4, 15],
  [5, 14]
]
console.log(isOnOneLine(points));