function getMaxXOROld(numbers) {
  const length = numbers.length;
  let max = 0;
  for (let j = 1; j < length; j++) {
    for (let i = 0; i < j; i++) {
      max = Math.max(max, (numbers[i] ^ numbers[j]));
    }
  }
  return max;
}

const ar = [100, 1, 99]
console.log(getMaxXOR(ar));

function getMaxXOR(numbers) {
  if (numbers.length === 2) {
    return Math.max(numbers[0] ^ numbers[1]);
  } if (numbers.length === 3) {
    const a = Math.max()
    return Math.max(Math.max(getMaxXOR(numbers[0],numbers[1])), numbers[2])
  } 
  else {
    const k = Math.trunc(numbers.length / 2);
    console.log(k);
    return Math.max(getMaxXOR(numbers.slice(0, k)), getMaxXOR(numbers.slice(k)));
  }
}