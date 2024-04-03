/**
 * @param {number[]} possible
 * @return {number}
 */
// 前缀和
var minimumLevels = function (possible) {
    const prevSum = []
    const n = possible.length
    let sum = 0
    for (let i = 0; i < n; ++i) {
        sum += possible[i] === 0 ? -1 : 1
        prevSum[i] = sum
    }
    for (let i = 0; i < n - 1; ++i) {
        let l = prevSum[i]
        let r = prevSum[n - 1] - l
        if (l > r) {
            return i + 1
        }
    }
    return -1
};
var possible = [1, 0, 1, 0]
possible = [1, 1, 1, 1, 1]
possible = [0, 0]
possible = [1, 1]
var ans = minimumLevels(possible)
console.log(ans)