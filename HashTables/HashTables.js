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

	keys() {
		let arr = []

		this.keyMap.forEach((val) => {
			if (val.length) {
				for (let i of val) {
					if (!arr.includes(i[0])) {
						arr.push(i[0])
					}
				}
			}
		})

		return arr.length === 0 ? 'No keys found' : arr
	}

	values() {
		let arr = []

		this.keyMap.forEach((val) => {
			if (val.length) {
				for (let i of val) {
					if (!arr.includes(i[1])) {
						arr.push(i[1])
					}
				}
			}
		})
		return arr.length === 0 ? 'No values found' : arr
	}
}

let ht = new HashTable()
console.log(ht)
// console.log(ht._hash('red'))
// console.log(ht.set('red', 01))
// console.log(ht.set('blue', 05))
// console.log(ht.set('blue', 06))
// console.log(ht.set('blue', 07))
// console.log(ht.set('red', 05))
// console.log(ht.set('yellow', 05))
// console.log(ht.get('red'))
// console.log(ht.get('blue'))
// console.log(ht.get(''))
// console.log(ht._hash('red'))

console.log(ht.keys())
console.log(ht.values())
