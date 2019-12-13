/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
    var arr = []
    if (numRows <= 1) return s;

    for (var i = 0; i < numRows; ++i) {
        arr[i] = []
    }

    var dir = 1 // 只有向下和向上两个方向，1向下，-1斜向上
    // 遍历顺序为，dir为1时，向下读取numRows个字符；dir为-1时，第numRows-1和第2行每行一个字符
    var i = 0
    var col = 0
    var row = 0
    while (i < s.length) {
        if (dir === 1) {
            if (row < numRows) {
                arr[row][col] = s[i]
                i++
                row++
            } else {
                col++
                // 只有大于2行时才会切换
                if (numRows > 2) {
                    dir = -1
                    row -= 2
                } else {
                    row = 0
                }
            }
        } else {
            arr[row][col] = s[i]
            row--
            col++
            i++
            if (row <= 0) {
                dir = 1
            }
        }
    }
    var ans = ''
    arr.forEach(row => {
        row.forEach(item => {
            if (item !== undefined) {
                ans += item
            }
        })
    })
    return ans
};


var s = "LEETCODEISHIRING", numRows = 3 // LEE T COD E ISH I RIN G
s = "LEETCODEISHIRING", numRows = 4 // LEET C O DEIS H I RING
// s = "AB", numRows = 1
var res = convert(s, numRows)

console.log(res)
console.log(res === 'LDREOEIIECIHNTSG')