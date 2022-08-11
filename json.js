/* let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

console.log( JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}, 2)); */
/* 
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

console.log( JSON.stringify(room) ); // 23

console.log( JSON.stringify(meetup) ); */
/*
  {
    "title":"Conference",
    "room": 23
  }
*/
/* 
let user = {
  name: "Василий Иванович",
  age: 35
};

console.log(JSON.stringify(user));
console.log(JSON.parse(JSON.stringify(user))); */

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
  console.log(key, ' ', value);
  if ((key != '') && (value == meetup)) { return undefined; } else { return value; };
}));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/