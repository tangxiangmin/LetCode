// 给定一个数组，求给定范围元素之和

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.data = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    var sum = 0;
    for (var i = i; i <=j; ++i){
        sum += this.data[i];
    }

    return sum;
};