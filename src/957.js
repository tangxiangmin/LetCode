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

// 思路2：记住某个房间的状态，直至出现重复，一共只有2^8个组合，然后会在某个位置开始循环，因此使用哈希表记住循环开始的位置
var prisonAfterNDays = function (cells, N) {
    const cache = {}
    const stack = []
    const n = 8 // 只有8个房间
    let cnt = 0 // 天数
    while (cnt < N) {
        const key = cells.join('')
        if (cache[key] !== undefined) {
            const day = cache[key]
            const idx = day + ((N - day) % (cnt - day)) - 1
            if (idx < 0) {
                idx = stack.length - 1
            }
            return stack[idx]
        }
        cache[key] = cnt
        let ans = [0]
        for (let i = 1; i < n - 1; ++i) {
            if (cells[i - 1] === cells[i + 1]) {
                ans[i] = 1
            } else {
                ans[i] = 0
            }
        }
        ans.push(0)
        cells = ans
        stack.push(ans)
        cnt++
    }
    return cells
}

var cells = [0, 1, 0, 1, 1, 0, 0, 1], N = 7
cells = [1, 0, 0, 1, 0, 0, 1, 0], N = 1000000000 // [0,0,1,1,1,1,1,0]
// cells = [0, 1, 1, 1, 0, 0, 0, 0], N = 99
cells = [0, 0, 0, 1, 1, 0, 1, 0], N = 574
var res = prisonAfterNDays(cells, N)
console.log(res)