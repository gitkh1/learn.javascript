function topSalary(salaries) {
  if (Object.entries(salaries).length == 0) return null;
  let top = {
    name: '',
    salary: 0,
  };
  console.log(top);
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > top.salary) {
      top = {name: name, salary: salary};
      console.log(top);
    };
  };
  return top.name;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));