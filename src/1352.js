
var ProductOfNumbers = function () {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
    this.arr.push(num)
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {

    const n = this.arr.length
    let i = n - 1
    let ans = 1
    while (i >= 0 && k > 0) {
        k--
        ans *= this.arr[i]
        i--
    }
    return ans
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */