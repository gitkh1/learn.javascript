function findDividers(n) {
  const max = Math.trunc(n / 2);
  let res = [];
  for (let i = 1; i <= max; i++) {
    if (n % i === 0) {
      res.push(i);
    }
  }
  return res;
}

let isPashaWin = [
  undefined,
  false,
]

function game(n) {
  if (isPashaWin[n]) {
    return isPashaWin[n];
  }
  const dividers = findDividers(n);
  let result = false;
  const length = dividers.length;
  let i = 0;
  while ((!result) && (i < length)) {
    const divider = dividers[i];
    result = result || (!game(n - divider));
    i++;
  }
  isPashaWin[n] = result;
  return result;
}

console.log(game(131));

function isPashaWins(n) {
  return (n % 2 === 0);
}

console.log(isPashaWins(131));
