/**
 * @param {number[][]} grid
 * @return {number}
 */
// dfs模拟回溯，可以得到正确答案，但回溯时间复杂度很高
var cherryPickup = function (grid) {
    const m = grid.length
    const n = grid[0].length
    let ans = 0
    go()

    return ans

    function go() {
        dfs(0, 0, 0)
        function dfs(i, j, cnt) {
            if (i == m || j === n) return
            const val = grid[i][j]
            if (val === -1) {
                return
            }
            if (val === 1) {
                cnt++
                grid[i][j] = 0
            }

            if (i == m - 1 && j === n - 1) {
                back(cnt)
                if (val == 1) {
                    grid[i][j] = 1
                }
                return
            }


            dfs(i + 1, j, cnt)
            dfs(i, j + 1, cnt)

            if (val == 1) {
                grid[i][j] = 1
            }

        }
    }

    function back(sum) {
        dfs(m - 1, n - 1, sum)
        function dfs(i, j, cnt) {
            if (i < 0 || j < 0) return
            const val = grid[i][j]
            if (val === -1) {
                return
            }
            if (val === 1) {
                cnt++
                grid[i][j] = 0
            }
            if (i === 0 && j === 0) {
                ans = Math.max(ans, cnt)
                if (val == 1) {
                    grid[i][j] = 1
                }
                return
            }

            dfs(i - 1, j, cnt)
            dfs(i, j - 1, cnt)
            if (val == 1) {
                grid[i][j] = 1
            }
        }

    }
};
// 参考题解的动态规划
var cherryPickup = function (grid) {
    const n = grid.length;
    const f = new Array(n).fill(0).map(() => new Array(n).fill(-Number.MAX_VALUE));
    f[0][0] = grid[0][0];
    for (let k = 1; k < n * 2 - 1; ++k) {
        for (let x1 = Math.min(k, n - 1); x1 >= Math.max(k - n + 1, 0); --x1) {
            for (let x2 = Math.min(k, n - 1); x2 >= x1; --x2) {
                const y1 = k - x1, y2 = k - x2;
                if (grid[x1][y1] === -1 || grid[x2][y2] === -1) {
                    f[x1][x2] = -Number.MAX_VALUE;
                    continue;
                }
                let res = f[x1][x2]; // 都往右
                if (x1 > 0) {
                    res = Math.max(res, f[x1 - 1][x2]); // 往下，往右
                }
                if (x2 > 0) {
                    res = Math.max(res, f[x1][x2 - 1]); // 往右，往下
                }
                if (x1 > 0 && x2 > 0) {
                    res = Math.max(res, f[x1 - 1][x2 - 1]); //都往下
                }
                res += grid[x1][y1];
                if (x2 !== x1) { // 避免重复摘同一个樱桃
                    res += grid[x2][y2];
                }
                f[x1][x2] = res;
            }
        }
    }
    return Math.max(f[n - 1][n - 1], 0);
};


var grid = [[0, 1, -1], [1, 0, -1], [1, 1, 1]]
grid = [
    [1, 1, -1],
    [1, -1, 1],
    [-1, 1, 1]]
grid = [[1]]
grid = [
    [1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1]]
grid =
    [
        [1, 1, 1, 1, -1, -1, -1, 1, 0, 0],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 0, -1, 1, 1],
        [0, 0, 0, 0, 1, -1, 0, 0, 1, -1],
        [1, 0, 1, 1, 1, 0, 0, -1, 1, 0],
        [1, 1, 0, 1, 0, 0, 1, 0, 1, -1],
        [1, -1, 0, 1, 0, 0, 0, 1, -1, 1],
        [1, 0, -1, 0, -1, 0, 0, 1, 0, 0],
        [0, 0, -1, 0, 1, 0, 1, 0, 0, 1]]
var ans = cherryPickup(grid)
console.log(ans)