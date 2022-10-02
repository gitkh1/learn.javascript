class BinaryHeap {
  constructor() {
    // Массив для хранения данных.
    this.data = [];
  }

  // Добавление элемента.
  insert(node) {
    this.data.push(node);
    if (this.data.length > 1) this.bubbleUp();
  }

  // Удаление корневого элемента.
  // Возвращает корневой элемент, если он есть, в противном случае –– undefined.
  extract() {
    if (this.data.length === 0) {
      return undefined;
    } else if (this.data.length < 3) {
      const element = this.data.shift();
      return element;
    } else {
      const element = this.data.shift();
      const newElement = this.data.pop();
      this.data.unshift(newElement);
      this.sinkDown.call(this);
      return element;
    }
  }

  sinkDown() {
    let elementIndex = 0;
    let child1 = 2 * elementIndex + 1;
    let child2 = 2 * elementIndex + 2;
    if ((child1 >= this.data.length) || (child2 >= this.data.length)) return;
    while ((this.data[elementIndex] < this.data[child1]) || (this.data[elementIndex] < this.data[child2])) {
      let maxIndex;
      if (this.data[child1] > this.data[child2]) {
        maxIndex = child1;
      } else {
        maxIndex = child2;
      };
      const temp = this.data[elementIndex];
      this.data[elementIndex] = this.data[maxIndex];
      this.data[maxIndex] = temp;
      elementIndex = maxIndex;
      child1 = 2 * elementIndex + 1;
      child2 = 2 * elementIndex + 2;
    };
  }

  bubbleUp() {
    let elementIndex = this.data.length - 1;
    let parentIndex = Math.floor((elementIndex - 1) / 2);
    if ((parentIndex < 0) || (parentIndex >= this.data.length)) return;
    while (this.data[parentIndex] < this.data[elementIndex]) {
      const temp = this.data[parentIndex];
      this.data[parentIndex] = this.data[elementIndex];
      this.data[elementIndex] = temp;
      elementIndex = parentIndex;
      parentIndex = Math.floor((elementIndex - 1) / 2);
      if ((parentIndex < 0) || (parentIndex >= this.data.length)) return;
    }
  }
}

let ar = new BinaryHeap();
ar.insert(5);
ar.insert(7);
ar.insert(23);
ar.insert(4);
console.log(ar);
ar.extract();
console.log(ar);
console.log(ar.extract());
console.log(ar);
console.log(ar.extract());
console.log(ar.extract());


