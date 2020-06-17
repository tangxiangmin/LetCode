//给你一根长度为n的绳子，请把绳子剪成m段（m、n都是整数，n>1,m>1），
// 每段绳子的长度记为 k[0], k[1], k[2], …, k[m]。
// 请问 k[0] * k[1] * k[2] * … * k[m] 可能的最大乘积是多少？
// 例如，当绳子的长度为8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

// 思路：动态规划
// dp[n] = max([i from 0 to n ... dn[n-i]*dp[i]])
function solution(n) {
    if (n <= 0) return 0;
    var dp = [0, 1, 2, 3];
    for (var i = 4; i <= n; ++i) {
        var ans = [];
        for (var j = 1; j < i; ++j) {
            ans.push(dp[j] * dp[i - j]);
        }
        dp[i] = Math.max(...ans);
    }
    return dp[n];
}

// 思路2：贪婪算法
// 通过数据论证，当n>=5时，2(n-2)>1*n 且3(n-3)>1*n，且3(n-3) > 2(n-2)，因此需要尽可能将绳子剪成长度为3;
// 当长度为4时，2*2 > 1 * 3，因此需要单独处理余数为4的情况
function solution(n) {
    if (n < 2) return 0;
    if (n === 2) return 1;
    if (n === 3) return 2;

    // 尽可剪成长度为3
    var timeOf3 = Math.floor(n / 3);

    // 最后长度为4，则不能剪成1*3, 而是剪成2*2
    if (n % 3 === 1) {
        timeOf3 -= 1;
    }
    var timeOf2 = Math.floor((n-timeOf3*3) / 2)
    // 所有子段乘积
    return Math.pow(3, timeOf3) * Math.pow(2, timeOf2)
}

console.log(solution(8)); // 18
