/**
 * Created by admin on 2017/4/17.
 */
// 买卖股票计算收益最大值，只允许交易一次
// 记录最小值以及当天利润
var maxProfit = function (prices) {
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

var prices = [7, 1, 5, 3, 6, 4]
var res = maxProfit(prices)
console.log(res)