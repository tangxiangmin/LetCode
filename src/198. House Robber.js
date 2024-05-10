/**
 * Created by admin on 2017/6/5.
 */
// 江洋大盗如何在不惊动警察的情况下获取最大收益
// 相邻的房间在同一晚上被抢劫就会自动报警


// 如果只有两个房子，肯定选择数值更大的那个房子
// 0、1的房子中肯定有一个会被访问，因此可以使用dfs从顶向下递归
var rob = function (nums) {
    return dfs(nums)
    function dfs(nums) {
        if (!nums.length) return 0
        if (nums.length === 1) return nums[0]
        if (nums.length === 2) return Math.max(...nums)
        return Math.max(nums[0] + dfs(nums.slice(2)), nums[1] + dfs(nums.slice(3)))
    }
};

// 上面的函数有处理数组的额外开销，可以通过索引值加缓存优化
// 定义递归函数dfs(n)为到达抢劫nums[n]之后的最大收益，由于不能选择相邻的n+1，因此需要判断dfs(n+2)和dfs(n+3)的最大值
var rob = function (nums) {
    const cache = {}
    return Math.max(dfs(0), dfs(1))
    function dfs(n) {
        if (cache[n] !== undefined) return cache[n]
        if (n >= nums.length) return 0
        // 不能选择相邻的n+1
        return cache[n] = nums[n] + Math.max(dfs(n + 2), dfs(n + 3))
    }
}

// 改成递推
var rob = function (nums) {
    const dp = new Array(nums.length).fill(0).map(() => new Array())
    // dp[i][j]表示第i个元素，当j为0时表示不选择，为1时表示选择
    dp[0][0] = 0
    dp[0][1] = nums[0]
    for (let i = 1; i < nums.length; ++i) {
        dp[i][0] = Math.max(dp[i - 1][1], i - 2 >= 0 ? dp[i - 2][1] : 0) // 可以选前面一个，也可以不选前面一个，取二者更大值
        dp[i][1] = dp[i - 1][0] + nums[i]
    }
    const last = dp[nums.length - 1]
    return Math.max(...last)
}

// 上面的代码空间复杂度还可以继续优化
// 定义dp[k]为[0..k)之间房间的最大值
var rob = function (nums) {
    const dp = []
    dp[0] = 0
    dp[1] = nums[0]

    const N = nums.length
    for (let k = 2; k <= N; k++) {
        dp[k] = Math.max(dp[k - 1], nums[k - 1] + dp[k - 2])
    }
    return dp[N];
}

// 另外一种典型的动态规划问题，每次循环都保留最大的数并从后面的
var rob = function (nums) {
    let even = 0,
        odd = 0;

    nums.forEach((item, index) => {
        if (index % 2) {
            odd = Math.max(odd + item, even);
        } else {
            even = Math.max(even + item, odd);
        }
    });

    return Math.max(odd, even);
};



var nums = [1, 2, 3, 1]
// nums = [2, 7, 9, 3, 1]
// nums = [2, 1, 1, 2]
nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var ans = rob(nums)

console.log(ans)