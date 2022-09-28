/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let answ = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        answ.push('FizzBuzz');
      } else {
        answ.push('Fizz');
      }
    } else if (i % 5 === 0) {
      answ.push('Buzz');
    } else {
      answ.push(i.toString());
    };
  }
  return answ;
};

fizzBuzz = function (n) {
  let answ = [];
  for (let i = 15; i <= n; i = i + 15) {
    answ[i - 1] = 'FizzBuzz';
  };
  for (let i = 5; i <= n; i = i + 5) {
    if (!answ[i - 1]) answ[i - 1] = 'Buzz';
  };
  for (let i = 3; i <= n; i = i + 3) {
    if (!answ[i - 1]) answ[i - 1] = 'Fizz';
  };
  for (let i = 1; i <= n; i++) {
    if (!answ[i - 1]) answ[i - 1] = i.toString();
  };
  return answ;
};


let ans = fizzBuzz(5);
console.log(ans);