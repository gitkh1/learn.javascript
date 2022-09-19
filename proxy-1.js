let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, reciever) {
      if (prop in target) {
        return Reflect.get(target, prop, reciever);
      } else {
        // throw new ReferenceError('Error!!!');
      };
    }
  });
}

user = wrap(user);

console.log(user.name); // John


let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, reciever) {/////
    if (prop in target) {
      return Reflect.get(target, prop, reciever);
    } else {
      const newProp = Number(prop) + Number(target.length);
      return Reflect.get(target, newProp, reciever);
    }
  }
});

console.log(array[1]); // 3
console.log(array[-1]); // 3
console.log(array[-2]); // 3


function makeObservable(target) {
  target.handlerLocal = null;
  target.observe = handler => target.handlerLocal = handler;
  return new Proxy(target, {
    set(target, prop, newValue) {
      Reflect.set(target, prop, newValue);
      target.handlerLocal(prop, newValue);
    },
  });

}

let newUser = {};
newUser = makeObservable(user);

newUser.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

newUser.name = "John"; // выводит: SET name=John
