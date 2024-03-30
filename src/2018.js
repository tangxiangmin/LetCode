/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// BF
var placeWordInCrossword = function (board, word) {
    const m = board.length
    const n = board[0].length
    const len = word.length
    const EMPTY = ' '

    // 尝试在第(i,j)个格子放入word[index]的字符，如果index===word.length 说明字符可以完全放入board，然后判断上下和左右的空格

    // 横向摆放
    function row(i, j, index) {
        if (j >= n) return index === len
        if (index == len) {
            // 下一个是#
            return board[i][j] === '#'
        }
        // 前一个是#
        if (index === 0 && j > 0 && board[i][j - 1] !== '#') return false
        if (board[i][j] !== EMPTY && board[i][j] !== word[index]) return false
        return row(i, j + 1, index + 1)
    }


    function rowReverse(i, j, index) {
        if (j < 0) return index === len
        if (index == len) {
            // 下一个是#
            return board[i][j] === '#'
        }
        // 前一个是#
        if (index === 0 && j < n - 1 && board[i][j + 1] !== '#') return false
        if (board[i][j] !== EMPTY && board[i][j] !== word[index]) return false
        return rowReverse(i, j - 1, index + 1)
    }

    function col(i, j, index) {
        if (i >= m) return index === len
        if (index === len) {
            return board[i][j] === '#'
        }
        if (index === 0 && i > 0 && board[i - 1][j] !== '#') return false
        if (board[i][j] !== EMPTY && board[i][j] !== word[index]) return false

        return col(i + 1, j, index + 1)
    }

    function colReverse(i, j, index) {
        if (i < 0) return index === len
        if (index === len) {
            return board[i][j] === '#'
        }
        if (index === 0 && i < m - 1 && board[i + 1][j] !== '#') return false
        if (board[i][j] !== EMPTY && board[i][j] !== word[index]) return false

        return colReverse(i - 1, j, index + 1)
    }


    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {

            if (row(i, j, 0)) {
                return true
            }
            if (col(i, j, 0)) {
                return true
            }
            if (colReverse(i, j, 0)) {
                return true
            }
      
            if (rowReverse(i, j, 0)) {
                return true
            }
        }
    }
    return false
};
var board = [["#", " ", "#"], [" ", " ", "#"], ["#", "c", " "]], word = "abc"
board = [[" ", "#", "a"], [" ", "#", "c"], [" ", "#", "a"]], word = "ac"
board = [["#", " ", "#"], [" ", " ", "#"], ["#", " ", "c"]], word = "ca"
board = [
    ["#", " ", "#"],
    ["#", " ", "#"],
    ["#", " ", "c"]], word = "ca" // true
var ans = placeWordInCrossword(board, word)
console.log(ans)