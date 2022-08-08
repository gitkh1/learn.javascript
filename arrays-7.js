let arr = [5, 2, 1, -10, 8];

function sortReverse(arr) {
  arr.sort((a,b) => b - a);
}

console.log(arr);
sortReverse(arr);
console.log(arr); // 8, 5, 2, 1, -10