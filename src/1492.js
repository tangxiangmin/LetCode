/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {

    const arr = []
    for (let i = n; i >= 1; --i) {
        if (n % i === 0) {
            arr.push(n / i)
        }
    }
    return k - 1 < arr.length ? arr[k - 1] : -1
};
var n = 12, k = 3
var ans = kthFactor(n, k)
console.log(ans)