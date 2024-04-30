/**
 * @param {number[][]} bombs
 * @return {number}
 */
// 思路，针对每个元素进行dfs判断
var maximumDetonation = function (bombs) {
    let ans = 0
    const n = bombs.length
    let used = {}
    for (let i = 0; i < n; ++i) {
        const [x, y, r] = bombs[i]
        ans = Math.max(dfs(i, x, y, r), ans)
        used = {}
    }
    return ans

    function dfs(i, x, y, r) {
        if (used[i]) return 0
        let cnt = 1
        used[i] = true

        const radius = r * r
        for (let i = 0; i < n; ++i) {
            const [x1, y1, r1] = bombs[i]
            const a = x1 - x
            const b = y1 - y
            if (a * a + b * b <= radius) {
                cnt += dfs(i, x1, y1, r1)
            }
        }

        return cnt
    }
}



var bombs = [[4, 4, 3], [4, 4, 3]]
var ans = maximumDetonation(bombs)
console.log(ans)