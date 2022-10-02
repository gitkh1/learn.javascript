/* {
  value: 5, // значение ноды
  children: [] // массив детей в таком же формате
}  */
function DFS(node, value) {
  if (node.value === value) {
    return node;
  } else if ((Array.isArray(node.children)) && (node.children.length > 0)) {
    for (let i = 0; i < node.children.length; i++) {
      const result = DFS(node.children[i], value);
      if (result !== undefined) return result;
    }
  } else {
    return undefined;
  }
}