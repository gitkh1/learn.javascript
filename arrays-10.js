let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

function usersToNames(arrOfObj) {
  return arrOfObj.slice().map(item => item.name);
}

let names = usersToNames(users);
console.log(names);