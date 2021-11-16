/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路1 BF
var specialArray = function (nums) {
    var len = nums.length;
    for (var i = 0; i <= len; ++i) {
        var count = 0;
        for (var num of nums) {
            if (num >= i) {
                count++;
            }
        }
        if (count === i) {
            return i;
        }
    }
    return -1;
};
// 思路2 感觉可以排序一下
var specialArray = function (nums) {
    nums.sort((a, b) => a - b);
    var len = nums.length;
    if (nums[0] >= len) return len;
    for (var i = 1; i < len; ++i) {
        if (nums[len - i] >= i && nums[len - i - 1] < i) return i;
    }
    return -1;
};

var nums = [3, 5];
nums = [0, 4, 3, 0, 4];
nums = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100]
var ans = specialArray(nums);
console.log(ans);
