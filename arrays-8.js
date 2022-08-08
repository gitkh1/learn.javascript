let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}

let sorted = copySorted(arr);

console.log(sorted);