/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// BF，肯定会超时
var minimumDifference = function (nums, k) {
    const n = nums.length
    let ans = Infinity
    for (let i = 0; i < n; ++i) {
        let val = nums[i]
        for (let j = i; j < n; ++j) {
            val &= nums[j]
            ans = Math.min(Math.abs(k - val), ans)
        }
    }
    return ans
};


// 用滑动窗口，怎么滑呢？
var minimumDifference = function (nums, k) {
    const n = nums.length

    let minDiff = Infinity
    let l = 0
    let r = 0
    let val = 0

    while (r < n) {
        windowAnd &= nums[r]
        while (Math.abs(k - val) > ans) {

        }
    }

    return minDiff;
}
var nums = [1, 2, 4, 5], k = 3
// nums = [1, 2, 1, 2], k = 2
// nums = [1], k = 10
var ans = minimumDifference(nums, k)
console.log(ans)