/**
 * Created by admin on 2017/4/11.
 */

// 看第一遍没读懂题
// 大致是一个数组，第i个元素是第i天的的价格，找到最大的利润
// 可以买卖多次，但再次购买之前必须出售
// 只要某一段区间是递增的，则肯定会收益，把多段区域的收益叠加起来
// 如果是递减的，当天买当天卖则受益为0

var maxProfit = function(prices) {
    var len = prices.length
    if(len == 0){
        return 0;
    }

    var sum = 0;
    var buy = prices[0],
        sell = prices[0];
    for (var i = 0; i < len; ++i){
        var today = prices[i];
        if (today < sell){
            sum += sell - buy;
            buy = today;
        }
        sell = today;
    }
    sum += (sell - buy);
    return sum;
};

var test = [1,2]; // 2-1 = 1
console.log(maxProfit(test));