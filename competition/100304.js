/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
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
var hours = [12, 12, 30, 24, 24]
hours = [72,48,24,3]
var ans = countCompleteDayPairs(hours)
console.log(ans)
