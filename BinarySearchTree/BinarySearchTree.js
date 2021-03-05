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

// Find a node
console.log(tree.find(1))
console.log(tree.find(10))
console.log(tree.find(12))
console.log(tree.find(3))
console.log(tree.find(100))
