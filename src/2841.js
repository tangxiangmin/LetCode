/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function (nums, m, k) {

    const n = nums.length
    let cnt = 0
    let map = {}
    let l = 0
    let r = 0
    let sum = 0
    let ans = 0
    while (r < k) {
        const num = nums[r]
        r++
        if (!map[num]) {
            map[num] = 0
            cnt++
        }
        sum += num
        map[num]++
    }
    if (cnt >= m) {
        ans = Math.max(ans, sum)
    }
    while (r < n) {
        const d = nums[l]
        l++
        map[d]--
        sum -= d
        if (map[d] === 0) {
            cnt--
        }

        const num = nums[r]
        r++
        sum += num

        if (!map[num]) {
            cnt++
            map[num] = 0
        }
        map[num]++
        if (cnt >= m) {
            ans = Math.max(ans, sum)
        }
    }
    return ans
};

var nums = [2, 6, 7, 3, 1, 7], m = 3, k = 4
nums = [1], m = 1, k = 1
// nums = [1, 1, 1, 3], m = 2, k = 2
var ans = maxSum(nums, m, k)
console.log(ans)