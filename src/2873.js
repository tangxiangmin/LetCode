/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    var n = nums.length
    let ans = 0
    for (let i = 0; i < n - 2; ++i) {
        for (let j = i + 1; j < n - 1; ++j) {
            for (let k = j + 1; k < n; ++k) {
                const val = (nums[i] - nums[j]) * nums[k]
                ans = Math.max(ans, val)
            }
        }
    }
    return ans
};

var nums = [12, 6, 1, 2, 7]
var ans = maximumTripletValue(nums)
console.log(ans)