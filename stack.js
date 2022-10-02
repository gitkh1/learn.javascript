class Stack {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Кладёт элемент на стек.
  // Возвращает новый размер стека.
  push(value) {
    const node = { value, next: null, prev: null };
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    };
    this.size += 1;
    return this.size;
  }

  // Убирает элемент со стека.
  // Если стек пустой, кидает ошибку.
  // Возвращает удалённый элемент.
  pop() {
    if (this.size > 1) {
      const node = this.tail;
      const preLastNode = node.prev;
      preLastNode.next = null;
      this.tail = preLastNode;
      this.size -= 1;
      return node;
    } else if (this.size === 1) {
      const node = this.tail;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return node;
    } else {
      throw new Error('Стек пустой');
    }
  }

  // Возвращает верхний элемент стека без его удаления.
  peek() {
    return this.tail;
  }

  // Если стек пуст, возвращает true. В противном случае –– false.
  isEmpty() {
    return this.size === 0;
  }
}