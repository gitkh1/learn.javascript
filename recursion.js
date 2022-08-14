function sumTo(n) {
  if (n === 1) {
    return 1;
  } else {
    return sumTo(n - 1) + n;
  };
}

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function fib(n) {
  let res = [1, 1,];
  for (let k = 2; k <= n; k++) {
    res.push(res[k - 1] + res[k - 2]);
  };
  return res[n - 1];
}

//console.log(fib(77));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  if (list.next !== null) {
    printList(list.next);
  };
  console.log(list.value);
}

printList(list);