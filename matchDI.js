function match(str) {
  const length = str.length;
  let maxDigit = length;
  let minDigit = 0;
  let result = [];

  for (let i = 0; i < length - 1; i++) {
    if (str[i] === 'I') {
      result.push(minDigit);
      minDigit++;
    } else {
      result.push(maxDigit);
      maxDigit--;
    }
  }
  if (str[length-1] === 'I') {
    result.push(minDigit);
    minDigit++;
    result.push(minDigit);
  } else {
    result.push(maxDigit);
    maxDigit--;
    result.push(maxDigit);
  }
  return result;
}

console.log(match('III')) // [0,1,2,3]
console.log(match('DDI')) // [3,2,0,1]
console.log(match('IDID')) // [0,4,1,3,2]
