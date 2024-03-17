/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
// 看起来排个序买，然后前两个？
var buyChoco = function (prices, money) {
    prices.sort((a, b) => a - b)
    const sum = prices[0] + prices[1]
    return sum <= money ? money - sum : money
};

// 还可以在一次性遍历里面，保存两个较小的值
var buyChoco = function (prices, money) {
    let a = Infinity
    let b = Infinity
    for (const p of prices) {
        if (p < a) {
            b = a
            a = p
        } else if (p < b) {
            b = p
        }
    }
    const sum = a + b
    return sum <= money ? money - sum : money

}