/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
    const n = nums.length
    let ans = Infinity
    for (let i = 0; i < n; ++i) {
        let sum = nums[i]
        for (let j = i; j < n; ++j) {
            sum = sum | nums[j]
            if (sum >= k) {
                ans = Math.min(ans, j - i + 1)
            }
        }

    }
    return ans === Infinity ? -1 : ans
};

var nums = [1, 2, 3], k = 2
// nums = [2, 1, 8], k = 10
nums = [1,2], k = 0
var ans = minimumSubarrayLength(nums, k)
console.log(ans)