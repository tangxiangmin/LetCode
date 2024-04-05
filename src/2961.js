/**
 * @param {number[][]} variables
 * @param {number} target
 * @return {number[]}
 */
var getGoodIndices = function (variables, target) {
    let ans = []
    const n = variables.length
    for (let i = 0; i < n; ++i) {
        const [a, b, c, m] = variables[i]

        if (pow(pow(a, b, 10), c, m) == target) {
            ans.push(i);
        }

    }

    return ans
    function pow(x, n, mod) {
        var res = 1;
        for (; n > 0; n = Math.floor(n / 2)) {
            if (n % 2 > 0)
                res = res * x % mod;
            x = x * x % mod;
        }
        return res;
    }
};
var variables = [[30, 5, 43, 2], [15, 50, 35, 41], [45, 34, 41, 32], [14, 37, 33, 13], [6, 8, 1, 53], [37, 1, 12, 52], [42, 37, 2, 52], [9, 2, 15, 3], [31, 12, 21, 24], [52, 24, 6, 12], [51, 35, 21, 52], [30, 18, 10, 2], [27, 31, 50, 27], [29, 25, 26, 32], [15, 38, 43, 17], [22, 12, 16, 43], [48, 9, 15, 6], [41, 26, 22, 21], [41, 49, 52, 26], [53, 38, 9, 33]], target = 1

var ans = getGoodIndices(variables, target)
console.log(ans)