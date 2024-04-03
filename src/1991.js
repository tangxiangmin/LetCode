/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    const prevSum = [0]
    let sum = 0
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i]
        prevSum.push(sum)
    }
    for (let i = 0; i < nums.length; ++i) {
        let l = prevSum[i]
        let r = sum - prevSum[i] - nums[i]

        if (l === r) {
            return i
        }
    }
    return -1
};

var nums = [2, 3, -1, 8, 4]
nums = [1, -1, 4]
var ans = findMiddleIndex(nums)
console.log(ans)