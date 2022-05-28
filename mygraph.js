// DATA
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

const adjacencyList = new Map();

function addNode(airport) {
  adjacencyList.set(airport, []);
}

// function addEdge(origin, destination) {
//   adjacencyList.get(origin).push(destination);
//   adjacencyList.get(destination).push(origin);
// }

airports.forEach((airport) => {
  addNode(airport);
});

// routes.forEach((routes) => {
//   addEdge(...routes);
// });

routes.forEach((routes) => {
  function addEdges(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
  }

  addEdges(...routes);
});

function bfs(start) {
  const visited = new Set();

  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift();

    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination == "BKK") {
        console.log("Airport connects to Bankok");
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }

  return "Airport does not connect";
}

function dfs(start, visited = new Set()) {
  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination == "BKK") {
      console.log("PHX connects bankock");
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

console.log(dfs("PHX"));
