/**
 * @param {number} purchaseAmount
 * @return {number}
 */
// md看了半天题，感觉就是个四舍五入吧
var accountBalanceAfterPurchase = function (purchaseAmount) {
    const tail = purchaseAmount % 10
    let head = Math.floor(purchaseAmount / 10) + (tail >= 5 ? 1 : 0)
    return 100 - head * 10
};
var purchaseAmount = 9
purchaseAmount = 15
var ans = accountBalanceAfterPurchase(purchaseAmount)
console.log(ans)