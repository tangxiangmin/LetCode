/**
 * @param {number[]} power
 * @return {number}
 */
// 看起来像是一个打家劫舍
var maximumTotalDamage = function (power) {
    const n = power.length
    power.sort((a, b) => a - b)
    const cache = {}

    return dfs(0)

    function dfs(i) {
        if (cache[i]) return cache[i]
        if (i === n) return 0
        let j = i
        let ans = 0

        let k = i
        while (power[j] <= power[i] + 2) {
            if (power[j] === power[i]) {
                ans += power[j]
                k = j
            }
            j++
        }
        return cache[i] = Math.max(ans + dfs(j), dfs(k + 1))
    }
};
var power = [1, 1, 3, 4]
// power = [7, 1, 6, 6]
var ans = maximumTotalDamage(power)
console.log(ans)