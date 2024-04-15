/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    const n = nums.length
    let a = 0
    let b = 0
    for (let i = 0; i < n; ++i) {
        let j = i
        while (nums[j] < nums[j + 1]) {
            j++
            a = Math.max(j - i + 1, a)
        }
        j = i
        while (nums[j] > nums[j + 1]) {
            j++
            b = Math.max(j - i + 1, b)
        }
    }
    return Math.max(a, b)
};

// 可以只用一次循环
var longestMonotonicSubarray = function (nums) {
    const n = nums.length
    let i = 0
    let ans = 1
    while (i < n-1) {
        if (nums[i] === nums[i + 1]) {
            i++
            continue
        }

        let l = i
        let inc = nums[i] < nums[i + 1]
        i += 2
        while (i < n && nums[i] !== nums[i - 1] && (nums[i] > nums[i - 1] === inc)) {
            i++
        }
        ans = Math.max(ans, i - l)
        i -= 1
    }
    return ans
}
var nums = [3, 3, 3, 3]
var ans = longestMonotonicSubarray(nums)
console.log(ans)