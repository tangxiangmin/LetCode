/**
 * @param {number[][]} dungeon
 * @return {number}
 */
// 思路，dfs(i,j)表示，到达[i,j]需要的最低血量，进入每个单元格时需要保证至少1滴血
var calculateMinimumHP = function (dungeon) {
    const m = dungeon.length
    const n = dungeon[0].length

    const cache = new Array(m).fill(0).map(() => new Array(n).fill(0))
    const ans = dfs(0, 0)
    return ans
    // 到达[i,j]需要的最低血量
    function dfs(i, j) {
        if (i === m || j === n) return Infinity
        if (i === m - 1 && j == n - 1) {
            return cache[i][j] = Math.max(1 - dungeon[i][j], 1)
        }
        if (cache[i][j]) return cache[i][j]
        const cur = dungeon[i][j]
        // 保证存活，至少需要1滴血
        return cache[i][j] = Math.max(Math.min(dfs(i + 1, j), dfs(i, j + 1)) - cur, 1)
    }
};
var dungeon = [[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]

dungeon = [[0]]
dungeon = [[100]]
var ans = calculateMinimumHP(dungeon)
console.log(ans)