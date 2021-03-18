class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
		return this
	}

	addEdge(v1, v2) {
		if (!Object.keys(this.adjacencyList).includes(v1)) {
			this.adjacencyList[v1] = []
		}
		this.adjacencyList[v1].push(v2)

		if (!Object.keys(this.adjacencyList).includes(v2)) {
			this.adjacencyList[v2] = []
		}
		this.adjacencyList[v2].push(v1)

		return this
	}

	removeEdge(v1, v2) {
		if (!Object.keys(this.adjacencyList).includes(v1)) return false

		let ind1 = this.adjacencyList[v1].indexOf(v2)
		this.adjacencyList[v1].splice(ind1, 1)

		let ind2 = this.adjacencyList[v2].indexOf(v1)
		this.adjacencyList[v2].splice(ind2, 1)

		return this
	}

	removeVertex(vertex) {
		if (!Object.keys(this.adjacencyList).includes(vertex)) return false
		let adjacentVertex = ''

		console.log(this.adjacencyList[vertex].length)
		while (this.adjacencyList[vertex].length) {
			adjacentVertex = this.adjacencyList[vertex].pop()
			this.adjacencyList[adjacentVertex] = this.adjacencyList[
				adjacentVertex
			].filter((v) => v !== vertex)
		}

		delete this.adjacencyList[vertex]
		return this
	}
}

const g = new Graph()
console.log(g)
console.log(g.addVertex('Tokyo'))
console.log(g.addVertex('Tokyo'))

console.log(g.addEdge('Tokyo', 'Houston'))
console.log(g.addEdge('Tokyo', 'Japan'))
console.log(g.addEdge('Tokyo', 'Housto'))
console.log(g.addEdge('Tokyo', 'Houst'))
console.log(g.addEdge('Tokyo', 'Hous'))
console.log(g.addEdge('Chennai', 'New York'))

console.log(g.removeEdge('Tokyo', 'Houston'))
console.log(g.removeEdge('tokyo', 'Houston'))

console.log(g.removeVertex('Tokyo'))
console.log(g.removeVertex('FFGFG'))

console.log(g.adjacencyList.Chennai)
