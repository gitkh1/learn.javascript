function aclean(arr) {
  let superSet = new Map();
  arr.forEach(function(item) {
    let str = item.toLowerCase().split('').sort().join('');
    if (!superSet.has(str)) {
      superSet.set(str, item);
    };
  });

  return Array.from(superSet.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));