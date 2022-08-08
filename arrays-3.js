const arr = [2, -1, 2, 3, -9];
const arr1 = [-1, 2, 3, -9];
const arr2 = [-1, 2, 3, -9, 11];
const arr3 = [-2, -1, 1, 2];
const arr4 = [100, -9, 2, -3, 5];
const arr5 = [1, 2, 3];

function getMaxSubSum(arr) {
let answ = 0;
let sum1 = 0;
let answer = [];

for (let i = 0; i < arr.length; i++) {
  if (sum1 + arr[i] > 0) {
    sum1 += arr[i];
    if (sum1 > answ) {
      answ = sum1;
    };
  } else {
    sum1 = 0;
  };
};

console.log(answ);
}

getMaxSubSum(arr);
