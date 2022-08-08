function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(array, length) {
  array = array.map(function (item, index) {
    let temp = array[index];
    let rnd = getRandomInt(length);
    array[index] = array[rnd];
    array[rnd] = temp;
  });
}

// подсчёт вероятности для всех возможных вариантов
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array, array.length);
  count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}