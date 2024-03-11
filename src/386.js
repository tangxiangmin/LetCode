/**
 * @param {number} n
 * @return {number[]}
 */
// 很丑陋的解法
var lexicalOrder = function (n) {
    const ans = []
    for (let i = 1; i <= n; ++i) {
        ans.push(`${i}`)
    }
    ans.sort()
    return ans.map((i) => parseInt(i))
};
// 思路，一个数num * 10 还是小于n，就说明他是下一个字典序的数，
// dfs，从1到9开始，对于每一位，都在先序的时候将值加入到结果数组中
var lexicalOrder = function (n) {
    const ans = []
    function dfs(start, end) {
        for (let i = start; i <= n && i <= end; ++i) {
            ans.push(i)
            dfs(10 * i, 10 * (i + 1) - 1)
        }
    }
    dfs(1, 9)
    return ans
};

var n = 130
var ans = lexicalOrder(n)
console.log(ans)