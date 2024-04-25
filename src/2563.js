/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
// 对数组排序之后可以用二分
var countFairPairs = function (nums, lower, upper) {
    nums.sort((a, b) => a - b)
    const n = nums.length

    let ans = 0
    for (let i = 0; i < n; ++i) {
        const num = nums[i]
        const l = findL(i + 1, lower - num)
        const r = findR(i + 1, upper - num)
        ans += r - l + 1
    }
    return ans

    function findL(l, target) {
        let r = n - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            if (nums[mid] >= target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return l
    }
    function findR(l, target) {
        let r = n - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            if (nums[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return r
    }

};
var nums = [0, 1, 7, 4, 4, 5], lower = 3, upper = 6
nums = [1, 7, 9, 2, 5], lower = 11, upper = 11
nums = [0, 0, 0, 0, 0, 0], lower = 0, upper = 0
var ans = countFairPairs(nums, lower, upper)
console.log(ans)