/**
 * @param {number[]} prices
 * @return {number[]}
 */
// 思路1 bf
var finalPrices = function (prices) {
    var ans = [];
    for (var i = 0; i < prices.length; ++i) {
        var discount = findDiscount(i);
        ans.push(prices[i]- discount);
    }

    return ans;

    function findDiscount(i) {
  
        for (var j = i + 1; j < prices.length; ++j) {
            if (prices[j] <= prices[i]) {
                return prices[j];
            }
        }
        return 0;
    }
};

// 思路2 单调栈
var finalPrices = function (prices) {
    
}