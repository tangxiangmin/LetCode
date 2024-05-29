/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 分治，拆分数组会带来额外的空间复杂度
var mostCompetitive = function (nums, k) {

    return dfs(nums, k)

    function dfs(nums, k) {
        const n = nums.length
        const min = Math.min(...nums)
        if (k === 1) return [min]
        const idx = nums.indexOf(min)
        const left = nums.slice(idx + 1)
        if (n - idx >= k) {
            return [min, ...dfs(left, k - 1)]
        } else {
            return [...dfs(nums.slice(0, idx), k - (n - idx)), min, ...left]
        }

    }
};

// 贪心加单调栈，尽可能将数字小的元素入栈
var mostCompetitive = function (nums, k) {
    const n = nums.length
    const ans = []
    let i = 0
    while (i < n) {
        while (ans.length && ans.length + n - i > k && ans[ans.length - 1] > nums[i]) {
            ans.pop()
        }
        ans.push(nums[i])
        i++
    }

    return ans.slice(0, k)
};


var nums = [3, 2, 1, 0], k = 2
nums = [2, 4, 3, 3, 5, 4, 9, 6], k = 4
// nums = [3, 5, 2, 6], k = 2
// nums = [71, 18, 52, 29, 55, 73, 24, 42, 66, 8, 80, 2], k = 3
// nums = [84, 10, 71, 23, 66, 61, 62, 64, 34, 41, 80, 25, 91, 43, 4, 75, 65, 13, 37, 41, 46, 90, 55, 8, 85, 61, 95, 71], k = 24
var ans = mostCompetitive(nums, k)
console.log(ans)
