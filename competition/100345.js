/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {

    let ans = 0
    for (const num of nums) {
        const v = Math.floor(num / 3)
        ans += Math.min(num - v * 3, (v + 1) * 3 - num)
    }
    return ans
};
var nums = [1, 2, 3, 4]
nums = [3,6,9]
var ans = minimumOperations(nums)
console.log(ans)