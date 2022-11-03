function getEnergyForUnion(stones) {
  const arr = stones.sort((a, b) => b - a);

  let result = 0;
  if (arr.length === 1) {
    return arr[0];
  }
  while (arr.length > 1) {
    const newEl = arr.pop() + arr.pop();
    arr.push(newEl);
    result += newEl;
    arr.sort((a, b) => b - a);
  }
  return result;
}

const ans = getEnergyForUnion([6]);

console.log(ans);