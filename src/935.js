/**
 * @param {number} n
 * @return {number}
 */
// BF,n大了会超时
var knightDialer = function (n) {
    // 在某个键位上可以跳转到的下一个位置
    const next = {
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [3, 9, 0],
        5: [],
        6: [1, 7, 0],
        7: [2, 6],
        8: [1, 3],
        9: [2, 4],
        0: [4, 6]
    }

    let ans = new Set()
    for (let i = 0; i < 10; ++i) {
        dfs(i, '')
    }

    return ans.size
    function dfs(i, prev) {
        if (prev.length === n) {
            ans.add(prev)
            return
        }

        for (const j of next[i]) {
            dfs(j, prev + i)
        }
    }
};

var knightDialer = function (n) {
    // 在某个键位上可以跳转到的下一个位置
    const next = {
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [3, 9, 0],
        5: [],
        6: [1, 7, 0],
        7: [2, 6],
        8: [1, 3],
        9: [2, 4],
        0: [4, 6]
    }

    const mod = 10 ** 9 + 7
    const map = {}
    let ans = 0
    for (let i = 0; i < 10; ++i) {
        ans += dfs(i, n)
    }
    return ans % mod
    function dfs(i, k) {
        const key = `${i},${k}`
        if (k === 1) return 1
        if (map[key]) return map[key]
        let cnt = 0

        for (const j of next[i]) {
            cnt += dfs(j, k - 1)
        }
        map[key] = cnt % mod
        return map[key]
    }
};
var n = 1
n = 2
n = 3131
var ans = knightDialer(n)
console.log(ans)