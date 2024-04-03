/**
 * @param {number[]} w
 */
var Solution = function (w) {

    const n = w.length
    let sum = 0
    const list = []
    for (let i = 0; i < n; ++i) {
        sum += w[i]
        list[i] = sum
    }
    this.list = list
    this.sum = sum
};

/**
 * @return {number}
 */

const binarySearch = (pre, x) => {
    let low = 0, high = pre.length - 1;
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low;
        if (pre[mid] < x) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}

Solution.prototype.pickIndex = function () {

    const x = Math.floor(Math.random() * this.sum) + 1
    return binarySearch(this.list, x);
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */