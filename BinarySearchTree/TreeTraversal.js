class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BST {
	constructor() {
		this.root = null
	}

	insert(value) {
		let node = new Node(value)

		if (!this.root) {
			this.root = node
			return this
		}

		let current = this.root
		while (true) {
			if (current.value === node.value) {
				return this
			} else if (current.value > node.value) {
				if (!current.left) {
					current.left = node
					return this
				} else {
					current = current.left
				}
			} else if (current.value < node.value) {
				if (!current.right) {
					current.right = node
					return this
				} else {
					current = current.right
				}
			}
		}
	}

	find(value) {
		if (!this.root) return false

		let current = this.root
		while (true) {
			if (current.value === value) return true
			else if (current.value > value) {
				if (current.left) current = current.left
				else return false
			} else if (current.value < value) {
				if (current.right) current = current.right
				else return false
			}
		}
	}

	breadthFirstSearch() {
		let queue = [],
			done = [],
			current = null

		queue.push(this.root)
		while (queue.length) {
			current = queue.shift()
			done.push(current.value)

			if (current.left) queue.push(current.left)
			if (current.right) queue.push(current.right)
		}

		return done
	}

	dfsPreOrder() {
		let visited = [],
			current = this.root

		const traverse = (node) => {
			visited.push(node.value)

			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
		}

		traverse(current)
		return visited
	}

	dfsPostOrder() {
		let visited = [],
			current = this.root

		const traverse = (node) => {
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)

			visited.push(node.value)
		}

		traverse(current)
		return visited
	}

	dfsInOrder() {
		let visited = [],
			current = this.root

		const traverse = (node) => {
			if (node.left) traverse(node.left)
			visited.push(node.value)
			if (node.right) traverse(node.right)
		}

		traverse(current)
		return visited
	}
}

// Create a new instance of BST class
const tree = new BST()

// Insert a node
console.log(tree.insert(10))
console.log(tree.insert(5))
console.log(tree.insert(15))
console.log(tree.insert(7))
console.log(tree.insert(3))
console.log(tree.insert(12))
console.log(tree.insert(18))

// BFS
console.log(tree.breadthFirstSearch())

// DFS PreOrder
console.log(tree.dfsPreOrder())

// DFS PostOrder
console.log(tree.dfsPostOrder())

// DFS InOrder
console.log(tree.dfsInOrder())
