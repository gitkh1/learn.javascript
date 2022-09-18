const graph = {
  me: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
}

let searched = [];
let queue = [];
for (const node in graph) {
  queue.push(node);
}

function findNode(node) {
  while (queue.length > 0) {
    const element = queue.shift();
    if (!searched.includes(element)) {
      searched.push(element);
      if (element == node) {
        console.log(element);
        return element;
      } else {
        queue.push(...graph[element]);
        console.log('new queue');
        console.log(queue);
      }
    }
  }
}

findNode('jonny');