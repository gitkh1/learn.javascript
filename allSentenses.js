

// Внучку –> ['внучка', 'внучок', ...]
// Машу –> ['маша', 'махать', 'машу', ...]
// ...

function allSentences(words) {
  let count = 0;
  let isEnd = false;
  return () => {
    function counter(k, ...args) {
      const maxAr = args;
      let i = k;
      let newAr = [];
      newAr.unshift(i % maxAr[maxAr.length - 1]);
      i -= newAr[0];
      for (let j = maxAr.length - 2; j >= 0; j--) {
        newAr.unshift(Math.trunc(i / maxAr[j + 1] || 0));
        i -= newAr[j] * newAr[j + 1];
      };
      return newAr;
    }
    function checkEnd(arr1, arr2) {
      let result = true;
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] + 1 !== arr2[i].length) result = false;
      };
      return result;
    }

    if (isEnd) return undefined;
    const maxValues = words.map(word => word.length);
    let indexes = counter(count, ...maxValues);
    let result = words.map((word, index) => word[indexes[index]]).join(' ');
    isEnd = checkEnd(indexes, words);
    console.log(indexes);
    count++;
    return result;
  }
}

const nextSentence = allSentences([
  ['внучка', 'внучок'],
  ['маша', 'махать', 'машу']
  // ... тут могут быть другие слова с любым количеством своих форм
]);

console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
nextSentence(); // 'внучка махать'
// ... и т. д. все комбинации
nextSentence(); // undefined