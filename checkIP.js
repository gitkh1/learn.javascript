function checkIPv4(str) {
  const groups = str.split('.');
  if (groups.length !== 4) {
    return false;
  }
  for (let i = 0; i < 4; i++) {
    const substr = groups[i];
    if (!isFinite(substr)) {
      return false;
    }
    if (substr.length !== substr.trim().length) {
      return false;
    }
    if (substr.trim().length === 0) {
      return false;
    }
    if ((substr[0] === '0') && (substr.length > 1)) {
      return false;
    }

    const number = Number(substr);
    if (number !== Math.round(number)) {
      return false;
    }
    if ((number >= 256) || (number < 0)) {
      return false;
    }
  }
  return true;
}

function checkIPv6(str) {
  const groups = str.split(':');
  if (groups.length !== 8) {
    return false;
  }
  for (let i = 0; i < 8; i++) {
    const substr = groups[i];
    const length = substr.length;
    if (length !== substr.trim().length) {
      return false;
    }
    if (substr.trim().length === 0) {
      return false;
    }
    if (length > 4) {
      return false;
    }
    const digits = '0123456789abcdefABCDEF';
    for (let j = 0; j < length; j++) {
      const digit = substr[j];
      if (!digits.includes(digit)) {
        return false;
      }
    }
  }
  return true;
}

const n = '2001:0db8:85a3:0:03012:8a2e:0370:7334';

console.log(checkIPv6(n));