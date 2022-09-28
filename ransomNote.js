/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let setOfLetters = {};
  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];
    if (!setOfLetters[char]) setOfLetters[char] = 0;
    setOfLetters[char]++;
  };
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (!setOfLetters[char]) return false;
    setOfLetters[char]--;
  };
  return true;
};

let answ = canConstruct('abb', 'ba');
console.log(answ);