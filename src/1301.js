/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function (board) {
    const m = board.length
    const n = board[0].length
    const mod = 10 ** 9 + 7

    const cache = new Array(m).fill(0).map(() => new Array(n).fill(0))
    const ans = dfs(m - 1, n - 1)
    return ans

    function dfs(i, j) {
        if (i === 0 && j === 0) {
            return [0, 1]
        }
        if (i < 0 || j < 0) return [0, 0]
        const cur = board[i][j]
        if (cur == 'X') return [0, 0]

        if (cache[i][j]) return cache[i][j]

        let a = dfs(i - 1, j - 1)
        let b = dfs(i - 1, j)
        let c = dfs(i, j - 1)

        let max = 0
        let cnt = 0
        const list = [a, b, c]
        for (let i = 0; i < 3; ++i) {
            const [v, p] = list[i]
            if (max < v) {
                max = v
                cnt = p
            } else if (max === v) {
                cnt += p
            }
        }
        if (cnt === 0) {
            return cache[i][j] = [0, 0]
        }

        return cache[i][j] = [max + (cur === 'S' ? 0 : +cur) % mod, cnt % mod]
    }

};

var board = [
    "E23",
    "2X2",
    "12S"]
board = ["E12", "1X1", "21S"]
board = ["E11", "XXX", "11S"]
var ans = pathsWithMaxScore(board)
console.log(ans)