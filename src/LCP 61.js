/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
// 先求出趋势，然后取相同的最长子数组
var temperatureTrend = function (temperatureA, temperatureB) {

    const a = format(temperatureA)
    const b = format(temperatureB)

    const n = a.length
    let l = 0
    let r = 0
    let ans = 0
    while (r < n) {
        if (a[r] !== b[r]) {
            l = r + 1
        }
        r++
        ans = Math.max(ans, r - l)
    }
    return ans
    function format(arr) {
        const n = arr.length
        const list = []
        for (let i = 1; i < n; ++i) {
            const a = arr[i - 1]
            const b = arr[i]
            const val = a > b ? 1 : a === b ? 0 : -1
            list.push(val)
        }
        return list
    }
};
// 实际上不需要format也可以，直接1次循环判断
var temperatureTrend = function (temperatureA, temperatureB) {
    const n = temperatureA.length
    let l = 1
    let r = 1
    let ans = 0
    while (r < n) {
        const a = format(temperatureA[r], temperatureA[r - 1])
        const b = format(temperatureB[r], temperatureB[r - 1])
        if (a !== b) {
            l = r + 1
        }
        r++
        ans = Math.max(ans, r - l)
    }
    return ans
    function format(a, b) {
        return a > b ? 1 : a === b ? 0 : -1
    }
};


var temperatureA = [21, 18, 18, 18, 31], temperatureB = [34, 32, 16, 16, 17]
temperatureA = [5, 10, 16, -6, 15, 11, 3], temperatureB = [16, 22, 23, 23, 25, 3, -16]
var ans = temperatureTrend(temperatureA, temperatureB)
console.log(ans)
