/**
 * Created by admin on 2017/4/11.
 */

// 大致是一个数组，第i个元素是第i天的的价格，找到最大的利润
// 可以买卖多次，但再次购买之前必须出售
// 只要某一段区间是递增的，则肯定会收益，把多段区域的收益叠加起来
// 如果是递减的，当天买当天卖则受益为0

var maxProfit = function (prices) {
    var len = prices.length
    if (len == 0) {
        return 0;
    }

    var sum = 0;
    var buy = prices[0],
        sell = prices[0];
    for (var i = 0; i < len; ++i) {
        var today = prices[i];
        if (today < sell) {
            sum += sell - buy;
            buy = today;
        }
        sell = today;
    }
    sum += (sell - buy);
    return sum;
};

var maxProfit = function (prices) {
    var len = prices.length
    if (!len) {
        return len
    }
    var sell = new Array(len)
    var buy = new Array(len)

    sell[0] = 0
    buy[0] = -prices[0]

    for (var i = 1; i < len; ++i) {
        sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i])
        buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i])
    }
    return sell[len -1]
}

var test = [7, 1, 5, 3, 6, 4]; // 2-1 = 1
console.log(maxProfit(test));

// [7] // 0
// [7,1] // 0 + 0
// [7,1,5] // 0 + -1 + 5
// [7,1,5,3] // 0 + -1 + 5 + 0
// [7,1,5,3,6] // 0 + -1 + 5 + -3 + 6
// [7,1,5,3,6,4] // 0 + -1 + 5 - 3 + 6 + 0

// sell[i]为第i天为卖出操作的最大利润
// buy[i]为第i天为买入操作的最大利润
// sell[i] = max(sell[i-1], buy[i-1] + price[i]) // 卖出今天的股票
// buy[i] = max(buy[i-1], sell[i-1] - price[i]) // 买入今天的股票
