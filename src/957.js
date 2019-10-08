/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
// 思路1：暴力，会超时
var prisonAfterNDays = function (cells, N) {
    for (var i = 1; i <= N; ++i) {
        var arr = []
        arr[0] = 0
        arr[cells.length - 1] = 0
        for (var j = 1; j < cells.length; ++j) {
            var prev = cells[j - 1]
            var next = cells[j + 1]
            arr[j] = prev === next ? 1 : 0
        }
        cells = arr
    }
    return cells
};

// 思路2：记住某个房间的状态，直至出现重复
var prisonAfterNDays = function (cells, N) {
    var map = {}
    var origin = cells
    for (var i = 1; i <= N; ++i) {
        var key = createKey(cells)
        if (map[key]) {
            // 一个周期的天数 
            var t = i - 1
            N = N % t
            cells = origin
            while (N >= 1) {
                N--
                cells = getNextDay(cells)
            }
            break
        } else {
            var arr = getNextDay(cells)
            map[key] = arr
            cells = arr
            console.log(arr.join(''))
        }
    }
    return cells

    function createKey(arr) {
        return arr.join('')
    }
    function getNextDay(cells) {
        var len = cells.length
        var arr = []
        arr[0] = 0
        arr[len - 1] = 0
        for (var j = 1; j < len; ++j) {
            var prev = cells[j - 1]
            var next = cells[j + 1]
            arr[j] = prev === next ? 1 : 0
        }
        return arr
    }
}

var cells = [0, 1, 0, 1, 1, 0, 0, 1], N = 7 
cells = [1, 0, 0, 1, 0, 0, 1, 0], N = 1000000000 // [0,0,1,1,1,1,1,0]
// cells = [0, 1, 1, 1, 0, 0, 0, 0], N = 99
var res = prisonAfterNDays(cells, N)
console.log(res)