function unique(arr) {
  let uniq = [];
  arr.forEach( (item) => {
    if (uniq.includes(item) === false) {
      uniq.push(item);
    };
  });
  return uniq;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O