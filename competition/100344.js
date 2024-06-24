/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const n = nums.length

    let cnt = 0
    for (let i = 0; i < n - 2; ++i) {
        const cur = nums[i]
        if (cur === 0) {
            cnt++
            for (let j = i; j < i + 3; ++j) {
                nums[j] = nums[j] === 0 ? 1 : 0
            }
        }
    }
    if (nums[n - 2] === 0 || nums[n - 1] === 0) return -1

    return cnt
};
var nums = [0, 1, 1, 1, 0, 0]
nums = [0, 1, 1, 1]
var ans = minOperations(nums)
console.log(ans)