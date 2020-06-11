// 求斐波那契数列的第n项，

// 思路1:递归
function solution1(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return solution(n - 1) + solution(n - 2);
}
// 优化1：上面的递归存在大量的重复运行计算，可以保存某项的计算结果
function solution(n) {
    var memo = {};
    return fb(n);
    function fb(n) {
        if (n === 1) return 1;
        if (n === 2) return 2;
        if (memo[n]) return memo[n];

        var ans = fb(n - 1) + fb(n - 2);
        memo[n] = ans;
        return ans;
    }
}

// 思路2：另外一种思路是从下向上计算
function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    var dp = [0, 1,2]
    for (var i = 3; i <= n; ++i) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}
// 优化2： 上面需要O(n)的空间来保存每一项的计算结果，实际上中间项的变量是不需要保存的，我们只需要保存前两项的结果就可以了
function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    var a = 1
    var ans = 2
    for (var i = 3; i <= n; ++i) {
        var tmp = ans
        ans += a
        a = tmp
    }
    return ans
}

// 复杂度为O(logn)的数学解法
// 1 1
// 1 0  ^ n-1 矩阵的乘方


console.log(solution1(5))
console.log(solution(5))