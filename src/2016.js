/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    var len = nums.length;
    var max = -Infinity;
    for (var i = 0; i < len - 1; ++i) {
        for (var j = i + 1; j < len; ++j) {
            if (nums[i] < nums[j]) {
                max = Math.max(max, nums[j] - nums[i]);
            }
        }
    }
    return max === -Infinity ? -1 : max;
};


var nums = [7,1,5,4]
nums = [9,4,3,2]
var ans = maximumDifference(nums)
console.log(ans)