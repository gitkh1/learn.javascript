let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter(function(item) {
    if ( ( (item >= a) && (item <= b) ) || ( (item >= b) && (item <= a) ) ) {
      return item;
    };
  });
}

console.log(filterRange(arr,1,4));
console.log(arr);