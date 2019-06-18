/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    var len = nums.length;
    k %= len;

    var last;

    for (var i = 0; i < k; ++i) {
        last = nums[len - 1];
        for (var j = len - 1; j > 0; --j) {
            nums[j] = nums[j - 1];
        }
        nums[0] = last;
    }
};

var rotate2 = function(nums, k) {
    var len = nums.length;
    k %= len;
    var res = []; // 此种解法需要一个新的数组来暂存数据
    for (var i = 0; i < nums.length; ++i) {
        res[(i + k) % nums.length] = nums[i];
    }
    return res;
};
var arr = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
rotate(arr, k);
console.log(arr);
