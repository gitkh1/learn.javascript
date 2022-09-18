const graph = {
  START: {
    A: 6,
    B: 2,
  },
  A: {
    END: 1,
  },
  B: {
    A: 3,
    END: 5.
  },
  END: {},
}

let costs = {
  A: 6,
  B: 2,
  END: Infinity,
}

let parents = {
  A: 'START',
  B: 'START',
  END: null,
}

function dijkstra(graph, costs, parents) {
  let processed = [];

  function findLowestCostNode(costs) {
    let cost = Infinity;
    let result = null;
    for (const key in costs) {
      if ((costs[key] < cost) && (!processed.includes(key))) {
        cost = costs[key];
        result = key;
      }
    };
    return result;
  }

  node = findLowestCostNode(costs);
  while (node) {
    let cost = costs[node];
    let neighbors = graph[node];
    for (const key in neighbors) {
      let newCost = cost + neighbors[key];
      if (costs[key] > newCost) {
        costs[key] = newCost;
        parents[key] = node;
      }
    }
    processed.push(node);
    node = findLowestCostNode(costs);
  }  
  getAnswer(parents);
}

function getAnswer(parents) {
  let path = [];
  path.push('END');
  let element = path[path.length - 1];
  while (parents[element]) {
    path.push(parents[element]);
    element = path[path.length - 1];
  }
  
  for (let index = path.length - 1; index >= 0; index--) {
    console.log(`${path.length - index}) ${path[index]}`);    
  }
}

const graph2 = {
  START: {
    A: 5,
    B: 2,
  },
  A: {
    C: 4,
    D: 2,
  },
  B: {
    A: 8,
    D: 7,
  },
  C: {
    D: 6,
    END: 3,
  },
  D: {
    END: 1,
  },
  END: {},
}

let costs2 = {
  A: 5,
  B: 2,
  C: Infinity,
  D: Infinity,
  END: Infinity,
}

let parents2 = {
  A: 'START',
  B: 'START',
  C: null,
  D: null,
  END: null,
}


const graph3 = {
  START: {
    A: 10,
  },
  A: {
    B: 20,
  },
  B: {
    END: 30,
    C: 1,
  },
  C: {
    A: 1,
  },
  END: {},
}

let costs3 = {
  A: 10,
  B: Infinity,
  C: Infinity,
  END: Infinity,
}

let parents3 = {
  A: 'START',
  B: null,
  C: null,
  END: null,
}

dijkstra(graph2, costs2, parents2);
dijkstra(graph3, costs3, parents3);
