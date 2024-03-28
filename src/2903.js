/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
    var n = nums.length
    for (let i = 0; i < n; ++i) {
        for (let j = i + indexDifference; j < n; ++j) {
            if (Math.abs(nums[i] - nums[j]) >= valueDifference) {
                return [i, j]
            }
        }
    }
    return [-1, -1]
};