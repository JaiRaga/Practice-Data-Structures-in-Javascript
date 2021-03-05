class MaxBinaryHeaps {
	constructor() {
		this.values = []
	}

	insert(value) {
		if (!this.values.length) {
			this.values.push(value)
		} else {
			this.values.push(value)
			let index = this.values.length - 1,
				parentInd = parseInt((index - 1) / 2),
				temp = null

			while (this.values[parentInd] < this.values[index]) {
				temp = this.values[parentInd]
				this.values[parentInd] = this.values[index]
				this.values[index] = temp
				index = parentInd
				parentInd = parseInt((index - 1) / 2)
			}
		}
		return this
	}
}

const mbh = new MaxBinaryHeaps()
console.log(mbh.insert(5))
console.log(mbh.insert(10))
console.log(mbh.insert(15))
console.log(mbh.insert(20))
console.log(mbh.insert(25))
