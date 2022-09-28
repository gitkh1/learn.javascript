const nums = [2, 7, 11, 15];
const target = 9;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  const length = nums.length;

  for (let idx = 0; idx < length; idx++) {
    const elem = nums[idx];
    if (map.has(target - elem)) {
      return [idx, map.get(target - elem)];
    } else {
      map.set(elem, idx);
    };
  };
};

const answ = twoSum(nums, target);
console.log(answ);