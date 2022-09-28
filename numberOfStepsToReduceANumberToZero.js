/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  const bitString = num.toString(2);
  const length = bitString.length;
  let result = length - 1;
  for (let i = 0; i < length; i++) {
    result += Number(bitString[i]);
  }
  return result;
};

console.log(numberOfSteps(8))
