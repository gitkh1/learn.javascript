function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log('hi'));

Promise.all([
  new Promise(resolve => setTimeout(resolve, 1000, 1)),
  new Promise(resolve => setTimeout(resolve, 2000, 2)),
  new Promise(resolve => setTimeout(resolve, 5000, 3)),
]).then(console.log);

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

let requests = urls.map(url => fetch(url));

Promise.all(requests)
  .then(results => results.forEach(result => console.log(result)));