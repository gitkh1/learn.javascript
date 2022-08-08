function Calculator() {
  this.calculate = function(str) {
    str = str.split(' ');
    return this[str[1]](str);
  };

  this['+'] = function(str) {
    return +str[0] + +str[2];
  };

  this['-'] = function(str) {
    return +str[0] - str[2];
  };

  this.addMethod = function(name, func, str) {
    this[name] = function(str) {
      return func(str[0],str[2]);
    };
  };
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc);


let result = powerCalc.calculate("2 / 3");
console.log(result);