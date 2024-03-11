/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
// 参考的题解
var minimumPossibleSum = function(n, target) {
    const mod = 1000000007;
    const m = Math.floor(target / 2);
    if (n <= m) {
        return ((1 + n) * n / 2) % mod;
    }
    return (((1 + m) * m / 2) + (((target + target + (n - m) - 1) * (n - m) / 2))) % mod;
};
