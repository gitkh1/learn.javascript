function printNumbers(from, to) {
  let number = from;  
  let delay = 1000;  

  let timer = setTimeout(function printerByTimeout() {
    console.log(number);
    number++;
    
    timer = setTimeout(printerByTimeout, delay);
    if (number > to) clearTimeout(timer);
  }, delay);
}

function printNumbersByInterval(from, to) {
  let number = from;  
  let delay = 1000;

  let timer = setInterval(function printerByInterval() {
    console.log(number);
    number++;
    
    if (number > to) clearInterval(timer);
  }, delay);

}

// printNumbers(1,10);
printNumbersByInterval(1,5)