/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 看起来好像可以使用前缀和
var maximumStrength = function (nums, k) {
    var preSum = []
    let sum = 0
    for (const num of nums) {
        sum += num
        preSum.push(sum)
    }
    console.log(preSum)
};
var nums = [1, 2, 3, -1, 2], k = 3
var ans = maximumStrength(nums, k)
console.log(ans)