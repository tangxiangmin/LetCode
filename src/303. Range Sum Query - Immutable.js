// 给定一个数组，求给定范围元素之和

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    const preSums = [0]
    for (let i = 0; i < nums.length; ++i) {
        preSums[i + 1] = nums[i] + preSums[preSums.length - 1]
    }
    this.preSums = preSums
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    return this.preSums[j + 1] - this.preSums[i]
};

const a = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(a.preSums)
console.log(a.sumRange(0, 2))
console.log(a.sumRange(2, 5))
console.log(a.sumRange(0, 5))
