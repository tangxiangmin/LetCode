/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
// 会占用大量的内存，空间复杂度无法通过
var numberOfPaths = function (grid, k) {
    const m = grid.length
    const n = grid[0].length
    const cache = new Array(m).fill(0).map(() => new Array(n).fill(0))
    const mod = 10 ** 9 + 7

    const list = dfs(0, 0)
    let cnt = 0
    for (const sum of list) {
        cnt = (cnt + (sum % k === 0 ? 1 : 0)) % mod
    }

    return cnt % mod
    function dfs(i, j) {
        if (i === m - 1 && j === n - 1) {
            return [grid[i][j]]
        }
        if (i === m || j === n) {
            return []
        }
        if (cache[i][j]) return cache[i][j]

        const list = []
        const cur = grid[i][j]
        for (const sum of dfs(i + 1, j)) {
            list.push(sum + cur)
        }
        for (const sum of dfs(i, j + 1)) {
            list.push(sum + cur)
        }
        return cache[i][j] = list
    }
};
// 优化
var numberOfPaths = function (grid, k) {
    const m = grid.length
    const n = grid[0].length
    const cache = new Array(m).fill(0).map(() => new Array(n).fill(0))
    const MOD = 10 ** 9 + 7;
    const dfs = (i, j) => {
        if (cache[i][j]) return cache[i][j]
        const g = grid[i][j];
        const res = new Array(k).fill(0); // 空间优化

        if (i === 0 && j === 0) {
            res[g % k] = 1;
            cache[i][j] = res
            return res;
        }

        if (i > 0) {
            const up = dfs(i - 1, j);
            for (let v = 0; v < k; v++) {
                const newV = (v + g) % k;
                res[newV] = (res[newV] + up[v]) % MOD;
            }
        }

        if (j > 0) {
            const left = dfs(i, j - 1);
            for (let v = 0; v < k; v++) {
                const newV = (v + g) % k;
                res[newV] = (res[newV] + left[v]) % MOD;
            }
        }

        cache[i][j] = res
        return res;
    };

    return dfs(grid.length - 1, grid[0].length - 1)[0];
}
var grid = [[5, 2, 4], [3, 0, 5], [0, 7, 2]], k = 3
grid = [[0, 0]], k = 5
grid = [[7, 3, 4, 9], [2, 3, 6, 2], [2, 3, 7, 0]], k = 1
var ans = numberOfPaths(grid, k)
console.log(ans)