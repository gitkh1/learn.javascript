let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  let i = 0;
  while (i < arr.length) {
    if ( ( (arr[i] >= a) && (arr[i] <= b) ) === false ) {
      arr.splice(i,1);
    } else {
      i++;
    };
  };
}

console.log(arr);
filterRangeInPlace(arr,1,4);
console.log(arr);