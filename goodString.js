function goodString(s) {
  function isGood(a, b) {
    return ((a !== b) && (a.toLowerCase() === b.toLowerCase()));
  }
  function makeGood(str) {
    const length = str.length;
    if (length < 2) {
      return str;
    }
    let i = 0;
    let res = '';
    while (i < length - 1) {
      if (isGood(str[i], str[i + 1])) {
        i = i + 2;
      } else {
        res += str[i];
        i++;
      }
    }
    if ((i === length - 1)) {
      res += str[i];
    }
    return res;
  }
  let curString = s;
  let nextString = makeGood(curString);
  while (nextString.length !== curString.length) {
    curString = nextString;
    nextString = makeGood(curString);
  }
  return nextString;
}

console.log(goodString('AbBa'));