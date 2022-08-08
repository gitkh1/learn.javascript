const myStr = 'list-style-image';

function camelize(str) {
  str = str.split('-');

  str = str.map((item,index) => {
    if (index != 0) {
      return item[0].toUpperCase() + item.slice(1);
    } else {
      return item;
    }
  });

  str = str.join('');
  
  return str;
}

camelize(myStr);