/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
// 每个值只能在[1,6]之间
var missingRolls = function (rolls, mean, n) {
    const m = rolls.length
    const mSum = rolls.reduce((acc, row) => acc + row, 0)
    const sum = mean * (m + n) - mSum

    if (sum > n * 6 || sum < n) return []

    const avg = Math.floor(sum / n)
    let left = sum % n
    const ans = []
    for (let i = 0; i < n; ++i) {
        let v = avg
        if (left > 0) {
            v++
            left--
        }
        ans.push(v)
    }
    return ans
};
