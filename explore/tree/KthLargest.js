/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    nums.sort((a, b) => b - a);
    this.k = k; // 只保留前k个较大的数字
    while (nums.length < k) {
        nums.push(-Infinity);
    }

    this.data = nums;

};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    var data = this.data;
    var last = data[this.k - 1];
    if (last < val) {
        for (var i = 0; i < data.length; ++i) {
            // 将新增的元素插在最大的位置
            if (val > data[i]) {
                data.splice(i, 0, val);
                break;
            }
        }
    }
    return data[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
var K = new KthLargest(2, [0]);


console.log(K.add(-1));
console.log(K.add(1));
console.log(K.add(-2));
console.log(K.add(-4));
console.log(K.add(3));
