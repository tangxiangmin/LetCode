/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    return f(prices, 0, 0, 0);
    /**
     *
     * @param prices
     * @param i 当前考虑第几天
     * @param hasStock 是否有股票在手
     * @param counts 已经交易的次数（每买一次股票就加一）
     * @return
     */
    function f(prices, i, hasStock, counts) {
        // 如果已经买了两次股票，并且手里已经没有股票了，那么后面的天数不需要考虑
        if (i >= prices.length || (counts >= 2 && hasStock < 1)) {
            return 0;
        }
        if (hasStock > 0)
            return Math.max(
                prices[i] + f(prices, i + 1, 0, counts),
                f(prices, i + 1, 1, counts)
            );
        // 如果没有股票，我可以选择买或者不买
        return Math.max(
            -prices[i] + f(prices, i + 1, 1, counts + 1),
            f(prices, i + 1, 0, counts)
        );
    }
};
