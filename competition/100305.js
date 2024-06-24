/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function (n, k) {
    const arr = new Array(n).fill(1)
    let preSums = [arr[0]]
    const mod = 10 ** 9 + 7
    for (let i = 1; i < n; ++i) {
        preSums[i] = preSums[i - 1] + arr[i]
    }
    while (k > 0) {
        k--
        for (let i = 1; i < n; ++i) {
            arr[i] = preSums[i]
            preSums[i] = (preSums[i - 1] + arr[i]) % mod
        }
    }
    return arr[n - 1] % mod
};
var n = 4, k = 5
n = 36, k = 39
var ans = valueAfterKSeconds(n, k)
console.log(ans)