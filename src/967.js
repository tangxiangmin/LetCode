/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
// 模拟n位长度的数字
var numsSameConsecDiff = function (n, k) {
    const ans = new Set()
    for (let i = 1; i <= 9; ++i) {
        dfs(i, '')
    }
    return Array.from(ans)
    function dfs(bit, prev) {
        if (bit < 0 || bit > 9) return
        if (prev.length === n) {
            ans.add(+prev)
            return
        }
        dfs(bit + k, prev + bit)
        dfs(bit - k, prev + bit)
    }
};
var n = 3, k = 7

var ans = numsSameConsecDiff(n, k)
console.log(ans)