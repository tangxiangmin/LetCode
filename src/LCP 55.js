/**
 * @param {number[]} time
 * @param {number[][]} fruits
 * @param {number} limit
 * @return {number}
 */
var getMinimumTime = function (time, fruits, limit) {
    let ans = 0
    for (const [type, num] of fruits) {
        ans += Math.ceil(num / limit) * time[type]
    }
    return ans
};