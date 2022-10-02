class Graph {
  constructor() {
    this.data = {};
  }

  // Добавляет вершину.
  // Если вершина уже существует, ничего не делает.
  addVertex(vertex) {
    if (this.data[vertex]) return;
    this.data[vertex] = [];
  }

  // Удаляет вершину.
  removeVertex(vertex) {
    if ((!vertex) || (!this.data[vertex])) return;
    this.data[vertex].forEach(vertex2 => {
      this.removeEdge(vertex, vertex2);
    });
    delete this.data[vertex];
  }

  // Добавляет грань между двумя вершинами.
  addEdge(vertex1, vertex2) {
    if ((vertex1 === vertex2) || (!vertex1) || (!vertex2)) return;
    if (this.isExistEdge(vertex1, vertex2)) return;
    this.data[vertex1].push(vertex2);
    this.data[vertex2].push(vertex1);
  }

  // Удаляет грань между двумя вершинами.
  removeEdge(vertex1, vertex2) {
    if ((vertex1 === vertex2) || (!vertex1) || (!vertex2)) return;
    if (!this.isExistEdge(vertex1, vertex2)) return;
    this.data[vertex1] = this.data[vertex1].filter(el => el !== vertex2);
    this.data[vertex2] = this.data[vertex2].filter(el => el !== vertex1);
  }

  isExistEdge(vertex1, vertex2) {
    return ((this.data[vertex1]) && (this.data[vertex1].includes(vertex2))
    && (this.data[vertex2]) && (this.data[vertex2].includes(vertex1)));
  }
}

// Пример использованиия
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('D', 'B');
graph.addEdge('A', 'C');
console.log(graph.data);

graph.removeVertex('M');

console.log(graph.data);
/*
{
A: ['B', 'C'],
B: ['A'],
C: ['A'],
D: []
}
*/