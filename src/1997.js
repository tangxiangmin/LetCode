/**
 * @param {number[]} nextVisit
 * @return {number}
 */
// 递归模拟，某些测试用例会爆栈
var firstDayBeenInAllRooms = function (nextVisit) {
    let ans = 0
    const n = nextVisit.length
    const visited = new Array(n).fill(0)

    function dfs(i) {
        visited[i] += 1
        if (visited.every(row => row > 0)) {
            return
        }
        const next = visited[i] % 2 == 0 ? (i + 1) % n : nextVisit[i]
        ans++
        dfs(next)

    }
    dfs(0)
    return ans

};
// 改成循环，还是会超时
var firstDayBeenInAllRooms = function (nextVisit) {
    let ans = 0
    const n = nextVisit.length
    const visited = new Array(n).fill(0)

    let i = 0
    while (true) {
        visited[i] += 1
        if (visited.every(row => row > 0)) {
            return ans
        }
        const next = visited[i] % 2 == 0 ? (i + 1) % n : nextVisit[i]
        ans++
        i = next
    }
}
// 参考题解，dp + 前缀和
// dp[i] 表示从0号房间出发，首次到达i+1所花费的天数
var firstDayBeenInAllRooms = function(nextVisit) {
    const mod = 1e9 + 7;
    const len = nextVisit.length;
    const dp = new Array(len).fill(0);

    // 初始化原地待一天 + 访问下一个房间一天
    dp[0] = 2; 
    for (let i = 1; i < len; i++) {
        const to = nextVisit[i];
        dp[i] = 2 + dp[i - 1];
        if (to) {
            // 避免负数
            dp[i] = (dp[i] - dp[to - 1] + mod) % mod;
        }
        dp[i] = (dp[i] + dp[i - 1]) % mod;
    }
    return dp[len - 2]; //题目保证n >= 2
};

var nextVisit = [0, 0]
// nextVisit = [0, 0, 2]
nextVisit = [0, 1, 2, 0]
nextVisit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var ans = firstDayBeenInAllRooms(nextVisit)
console.log(ans)