/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 动态规划
 */
var uniquePaths = function (m, n) {
    let map = new Map();

    function step(m, n) {
        if (m == 1) {
            return 1;
        }
        if (n == 1) {
            return 1;
        }
        let key = m + "," + n;

        if (map.has(key)) {
            return map.get(key);
        }

        let res = step(m - 1, n) + step(m, n - 1);

        map.set(key, res);

        return res;
    }

    return step(m, n);
};
var uniquePaths = function (m, n) {
    var dp = new Array(m).fill(0).map(() => new Array(n))

    for (let i = 0; i < n; ++i) {
        dp[0][i] = 1
    }
    for (let i = 0; i < m; ++i) {
        dp[i][0] = 1
    }

    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]

}

var m = 3, n = 7
m = 3, n = 2
// m = 23, n = 12

var res = uniquePaths(m, n)

console.log(res)