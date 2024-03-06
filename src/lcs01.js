/**
 * @param {number} n
 * @return {number}
 */
// 思路：dfs，有些测试用例会超时
var leastMinutes = function (n) {
    let min = Infinity
    // per，每分钟可以下载几个；time, 当前第几分钟；sum, 累计已经下载的数量
    function dfs(per, time, sum) {
        if (sum >= n) {
            min = Math.min(min, time)
            return
        }
        if (per >= n) {
            min = Math.min(min, time + 1)
            return
        }
        if (time > min) {
            return
        }

        // 在每一步，都可以选择是按step数量下载插件，还是操作带宽加倍的操作
        dfs(per * 2, time + 1, sum)
        dfs(per, time + 1, sum + per)
    }
    dfs(1, 0, 0)
    return min
};

var n = 2
n = 4
n = 100000
var ans = leastMinutes(n)
console.log(ans)