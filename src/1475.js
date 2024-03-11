/**
 * @param {number[]} prices
 * @return {number[]}
 */
// 思路1 bf
var finalPrices = function (prices) {
    var ans = [];
    for (var i = 0; i < prices.length; ++i) {
        var discount = findDiscount(i);
        ans.push(prices[i] - discount);
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
// 本质上只要找到右边第一个比cur小的值，找小值用递减栈，从右向左
// 具体的思路，从右向左，维护一个递减栈，对于cur，栈中保存的都是右边已经遍历过的值，需要从顶向下找到<=cur的值，这就是他的折扣；
// 而那些在入栈的时候被弹出栈的元素，将cur入栈后，**由于cur的位置比他们靠左，且比他们更小**，因此他们的弹出完全不会影响左边未遍历的元素
// 这样就可以通过单调栈快速找到每一个元素右边第一个更小值
var finalPrices = function (prices) {
    const stack = []
    const discount = []
    for (let i = prices.length - 1; i >= 0; --i) {
        const cur = prices[i]
        while (stack.length && stack[stack.length - 1] > cur) {
            stack.pop()
        }
        discount[i] = stack.length ? stack[stack.length - 1] : 0
        stack.push(cur)
    }
    return prices.map((val, index) => {
        return val - discount[index]
    })
}

var prices = [8, 4, 6, 2, 3]
// prices = [1, 2, 3, 4, 5]
// prices = [10, 1, 1, 6]
var ans = finalPrices(prices)
console.log(ans)