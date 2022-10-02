class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Ставит элемент в очередь.
  // Возвращает новый размер очереди.
  enqueue(value) {
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

  // Убирает элемент из очереди.
  // Если очередь пустая, кидает ошибку.
  // Возвращает удалённый элемент.
  dequeue() {
    if (this.size > 1) {
      const node = this.head;
      this.head = node.next;
      this.head.prev = null;
      this.size -= 1;
      return node;
    } else if (this.size === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return node;
    } else {
      throw new Error('Очередь пустая');
    }
  }

  // Возвращает элемент в начале очереди.
  peek() {
    return this.head;
  }

  // Если очередь пустая, возвращает true. В противном случае –– false.
  isEmpty() {
    return this.size === 0;
  }
}