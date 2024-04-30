/**
 * @param {number} n
 * @return {string}
 */
// 参考的题解
var baseNeg2 = function(n) {
    if (n === 0 || n === 1) {
        return '' + n;
    }
    let res = '';
    while (n !== 0) {
        const remainder = n & 1;
        res += remainder;
        n -= remainder;
        n /= -2;
    }
    return res.split('').reverse().join('');
};
