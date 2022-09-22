const backpack = [
  {
    name: 'water',
    weight: 3,
    price: 10,
  },
  {
    name: 'book',
    weight: 1,
    price: 3,
  },
  {
    name: 'food',
    weight: 2,
    price: 9,
  },
  {
    name: 'jacket',
    weight: 2,
    price: 5,
  },
  {
    name: 'camera',
    weight: 1,
    price: 6,
  },
];

const maxWeight = 6;

let table = [
  [],
  [],
  [],
  [],
  [],
];

for (let weight = 0; weight <= maxWeight; weight++) {
  const element = backpack[0];
  if (element['weight'] <= weight) {
    table[0][weight] = {
      price: element['price'],
      elements: [element['name']],
    };
  } else {
    table[0][weight] = {
      price: 0,
      elements: [],
    }
  }
};

for (let row = 1; row < backpack.length; row++) {
  const element = backpack[row];

  for (let weight = 0; weight <= maxWeight; weight++) {
    let elemA = {
      price: table[row-1][weight]['price'],
      elements: table[row-1][weight]['elements'],
    };

    let elemB = {
      price: element['price'],
      elements: [element['name']],
    };

    if (weight > element['weight']) {
      const prevElem = table[row-1][weight-element['weight']];
      console.log(prevElem);
      elemB['price'] += prevElem['price'];
      elemB['elements'].push(...prevElem['elements']);
    };

    if (elemA['price'] >= elemB['price']) {
      table[row][weight] = {
        price: elemA['price'],
        elements: elemA['elements'],
      };
    } else {
      table[row][weight] = {
        price: elemB['price'],
        elements: elemB['elements'],
      };
    }
  };
};

console.log(table[backpack.length - 1]);
