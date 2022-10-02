function huffman(str) {
  // высчитать частоту повторения каждого символа
  const rates = getRates(str);
  // создать очередь с приоритетом, наполненную нодами для каждого символа
  const queue = buildQueue(rates);

  while (queue.size > 1) {
    // взять два элемента из очереди
    const [rightNode, rightPriority] = queue.pop();
    const [leftNode, leftPriority] = queue.pop();

    // создать новый узел дерева, посчитать его приоритет и положить в очередь
    const newNode = { left: leftNode, right: rightNode };
    const newPriority = rightPriority + leftPriority;
    queue.push(newNode, newPriority);
  }

  // последняя оставшаяся нода будет корнем дерева
  const [rootNode] = queue.pop();
  // строим хеш-таблицу с кодом для каждого символа
  const codes = getCodes(rootNode);
  // кодируем строку
  const encodedStr = getEncodedStr(str, codes);

  // возвращаем результат
  return { codes, encodedStr };
}

// Считает частоту повторения каждого символа.
// Возвращает объект в формате { [char]: count }.
function getRates(str) {
  const rates = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!rates.hasOwnProperty(char)) {
      rates[char] = 1;
    } else {
      rates[char] += 1;
    }
  }
  return rates;
}

// Создаёт очередь с приоритетом, наполненную нодами для каждого символа из ключей объекта rates.
// Формат ноды — { value: символ, left: null, right: null }.
function buildQueue(rates) {
  const queue = new PirorityQueue();
  Object.keys(rates).forEach(key => {
    queue.push({ value: key, left: null, right: null }, rates[key]);
  })
  return queue;
}

// Строим хеш-таблицу с кодом для каждого символа, рекурсивно обходя дерево.
// Возвращает объект в формате { [char]: code }, где code — строка из нулей и единиц.
function getCodes(node, codes = {}, code = '') {
  // если нет детей, это лист, записываем значение в таблицу.
  if (!node.left && !node.right) {
    codes[node.value] = code;
  } else {
    // обходим левую и правую части дерева,
    // добавляя к code неоходимый бит в зависимости от направления.
    getCodes(node.left, codes, code + '1');
    getCodes(node.right, codes, code + '0');
  }
  return codes;
}
// Кодирует строку по таблице кодов и возвращает результат.
function getEncodedStr(str, codes) {
  let encodedStr = '';
  for (let i = 0; i < str.length; i++) {
    encodedStr += codes[str[i]];
  };
  return encodedStr;
}

// Наивная реализация очереди с приоритетом для экономии времени.
class PirorityQueue {
  constructor() {
    this.nodes = [];
    this.priority = new Map();
  }

  push(node, priority) {
    if (!this.priority.has(node)) {
      this.nodes.push(node);
    };
    this.priority.set(node, priority);
    this.nodes.sort((a, b) => this.priority.get(b) - this.priority.get(a));
  }

  pop() {
    if (!this.nodes.length) {
      return undefined;
    };
    const node = this.nodes.pop();
    const priority = this.priority.get(node);
    return [node, priority];
  }

  get size() {
    return this.nodes.length;
  }
}

console.log(huffman('привет'));