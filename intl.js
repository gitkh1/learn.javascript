let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();

animals.sort((a, b) => collator.compare(a, b));

console.log(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК

let date = new Date(2014, 4, 31, 12, 30, 0);

let formatter = new Intl.DateTimeFormat('ru', {})

console.log(formatter.format(date));
