/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 思路1：bfs, 貌似很难处理同一个单元格里面的元素只能用一次的问题
var exist = function (board, word) {
    var r = board.length
    if (!r) return false
    var c = board[0].length
    var count = 0
    var target = word[count++]

    var visited = {} // todo 同一个单元格里面的元素只能用一次
    var queue = []

    // 找到首字母符合条件的坐标
    for (var i = 0; i < r; ++i) {
        for (var j = 0; j < c; ++j) {
            var ch = board[i][j]
            if (target === ch) {
                add([i, j])
            }
        }
    }

    while (queue.length && count < word.length) {
        target = word[count++]
        var len = queue.length
        for (var i = 0; i < len; ++i) {
            var pos = queue.shift()
            // 将下一轮需要遍历的字符坐标加入队列
            var [r0, c0] = pos
            if (c0 - 1 >= 0 && board[r0][c0 - 1] === target) {
                add([r0, c0 - 1])
            }
            if (c0 + 1 < c && board[r0][c0 + 1] === target) {
                add([r0, c0 + 1])
            }
            if (r0 - 1 >= 0 && board[r0 - 1][c0] === target) {
                add([r0 - 1, c0])
            }
            if (r0 + 1 < r && board[r0 + 1][c0] === target) {
                add([r0 + 1, c0])
            }
        }
    }
    return count === word.length && queue.length > 0

    function add(pos) {
        queue.push(pos)
    }
};

var board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
]
var word = 'ABCCED'
// board = [["a"]]
// word = "a"

board = [["a", "a"]]
word = "aa"
board = [["a", "b"]]
word = "aba"

board = [
    ["C", "A", "A"],
    ["A", "A", "A"],
    ["B", "C", "D"]
]
word = "AAB"
var res = exist(board, word)
console.log(res)