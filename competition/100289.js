/**
 * @param {string} s
 * @return {number}
 */
// 动态规划，dp[i]示前 i 个字符最少能分割成多少平衡子串
// dp[0] =0
// dp[i] = min(dp[i], dp[j]+1) j为[0,i-1]所枚举的最小值
// 属于划分型dp
var minimumSubstringsInPartition = function (s) {
    const n = s.length
    const dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= n; ++i) {
        const map = {}
        let x = 0
        let y = 0
        for (let j = i - 1; j >= 0; j--) {
            const ch = s[j]
            if (!map[ch]) map[ch] = 0
            map[ch]++
            if (map[ch] === 1) {
                x++
            }
            y = Math.max(y, map[ch])
            if (x * y === i - j) {
                dp[i] = Math.min(dp[i], dp[j] + 1)
            }
        }
    }
    console.log(dp)
    return dp[n]

};
var s = "abababaccddb"
// s = "fabccddg"
var ans = minimumSubstringsInPartition(s)
console.log(ans)