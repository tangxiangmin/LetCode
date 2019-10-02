/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    var len = prices.length
    if (!len) {
        return 0
    }

    var sell = new Array(len)
    var buy = new Array(len)
    var cool = new Array(len)
    buy[0] = -prices[0]
    sell[0] = 0
    cool[0] = 0

    for (var i = 1; i < prices.length; ++i) {
        sell[i] = Math.max(buy[i - 1] + prices[i], sell[i - 1])
        buy[i] = Math.max(cool[i - 1] - prices[i], buy[i - 1])
        cool[i] = sell[i - 1]
    }

    return sell[len - 1]
};

var prices = [1, 2, 3, 0, 2] // [买入, 卖出, 冷冻期, 买入, 卖出] 最大利润 3
var res = maxProfit(prices)
console.log(res)

// 思路：需要考虑何时买入，何时卖出
// [] // 0
// [1] // 0
// [1,2] // a[0] < a[1] ? a[1] - a[0] : 0

// [1,2,3] // 3-1
// [1,2,3,0,2] // max(sum(-1, 2, 0), )

// 参考@marsh的评论
// sell[i]表示截至第i天，最后一个操作是卖时的最大收益；
// buy[i]表示截至第i天，最后一个操作是买时的最大收益；
// cool[i]表示截至第i天，最后一个操作是冷冻期时的最大收益；
// 递推公式：
// sell[i] = max(buy[i-1]+prices[i], sell[i-1]) (第一项表示第i天卖出，第二项表示第i天冷冻)
// buy[i] = max(cool[i-1]-prices[i], buy[i-1]) （第一项表示第i天买进，第二项表示第i天冷冻）
// cool[i] = max(sell[i-1], buy[i-1], cool[i-1])
// cool[i] = sell[i-1]

// @marsh 感谢思路提供。可是你的状态转移方程是冗余的。根据题目的状态转换形式，cool[i]=sell[i-1]。其不存在从buy状态和cold状态再到cold状态的过程，只存在sell状态到cold状态。因此cool[i]=sell[i-1]的物理意义才是正确的。你的状态方程的第三个是没有任何意义的。