/**
 * @param {number[]} hours
 * @return {number}
 */
// 对所有数字都取%24
var countCompleteDayPairs = function (hours) {

    const n = hours.length
    for (let i = 0; i < n; ++i) {
        hours[i] %= 24
    }

    const map = {}
    for (const h of hours) {
        if (!map[h]) map[h] = 0
        map[h]++
    }

    let ans = 0
    for (const h of hours) {
        map[h]--

        for (const key in map) {
            const v = +key
            if (map[key] > 0 && (v + h) % 24 === 0) {
                ans += map[key]
            }
        }
    }
    return ans
};