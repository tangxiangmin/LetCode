/**
 * @param {number[]} nums
 * @return {number}
 */
// 从后向前，尝试一直合并
var maxArrayValue = function (nums) {
    let n = nums.length
    for (let i = n - 1; i > 0; --i) {
        if (nums[i] >= nums[i - 1]) {
            nums[i - 1] += nums[i]
        }
    }
    return Math.max(...nums)
};

var nums = [2, 3, 7, 9, 3]
// nums = [5, 3, 3]
nums = [40, 15, 35, 98, 77, 79, 24, 62, 53, 84, 97, 16, 30, 22, 49]
var ans = maxArrayValue(nums)
console.log(ans)