/**
 * @param {string} s
 * @return {number}
 */

let romanToInt = function (s) {
  const dict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  let result = 0;
  let lastNumber = 0;

  for (let symbolIdx = s.length - 1; symbolIdx >= 0; symbolIdx--) {
    let number = dict[s[symbolIdx]];
    result += (lastNumber > number) ? -number : number;
    lastNumber = number;
  }

  return result;
};