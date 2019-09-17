/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 递归, 会超时
 */
var coinChange = function (coins, amount) {
    coins.sort((a, b) => a - b)
    var memo = {}

    for (var i = 0; i < coins.length; ++i) {
        memo[coins[i]] = 1 // 如果amount存在coins中，则只需返回1即可
    }

    return step(amount)

    function step(amount) {
        if (!coins.length) {
            return -1
        }

        if (amount === 0) {
            return 0
        }

        if (memo[amount]) {
            return memo[amount]
        }

        var min = coins[0]
        if (min > amount) {
            return -1
        }

        var min = Infinity
        for (var i = 1; i < amount / 2 + 1; ++i) {
            // coins 为 1, 2, 5，amount 为 11，则可得
            // 1-> 1, 2->1, 3->1(1)+1(2), 4-> 1(2)+1(2), 5->1,6->1(1)+1(5), 
            // 7->1(2)+1(5), 8->1(5)+2(3), 9->1(5) + 2(4), 10->1(5)+1(5), 11->2(10)+1(1)
            // 推断出 dp(m+n) = min(dp(m) + dp(n)) ，需找到m+n的所有组合，求最小值
            // 因此问题转换为：找到1~ amount-1中可以组成amount的组合中，使用硬币最少的

            var l1 = step(i)
            var l2 = step(amount - i)

            if (l1 > -1 && l2 > -1 && min > (l1 + l2)) {
                min = l1 + l2
            }
        }

        memo[amount] = min === Infinity ? -1 : min
        return memo[amount]
    }
};

/**
 * 
 * @param {*} coins 
 * @param {*} amount
 * 动态规划 
 */
var coinChange = function (coins, amount) {
    var dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0

    // F[i] = min(F(i - c1), F(i - c2)...) + 1， 其中c1..cn为每个硬币的面值
    // 在计算 F(i) 之前，我们可以先计算出 F(0) ~ F(i-1) 的答案
    for (var i = 1; i <= amount; ++i) {
        for (var j = 0; j < coins.length; ++j) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}

var coinChange = function (coins, amount) {
    if (amount < 0) {
        return 0
    }
    var dp = {}

    var res = step(amount)
    return res
    // F(S) ，对于金额 S 最少的硬币数，所得组合的最后一枚硬币的面值是 C，则F(S) = F(S - C) + 1
    // 由于不知道所得组合中最后一枚硬币的面值，因此遍历coins，依次排查
    function step(amount) {
        // 无法在coins找到
        if (amount < 0) {
            return -1
        }
        // 刚好完成组合
        if (amount === 0) {
            return 0
        }
        // 自顶向下时会存在大量重复的计算，可以缓存已经访问过的记录
        if (dp[amount]) {
            return dp[amount]
        }

        let min = Infinity
        for (var j = 0; j < coins.length; ++j) {
            // 找到满足题意的最后一枚硬币的组合
            var res = step(amount - coins[j])
            if (res >= 0 && res < min) {
                min = 1 + res
            }
        }
        
        dp[amount] = min === Infinity ? -1 : min
        return dp[amount]
    }
}

var coins = [1, 2, 5], amount = 11 // 11 = 5 + 5 + 1 返回3最小数量
coins = [216, 94, 15, 86], amount = 5372
var res = coinChange(coins, amount)

console.log(res)
