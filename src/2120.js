/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
    const [y, x] = startPos
    const len = s.length

    const ans = []
    for (let i = 0; i < len; ++i) {
        ans[i] = move(i, x, y)
    }
    return ans

    function move(i, x, y) {
        let ans = 0
        for (; i < len; ++i) {
            const ch = s[i]
            if (ch === 'L') {
                x--
            } else if (ch == 'R') {
                x++
            } else if (ch === 'U') {
                y--
            } else if (ch === 'D') {
                y++
            }
            if (x < 0 || x >= n || y < 0 || y >= n) {
                break
            }
            ans++
        }
        return ans
    }
};