/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var l = 0;
    var r = 0;
    var len = nums.length;
    while (r < len && l < len) {
        // 如果为0，则与后续第一个不为0 的元素交换位置
        if (nums[r] === 0) {
            // 找到后面第一个不为0的索引值
            l = Math.max(l, r + 1);
            for (; l < len; ++l) {
                if (nums[l] !== 0) {
                    nums[r] = nums[l];
                    nums[l] = 0;
                    break
                }
            }
        }
        r++;
    }
    return nums;
};
var arr = [0, 1, 0, 3, 12];
// arr = [1, 0];
// arr = [1, 0, 1];
var res = moveZeroes(arr);
console.log(res);
