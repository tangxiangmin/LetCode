/**
 * @param {number[]} nums
 * @return {number}
 */

// bf 递归解法，复杂度是n!，需要优化
var maxCoins = function (nums) {
    const cache = new Map()
    return dfs(nums)
    function dfs(nums) {
        const key = nums.join(',')
        if (cache.has(key)) return cache.get(key)
        if (nums.length === 1) return nums[0]

        const n = nums.length
        let max = 0
        for (let i = 0; i < n; ++i) {
            const arr = nums.slice()
            arr.splice(i, 1)
            max = Math.max(max, choose(i) + dfs(arr))
        }
        cache.set(key, max)
        return max

        function choose(i) {
            let a = i - 1 >= 0 ? nums[i - 1] : 1
            let b = i + 1 < n ? nums[i + 1] : 1
            return a * nums[i] * b
        }
    }
}
// 参考题解的dp
var maxCoins = function (nums) {
    const n = nums.length;
    const val = new Array(n + 2).fill(0);
    for (let i = 1; i <= n; i++) {
        val[i] = nums[i - 1];
    }
    val[0] = val[n + 1] = 1;
    const rec = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(-1));

    function solve(left, right) {
        if (left >= right - 1) {
            return 0;
        }
        if (rec[left][right] !== -1) {
            return rec[left][right];
        }
        for (let i = left + 1; i < right; i++) {
            let sum = val[left] * val[i] * val[right];
            sum += solve(left, i) + solve(i, right);
            rec[left][right] = Math.max(rec[left][right], sum);
        }
        return rec[left][right];
    }

    return solve(0, n + 1);
}


var nums = [3, 1, 5, 8]
nums = [7, 9, 8, 0, 7, 1, 3, 5, 5, 2, 3]
var ans = maxCoins(nums)
console.log(ans)