function work(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

function spy(func) {
  function wrap(a,b) {
    wrap.calls.push([a,b]);    
    return func.apply(this, [a,b]);
  }
  wrap.calls = [];
  return wrap;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

// console.log(work);


function f(x) {
  console.log(x);
}

function delay(func, time) {
  return function(...args) {
    setTimeout(() => {
      func.apply(this, args);
    }, time);
  }
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

/* f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
 */

function debounceFunc(x) {
  console.log(x);
} 

debounceFunc = debounce(debounceFunc, 1000);

function debounce(f, ms) {
  function wrap(x) {
    let nowTime = new Date();
    if (nowTime - wrap.lastCall - ms > 0) {
      wrap.lastCall = nowTime;
      return f.call(this, x);
    };
  }
  wrap.lastCall = -ms;
  return wrap;
}

/* debounceFunc(1); // выполняется немедленно
debounceFunc(2); // проигнорирован

setTimeout( () => debounceFunc(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => debounceFunc(4), 1100); // выполняется
setTimeout( () => debounceFunc(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
 */

function throttle(f, ms) {
  let readyToRun = true;
  let funcCaller;
  let lastTimeCall;

  function wrapper(x) {

    if (readyToRun) {
      f.call(this, x);
      readyToRun = false;
      lastTimeCall = Date.now();
      setTimeout( () => {
        readyToRun = true;
      }, ms);
      return;
    } else {
      clearTimeout(funcCaller);
      const delay = ms - Date.now() + lastTimeCall;
      funcCaller = setTimeout(wrapper, delay, x);
      return;
    };
  }

  return wrapper;
}


let throttleFunc = throttle(debounceFunc, 1000);

throttleFunc(1);