/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路，将正数排在前面
var maxScore = function (nums) {
    nums.sort((a, b) => b - a)
    let sum = 0
    let cnt = 0
    for (const num of nums) {
        sum += num
        if (sum > 0) {
            cnt++
        }
    }
    return cnt
};

var nums = [2, -1, 0, 1, -3, 3, -3]
nums = [-2,-3,0]
var ans = maxScore(nums)
console.log(ans)