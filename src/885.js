/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {

    let x = cStart
    let y = rStart

    let dir = 0 // 0向右、1向下、2向左、3向上

    let l = x, r = x, t = y, b = y // 四周的边界

    const ans = []

    add(x, y)
    // let cnt = 0
    while (true) {
        // cnt++
        // if (cnt > 20) break
        // console.log('dir', dir)

        if (ans.length === rows * cols) {
            return ans
        }
        if (dir === 0) {
            r++
            x++
            for (; x <= r; ++x) {
                add(x, y)
            }
            x--
            dir = 1
        } else if (dir === 1) {
            b++
            y++
            for (; y <= b; ++y) {
                add(x, y)
            }
            y--
            dir = 2
        } else if (dir === 2) {
            l--
            x--
            for (; x >= l; --x) {
                add(x, y)
            }
            x++
            dir = 3
        } else if (dir === 3) {
            t--
            y--
            for (; y >= t; --y) {
                add(x, y)
            }
            y++
            dir = 0
        }

    }

    function add(x, y) {
        if (x >= 0 && x < cols && y >= 0 && y < rows) {
            ans.push([y, x])
        }
    }

};

var rows = 1, cols = 4, rStart = 0, cStart = 0
rows = 5, cols = 6, rStart = 1, cStart = 4
var ans = spiralMatrixIII(rows, cols, rStart, cStart)

console.log(JSON.stringify(ans))