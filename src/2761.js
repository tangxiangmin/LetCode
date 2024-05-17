/**
 * @param {number} n
 * @return {number[][]}
 */

const MX = 10 ** 6
var primes = []
const np = {}
for (var i = 2; i <= MX; i++) {
    if (!np[i]) {
        primes.push(i);
        for (var j = i; j <= MX / i; j++) {
            np[i * j] = true
        }
    }
}

var findPrimePairs = function (n) {
    let ans = []
    for (let i = 2; i <= n / 2; ++i) {
        if (!np[i] && !np[n - i]) {
            ans.push([i, n - i])
        }
    }
    return ans
};
var n = 10
var ans = findPrimePairs(n)
console.log(ans)