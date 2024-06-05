/**
 * @param {number} n
 * @return {number}
 */

var countVowelStrings = function (n) {
    const chars = ['a', 'e', 'i', 'o', 'u']
    const cache = {}

    // 以prev结尾的开头的可以组成长度为n的字符长度
    return dfs(n, '')
    function dfs(n, prev) {
        const key = `${n},${prev}`
        if (cache[key]) return cache[key]
        if (n === 0) return 1
        const idx = prev ? chars.indexOf(prev) : 0

        let ans = 0
        for (let i = idx; i < chars.length; ++i) {
            ans += dfs(n - 1, chars[i])
        }
        return cache[key] = ans
    }
};
var n = 1
n = 2
n = 33
var ans = countVowelStrings(n)
console.log(ans)