
var FrequencyTracker = function () {
    this.data = []
    this.frequency = []
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function (number) {
    if (!this.data[number]) {
        this.data[number] = 0
    }
    const oldVal = this.data[number]
    const newVal = this.data[number] + 1

    if (!this.frequency[newVal]) {
        this.frequency[newVal] = 0
    }
    this.data[number] = newVal

    if (this.frequency[oldVal] >= 0) {
        this.frequency[oldVal]--
    }
    this.frequency[newVal]++

};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function (number) {
    if (this.data[number] > 0) {
        const oldVal = this.data[number]
        const newVal = this.data[number] - 1
        this.data[number] = newVal
        this.frequency[oldVal]--
        this.frequency[newVal]++
    }

};

/** 
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function (frequency) {
    return this.frequency[frequency] > 0
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */