/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    var len = nums.length;
    var ans = 0;

    for (var i = 0; i < len - 1; ++i) {
        for (var j = i + 1; j < len; ++j) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                ans++;
            }
        }
    }
    return ans;
};

var nums = [1,2,2,1], k = 1
nums = [1,3], k = 3
nums = [3,2,1,5,4], k = 2
var ans =countKDifference(nums, k)
console.log(ans)