/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
// 正方形最小边长为0，最大边长为max(m,n)
// 使用二分枚举边长
var maxSideLength = function (mat, threshold) {
    const m = mat.length
    const n = mat[0].length
    let l = 0
    let r = Math.min(m, n)

    while (l <= r) {
        const mid = (l + r) >> 1
        if (check(mid)) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return r
    function check(v) {
        for (let i = 0; i <= m - v; ++i) {
            for (let j = 0; j <= n - v; ++j) {
                if (calc(i, j, v) <= threshold) {
                    return true
                }
            }
        }
        return false
    }
    function calc(x, y, v) {
        let sum = 0
        for (let i = x; i < x + v; ++i) {
            for (let j = y; j < y + v; ++j) {
                sum += mat[i][j]
            }
        }
        return sum

    }
};
// 在上面的check函数中，使用的BF，计算会超时，可以尝试使用前缀和优化区域内的求和公式
var maxSideLength = function (mat, threshold) {
    const m = mat.length
    const n = mat[0].length
    let l = 0
    let r = Math.min(m, n)

    const preSums = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; ++i) {
        preSums[i][0] = mat[i][0]
        for (let j = 1; j < n; ++j) {
            preSums[i][j] = mat[i][j] + preSums[i][j - 1]
        }
    }

    while (l <= r) {
        const mid = (l + r) >> 1
        if (check(mid)) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return r
    function check(v) {
        for (let i = 0; i <= m - v; ++i) {
            for (let j = 0; j <= n - v; ++j) {
                if (calc(i, j, v) <= threshold) {
                    return true
                }
            }
        }
        return false
    }
    function calc(x, y, v) {
        let sum = 0
        for (let i = x; i < x + v; ++i) {
            const list = preSums[i]
            sum += list[y + v - 1] - (y > 0 ? list[y - 1] : 0)
        }
        return sum
    }
}
var mat = [[1, 1, 3, 2, 4, 3, 2], [1, 1, 3, 2, 4, 3, 2], [1, 1, 3, 2, 4, 3, 2]], threshold = 4
// mat = [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], threshold = 1
var ans = maxSideLength(mat, threshold)
console.log(ans)