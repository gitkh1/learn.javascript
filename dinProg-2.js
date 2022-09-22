const word1 = 'blue';
const word2 = 'clues';

function createArray(word) {
  let array = [];
  for (let i = 0; i < word.length; i++) {
    array[i] = [];
  };
  return array;
}

let table = createArray(word1);

function fillArray(word1, word2, array) {
  let max = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === word2[0]) {
      array[i][0] = 1;
      max = 1;
    } else {
      array[i][0] = 0;
    }
  };
  
  for (let j = 0; j < word2.length; j++) {
    if (word2[j] === word1[0]) {
      array[0][j] = 1;
      max = 1;
    } else {
      array[0][j] = 0;
    }
  };
  
  for (let i = 1; i < word1.length; i++) {
    for (let j = 1; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        array[i][j] = (array[i-1][j-1] + 1);
        if (array[i][j] > max) {max = array[i][j]};
      } else {
        array[i][j] = Math.max(array[i][j-1], array[i-1][j]);
      };
    };
  };
  console.log(max);
  return array;
}

table = fillArray(word1, word2, table);
console.log(table);