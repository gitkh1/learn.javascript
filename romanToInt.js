/**
 * @param {string} s
 * @return {number}
 */

let romanToInt = function (s) {
  if (s.indexOf('V') !== s.lastIndexOf('V')) {
    return -1;
  }
  if (s.indexOf('L') !== s.lastIndexOf('L')) {
    return -1;
  }
  if (s.indexOf('D') !== s.lastIndexOf('D')) {
    return -1;
  }
  if (s.includes('IIII') || s.includes('XXXX') || s.includes('CCCC') || s.includes('MMMM')) {
    return -1;
  }

  const dict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  const exceptions = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];

  let result = 0;
  let lastNumber = Infinity;

  for (let symbolIdx = 0; symbolIdx < s.length; symbolIdx++) {
    let number = dict[s[symbolIdx]];
    if (number <= lastNumber) {
      result += number;
      lastNumber = number;
    } else {
      const substr = s.slice(symbolIdx - 1, symbolIdx + 1);
      if (exceptions.includes(substr)) {
        result += -2 * lastNumber + number;
        lastNumber = number - lastNumber;
        const preChar = s[symbolIdx - 2];
        if ((preChar) && (dict[preChar] < number)) {
          return -1;
        }
      } else {
        return -1;
      }
    }
  }

  return result || -1;
};

console.log(romanToInt('CMLXIXX'))