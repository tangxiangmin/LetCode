/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
// 本身是按行来处理，由于n很大，只计算那些有占位情况的行，其余行都可以安排2家
var maxNumberOfFamilies = function (n, reservedSeats) {

    const seats = {}
    for (const [i, j] of reservedSeats) {
        if (!seats[i]) {
            seats[i] = new Array(11).fill(0)
        }
        seats[i][j] = 1
    }
    let ans = 0
    for (const key in seats) {
        ans += arrange(key)
    }
    // 没有占位情况，直接返回2
    ans += (n - Object.keys(seats).length) * 2

    return ans

    // 一行最多安排两个家庭
    function arrange(i) {
        if (!seats[i]) return 2
        const rows = seats[i]
        if (check(rows, 2, 9)) {
            return 2
        }
        if (check(rows, 2, 5) || check(rows, 6, 9) || check(rows, 4, 7)) {
            return 1
        }
        return 0
    }

    function check(rows, i, j) {
        for (; i <= j; ++i) {
            if (rows[i] === 1) return false
        }
        return true
    }
};
var n = 3, reservedSeats = [[1, 2], [1, 3], [1, 8], [2, 6], [3, 1], [3, 10]]
n = 1000000000, reservedSeats = []
var ans = maxNumberOfFamilies(n, reservedSeats)
console.log(ans)