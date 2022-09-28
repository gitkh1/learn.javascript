/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    const sum = accounts[i].reduce((prev, cur) => prev + cur);
    if (sum > maxWealth) maxWealth = sum;
  };
  return maxWealth;
};