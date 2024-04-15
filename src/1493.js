/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    const arr = nums.join('').split('0')
    const n = arr.length
    let ans = arr[0].length
    for (let i = 0; i < n - 1; ++i) {
        const cur = arr[i].length
        const next = arr[i + 1].length
        ans = Math.max(cur + next, ans)
    }
    // 必须要删掉一个元素
    return ans === nums.length ? ans - 1 : ans
};
// 参考题解
var longestSubarray = function (nums) {
    const n = nums.length
    const pre = new Array(n).fill(0) // 以i结尾的1
    const suf = new Array(n).fill(0) // 以i开头的1
    for (let i = 0; i < n; ++i) {
        if (nums[i] === 1) {
            pre[i] = i > 0 ? pre[i - 1] + 1 : 1
        } else {
            pre[i] = 0
        }
    }
    for (let i = n - 1; i >= 0; --i) {
        if (nums[i] === 1) {
            suf[i] = i === n - 1 ? 1 : suf[i + 1] + 1
        } else {
            suf[i] = 0
        }
    }

    let ans = 0
    for (let i = 0; i < n; ++i) {
        if (nums[i] === 0) {
            const l = i > 0 ? pre[i - 1] : 0
            const r = i < n - 1 ? suf[i + 1] : 0
            ans = Math.max(l + r, ans)
        } else {
            ans = Math.max(pre[i] - 1, ans)
        }
    }
    return ans
}
var longestSubarray = function (nums) {
    const n = nums.length
    const p0 = new Array(n).fill(0) // 以i结尾的1
    // 以i结尾且可以删除某个位置的0
    // 因此遇见nums[i]==0时，可以将这个0删除，然后使用p0[i-1]的值赋值他
    // nums[i]==1时，直接就是p1[i-1] +1
    const p1 = new Array(n).fill(0)
    for (let i = 0; i < n; ++i) {
        if (nums[i] === 1) {
            p0[i] = i > 0 ? p0[i - 1] + 1 : 1
            p1[i] = i > 0 ? p1[i - 1] + 1 : 1
        } else {
            p1[i] = i > 0 ? p0[i - 1] : 0
            p0[i] = 0
        }
    }
    const max = Math.max(...p1)
    return max === nums.length ? max - 1 : max
}

var nums = [0, 1, 1, 1, 0, 1, 1, 0, 1]
nums = [1, 1, 0, 1]
// nums = [1]
// nums = [1, 1, 1]
var ans = longestSubarray(nums)
console.log(ans)