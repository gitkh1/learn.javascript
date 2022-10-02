/* {
  value: 5, // значение ноды
  children: [] // массив детей в таком же формате
} 
 */

function BFS(root, value) {
  const queue = [root];
  let node;
  while (queue.length > 0) {
    node = queue.shift();
    if (node.value === value) break;
    node.children.forEach(newNode => queue.push(newNode));
  };
  if (node.value === value) {
    return node;
  } else {
    return undefined;
  }
}