function generateSequencesOld(n) {
  if (n === 0) {
    return [];
  }
  if (n % 2 === 1) {
    return [];
  }
  let sequences = [
    [''],
  ];
  let total = [
    [''],
  ];
  function makeSeq(symbols) {
    if (sequences[symbols]) {
      return sequences[symbols];
    }
    const lastSequences = makeSeq(symbols - 2);
    let subRes = [];
    lastSequences.forEach(seq => subRes.push(`[${seq}]`, `[]${seq}`, `${seq}[]`));
    const res = [... new Set(subRes)];
    sequences[symbols] = res;
    return res;
  }
  function makeFullSeq(symbols) {
    if (total[symbols]) {
      return total[symbols];
    }
    const lastTotalLength = symbols - 2;
    const lastTotal = makeFullSeq(lastTotalLength);
    const subRes = [...makeSeq(symbols)];
    lastTotal.forEach(seq => subRes.push(`(${seq})`, `()${seq}`, `${seq}()`, `[]${seq}`, `${seq}[]`));
    for (let i = 0; i <= lastTotalLength - 2; i = i + 2) {
      const lastTotalForLeft = makeFullSeq(i);
      const lastTotalForRight = makeFullSeq(lastTotalLength - 2 - i);

    }
    const res = [...new Set(subRes)];
    total[symbols] = res;
    return res;
  }
  function compareFn(b, a) {
    const comp = '([)]';
    const length = a.length;
    for (let i = 0; i < length; i++) {
      if (comp.indexOf(b[i]) - comp.indexOf(a[i]) > 0) {
        return 1;
      } else if (comp.indexOf(b[i]) - comp.indexOf(a[i]) < 0) {
        return -1;
      }
    }
    return 0;
  }
  const ans = makeFullSeq(n).sort(compareFn);
  return ans;
}

function generateSequences(n) {
  if (n === 0) {
    return [];
  }
  if (n % 2 === 1) {
    return [];
  }
  let sequences = [];

  function generator(n, squareStack, opened, closed, ans) {
    if (opened + closed === n) {
      sequences.push(ans);
    }
    if (opened < n / 2) {
      if (squareStack === 0) {
        generator(n, squareStack, opened + 1, closed, ans + '(');
      }
      generator(n, squareStack + 1, opened + 1, closed, ans + '[');
    }
    if (opened > closed) {
      if (squareStack === 0) {
        generator(n, squareStack, opened, closed + 1, ans + ')');
      }
      if (squareStack > 0) {
        generator(n, squareStack - 1, opened, closed + 1, ans + ']');
      }
    }
  }

  generator(n, 0, 0, 0, '');

  return sequences;
}

function compareFn(b, a) {
  const comp = '([)]';
  const length = a.length;
  for (let i = 0; i < length; i++) {
    if (comp.indexOf(b[i]) - comp.indexOf(a[i]) > 0) {
      return 1;
    } else if (comp.indexOf(b[i]) - comp.indexOf(a[i]) < 0) {
      return -1;
    }
  }
  return 0;
}


let answ = 0;
const arr = generateSequences(3);

console.log(arr);