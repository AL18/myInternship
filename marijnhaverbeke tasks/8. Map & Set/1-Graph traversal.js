// Map & Set.1:
// Graph traversal
// The code for this exercise generates a random graph—an array of nodes,
//     each of which has a value and an array of edges to other nodes.
//
//     Your task is to implement the function connectedValue which,
//     starting at a node, traces through the graph by following edges,
//     summing up the total value of all nodes connected to the start node
//     (including the start node itself).
//
// The recursive exploring is the tricky part. You can use either a worklist
// (an array of nodes that have to be explored) or a recursive function.
// Use a Set object to track the nodes that you've already visited ' +
// '(to avoid going around in circles endlessly when the graph contains a cycle).
//
// The Set methods you'll need for that are .add(value) and .has(value).



// Generate a random graph
const graph = []
for (let i = 0; i < 50; i++)
    graph.push({value: Math.random(), edges: []})
for (let i = 0; i < 100; i++) {
    let from = graph[Math.floor(Math.random() * graph.length)]
    let to   = graph[Math.floor(Math.random() * graph.length)]
    if (from.edges.indexOf(to) != -1) continue
    from.edges.push(to)
}

const Set = {

    add(value) {

    },

    has(value) {

    }
}

function connectedValue(node) {

}
console.log(graph[0].edges);

console.log(connectedValue(graph[0]))
console.log(connectedValue(graph[24]))
console.log(connectedValue(graph[49]))