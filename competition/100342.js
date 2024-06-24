/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {

    nums.sort((a, b) => a - b)

    let l = 0
    let r = nums.length - 1
    let ans = Infinity
    while (l < r) {
        ans = Math.min(ans, (nums[r] + nums[l]) / 2)
        l++
        r--
    }
    return ans

};