/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
    const n = nums.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        if (n % (i + 1) === 0) {
            ans += nums[i] * nums[i]
        }
    }
    return ans
};
var nums = [1, 2, 3, 4]
var ans = sumOfSquares(nums)
console.log(ans)