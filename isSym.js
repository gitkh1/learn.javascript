// /**
//  * @param {([number, number])[]} points
//  * @returns {boolean}
//  */
function isSym(points) {
  if (!Array.isArray(points)) {
    throw new Error('points must be array')
  };
  if (points.length < 2) return true;
  let obj = {};
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    if (obj.hasOwnProperty(point[1])) {
      obj[point[1]].push(point[0]);
    } else {
      obj[point[1]] = [point[0]];
    };
  };
  let lastAvg = null;
  let result = true;
  if (Object.keys(obj).length === 1) {
    const addedPoints = Object.values(obj)[0];
    let result = true;
    let lastSum = null;
    if (addedPoints.length % 2 === 0) {
      for (let i = 0; i < addedPoints.length / 2; i++) {
        const thisSum = addedPoints[i] + addedPoints[addedPoints.length - 1 - i];
        if (lastSum === null) {
          lastSum = thisSum;
        } else if (lastSum !== thisSum) {
          result = false;
        };
      };
    } else {
      const centerIndex = (addedPoints.length - 1) / 2;
      lastSum = addedPoints[centerIndex] * 2;
      for (let i = 0; i < centerIndex / 2; i++) {
        const thisSum = addedPoints[i] + addedPoints[addedPoints.length - 1 - i];
        if (lastSum !== thisSum) {
          result = false;
        };
      };
    };
    return result;
  };
  for (const key in obj) {
    if (lastAvg === null) {
      const length = obj[key].length;
      lastAvg = Math.round(obj[key].reduce((acc, cur) => acc + cur, 0) / length);
    } else {
      const length = obj[key].length;
      const thisAvg = Math.round(obj[key].reduce((acc, cur) => acc + cur, 0) / length);
      if (thisAvg !== lastAvg) result = false;
    };
  };
  return result;
}

// console.log(isSym([]));
// console.log(isSym());
console.log(isSym([
  [0, 0], [1, 0], [3, 0]
]));

//console.log([[0,2], [2,2]]);
//console.log(Array.isArray([[0, 2], [2, 2]]));