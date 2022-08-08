let styles =['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');

console.log(styles);

function indexOfCenter(arr) {
  return (arr.length % 2 == 1) ? ((arr.length - 1) / 2) : (arr.length / 2);
}

function changeCenter(arr, newitem) {
  idx = indexOfCenter(arr);

  arr[idx] = newitem;
  
  return arr;
}

styles = changeCenter(styles, 'Классика');

console.log(styles);

console.log(styles.shift());

console.log(styles);

styles.unshift('Рэп','Регги');

console.log(styles);