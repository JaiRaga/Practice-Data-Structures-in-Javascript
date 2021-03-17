class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size)
	}

	_hash(key) {
		let total = 0,
			weird_prime = 31,
			char = '',
			value = 0

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			char = key[i]
			value = char.charCodeAt(0) - 96
			total = (total * weird_prime + value) % this.keyMap.length
		}
		return total
	}

	set(key, value) {
		let hashIdx = this._hash(key),
			newArray = [key, value]

		if (!this.keyMap[hashIdx]) {
			this.keyMap[hashIdx] = []
		}
		console.log(hashIdx)
		this.keyMap[hashIdx].push(newArray)
		return this
	}

	get(key) {
		let hashIdx = this._hash(key),
			newArray = this.keyMap[hashIdx]

		if (!newArray) return false

		for (let arr of newArray) {
			if (arr[0] === key) {
				return arr
			}
		}
	}
}

let ht = new HashTable()
console.log(ht)
console.log(ht._hash('red'))
console.log(ht.set('red', 01))
console.log(ht.set('blue', 05))
console.log(ht.get('red'))
console.log(ht.get('blue'))
console.log(ht.get(''))
console.log(ht._hash('red'))
