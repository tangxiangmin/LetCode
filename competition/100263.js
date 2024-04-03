/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    const s = x.toString()
    let sum = 0
    for (const ch of s) {
        sum += +ch
    }
    return x % sum === 0 ? sum : -1
};