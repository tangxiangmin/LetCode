/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
    const map = {}
    for (const d of tasks) {
        if (!map[d]) map[d] = 0
        map[d]++
    }
    let cnt = 0
    const cahce = {}

    for (const key in map) {
        const val = dfs(map[key])
        if (val === Infinity) return -1
        cnt += val
    }
    return cnt

    function dfs(n) {
        if (cahce[n]) return cahce[n]
        if (n === 1) return Infinity
        if (n === 2) return 1
        if (n === 3) return 1
        const ans = Math.min(dfs(n - 2), dfs(n - 3)) + 1
        cahce[n] = ans
        return ans
    }
};
var tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4]
tasks = [5, 5, 5, 5]
var ans = minimumRounds(tasks)
console.log(ans)