/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 思路1：回溯
var exist = function (board, word) {
    var r = board.length
    if (!r) return false
    var c = board[0].length
    var count = 0
    var target = word[count++]

    var entryList = []
    var visited = []
    // 找到首字母符合条件的坐标
    for (var i = 0; i < r; ++i) {
        var row = Array(c).fill(0)
        visited.push(row)
        for (var j = 0; j < c; ++j) {
            var ch = board[i][j]
            if (target === ch) {
                entryList.push([i, j])
            }
        }
    }

    var flag = false
    function backtrack(i, j, index) {
        if (i < 0 || i >= r || j < 0 || j >= c || index >= word.length) return

        if (visited[i][j]) return

        if (board[i][j] !== word[index]) return

        if (index === word.length - 1) {
            flag = true
            return
        }
        visited[i][j] = true
        !flag && backtrack(i, j + 1, index + 1)
        !flag && backtrack(i, j - 1, index + 1)
        !flag && backtrack(i + 1, j, index + 1)
        !flag && backtrack(i - 1, j, index + 1)
        visited[i][j] = false
    }

    // 从首字母的位置开始，看看能否找到符合条件的
    for (var entry of entryList) {
        if (flag) {
            return true
        }
        const [i, j] = entry
        backtrack(i, j, 0)
    }
    return flag
};

var board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
]
var word = 'ABCCED'

// board = [
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"]]
// word = "ABCB"
var res = exist(board, word)
console.log(res)