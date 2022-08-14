function makeCounter() {
  let count = 0;
  return function () {
    console.log(count++);
  }
};

let counter = makeCounter();

//counter();
//counter();

/* (function() { // <-- Error: Unexpected token (

  let message = "Hello";

  alert(message); // Hello

})(); */

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };

  this.down = function () {
    return --count;
  };

}

counter = new Counter();

/* console.log(counter.up());
console.log(counter.up());
console.log(counter.up());
console.log(counter.down());
 */

function sum(x) {
  return function (y) {
    return x + y;
  }
}

function inBetween(a, b) {
  return function (item) {
    if ((item >= a) && (item <= b)) {
      return true;
    } else {
      return false;
    }
  }
}

function inArray(arr) {
  return function (item) {
    if (arr.includes(item)) { return true; };
    return false;
  }
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

/* users.sort(byField('name'));
console.log(users);
users.sort(byField('age'));
 */

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let k = i;
    let shooter = function (key = k) { // shooter function
      console.log(key); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

/* army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
 */
function sum(a) {
  let res = a;

  function func(x) {
    res += x;
    return func;
  }

  func.toString = function () {
    return res;
  };

  return func;
}

console.log(sum(4)(5) == 9);

globalThis.value = "test";

function getFunc() {

  let func = new Function('console.log(value)');

  return func;
}

getFunc()();