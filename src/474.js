/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 简化为01背包
var findMaxForm = function (strs, m, n) {
    const len = strs.length
    const list = strs.map(str => calc(str))

    const cache = new Map()
    return dfs(0, 0, 0, 0)

    function dfs(i, cnt, a, b) {

        if (a > m || b > n) return 0
        if (i === len) return cnt

        const key = `${i},${cnt},${a},${b}`
        if (cache.has(key)) {
            return cache.get(key)
        }

        const [ca, cb] = list[i]

        const x = dfs(i + 1, cnt + 1, ca + a, cb + b) // 选择
        const y = dfs(i + 1, cnt, a, b) // 不选

        let ans = Math.max(x, y)

        cache.set(key, ans)
        return ans

    }

    // 统计字符串中0和1的个数
    function calc(str) {
        let a = 0
        const len = str.length
        for (const ch of str) {
            if (ch === '0') {
                a++
            }
        }
        return [a, len - a]
    }
};
var strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
// strs = ["10", "0", "1"], m = 1, n = 1
// strs = ["10", "0001", "111001", "1", "0"], m = 4, n = 3
// strs = ["0", "0", "1", "1"], m = 2, n = 2 //4
// strs = ["10", "0001", "111001", "1", "0"], m = 4, n = 3
strs = ["011", "1", "11", "0", "010", "1", "10", "1", "1", "0", "0", "0", "01111", "011", "11", "00", "11", "10", "1", "0", "0", "0", "0", "101", "001110", "1", "0", "1", "0", "0", "10", "00100", "0", "10", "1", "1", "1", "011", "11", "11", "10", "10", "0000", "01", "1", "10", "0"], m = 44, n = 39 // 45
var ans = findMaxForm(strs, m, n)
console.log(ans)