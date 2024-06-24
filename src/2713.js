/**
 * @param {number[][]} mat
 * @return {number}
 */
// dfs + 缓存
var maxIncreasingCells = function (mat) {
    const m = mat.length
    const n = mat[0].length

    const cache = new Array(m).fill(0).map(() => new Array(n).fill(-1))

    const coords = []
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            coords.push([i, j])
            // max = Math.max(max, dfs(i, j))
        }
    }
    coords.sort((a, b) => {
        return mat[a[0]][a[1]] - mat[b[0]][b[1]]
    })
    let max = 0
    for (const [i, j] of coords) {
        max = Math.max(max, dfs(i, j))
    }



    return max
    function dfs(i, j) {
        if (cache[i][j] !== -1) return cache[i][j]
        let max = 0
        const val = mat[i][j]
        for (let k = 0; k < m; ++k) {
            if (mat[k][j] > val) {
                max = Math.max(dfs(k, j), max)
            }
        }
        for (let k = 0; k < n; ++k) {
            if (mat[i][k] > val) {
                max = Math.max(dfs(i, k), max)
            }
        }
        cache[i][j] = max + 1
        return max + 1
    }
};

var maxIncreasingCells = function (mat) {
    // 将默认字典转换为普通对象，并在不存在键时初始化为空数组
    let g = {};
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            let x = mat[i][j];
            if (!g[x]) {
                g[x] = [];
            }
            g[x].push([i, j]);  // 相同元素放在同一组，统计位置
        }
    }

    let rowMax = new Array(mat.length).fill(0);
    let colMax = new Array(mat[0].length).fill(0);

    // 将对象按键排序，并处理每组位置
    let sortedKeys = Object.keys(g).sort((a, b) => a - b);
    for (let key of sortedKeys) {
        let pos = g[key];
        // 先把所有 f 值都算出来，再更新 rowMax 和 colMax
        let fs = pos.map(([i, j]) => Math.max(rowMax[i], colMax[j]) + 1);
        for (let k = 0; k < pos.length; k++) {
            let [i, j] = pos[k];
            let f = fs[k];
            rowMax[i] = Math.max(rowMax[i], f);  // 更新第 i 行的最大 f 值
            colMax[j] = Math.max(colMax[j], f);  // 更新第 j 列的最大 f 值
        }
    }

    return Math.max(...rowMax);
}

var mat = [[3, 1], [3, 4]]
mat = [[1, 1], [1, 1]]
mat = [[3, 1, 6], [-9, 5, 7]]
mat = [[-3], [8], [7]]
mat = [[39, -7, 48, -13, -23, 34, 34, 13, 23, -14, -49, 24, 34, 1, 19, 47, -36, 29, -1, 1, -50, 42, 27, 11, -5, -37, 20, 38, 43, 3, -23, -41, 22]]
var ans = maxIncreasingCells(mat)
console.log(ans)