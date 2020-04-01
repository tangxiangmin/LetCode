/**
 * Created by admin on 2017/4/17.
 */
// 买卖股票计算收益最大值，只允许交易一次
// 记录最小值以及当天利润
var maxProfit = function(prices) {
    var minPrice = prices[0],
        len = prices.length,
        res = 0;

    for (var i = 0; i < len; ++i) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        var profit = prices[i] - minPrice;
        if (profit > res) {
            res = profit;
        }
    }
    return res;
};

// 思路2：动态规划
// dp[i] = max(dp[i] - 1, arr[i] - 之前所有天数中最小的价格)
var maxProfit = function(prices) {
    var dp = [0];
    var min = prices[0];
    for (let i = 1; i < prices.length; ++i) {
        var price = prices[i];
        min = Math.min(price, min);
        var cur = Math.max(dp[i - 1], price - min);
        dp[i] = cur;
    }
    return Math.max(...dp);
};

var prices = [7, 1, 5, 3, 6, 4];
var res = maxProfit(prices);
console.log(res);
