/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
    const n = num.length
    let i = n - 1
    while (i >= 0) {
        if (num[i] === '0') {
            i--
        } else {
            return num.substring(0, i + 1)
        }
    }
    return ''
};