/**
 * @param {number[]} nums
 * @return {number}
 */

var longestSquareStreak = function (nums) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    let max = -1
    const cache = {}
    for (let i = 0; i < n; ++i) {
        let val = nums[i]
        let cnt = 1
        let j = i + 1
        while (j < n) {
            const target = val * val
            if (cache[target]) break
            let idx = find(j, target)
            if (idx === -1) {
                j++
            } else {
                cache[target] = 1
                cnt++
                val = nums[idx]
                j = idx + 1
            }
        }

        if (cnt >= 2) {
            max = Math.max(max, cnt)
        }
    }
    return max


    function find(l, num) {
        let r = n - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            if (nums[mid] === num) {
                return mid
            } else if (nums[mid] > num) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return -1
    }

};
// 标签有个二分，感觉搞复杂了，直接用hash计算
var longestSquareStreak = function (nums) {
    const map = {}
    let max = 0
    for (const num of nums) {
        map[num] = 1
        max = Math.max(num, max)
    }
    let ans = -1
    for (const num of nums) {
        let cnt = 1
        let val = num
        while (val <= max) {
            const target = val * val
            if (map[target]) {
                cnt++
                val = target
            } else {
                break
            }
        }
        if (cnt > 1) {
            ans = Math.max(ans, cnt)
        }

    }
    return ans
}
var nums = [4, 3, 6, 16, 8, 2]
nums = [2, 3, 4, 6, 8, 16]
// nums = [2, 3, 5, 6, 7]
var ans = longestSquareStreak(nums)
console.log(ans)