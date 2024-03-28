

/**
 * @param {number[]} nums
 * @return {number}
 */
// 实际上是看数组是否只存在1个谷底
var minimumRightShifts = function (nums) {

    const n = nums.length
    let idx = -1
    for (let i = 1; i < n; ++i) {
        let prev = nums[i - 1]
        let cur = nums[i]
        if (prev > cur) {
            if (idx === -1) {
                idx = i
            } else {
                return -1
            }
        }
    }
    if (idx === -1) return 0
    if (nums[n - 1] > nums[0]) return -1
    return n - idx
};
var nums = [3, 4, 5, 1, 2]
var ans = minimumRightShifts(nums)
console.log(ans)