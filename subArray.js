function subarraySum(nums, k) {

  let cursor1 = 0;
  let cursor2 = 0;
  let curSum = nums[0];
  let counter = 0;

  while (cursor1 < nums.length) {
    if (curSum === k) {
      counter++;
      curSum -= nums[cursor1];
      cursor1++;
    } else if (curSum < k) {
      cursor2++;
      if (cursor2 >= nums.length) {
        curSum -= nums[cursor1]
        cursor1++;
      } else {
        curSum += nums[cursor2];
      }
    } else if (curSum > k) {
      curSum -= nums[cursor1];
      cursor1++;
    }
  }
  return counter;
}

// ([1, 1, 1], 2) -> 2
// ([1, 2, 1], 3) -> 2
// ([1, 2, 5, 3], 3) -> 2
// ([10, 5, 6, 7, 8, 7], 15) -> 3
console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 1], 3));
console.log(subarraySum([10, 5, 6, 7, 8, 7], 15));