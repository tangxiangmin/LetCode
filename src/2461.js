/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var maximumSubarraySum = function (nums, k) {
    let ans = 0
    const n = nums.length
    const map = {}
    let i = 0
    let l = 0
    let sum = 0
    while (i < n) {
        sum += nums[i]
        if (!map[nums[i]]) map[nums[i]] = 0
        map[nums[i]]++
        while (l < i && (i - l + 1 > k || map[nums[i]] > 1)) {
            sum -= nums[l]
            map[nums[l]]--
            l++
        }

        if (i - l + 1 === k) {
            ans = Math.max(ans, sum)
        }
        i++

    }
    return ans
};

var nums = [1, 5, 4, 2, 9, 9, 9], k = 3
// nums = [4, 4, 4], k = 3
nums = [1, 1, 1, 7, 8, 9], k = 3
// nums = [3, 2, 3, 1], k = 3
var ans = maximumSubarraySum(nums, k)
console.log(ans)