/**
 * @param {number[]} stock
 * @return {number}
 */
var stockManagement = function (stock) {
    var l = 0
    var r = stock.length - 1
    while (l < r) {
        const mid = (l + r) >> 1
        if (stock[mid] > stock[r]) {
            l = mid + 1
        } else if (stock[mid] < stock[r]) {
            r = mid
        } else {
            r--
        }
    }
    return stock[l]
};
var stock = [4, 5, 8, 3, 4]
stock = [5, 7, 9, 1, 2]
stock = [1, 3, 5]
stock = [2, 2, 2, 0, 1]
// stock = [1]
var ans = stockManagement(stock)
console.log(ans)