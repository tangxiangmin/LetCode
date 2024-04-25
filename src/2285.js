/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
// 贪心，边越多，数字越大，这样才能保证边的值更大
var maximumImportance = function (n, roads) {
    const arr = new Array(n).fill(0).map((_, index) => {
        return { cnt: 0, index }
    })
    for (const [a, b] of roads) {
        arr[a].cnt++
        arr[b].cnt++
    }
    arr.sort((a, b) => b.cnt - a.cnt)
    const scores = []
    for (const { index } of arr) {
        scores[index] = n--
    }

    let ans = 0
    for (const [a, b] of roads) {
        ans += scores[a] + scores[b]
    }
    return ans

};
var n = 5, roads = [[0, 1], [1, 2], [2, 3], [0, 2], [1, 3], [2, 4]]
var ans = maximumImportance(n, roads)
console.log(ans)