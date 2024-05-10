/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：n =nums.length
// 当n <= 3 时，取max(...nums)

var rob = function (nums) {
    if (!nums.length) {
        return 0
    }
    if (nums.length <= 3) {
        return Math.max(...nums)
    }

    var noCircleMemo = {}
    var ans = 0

    var len = nums.length
    var lastIdx = len - 2
    var left = nums.slice(1, lastIdx)

    for (var i = 0; i < len; ++i) {
        // 更新环形子列表
        var j = 0
        for (; j < left.length - 1; ++j) {
            left[j] = left[j + 1]
        }
        left[j] = nums[lastIdx]
        lastIdx++

        if (lastIdx === len) {
            lastIdx = 0
        }

        var key = left.join(',')
        var cur = nums[i]
        // 剩余列表不再受环形限制
        var res = cur + (noCircleMemo[key] !== undefined ? noCircleMemo[key] : (noCircleMemo[key] = step(left)))

        if (ans < res) {
            ans = res
        }
    }
    return ans
    // 不用考虑环形的问题
    function step(nums) {
        var key = nums.join(',')

        if (noCircleMemo[key]) return noCircleMemo[key];
        if (!nums.length) return 0;
        if (nums.length <= 2) return Math.max(...nums);

        var ans = 0
        for (var i = 0; i < nums.length; ++i) {
            var cur = nums[i]
            // 只需要移除左右相邻节点，不需要考虑环形
            var left = []
            var right = []
            for (var j = 0; j < nums.length; ++j) {
                if (j < i - 1) {
                    left.push(nums[j])
                } else if (j > i + 1) {
                    right.push(nums[j])
                }
            }

            // 右侧+左侧
            var keyl = left.join(',')
            var keyr = right.join(',')
            var ansl = noCircleMemo[keyl] !== undefined ? noCircleMemo[keyl] : (noCircleMemo[keyl] = step(left))
            var ansr = noCircleMemo[keyr] !== undefined ? noCircleMemo[keyr] : (noCircleMemo[keyr] = step(right))
            var res = cur + ansl + ansr


            if (ans < res) {
                ans = res
            }
        }

        noCircleMemo[key] = ans
        return ans
    }
};


var nums = [1, 2] // 2 max(1,2)
var nums = [2, 3, 2] //3 max(2,3,2)
nums = [1, 2, 3, 1] // 4 max(1+3, 2+1)
// nums = [1, 2, 3, 2, 2] // max(1 + dp([3,2]), 2+ dp([2,1]), 3+dp([1,1]), 2+ dp([1,2]), 1+ dp([2,3]))
nums = [6, 6, 4, 8, 4, 3, 3, 10]
// 得到的dp方程为dp[0, n] = max(nums[i] + nocircleDP(nums[i+2, i-2]))


// 上面的思路过于繁琐，可以简化处理，只要第1家和最后1家不能同时操作，这样问题简化为无环形的顺序
// ans[0, n] = max(dp[0, n-1] + dp[0, n-1])

var rob = function (nums) {
    if (!nums.length) {
        return 0
    }
    if (nums.length <= 3) {
        return Math.max(...nums)
    }

    var noCircleMemo = {}
    var len = nums.length
    return Math.max(step(nums.slice(0, len - 1)), step(nums.slice(1)))

    function step(nums) {
        var key = nums.join(',')

        if (noCircleMemo[key]) return noCircleMemo[key];
        if (!nums.length) return 0;
        if (nums.length <= 2) return Math.max(...nums);

        var ans = 0
        for (var i = 0; i < nums.length; ++i) {
            var cur = nums[i]
            // dp[i] = dp[0, i-2] + nums[i] + dp(i+2, last)
            var left = []
            var right = []
            for (var j = 0; j < nums.length; ++j) {
                if (j < i - 1) {
                    left.push(nums[j])
                } else if (j > i + 1) {
                    right.push(nums[j])
                }
            }

            // 右侧+左侧
            var keyl = left.join(',')
            var keyr = right.join(',')
            var ansl = noCircleMemo[keyl] !== undefined ? noCircleMemo[keyl] : (noCircleMemo[keyl] = step(left))
            var ansr = noCircleMemo[keyr] !== undefined ? noCircleMemo[keyr] : (noCircleMemo[keyr] = step(right))
            var res = cur + ansl + ansr

            if (ans < res) {
                ans = res
            }
        }

        noCircleMemo[key] = ans
        return ans
    }
}
// 隔了一段时间来看上面的代码，没想到居然是我写的！！
// 重新整理一下思路，环形只需要特殊考虑0和n-1元素的选择
// 从第0或者第1间房子开始，同时限定一下最远的位置，即题目转换为求[0,n-2]和[1,n-1]这两个数组的打家劫舍
var rob = function (nums) {
    const n = nums.length
    if (n < 2) {
        return nums[0]
    }
    const cache = {}
    return Math.max(dfs(0, n - 2), dfs(1, n - 1))
    function dfs(i, max) {
        const key = `${i},${max}`
        if (cache[key] !== undefined) return cache[key]
        if (i > max) return 0
        return cache[key] = Math.max(dfs(i + 1, max), nums[i] + dfs(i + 2, max))
    }
};
// 优化逻辑
var rob = function (nums) {
    const n = nums.length
    if (n < 2) {
        return nums[0]
    }

    return Math.max(calc(nums.slice(0, n - 1)), calc(nums.slice(1)))

    function calc(nums) {
        const n = nums.length
        const dp = []
        dp[0] = 0
        dp[1] = nums[0]

        for (let k = 2; k <= n; k++) {
            dp[k] = Math.max(dp[k - 1], nums[k - 1] + dp[k - 2])
        }
        return dp[n];
    }
};


nums = [2, 3, 2]
// nums = [1, 2, 3, 1]
nums = [1, 2, 3]
nums = [1,1]
var ans = rob(nums)
console.log(ans)

