/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    if (N <= 1) {
        return n
    }
    return fib(N - 1) + fib(N - 2)
};


var fib = function (N) {
    var dp = [0, 1]
    for (var i = 2; i <= N; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[N]
};
