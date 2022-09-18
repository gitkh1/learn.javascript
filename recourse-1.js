function length(arr) {
  if (arr.length === 1) {
    return 1;
  } else {
    return 1 + length(arr.slice(1));
  }
}

function max(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    const temp = max(arr.slice(1));
    if (arr[0] >= temp)  {
      return arr[0];
    } else {
      return temp;
    }
  }
}

let arr = [0,2,1,1231,4,-923423,4324];

function createBigArray(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.round(Math.random()*1000));
  };
  return arr;
}

let bigArr = createBigArray(100000);

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const fixElem = arr[0];
    let less = [];
    let greater = [];
    arr.slice(1).forEach(element => {
      if (element > fixElem) {
        greater.push(element);
      } else {
        less.push(element);
      }
    });
    less = quickSort(less);
    greater = quickSort(greater);
    return [...less, fixElem, ...greater];
  }
}

function bubleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log(bigArr);
console.log(quickSort(bigArr));