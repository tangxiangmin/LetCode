/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
    const n = nums.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        let min = nums[i]
        let max = nums[i]
        for (let j = i + 1; j < n; ++j) {
            min = Math.min(min, nums[j])
            max = Math.max(max, nums[j])
            ans += max - min
        }
    }
    return ans
};

var nums = [1, 2, 3]
nums = [1, 3, 3]
nums = [4, -2, -3, 4, 1]
var ans = subArrayRanges(nums)
console.log(ans)