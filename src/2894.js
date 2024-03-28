/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    let num1 = 0
    let num2 = 0
    for (let i = 1; i <= n; ++i) {
        if (i % m === 0) {
            num2 += i
        } else {
            num1 += i
        }
    }
    return num1 - num2
};