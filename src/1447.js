/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {

    const ans = []
    for (let i = 1; i <= n; ++i) {
        for (let j = i + 1; j <= n; ++j) {
            if (gcd(j, i) == 1) {
                ans.push(`${i}/${j}`)
            }
        }
    }
    return ans

    function gcd(a, b) {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }
};

var n = 6
var ans = simplifiedFractions(n)
console.log(ans)