/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let cos = 0, res = 0, max = 0
    for (let i = 0; i < customers.length; i++) {
        const cus = customers[i]
        cos += cus === 'Y' ? 1 : -1
        if (cos > max) {
            res = i + 1
        }
        max = Math.max(cos, max)
    }
    return res
};

var customers = "YYNY"
customers = "YYYY"
customers = "YNYY"
var ans = bestClosingTime(customers)
console.log(ans)